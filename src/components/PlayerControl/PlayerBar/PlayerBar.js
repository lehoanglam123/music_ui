import { useState, useContext, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
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

import style from './PlayerBar.module.scss';
import { GlobalDataContext } from '~/components/GlobalContext';

const cx = classNames.bind(style);

function PlayerBar({ data }) {
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();
    const { isPlaying, setIsPlaying } = useContext(GlobalDataContext);

    const handleLoadStart = (e) => {
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadedmetadata = function () {
            if (audio.readyState > 0) {
                // console.log(audio.duration);
                setDuration(audio.duration);
            }
        };
        console.log(e.nativeEvent.srcElement.src);
    };

    const handlePlayingAudio = () => {
        setIsPlaying(true);
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
                <button className={cx('play-btn')} onClick={handlePlayingAudio}>
                    {!isPlaying ? (
                        <FontAwesomeIcon
                            icon={faCirclePlay}
                            className={cx('control-item', 'item-play')}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faCirclePause}
                            className={cx('control-item', 'item-play')}
                        />
                    )}
                </button>
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
                        max={duration}
                    />
                </div>
                <span className={cx('time-left')}>03:40</span>
            </div>
            <audio
                ref={audioRef}
                src={data?.audio}
                hidden
                onLoadStart={handleLoadStart}
            />
        </div>
    );
}

export default PlayerBar;
