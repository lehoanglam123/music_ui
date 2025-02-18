import React from 'react';
import classNames from 'classnames/bind';

import styles from './PlayList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function PlayList() {
    return (
        <div className={cx('playlist')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Danh sách chờ</h2>
                <button className={cx('close-btn')}>
                    <FontAwesomeIcon
                        className={cx('close-icon')}
                        icon={faXmark}
                    />
                </button>
            </div>
            <div className={cx('body')}></div>
        </div>
    );
}
export default PlayList;
