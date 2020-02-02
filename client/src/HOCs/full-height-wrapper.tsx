import React from 'react';
import styled from 'styled-components';

const FullHeight = styled.div`
    height: ${document.documentElement.clientHeight}px;
    background-color: red;
    display: flex;
    flex: 1;
`;

export function FullHeightWrapper(RawComponent: any): any {
    return class extends React.Component {
        render() {
            return (
                <FullHeight>
                    <RawComponent {...this.props} />
                </FullHeight>
            )
        }
    }
}
