import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import images from '../assets/images';
import styles from './Media.module.scss';

const cx = classNames.bind(styles);
function Media({ data, className, right = false, song = false }) {
    // console.log(!!data.image);

    const classes = cx('media', {
        [className]: className,
        right,
        song,
    });
    return (
        <div className={classes}>
            <div className={cx('media-left')}>
                <figure>
                    <img
                        className={cx('media-image')}
                        src={!!data.image || images.noImage}
                        alt={data.songName}
                    />
                </figure>
            </div>
            <div className={cx('media-content')}>
                <span className={cx('song-name')}>{data.songName}</span>
                <span className={cx('artist-name')}>{data.artistName}</span>
            </div>
            {right && (
                <div className={cx('media-right')}>
                    <FontAwesomeIcon
                        className={cx('media-play')}
                        icon={faPlay}
                    />
                    <FontAwesomeIcon
                        className={cx('icon-heart')}
                        icon={faHeart}
                    />
                    <FontAwesomeIcon
                        className={cx('icon-options')}
                        icon={faEllipsis}
                    />
                </div>
            )}
        </div>
    );
}

export default Media;
