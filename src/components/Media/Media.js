import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Media.module.scss';
import images from '../assets/images';

const cx = classNames.bind(styles);
function Media({ data, className, right = false }) {
    // console.log(!!data.image);
    return (
        <div className={cx('media', className)}>
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
