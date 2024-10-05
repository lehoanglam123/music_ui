import classNames from 'classnames/bind';

import Media from '../Media';
import style from './PlayerControl.module.scss';

const cx = classNames.bind(style);

const data = {
    id: 9,
    songName: 'Thật May Cho Anh',
    genreName: 'nhạc Hàn',
    artistName: 'Phan Mạnh Quỳnh',
};
function PlayerControl() {
    // console.log(data.image);
    return (
        <div className={cx('player')}>
            <div className="control-left">
                <Media
                    data={data}
                    className={'media-player'}
                    size={'large'}
                    right
                />
            </div>
            <div className="control-center">Play control</div>
            <div className="control-right">Options</div>
        </div>
    );
}

export default PlayerControl;
