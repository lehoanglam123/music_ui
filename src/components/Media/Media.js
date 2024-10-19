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

function Media({ size, className, right = false, list = false, data }) {
    const [play, setPlay] = useState(false);
    const { setShowPlayerBar, setIsPlaying, setDataMusic } =
        useContext(GlobalDataContext);

    const handlePlayingAudio = () => {
        setDataMusic(data);
        if (!play) {
            setPlay(true);
            setShowPlayerBar(true);
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
            setPlay(false);
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
                    src={data?.image || images.songImage}
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
                        {play ? (
                            <FontAwesomeIcon
                                className={cx('icon-play')}
                                icon={faPause}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className={cx('icon-play')}
                                icon={faPlay}
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
