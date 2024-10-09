import classNames from 'classnames/bind';

import Media from '../Media';
import style from './PlayerControl.module.scss';
import PlayerBar from './PlayerBar';

const cx = classNames.bind(style);

const data = {
    id: 9,
    songName: 'Thật May Cho Anh',
    genreName: 'nhạc Hàn',
    artistName: 'Phan Mạnh Quỳnh',
};
function PlayerControl() {
    // console.log('replay');
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
                <PlayerBar />
            </div>
            <div className={cx('control-right')}>Options</div>
        </div>
    );
}

export default PlayerControl;
