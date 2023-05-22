import React from 'react';
import M from './ScrollSnapVerticalContainer.module.scss';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';
import clsx from 'clsx';

export default function ScrollSnapVerticalContainer({ children }) {
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;

    const childElements = React.Children.map(children, (child) => {
        const childClassName = isMobile
            ? clsx(child.props.className, M.childSection)
            : clsx(child.props.className, M.snapItem);
        return React.cloneElement(child, { className: childClassName });
    });

    return (
        <div className={M.ScrollSnapVerticalContainer}>
            {childElements}
        </div>
    );
}

ScrollSnapVerticalContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};