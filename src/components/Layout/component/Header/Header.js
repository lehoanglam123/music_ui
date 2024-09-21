import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    faChevronRight,
    faCircleInfo,
    faCirclePlay,
    faGear,
    faPalette,
    faShieldHalved,
    faSquarePhone,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import config from '~/config';
import { Search } from '../Search';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const currentUser = true;
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav-sub')}>
                <Link to={config.routes.explore}>MUSIC</Link>
                <Link to={config.routes.live}>LIVE</Link>
            </nav>
            <Search />
            <div className={cx('actions')}>
                <Tippy
                    visible={showSettings}
                    interactive
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('settings')}>
                                <div className={cx('setting-header')}>
                                    <div className={cx('setting-item')}>
                                        <FontAwesomeIcon
                                            className={cx('item-icon')}
                                            icon={faCirclePlay}
                                        />
                                        <span className={cx('title')}>
                                            Trình phát nhạc
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </div>
                                    <div className={cx('setting-item')}>
                                        <FontAwesomeIcon
                                            className={cx('item-icon')}
                                            icon={faPalette}
                                        />
                                        <span className={cx('title')}>
                                            Giao diện
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </div>
                                </div>
                                <div className={cx('setting-container')}>
                                    <ul className={cx('setting-list')}>
                                        <li className={cx('setting-item')}>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    className={cx('item-icon')}
                                                    icon={faCircleInfo}
                                                />
                                                <span className={cx('title')}>
                                                    Giới thiệu
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('setting-item')}>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    className={cx('item-icon')}
                                                    icon={faShieldHalved}
                                                />
                                                <span className={cx('title')}>
                                                    Chính sách bảo mật
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('setting-item')}>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    className={cx('item-icon')}
                                                    icon={faFlag}
                                                />
                                                <span className={cx('title')}>
                                                    Báo cáo quy phạm bản quyền
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('setting-item')}>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    className={cx('item-icon')}
                                                    icon={faSquarePhone}
                                                />
                                                <span className={cx('title')}>
                                                    Liên hệ
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <button
                        className={cx('btn-settings')}
                        onClick={() => setShowSettings(!showSettings)}
                    >
                        <FontAwesomeIcon
                            className={cx('setting-icon')}
                            icon={faGear}
                        />
                    </button>
                </Tippy>
                <button className={cx('btn-user')}>
                    {currentUser ? (
                        <img
                            className={cx('user-avatar')}
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            alt="User"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                </button>
            </div>
        </div>
    );
}

export default Header;
