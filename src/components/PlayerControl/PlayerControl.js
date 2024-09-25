import react from 'react';
import classNames from 'classnames/bind';

import style from './PlayerControl.module.scss';

const cx = classNames.bind(style);
function PlayerControl({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className="control-left"> xin chào người anh em</div>
            <div className="control-center"></div>
            <div className="control-right"></div>
        </div>
    );
}

export default PlayerControl;
