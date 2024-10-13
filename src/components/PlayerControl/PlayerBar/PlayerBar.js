import { useContext, useRef, useEffect } from 'react';
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
    const { isPlaying, handlePlayingAudio, handleStopAudio, setAudioRef } =
        useContext(GlobalDataContext);
    const audioRef = useRef(null);
    // console.log(audioRef);

    useEffect(() => {
        if (audioRef.current) {
            setAudioRef(audioRef.current);
        }
    }, [setAudioRef]);

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
                {!isPlaying ? (
                    <button
                        className={cx('control-btn')}
                        onClick={handlePlayingAudio}
                    >
                        <FontAwesomeIcon
                            className={cx('control-item', 'item-play')}
                            icon={faCirclePlay}
                        />
                    </button>
                ) : (
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
            <audio ref={audioRef} src={data.audio} hidden />
        </div>
    );
}

export default PlayerBar;
