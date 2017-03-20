import classNames from 'classnames';
import React from 'react';

export default class Component extends React.Component {

    render () {
        return (
            <div className={this.getClass()}>
                <div className={this.getArmClass()}>
                    This is left arm.
                </div>
            </div>
        );
    }

    getClass () {
        return classNames({
            person: true,
            'person--tall': (this.props.tall)
        });
    }

    getArmClass () {
        return classNames({
            'person__arm': true,
            'person__arm--large': (this.props.largeArms)
        });
    }
}

Component.propTypes = {
    largeArms: React.PropTypes.bool,
    tall: React.PropTypes.bool
};

Component.defaultProps = {
    largeArms: true,
    tall: false
};
