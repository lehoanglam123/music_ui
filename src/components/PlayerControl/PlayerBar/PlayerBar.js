import { useState } from 'react';
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
    const [showPlay, setShowPlay] = useState(true);
    const [showPause, setShowPause] = useState(false);

    const handlePlay = () => {
        setShowPause(true);
        setShowPlay(false);
    };

    const handlePause = () => {
        setShowPlay(true);
        setShowPause(false);
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
                    <button className={cx('control-btn')} onClick={handlePlay}>
                        <FontAwesomeIcon
                            className={cx('control-item', 'item-play')}
                            icon={faCirclePlay}
                        />
                    </button>
                )}
                {showPause && (
                    <button className={cx('control-btn')} onClick={handlePause}>
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
        </div>
    );
}

export default PlayerBar;
