import classNames from 'classnames/bind';
import {
    faBackward,
    faBackwardStep,
    faForwardStep,
    faPlay,
    faRepeat,
    faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './PlayerBar.module.scss';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(style);
function PlayerBar() {
    return (
        <div className={cx('player-bar')}>
            <div className={cx('player-items')}>
                <button>
                    <FontAwesomeIcon icon={faShuffle} />
                    <FontAwesomeIcon icon={faBackwardStep} />
                    <FontAwesomeIcon icon={faCirclePlay} />
                    <FontAwesomeIcon icon={faForwardStep} />
                    <FontAwesomeIcon icon={faRepeat} />
                </button>
            </div>
            <div className={cx('player-duration')}>
                <span className={cx('time-right')}>00:00</span>
                <div className={cx('player-control')}>
                    <input type="range" min="0" max="100" />
                </div>
                <span className={cx('time-left')}>03:40</span>
            </div>
        </div>
    );
}

export default PlayerBar;
