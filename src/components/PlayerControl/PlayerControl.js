import { useContext } from 'react';
import classNames from 'classnames/bind';

import Media from '../Media';
import style from './PlayerControl.module.scss';
import PlayerBar from './PlayerBar';
import { GlobalDataContext } from '../GlobalContext';
import { PlayerRight } from './PlayerRight';

const cx = classNames.bind(style);
function PlayerControl() {
    const { dataMusic } = useContext(GlobalDataContext);
    return (
        <div className={cx('player')}>
            <div className={cx('control-left')}>
                <Media
                    data={dataMusic}
                    className={'media-player'}
                    size={'large'}
                    right
                />
            </div>
            <div className={cx('control-center')}>
                <PlayerBar data={dataMusic} />
            </div>
            <div className={cx('control-right')}>
                <PlayerRight />
            </div>
        </div>
    );
}

export default PlayerControl;
