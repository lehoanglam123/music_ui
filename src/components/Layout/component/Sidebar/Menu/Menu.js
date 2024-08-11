import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, className = null }) {
    return <nav className={cx('menu', className)}>{children}</nav>;
}

export default Menu;
