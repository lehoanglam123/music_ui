import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/component/Header';
import Sidebar from '~/components/Layout/component/Sidebar';
import PlayerControl from '~/components/PlayerControl';
import { GlobalDataContext } from '~/components/GlobalDataProvider';
import PlayList from '~/components/PlayerControl/components/PlayList';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { showPlayerBar, isDisplay } = useContext(GlobalDataContext);

    return (
        <div className={cx('wrapper')}>
            {true && <PlayerControl />}
            <Sidebar />
            <Header />
            <div className={cx('container')}>{children}</div>
            {isDisplay && <PlayList className={cx('display')}></PlayList>}
        </div>
    );
}

export default DefaultLayout;
