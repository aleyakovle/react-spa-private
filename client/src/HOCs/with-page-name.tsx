import React, { ComponentClass, ComponentType } from 'react';
import { usePageUrl } from 'utils/hooks';

export function withPageNameHOC(RawComponent: ComponentClass | ComponentType) {
    return (props: any) => {
        const pageUrl = usePageUrl();

        return <RawComponent pageUrl={pageUrl} {...props} />;
    };
}
