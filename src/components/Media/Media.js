import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
    faEllipsis,
    faMicrophoneLines,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '../assets/images';
import styles from './Media.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
function Media({
    className,
    size,
    right = false,
    list = false,
    hoverToShowRight = false,
}) {
    const [isHovered, setIshovered] = useState(false);
    const classes = cx('media', {
        [className]: className,
    });

    const handleMouseEnter = () => {
        if (hoverToShowRight) {
            setIshovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (hoverToShowRight) {
            setIshovered(false);
        }
    };

    return (
        <div
            className={classes}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cx('media-left')}>
                <img
                    className={cx('image', size)}
                    src={images.noImage}
                    alt="Avatar"
                />
            </div>
            <div className={cx('media-content')}>
                <span className={cx('song-name')}>Còn Lại gì sau cơn mưa</span>
                <NavLink
                    className={cx('artist-name')}
                    to={config.routes.explore}
                >
                    Hồ Quang Hiếu
                </NavLink>
            </div>
            {right && (!hoverToShowRight || isHovered) && (
                <div className={cx('media-right')}>
                    {list && (
                        <FontAwesomeIcon
                            className={cx('media-item')}
                            icon={faMicrophoneLines}
                        />
                    )}
                    <FontAwesomeIcon
                        className={cx('media-item')}
                        icon={faHeart}
                    />
                    <FontAwesomeIcon
                        className={cx('media-item')}
                        icon={faEllipsis}
                    />
                </div>
            )}
        </div>
    );
}

export default Media;
