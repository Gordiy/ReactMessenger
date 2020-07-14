import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classNames  from "classnames";

import "./Message.scss";

const Message = ({avatar, user, text, date, isMe}) => {
    return (
        <div className={classNames('message', {'message--isme': isMe})}>
            <div className="message__avatar">
                <img src={avatar} alt={`${user.username} avatar.`}/>
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <span className="message__date">{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
            </div>
        </div>
    );
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
}

export default Message;
