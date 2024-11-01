import { useContext, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMicrophoneLines,
    faUpRightAndDownLeftFromCenter,
    faVolumeLow,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

import styles from './Options.module.scss';
import { GlobalDataContext } from '~/components/GlobalDataProvider';
import Lyrics from '../Lyrics';

const cx = classNames.bind(styles);
function Options() {
    const { volume, setVolume } = useContext(GlobalDataContext);
    const volumeRef = useRef();
    const [isLyricsVisible, setIsLyricsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleVolumeChange = (e) => {
        setVolume(Number(e.target.value));
    };

    const handleVolumeOnOrOff = () => {
        if (volume > 0) {
            volumeRef.current = volume;
            setVolume(0);
        } else {
            setVolume(volumeRef.current);
        }
    };

    const handleShowLyrics = () => {
        setIsAnimating(true);
        setIsLyricsVisible(true);
    };

    const handleCloseLyrics = () => {
        setIsLyricsVisible(false);
        setIsAnimating(false);
    };

    return (
        <div className={cx('options')}>
            <button className={cx('option-btn')} onClick={handleShowLyrics}>
                <FontAwesomeIcon
                    className={cx('option-icon')}
                    icon={faMicrophoneLines}
                />
            </button>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon className={cx('option-icon')} icon={faBars} />
            </button>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon
                    className={cx('option-icon')}
                    icon={faWindowRestore}
                />
            </button>
            <div className={cx('option-volumn')}>
                <button
                    className={cx('option-btn')}
                    onClick={handleVolumeOnOrOff}
                >
                    {volume > 0 ? (
                        <FontAwesomeIcon
                            className={cx('option-icon')}
                            icon={faVolumeLow}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className={cx('option-icon')}
                            icon={faVolumeXmark}
                        />
                    )}
                </button>
                <input
                    className={cx('volumn')}
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
            <button className={cx('option-btn')}>
                <FontAwesomeIcon
                    className={cx('option-icon')}
                    icon={faUpRightAndDownLeftFromCenter}
                />
            </button>
            {isLyricsVisible && (
                <Lyrics isVisible={isAnimating} onClose={handleCloseLyrics} />
            )}
        </div>
    );
}
export default Options;
