import { useEffect, useState, useContext, useRef } from 'react';
import {
    faChevronDown,
    faCompactDisc,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './LyricsDisplay.module.scss';
import images from '~/components/assets/images';
import { GlobalDataContext } from '~/components/GlobalDataProvider';
import timeConvert from '../PlayerBar/TimeConvert';

const cx = classNames.bind(styles);
const tabs = [
    { id: 1, name: 'Lời bài hát' },
    { id: 2, name: 'Karaoke' },
];

function LyricsDisplay({ onClose, isVisible, isClosing, data }) {
    const { currentTimeGlobal } = useContext(GlobalDataContext);
    const [activeTab, setActiveTab] = useState(1);
    const [activeIndex, setActiveIndex] = useState(null);
    const [overIndexes, setOverIndexes] = useState([]);
    const [lyrics, setLyrics] = useState(() => {
        let lyrics = [];
        if (data && data.lyrics) {
            lyrics = data.lyrics.map((item) => item);
        }
        return lyrics;
    });
    const lyricRefs = useRef([]); // Ref cho từng dòng lời bài hát

    const handleActiveTabs = (id) => {
        setActiveTab(id);
    };

    const lyricsWithSeconds = lyrics.map((item) => ({
        time: timeConvert(item.timestamp),
        lyric: item.lyric,
    }));

    useEffect(() => {
        const currentIndex = lyricsWithSeconds.findIndex((item, index) => {
            const nextItem = lyricsWithSeconds[index + 1];
            return (
                currentTimeGlobal === item.time ||
                (currentTimeGlobal > item.time &&
                    (!nextItem || currentTimeGlobal < nextItem.time))
            );
        });
        if (currentIndex !== -1 && currentIndex !== activeIndex) {
            setActiveIndex(currentIndex);
            if (overIndexes.length === 0 && currentIndex > 1) {
                const prevIndexes = lyrics.filter(
                    (item, index) => index < currentIndex,
                );
                setOverIndexes(prevIndexes.map((item, index) => index));
            }
            if (activeIndex !== null && !overIndexes.includes(activeIndex)) {
                setOverIndexes([...overIndexes, activeIndex]);
            }
        }
        setActiveIndex(currentIndex);
    }, [currentTimeGlobal]);

    useEffect(() => {
        if (activeIndex !== null && lyricRefs.current[activeIndex]) {
            console.log(lyricRefs.current[activeIndex]);
            lyricRefs.current[activeIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activeIndex]);

    return (
        <div className={cx('lyrics', { show: isVisible, hide: isClosing })}>
            <div className={cx('lyrics-header')}>
                <h2 className={cx('logo')}>
                    <FontAwesomeIcon
                        className={cx('logo-icon')}
                        icon={faCompactDisc}
                    />
                </h2>
                <ul className={cx('tabs')}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={cx('tab-item', {
                                active: activeTab === tab.id,
                            })}
                            onClick={() => handleActiveTabs(tab.id)}
                        >
                            {tab.name}
                        </div>
                    ))}
                </ul>
                <div className={cx('action-group')}>
                    <button className={cx('action-btn')} onClick={() => {}}>
                        <FontAwesomeIcon
                            className={cx('action-icon')}
                            icon={faUpRightAndDownLeftFromCenter}
                        />
                    </button>
                    <button className={cx('action-btn')} onClick={onClose}>
                        <FontAwesomeIcon
                            className={cx('action-icon')}
                            icon={faChevronDown}
                        />
                    </button>
                </div>
            </div>
            <div className={cx('lyrics-body')}>
                <div className={cx('body-left')}>
                    <img className={cx('body-image')} src={images.artistImg} />
                    <span className={cx('body-info')}>
                        {data.songName} - {data.artistName}
                    </span>
                </div>
                <div className={cx('body-right')}>
                    <ul className={cx('body-item')}>
                        {lyrics.map((lyric, index) => (
                            <li
                                key={index}
                                ref={(el) => (lyricRefs.current[index] = el)}
                                className={cx('lyric-item', {
                                    'is-active': activeIndex === index,
                                    'is-over': overIndexes.includes(index),
                                })}
                            >
                                {lyric.lyric}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx('lyrics-controls')}>
                {/* <PlayerBar data={data} /> */}
            </div>
        </div>
    );
}

export default LyricsDisplay;
