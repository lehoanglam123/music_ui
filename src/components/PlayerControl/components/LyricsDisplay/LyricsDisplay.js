import { useEffect, useState } from 'react';
import {
    faChevronDown,
    faCompactDisc,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './LyricsDisplay.module.scss';
import images from '~/components/assets/images';

const cx = classNames.bind(styles);
const tabs = [
    { id: 1, name: 'Lời bài hát' },
    { id: 2, name: 'Karaoke' },
];

function LyricsDisplay({ onClose, isVisible, isClosing, data }) {
    const [activeTab, setActiveTab] = useState(1);
    const [lyrics, setLyrics] = useState(() => {
        let lyrics = [];
        if (data && data.lyrics) {
            lyrics = data.lyrics.map((item) => item.lyric);
        }
        return lyrics;
    }); // data.lyrics is an array of lyrics

    const handleActiveTabs = (id) => {
        setActiveTab(id);
    };

    useEffect(() => {
        console.log('lyrics state: ', lyrics);
    }, [data]);

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
                    <img
                        className={cx('body-image')}
                        src={images.avatarImage}
                    />
                    <span className={cx('body-info')}>
                        {data.songName} - {data.artistName}
                    </span>
                </div>
                <div className={cx('body-right')}>
                    <ul className={cx('body-item')}>
                        {lyrics.map((lyric, index) => (
                            <li key={index} className={cx('lyric-item')}>
                                {lyric}
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
