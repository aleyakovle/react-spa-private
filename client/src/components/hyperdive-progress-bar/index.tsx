import React from 'react';

interface IHyperdriveProgressBar {
    percents?: number;
}

export const HyperDriveProgressBar: React.FC<IHyperdriveProgressBar> = (props: any) => {
    const { percents } = props;

    const backgroundColor = typeof percents === 'undefined' ? 'grey' : 'blue';

    return (
        <div style={{ width: '100%', backgroundColor, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: 10, backgroundColor: 'green', width: `${percents ? percents : 0}%` }}/>
        </div>
    );
};
