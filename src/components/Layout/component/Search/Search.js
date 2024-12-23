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
        id: 10,
        songName: 'Ít Nhưng Dài Lâu',
        artistName: 'Yan Nguyễn',
        duration: 303,
        audio: 'https://res.cloudinary.com/dcyemfp6o/video/upload/v1734105331/%C3%8Dt%20Nh%C6%B0ng%20D%C3%A0i%20L%C3%A2u.mp3',
        lyrics: [
            {
                timestamp: '04:30.4',
                lyric: ' Để bên nhau dài lâu',
            },
            {
                timestamp: '04:24.9',
                lyric: ' Ít thôi nhé em ơi',
            },
            {
                timestamp: '04:19.9',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '04:18.3',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '04:15.5',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '04:13.9',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '04:10.9',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '04:09.5',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '04:06.7',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '04:05.3',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '04:02.1',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '04:00.7',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '03:58.0',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '03:56.4',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:53.5',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '03:52.2',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '03:49.5',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '03:47.8',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '03:42.6',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '03:41.1',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '03:38.5',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '03:36.9',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:34.2',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '03:32.6',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '03:29.7',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '03:28.2',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '03:25.2',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '03:23.6',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '03:21.0',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '03:19.4',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:16.5',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '03:15.1',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '03:12.3',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '03:10.7',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '03:05.1',
                lyric: ' Anh yêu ít thôi nhưng dài lâu',
            },
            {
                timestamp: '03:02.3',
                lyric: ' Câu hỏi yêu em thế nào',
            },
            {
                timestamp: '03:00.6',
                lyric: ' Ghi điều em thắc mắc',
            },
            {
                timestamp: '02:56.3',
                lyric: ' Quen nắm tay em mất rồi',
            },
            {
                timestamp: '02:53.6',
                lyric: ' Lạc mất em nơi đông người',
            },
            {
                timestamp: '02:52.1',
                lyric: ' Ghi điều anh sợ nhất',
            },
            {
                timestamp: '02:47.6',
                lyric: ' Khi em giấc say anh ngồi đây',
            },
            {
                timestamp: '02:44.9',
                lyric: ' Chen lối đi trên đường về',
            },
            {
                timestamp: '02:43.4',
                lyric: ' Hay hờn ghen giận dỗi',
            },
            {
                timestamp: '02:39.0',
                lyric: ' Những thói quen em mỗi ngày',
            },
            {
                timestamp: '02:36.3',
                lyric: ' Nhật kí anh lưu sao đầy',
            },
            {
                timestamp: '02:34.4',
                lyric: ' Mai này trang giấy trắng',
            },
            {
                timestamp: '01:49.4',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '01:47.7',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '01:45.0',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '01:43.4',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '01:40.6',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '01:39.0',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '01:36.3',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '01:34.7',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '01:32.0',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '01:30.3',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '01:27.6',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '01:25.6',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '01:23.2',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '01:21.7',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '01:19.3',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '01:17.3',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '01:11.6',
                lyric: ' Anh yêu ít thôi nhưng dài lâu',
            },
            {
                timestamp: '01:09.1',
                lyric: ' Câu hỏi yêu em thế nào',
            },
            {
                timestamp: '01:07.4',
                lyric: ' Ghi điều em thắc mắc',
            },
            {
                timestamp: '01:03.1',
                lyric: ' Quen nắm tay em mất rồi',
            },
            {
                timestamp: '01:00.3',
                lyric: ' Lạc mất em nơi đông người',
            },
            {
                timestamp: '00:58.7',
                lyric: ' Ghi điều anh sợ nhất',
            },
            {
                timestamp: '00:54.3',
                lyric: ' Khi em giấc say anh ngồi đây',
            },
            {
                timestamp: '00:51.6',
                lyric: ' Chen lối đi trên đường về',
            },
            {
                timestamp: '00:50.0',
                lyric: ' Hay hờn ghen giận dỗi',
            },
            {
                timestamp: '00:45.7',
                lyric: ' Những thói quen em mỗi ngày',
            },
            {
                timestamp: '00:42.9',
                lyric: ' Nhật kí anh lưu sao đầy',
            },
            {
                timestamp: '00:41.2',
                lyric: ' Mai này trang giấy trắng',
            },
        ],
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
