import { useEffect, useRef, useState } from 'react';
import {
    faBackwardStep,
    faForwardStep,
    faRepeat,
    faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCirclePause,
    faCirclePlay,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import style from './PlayerBar.module.scss';
const cx = classNames.bind(style);
function PlayerBar() {
    const audioRef = useRef();
    const [play, setPlay] = useState(false);
    const [showPlay, setShowPlay] = useState(true);
    const [showPause, setShowPause] = useState(false);

    const handlePlayingAudio = () => {
        setShowPlay(false);
        setShowPause(true);
        audioRef.current.play();
    };

    const handleStopAudio = () => {
        setShowPlay(true);
        setShowPause(false);
        audioRef.current.pause();
    };

    return (
        <div className={cx('player-bar')}>
            <div className={cx('player-items')}>
                <button className={cx('control-btn')}>
                    <FontAwesomeIcon
                        className={cx('control-item')}
                        icon={faShuffle}
                    />
                </button>
                <button className={cx('control-btn')}>
                    <FontAwesomeIcon
                        className={cx('control-item')}
                        icon={faBackwardStep}
                    />
                </button>
                {showPlay && (
                    <button
                        className={cx('control-btn')}
                        onClick={handlePlayingAudio}
                    >
                        <FontAwesomeIcon
                            className={cx('control-item', 'item-play')}
                            icon={faCirclePlay}
                        />
                    </button>
                )}
                {showPause && (
                    <button
                        className={cx('control-btn')}
                        onClick={handleStopAudio}
                    >
                        <FontAwesomeIcon
                            className={cx('control-item', 'item-play')}
                            icon={faCirclePause}
                        />
                    </button>
                )}
                <button className={cx('control-btn')}>
                    <FontAwesomeIcon
                        className={cx('control-item')}
                        icon={faForwardStep}
                    />
                </button>
                <button className={cx('control-btn')}>
                    <FontAwesomeIcon
                        className={cx('control-item')}
                        icon={faRepeat}
                    />
                </button>
            </div>
            <div className={cx('player-duration')}>
                <span className={cx('time-right')}>00:00</span>
                <div className={cx('player-control')}>
                    <input
                        className={cx('range')}
                        type="range"
                        min="0"
                        max="100"
                    />
                </div>
                <span className={cx('time-left')}>03:40</span>
            </div>
            <audio
                ref={audioRef}
                src={
                    'https://res.cloudinary.com/dcyemfp6o/video/upload/v1713276342/Music/Vietnam/Ch%C3%BAng%20ta%20c%E1%BB%A7a%20hi%E1%BB%87n%20t%E1%BA%A1i.mp3'
                }
            />
        </div>
    );
}

export default PlayerBar;
