import React from 'react';
import classNames from 'classnames/bind';

import styles from './Suggest.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SuggestItem({ suggestion }) {
    return (
        <div className={cx('suggest-item')}>
            <FontAwesomeIcon className={cx('suggest-icon')} icon={faSearch} />
            <span className={cx('suggest-title')}>that may cho anh</span>
        </div>
    );
}

export default SuggestItem;
