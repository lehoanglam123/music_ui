import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Media.module.scss';

const cx = classNames.bind(styles);
function Media({ data, className, right }) {
    // console.log(data.image);
    return (
        <div className={cx('media', className)}>
            <div className={cx('media-left')}>
                <figure>
                    <img
                        className={cx('media-image')}
                        src={data.image}
                        alt="avatar"
                    />
                </figure>
            </div>
            <div className={cx('media-content')}>
                <span className={cx('song-name')}>{data.song}</span>
                <span className={cx('artist-name')}>{data.artist}</span>
            </div>
            {right && (
                <div className={cx('media-right')}>
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
