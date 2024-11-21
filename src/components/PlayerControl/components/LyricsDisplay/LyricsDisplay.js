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
import ParseLyrics from './ParseLyrics';

const cx = classNames.bind(styles);
const titles = [
    { id: 1, name: 'Lời bài hát' },
    { id: 2, name: 'Karaoke' },
];

function LyricsDisplay({ onClose, isVisible, isClosing, data }) {
    const [activeTab, setActiveTab] = useState(1);
    const [lyrics, setLyrics] = useState();

    useEffect(() => {
        console.log(data.lyrics);
        setLyrics(ParseLyrics(data.lyrics));
        console.log(lyrics);
    }, [data.lyrics]);

    const handleActiveTabs = (id) => {
        setActiveTab(id);
    };

    useEffect(() => {});

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
                    {titles.map((title) => (
                        <div
                            key={title.id}
                            className={cx('tab-item', {
                                active: activeTab === title.id,
                            })}
                            onClick={() => handleActiveTabs(title.id)}
                        >
                            {title.name}
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
                        {/* {lyrics.map((item, index) => (
                            <li key={index} className={cx('item')}>
                                {item}
                            </li>
                        ))} */}
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
