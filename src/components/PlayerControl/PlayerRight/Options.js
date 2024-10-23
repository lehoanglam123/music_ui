import classNames from 'classnames/bind';

import styles from './Options.module.scss';

const cx = classNames.bind(styles);
function Options() {
    return (
        <div className={cx('options')}>
            <div></div>
        </div>
    );
}
export default Options;
