import React from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/component/Header';
import Sidebar from '~/components/Layout/component/Sidebar';
import PlayerControl from '~/components/PlayerControl';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const playerControl = false;
    return (
        <div className={cx('wrapper')}>
            {playerControl ? <PlayerControl /> : <></>}
            <Sidebar />
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
