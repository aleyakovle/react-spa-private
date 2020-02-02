import React from 'react';
import { compose } from 'redux';
import { withPageNameHOC } from 'HOCs/with-page-name';
import { SideMenuContainer } from 'components/side-menu';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const Root = styled.div`
    background-color: green;
    display: flex;
    flex: 1;
    min-height: 100%;
    height: 100%;
`;

class RootContainerComposed extends React.Component<any> {
    render():
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | string
        | number
        | {}
        | React.ReactNodeArray
        | React.ReactPortal
        | boolean
        | null
        | undefined {
        return (
            <Root>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={3}>
                                    <Row>
                                            <SideMenuContainer />
                                    </Row>
                                </Col>
                                <Col xs={9}>
                                    <Row>
                                            <p>Hello</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Root>
        );
    }
}

export const RootContainer = compose(
    withPageNameHOC,
)(RootContainerComposed) as React.ComponentType<any>;
