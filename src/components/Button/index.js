import React from 'react';
import PropTypes from 'prop-types';
import {Button as BaseButton} from 'antd';
import classNames from 'classnames';

import './Button.sccs'

const Button = (props) => {
    return <BaseButton className={classNames('button', props.className, {'button--large': props.size === 'large'})} {...props}/>
}

Button.propType = {
    className: PropTypes.string
}

export default Button;
