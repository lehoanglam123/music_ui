import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faCompactDisc,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Lyrics.module.scss';

const cx = classNames.bind(styles);

function Lyrics() {
    return (
        <div className={cx('lyrics')}>
            <div className={cx('lyrics-header')}>
                <h2 className={cx('logo')}>
                    <FontAwesomeIcon
                        className={cx('logo-icon')}
                        icon={faCompactDisc}
                    />
                </h2>
                <ul className={cx('tabs')}>
                    <NavLink className={cx('tab-item')}>Lời bài hát</NavLink>
                    <NavLink className={cx('tab-item')}>Karaoke</NavLink>
                </ul>
                <div className={cx('action-group')}>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon
                            className={cx('action-icon')}
                            icon={faUpRightAndDownLeftFromCenter}
                        />
                    </button>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon
                            className={cx('action-icon')}
                            icon={faChevronDown}
                        />
                    </button>
                </div>
            </div>
            <div className={cx('lyrics-body')}></div>
            <div className={cx('lyrics-controls')}></div>
        </div>
    );
}

export default Lyrics;
