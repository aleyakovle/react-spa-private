import React from 'react';
import styled from 'styled-components';

const FullHeight = styled.div`
    height: ${window.innerHeight}px;
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
