import React from 'react';
import PropTypes from 'prop-types';
import M from './Card.module.scss';

function Card({ date, image, title, text, author }) {

    return (
        <div className={M.Card}>
            <div className={M.header}>{date}</div>
            <div className={M.content}>
                {image && <img src={image} alt="Blog Post" />}
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={M.footer}>{author}</div>
        </div>
    );
}

Card.propTypes = {
    date: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
};

Card.defaultProps = {
    date: '',
    image: '',
    title: '',
    text: '',
    author: '',
};

export default Card;
