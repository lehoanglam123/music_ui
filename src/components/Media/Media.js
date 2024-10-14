import { useContext, useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faEllipsis,
    faMicrophoneLines,
    faPause,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import config from '~/config';
import images from '../assets/images';
import { GlobalDataContext } from '../GlobalContext';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function Media({
    size,
    className,
    right = false,
    list = false,
    play = false,
    hoverToShowRight = false,
    data,
}) {
    const [isHovered, setIshovered] = useState(false);
    const { isPlaying, handleShowPlayerControl, handleStopAudio } =
        useContext(GlobalDataContext);

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

    const handlePlayMusic = () => {
        handleShowPlayerControl(data);
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
                    src={data?.image || images.avatarImage}
                    alt="Avatar"
                />
            </div>
            <div className={cx('media-content')}>
                <span className={cx('song-name')}>{data?.songName}</span>
                <NavLink
                    className={cx('artist-name')}
                    to={config.routes.explore}
                >
                    {data?.artistName}
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
                    {!isPlaying ? (
                        <FontAwesomeIcon
                            className={cx('media-play')}
                            icon={faPlay}
                            onClick={handlePlayMusic}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className={cx('media-play')}
                            icon={faPause}
                            onClick={handleStopAudio}
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
