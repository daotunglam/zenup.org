import React from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';
import M from './BoxImgText.module.scss';

export default function BoxImgText({ image, title, paragraph, imageWidth, imageFloat }) {
    const { width } = useWindowDimensions();
    const isPhone = width <= 480;

    const imageContainerStyle = {
        float: imageFloat,
        width: isPhone? '100%' : imageWidth,
        ...(imageFloat === 'right' ? { marginLeft: '40px' } : { marginRight: '40px' }),
    };

    return (
        <div className={M.container}>
            {image &&
                <div className={M.imgContainer} style={imageContainerStyle}>
                    <img src={image} alt="image" />
                </div>
            }

            <div className={M.textContainer}>
                {title &&
                    <div className={M.title}>{title}</div>
                }
                {paragraph &&
                    <div className={M.description}>{paragraph}</div>
                }
            </div>
        </div>
    );
}

BoxImgText.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    imageFloat: PropTypes.string,
    imageWidth: PropTypes.string,
};

BoxImgText.defaultProps = {
    imageFloat: 'none',
    imageWidth: '50%',
};
