import React from 'react';
import { FullHeight } from 'components/styled-components-custom';

export function FullHeightWrapper(RawComponent: any): any {
    return class extends React.Component {
        render() {
            return (
                <FullHeight>
                    <RawComponent {...this.props} />
                </FullHeight>
            );
        }
    };
}
