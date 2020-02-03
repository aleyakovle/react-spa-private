import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { withPageNameHOC } from 'HOCs/with-page-name';
import { FullHeightWrapper } from 'HOCs/full-height-wrapper';
import { getStarships } from 'ducks/starships/actions';
import {connect} from "react-redux";
import {IRootState} from "ducks/reducers";
import {makeGetCurrentPage, makeGetCurrentPageResults} from "ducks/starships/selectors";
import {IStarship} from "dtos/starships";

const Page = styled.div`
    background-color: blue;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;
const getCurrentPage = makeGetCurrentPage();
const getCurrentPageResults = makeGetCurrentPageResults();
const mapStateToProps = (state: IRootState) => {
    return {
        currentPage: getCurrentPage(state),
        currentPageResults: getCurrentPageResults(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getStarships: (data: number) => {
            dispatch(getStarships.request(data, undefined));
        },
    };
};

class PageContainerComposed extends React.Component<any> {
    componentDidMount(): void {
        const { getStarships, currentPage } = this.props;
        getStarships(currentPage);
    }

    render() {
        return (
            <Page>
                {this.renderStarships()}
            </Page>
        );
    }

    renderStarships = () => {
        const { currentPageResults } = this.props;
        console.log(currentPageResults, 'currentPageData');
        return (
            currentPageResults.map((item: IStarship) => <div>{JSON.stringify(item)}</div>)
        )
    };
}

export const PageContainer = compose(
    withPageNameHOC,
    FullHeightWrapper,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )
)(PageContainerComposed) as React.ComponentType<any>;
