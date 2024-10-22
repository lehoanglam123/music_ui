import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import SuggestItem from '~/components/Layout/component/Search/Suggest/SuggestItem';
import Media from '~/components/Media';
import styles from './Search.module.scss';
import Suggest from './Suggest';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        songName: 'Chúng Ta Của Hiện Tại',
        artistName: 'Sơn Tùng-MTP',
        audio: 'https://res.cloudinary.com/dcyemfp6o/video/upload/v1713276342/Music/Vietnam/Ch%C3%BAng%20ta%20c%E1%BB%A7a%20hi%E1%BB%87n%20t%E1%BA%A1i.mp3',
    },
    {
        id: 2,
        songName: 'Blank Space',
        artistName: 'Taylor Swift',
        audio: 'https://res.cloudinary.com/dcyemfp6o/video/upload/v1729608172/Music/Vietnam/song1_cuyaqn.mp3',
    },
];
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();

    // useEffect(() => {
    //     if (!debounce.trim()) {
    //         setSearchResult([]);
    //         return;
    //     }
    //     setLoading(true);
    //     fetch(
    //         `http://localhost:8080/api/admin/song/search?q=${encodeURIComponent(
    //             debounce,
    //         )}`,
    //         {
    //             method: 'GET',
    //             cache: 'no-store',
    //         },
    //     )
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setSearchResult(res.data);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //         });
    // }, [debounce]);
    useEffect(() => {
        setSearchResult(data);
    }, [searchResult]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleMouseDown = (e) => {};

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleFocus = () => {
        setShowResult(true);
    };
    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Từ khóa liên quan
                        </h4>
                        <Suggest>
                            <SuggestItem />
                        </Suggest>
                        <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                        <div className={cx('suggest-list')}>
                            {searchResult.map((result) => (
                                <Media
                                    key={result.id}
                                    data={result}
                                    size={'medium'}
                                    className={'media-search'}
                                    right
                                    play
                                />
                            ))}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}
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
