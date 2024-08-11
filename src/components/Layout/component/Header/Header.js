import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from '~/config';
import { Search } from '../Search';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav-sub')}>
                <Link to={config.routes.explore}>MUSIC</Link>
                <Link to={config.routes.live}>LIVE</Link>
            </nav>
            <Search />
            <div className={cx('actions')}>
                <button className={cx('btn-settings')}>
                    <FontAwesomeIcon
                        className={cx('setting-icon')}
                        icon={faGear}
                    />
                </button>
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
