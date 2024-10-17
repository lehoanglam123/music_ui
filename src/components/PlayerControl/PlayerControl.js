import { useContext } from 'react';
import classNames from 'classnames/bind';

import Media from '../Media';
import style from './PlayerControl.module.scss';
import PlayerBar from './PlayerBar';

const cx = classNames.bind(style);
function PlayerControl({ data }) {
    return (
        <div className={cx('player')}>
            <div className={cx('control-left')}>
                <Media
                    data={data}
                    className={'media-player'}
                    size={'large'}
                    right
                />
            </div>
            <div className={cx('control-center')}>
                <PlayerBar data={data} />
            </div>
            <div className={cx('control-right')}>Options</div>
        </div>
    );
}

export default PlayerControl;
