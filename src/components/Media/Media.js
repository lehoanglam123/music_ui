import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
    faEllipsis,
    faMicrophoneLines,
    faPlay,
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
    play = false,
    data,
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
    console.log(data.id);

    return (
        <div
            className={classes}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cx('media-left')}>
                <img
                    className={cx('image', size)}
                    src={images.avatarImage}
                    alt="Avatar"
                />
            </div>
            <div className={cx('media-content')}>
                <span className={cx('song-name')}>songname</span>
                <NavLink
                    className={cx('artist-name')}
                    to={config.routes.explore}
                >
                    tác giả
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
                    {play && (
                        <FontAwesomeIcon
                            className={cx('media-play')}
                            icon={faPlay}
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
