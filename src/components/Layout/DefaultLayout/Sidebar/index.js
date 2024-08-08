import classNames from 'classnames/bind';
import {
    faCompactDisc,
    faChartSimple,
    faIcons,
    faList,
    faRecordVinyl,
    faStar,
    faClock,
    faHeart,
    faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2 className={cx('logo')}>
                <FontAwesomeIcon
                    className={cx('logo-icon')}
                    icon={faCompactDisc}
                />
                <p className={cx('logo-title')}>Music</p>
            </h2>
            <Menu>
                <MenuItem
                    title="Khám Phá"
                    to={config.routes.explore}
                    icon={<FontAwesomeIcon icon={faRecordVinyl} />}
                />
                <MenuItem
                    title="Thể Loại"
                    to={config.routes.genres}
                    icon={<FontAwesomeIcon icon={faIcons} />}
                />
                <MenuItem
                    title="BXH"
                    to={config.routes.chart}
                    icon={<FontAwesomeIcon icon={faChartSimple} />}
                />
                <MenuItem
                    title="Thư Viện"
                    to={config.routes.mymusic}
                    icon={<FontAwesomeIcon icon={faList} />}
                />
            </Menu>
            <Menu className={cx('menu-sub')}>
                <MenuItem
                    title="Top 100"
                    to={config.routes.top}
                    icon={<FontAwesomeIcon icon={faStar} />}
                />
                <MenuItem
                    title="Nghe gần đây"
                    to={config.routes.history}
                    icon={<FontAwesomeIcon icon={faClock} />}
                />
                <MenuItem
                    title="Bài hát yêu thích"
                    to={config.routes.favorite}
                    icon={<FontAwesomeIcon icon={faHeart} />}
                />
                <MenuItem
                    title="Đã tải lên"
                    to={config.routes.upload}
                    icon={<FontAwesomeIcon icon={faCloudArrowUp} />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
