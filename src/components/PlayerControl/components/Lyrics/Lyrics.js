import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faCompactDisc,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Lyrics.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Lyrics({ onClose, isVisible, lyrics }) {
    const [active, setActive] = useState(true);

    const handleActiveTabs = () => {
        setActive(true);
    };
    return (
        <div className={cx('lyrics', { show: isVisible, hide: !isVisible })}>
            <div className={cx('lyrics-header')}>
                <h2 className={cx('logo')}>
                    <FontAwesomeIcon
                        className={cx('logo-icon')}
                        icon={faCompactDisc}
                    />
                </h2>
                <ul className={cx('tabs')}>
                    <NavLink
                        className={cx('tab-item', { active: active })}
                        onClick={handleActiveTabs}
                    >
                        Lời bài hát
                    </NavLink>
                    <NavLink
                        className={cx('tab-item', { active: active })}
                        onClick={handleActiveTabs}
                    >
                        Karaoke
                    </NavLink>
                </ul>
                <div className={cx('action-group')}>
                    <button className={cx('action-btn')} onClick={() => {}}>
                        <FontAwesomeIcon
                            className={cx('action-icon')}
                            icon={faUpRightAndDownLeftFromCenter}
                        />
                    </button>
                    <button className={cx('action-btn')} onClick={onClose}>
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
