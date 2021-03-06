import React from 'react';

const ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        const modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        const { title, message } = this.props;
        return (
            <div id="error-modal" className="reveal tiny" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );
    }
});

export default ErrorModal;
