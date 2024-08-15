import { useState } from 'react';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import Media from '~/components/Media';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
const data = {
    song: 'Làm sao giữ',
    artist: 'Phan Mạnh Quỳnh',
    image: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
};
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

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
        <Tippy
            visible={true}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={'list-song'}>
                        <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                        <Media data={data} className={'song'} />
                        <Media data={data} className={'song'} />
                        <Media data={data} className={'song'} />
                        <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                        <Media data={data} className={'song'} />
                    </PopperWrapper>
                </div>
            )}
        >
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
                <button
                    className={cx('search-btn')}
                    onMouseDown={handleMouseDown}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
