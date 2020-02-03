import React from 'react';
import styled from 'styled-components';

const FullHeight = styled.div`
    height: ${window.innerHeight}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
