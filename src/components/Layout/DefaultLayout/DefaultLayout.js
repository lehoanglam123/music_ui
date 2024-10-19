import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/component/Header';
import Sidebar from '~/components/Layout/component/Sidebar';
import PlayerControl from '~/components/PlayerControl';
import { GlobalDataContext } from '~/components/GlobalContext';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { showPlayerBar } = useContext(GlobalDataContext);

    return (
        <div className={cx('wrapper')}>
            {showPlayerBar && <PlayerControl />}
            <Sidebar />
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
