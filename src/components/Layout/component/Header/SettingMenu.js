import { faFlag } from '@fortawesome/free-regular-svg-icons';
import {
    faChevronRight,
    faCircleInfo,
    faCirclePlay,
    faPalette,
    faShieldHalved,
    faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function SettingMenu() {
    return (
        <PopperWrapper className={cx('settings')}>
            <div className={cx('setting-header')}>
                <div className={cx('setting-item')}>
                    <FontAwesomeIcon
                        className={cx('item-icon')}
                        icon={faCirclePlay}
                    />
                    <span className={cx('title')}>Trình phát nhạc</span>
                    <FontAwesomeIcon
                        className={cx('icon-right')}
                        icon={faChevronRight}
                    />
                </div>
                <div className={cx('setting-item')}>
                    <FontAwesomeIcon
                        className={cx('item-icon')}
                        icon={faPalette}
                    />
                    <span className={cx('title')}>Giao diện</span>
                    <FontAwesomeIcon
                        className={cx('icon-right')}
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
                            <span className={cx('title')}>Giới thiệu</span>
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
                            <span className={cx('title')}>Liên hệ</span>
                        </a>
                    </li>
                </ul>
            </div>
        </PopperWrapper>
    );
}

export default SettingMenu;
