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
import { GlobalDataContext } from '../GlobalDataProvider';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);

function Media({ size, className, right = false, list = false, data }) {
    const {
        isPlaying,
        activeSongId,
        setShowPlayerBar,
        setIsPlaying,
        setDataMusic,
        setShowPlayIcon,
        setActiveSongId,
    } = useContext(GlobalDataContext);

    const handlePlayingAudio = () => {
        setDataMusic(data);
        setShowPlayerBar(true);
        if (activeSongId === data?.id) {
            setIsPlaying(false);
            setShowPlayIcon(true);
            setActiveSongId(null);
        } else {
            setShowPlayIcon(false);
            setActiveSongId(data.id);
            setTimeout(() => setIsPlaying(true), 0);
        }
    };

    const classes = cx('media', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('media-left')}>
                <img
                    className={cx('image', size)}
                    src={data?.image || images.artistImg}
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

            {right && (
                <div className={cx('media-right')}>
                    {list && (
                        <FontAwesomeIcon
                            className={cx('media-item')}
                            icon={faMicrophoneLines}
                        />
                    )}

                    <button
                        className={cx('media-play')}
                        onClick={handlePlayingAudio}
                    >
                        {!(isPlaying && activeSongId === data.id) ? (
                            <FontAwesomeIcon
                                className={cx('icon-play')}
                                icon={faPlay}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className={cx('icon-play')}
                                icon={faPause}
                            />
                        )}
                    </button>

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
