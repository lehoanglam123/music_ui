import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
const titles = [
    { id: 1, name: 'Lời bài hát' },
    { id: 2, name: 'Karaoke' },
];

function LyricsDisplay({ onClose, isVisible, isClosing, data }) {
    const [activeTab, setActiveTab] = useState(1);
    // console.log(data);

    const handleActiveTabs = (id) => {
        setActiveTab(id);
    };

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
                        <>
                            <NavLink
                                key={title.id}
                                className={cx('tab-item', {
                                    active: activeTab === title.id,
                                })}
                                onClick={() => handleActiveTabs(title.id)}
                            >
                                {title.name}
                            </NavLink>
                        </>
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
                        Ít thôi nhưng dài lâu - Yan Nguyễn
                    </span>
                </div>

                <div className={cx('body-right')}>
                    <ul className={cx('body-item')}>
                        <li className={cx('item')}>Mai này trang giấy trắng</li>
                        <li className={cx('item')}>Nhật ký anh lưu sao đầy</li>
                        <li className={cx('item')}>
                            Những thói quen em mỗi ngày
                        </li>
                        <li className={cx('item')}>Hay hờn ghen giận dỗi</li>
                        <li className={cx('item')}>
                            Chen lối đi trên đường về
                        </li>
                        <li className={cx('item')}>
                            Khi em giấc say anh ngồi đây
                        </li>
                        <li className={cx('item')}>Ghi điều anh sợ nhất</li>
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
