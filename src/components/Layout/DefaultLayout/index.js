import React from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/component/Header';
import Sidebar from '~/components/Layout/component/Sidebar';
import PlayerControl from '~/components/PlayerControl';
import images from '~/components/assets/images';

const playerControl = true;
const data = {
    songName: 'Thật may cho anh',
    image: images.noImage,
    artistName: 'Phan Mạnh Quỳnh',
};
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // console.log(data.image);
    return (
        <div className={cx('wrapper')}>
            {playerControl ? <PlayerControl data={data} /> : <></>}
            <Sidebar />
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
