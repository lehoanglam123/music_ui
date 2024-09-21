import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import config from '~/config';
import { Search } from '../Search';
import styles from './Header.module.scss';
import SettingMenu from './SettingMenu';

const cx = classNames.bind(styles);

function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const currentUser = true;

    const handleSetting = () => {
        setShowSettings(!showSettings);
    };

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
                    placement="bottom-end"
                    onClickOutside={handleSetting}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <SettingMenu />
                        </div>
                    )}
                >
                    <button
                        className={cx('btn-settings')}
                        onClick={handleSetting}
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
