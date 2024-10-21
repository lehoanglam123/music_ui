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
import Timer from './Timer';

const cx = classNames.bind(style);

function PlayerBar({ data }) {
    const audioRef = useRef();
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { isPlaying, showPlayIcon, setIsPlaying, setShowPlayIcon } =
        useContext(GlobalDataContext);

    const handleLoadStart = (e) => {
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadedmetadata = function () {
            if (audio.readyState > 0) {
                setDuration(audio.duration);
            }
        };
        console.log(e.nativeEvent.srcElement.src);
    };
    const handlePlayingAudio = () => {
        if (isPlaying) {
            setIsPlaying(false);
            setShowPlayIcon(true);
        } else {
            setIsPlaying(true);
            setShowPlayIcon(false);
        }
    };

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(Math.floor(currentTime));
    };

    const changeCurrentTime = (e) => {
        const currentTime = e.target.value;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    };

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

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
                    {showPlayIcon ? (
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
                <span className={cx('time-right')}>{Timer(currentTime)}</span>
                <div className={cx('player-control')}>
                    <input
                        className={cx('range')}
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => changeCurrentTime(e)}
                    />
                </div>
                <span className={cx('time-left')}>{Timer(duration)}</span>
            </div>
            <audio
                ref={audioRef}
                src={data?.audio}
                hidden
                onLoadStart={handleLoadStart}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
}

export default PlayerBar;
