import classNames from 'classnames/bind';

import {
    faArrowRightFromBracket,
    faBan,
    faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function UserMenu() {
    return (
        <PopperWrapper className={cx('settings')}>
            <div className={cx('user-account')}>
                <div className={cx('user-info')}>
                    <img
                        className={cx('user-image')}
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        alt="User"
                    />
                    <div className={cx('info-container')}>
                        <p className={cx('user-name')}>Hoàng Lâm</p>
                        <p>BASIC</p>
                    </div>
                </div>
                <button className={cx('update-btn')}>Nâng cấp tài khoản</button>
            </div>
            <div className={cx('user-individual')}>
                <h3 className={cx('individual-title')}>Cá nhân</h3>
                <button className={cx('individual-btn')}>
                    <FontAwesomeIcon className={cx('user-icon')} icon={faBan} />
                    Danh sách chặn
                </button>
                <button className={cx('individual-btn')}>
                    <FontAwesomeIcon
                        icon={faUpload}
                        className={cx('user-icon')}
                    />
                    Tải lên
                </button>
                <button className={cx('individual-btn')}>
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className={cx('user-icon')}
                    />
                    Đăng xuất
                </button>
            </div>
        </PopperWrapper>
    );
}

export default UserMenu;
