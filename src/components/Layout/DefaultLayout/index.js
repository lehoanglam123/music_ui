import React from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/component/Header';
import Sidebar from '~/components/Layout/component/Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
