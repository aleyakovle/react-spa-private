import React from 'react';
import { compose } from 'redux';
import { withPageNameHOC } from 'HOCs/with-page-name';
import { SideMenuContainer } from 'components/side-menu';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { PageContainer } from 'containers/page';
import { MaterialCard } from 'components/styled-components-custom';

class RootContainerComposed extends React.Component<any> {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col className={'d-none d-sm-block'} sm={3} md={2}>
                                <MaterialCard>
                                    <SideMenuContainer />
                                </MaterialCard>
                            </Col>
                            <Col xs={12} sm={9} md={10}>
                                <Row>
                                    <PageContainer />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export const RootContainer = compose(withPageNameHOC)(RootContainerComposed) as React.ComponentType<any>;
