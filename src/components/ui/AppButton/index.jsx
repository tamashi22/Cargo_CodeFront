import clsx from 'clsx';
import React from 'react';
import styles from './style.module.scss';

const Button = React.forwardRef(({
    type='button',
    onClick,
    children,
    projectStyle=['default'],
    ...props
}) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={clsx(projectStyle.map(className => styles[className]))}
            {...props}>
                {children}
        </button>
    )
});
export default Button;