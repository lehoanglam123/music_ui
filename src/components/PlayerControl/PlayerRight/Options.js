import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMicrophoneLines,
    faUpRightAndDownLeftFromCenter,
    faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

import styles from './Options.module.scss';

const cx = classNames.bind(styles);
function Options() {
    return (
        <div className={cx('options')}>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon icon={faMicrophoneLines} />
            </button>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon icon={faWindowRestore} />
            </button>
            <div className={cx('optiopn-volumn')}>
                <button className={cx('option-btn')}>
                    <FontAwesomeIcon icon={faVolumeLow} />
                </button>
                <input type="range" />
            </div>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
        </div>
    );
}
export default Options;
