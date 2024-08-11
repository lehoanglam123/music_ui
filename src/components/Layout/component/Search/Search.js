import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {};

    const handleMouseDown = (e) => {};

    const handleFocus = (e) => {};
    return (
        <div className={cx('search')}>
            <input
                value={searchValue}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                onChange={handleChange}
                onFocus={handleFocus}
            />
            <button className={cx('clear')} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
            <button className={cx('search-btn')} onMouseDown={handleMouseDown}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default Search;
