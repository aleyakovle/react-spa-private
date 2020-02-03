import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { FullHeightWrapper } from 'HOCs/full-height-wrapper';
import { getStarships } from 'ducks/starships/actions';
import { StarShipsList } from 'components/starships-list';
import { LinearProgressCustom } from 'components/linear-progress';
import { PageControl } from 'components/page-control';
import {
    makeGetCurrentPage,
    makeGetCurrentPageStarships,
    makeGetNextPageNumber,
    makeGetPrevPageNumber
} from 'ducks/starships/selectors';
import { makeGetStarshipsRequestState } from 'ducks/fetching/selectors';
import { IRootState } from 'ducks/reducers';

const Page = styled.div`
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const getCurrentPage = makeGetCurrentPage();
const getNextPageNumber = makeGetNextPageNumber();
const getPrevPageNumber = makeGetPrevPageNumber();
const getStarshipsRequestState = makeGetStarshipsRequestState();
const getCurrentPageStarships = makeGetCurrentPageStarships();

const mapStateToProps = (state: IRootState) => {
    return {
        currentPage: getCurrentPage(state),
        nextPageNumber: getNextPageNumber(state),
        prevPageNumber: getPrevPageNumber(state),
        starshipsRequestState: getStarshipsRequestState(state),
        currentPageStarships: getCurrentPageStarships(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getStarships: (data: number | undefined) => {
            dispatch(getStarships.request(data, undefined));
        },
    };
};

class PageContainerComposed extends React.Component<any> {
    componentDidMount(): void {
        const { getStarships } = this.props;
        getStarships(undefined);
    }

    private onNextClick = () => {
        const { getStarships, nextPageNumber } = this.props;
        getStarships(nextPageNumber);
    };

    private onPrevClick = () => {
        const { getStarships, prevPageNumber } = this.props;
        getStarships(prevPageNumber);
    };

    render() {
        const { starshipsRequestState, prevPageNumber, nextPageNumber, currentPageStarships } = this.props;
        const { isFetching } = starshipsRequestState;

        return (
            <Page>
                <Col xs={12}>
                    <Row>
                        <LinearProgressCustom isFetching={isFetching} />
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <PageControl
                                isActive={isFetching}
                                isDisabled={!prevPageNumber}
                                onClick={this.onPrevClick}
                                title={'Prev'}
                            />
                        </Col>
                        <Col xs={8}>
                            <StarShipsList starships={currentPageStarships} />
                        </Col>
                        <Col xs={2}>
                            <PageControl
                                isActive={isFetching}
                                isDisabled={!nextPageNumber}
                                onClick={this.onNextClick}
                                title={'Next'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Page>
        );
    }
}

export const PageContainer = compose(
    FullHeightWrapper,
    connect(mapStateToProps, mapDispatchToProps),
)(PageContainerComposed) as React.ComponentType<any>;
