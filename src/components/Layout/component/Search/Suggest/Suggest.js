import classNames from 'classnames/bind';

import styles from './Suggest.module.scss';

const cx = classNames.bind(styles);
function Suggest({ children }) {
    return <div className={cx('suggest')}>{children}</div>;
}

export default Suggest;
