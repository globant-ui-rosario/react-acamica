import React from 'react';

class MyOtherComponent extends React.Component {
    render () {
        const otherInputType = 'time';

        return (
            <div>
                <input type="text" />
                <input type={otherInputType} />
            </div>
        );
    }
}
