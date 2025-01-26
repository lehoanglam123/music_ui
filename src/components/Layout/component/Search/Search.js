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
                timestamp: '00:41.20',
                lyric: ' Mai này trang giấy trắng',
            },
            {
                timestamp: '00:42.94',
                lyric: ' Nhật kí anh lưu sao đầy',
            },
            {
                timestamp: '00:45.40',
                lyric: ' Những thói quen em mỗi ngày',
            },
            {
                timestamp: '00:49.99',
                lyric: ' Hay hờn ghen giận dỗi',
            },
            {
                timestamp: '00:51.51',
                lyric: ' Chen lối đi trên đường về',
            },
            {
                timestamp: '00:54.45',
                lyric: ' Khi em giấc say anh ngồi đây',
            },
            {
                timestamp: '00:58.50',
                lyric: ' Ghi điều anh sợ nhất',
            },
            {
                timestamp: '01:00.25',
                lyric: ' Lạc mất em nơi đông người',
            },
            {
                timestamp: '01:03.18',
                lyric: ' Quen nắm tay em mất rồi',
            },
            {
                timestamp: '01:07.55',
                lyric: ' Ghi điều em thắc mắc',
            },
            {
                timestamp: '01:08.80',
                lyric: ' Câu hỏi yêu em thế nào',
            },
            {
                timestamp: '01:12.11',
                lyric: ' Anh yêu ít thôi nhưng dài lâu',
            },
            {
                timestamp: '01:17.98',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '01:18.91',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '01:21.72',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '01:23.09',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '01:26.02',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '01:27.46',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '01:30.39',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '01:31.95',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '01:35.07',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '01:36.38',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '01:39.37',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '01:40.62',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '01:43.49',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '01:44.99',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '01:47.92',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '01:49.36',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '02:34.55',
                lyric: ' Mai này trang giấy trắng',
            },
            {
                timestamp: '02:36.26',
                lyric: ' Nhật kí anh lưu sao đầy',
            },
            {
                timestamp: '02:38.91',
                lyric: ' Những thói quen em mỗi ngày',
            },
            {
                timestamp: '02:43.90',
                lyric: ' Hay hờn ghen giận dỗi',
            },
            {
                timestamp: '02:44.83',
                lyric: ' Chen lối đi trên đường về',
            },
            {
                timestamp: '02:47.77',
                lyric: ' Khi em giấc say anh ngồi đây',
            },
            {
                timestamp: '02:52.57',
                lyric: ' Ghi điều anh sợ nhất',
            },
            {
                timestamp: '02:53.57',
                lyric: ' Lạc mất em nơi đông người',
            },
            {
                timestamp: '02:56.50',
                lyric: ' Quen nắm tay em mất rồi',
            },
            {
                timestamp: '03:00.87',
                lyric: ' Ghi điều em thắc mắc',
            },
            {
                timestamp: '03:02.12',
                lyric: ' Câu hỏi yêu em thế nào',
            },
            {
                timestamp: '03:05.43',
                lyric: ' Anh yêu ít thôi nhưng dài lâu',
            },
            {
                timestamp: '03:11.17',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '03:12.23',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '03:15.04',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '03:16.41',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '03:19.34',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:20.78',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '03:23.71',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '03:25.27',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '03:28.39',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '03:29.70',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '03:32.69',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '03:33.94',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '03:36.81',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:38.31',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '03:41.24',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '03:42.68',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '03:48.33',
                lyric: ' Ít thôi nhé không nhiều',
            },
            {
                timestamp: '03:49.45',
                lyric: ' Vì từng chiều thường hay đưa đón',
            },
            {
                timestamp: '03:52.07',
                lyric: ' Đón em đến tương lai',
            },
            {
                timestamp: '03:53.63',
                lyric: ' Dễ thương như hiện tại',
            },
            {
                timestamp: '03:56.44',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '03:57.94',
                lyric: ' Để hiểu thói quen nhau',
            },
            {
                timestamp: '04:00.62',
                lyric: ' Để đêm đêm khắc sâu',
            },
            {
                timestamp: '04:02.24',
                lyric: ' Những yêu thương nhiệm màu',
            },
            {
                timestamp: '04:05.49',
                lyric: ' Ít thôi nhé không cần',
            },
            {
                timestamp: '04:06.74',
                lyric: ' Nhiều thật nhiều vì anh đã hứa',
            },
            {
                timestamp: '04:09.48',
                lyric: ' Hứa sẽ mãi bên em',
            },
            {
                timestamp: '04:10.98',
                lyric: ' Đến khi em còn chờ',
            },
            {
                timestamp: '04:13.85',
                lyric: ' Ít thôi nhé em hỡi',
            },
            {
                timestamp: '04:15.47',
                lyric: ' Mới biết lúc xa nhau',
            },
            {
                timestamp: '04:18.34',
                lyric: ' Chỉ mong sao chữ lâu',
            },
            {
                timestamp: '04:19.96',
                lyric: ' Sẽ trôi qua thật mau',
            },
            {
                timestamp: '04:25.46',
                lyric: ' Ít thôi nhé em ơi',
            },
            {
                timestamp: '04:30.63',
                lyric: ' Để bên nhau dài lâu',
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
