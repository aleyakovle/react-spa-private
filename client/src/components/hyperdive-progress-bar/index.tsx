import React from 'react';
import {HyperDriveRatingBack, HyperDriveRatingProgress} from "components/styled-components-custom";

interface IHyperdriveProgressBar {
    percents?: number;
}

export const HyperDriveProgressBar: React.FC<IHyperdriveProgressBar> = (props: any) => {
    const { percents } = props;

    const backgroundColor = typeof percents === 'undefined' ? 'lightgray' : '#3fb6da66';

    return (
        <HyperDriveRatingBack bgColor={backgroundColor}>
            <HyperDriveRatingProgress width={percents ? percents : 0}/>
        </HyperDriveRatingBack>
    );
};
