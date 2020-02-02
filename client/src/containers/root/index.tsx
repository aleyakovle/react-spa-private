import React from 'react';
import { compose } from 'redux';
import { withPageNameHOC } from 'HOCs/with-page-name';
import { SideMenuContainer } from 'components/side-menu';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import {PageContainer} from "containers/page";

const Root = styled.div`
    background-color: green;
    display: flex;
    flex: 1;
    min-height: 100%;
    height: 100%;
`;

class RootContainerComposed extends React.Component<any> {
    render() {
        return (
            <Root>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col className={"d-none d-sm-block"} sm={4} md={3} lg={2}>
                                    <Row>
                                        <SideMenuContainer />
                                    </Row>
                                </Col>
                                <Col xs={12} sm={8} md={3} lg={10}>
                                    <Row>
                                        <PageContainer />
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

export const RootContainer = compose(withPageNameHOC)(RootContainerComposed) as React.ComponentType<any>;
