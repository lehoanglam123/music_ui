import {
    faChartSimple,
    faClock,
    faCloudArrowUp,
    faCompactDisc,
    faHeart,
    faIcons,
    faMusic,
    faRecordVinyl,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Link to={config.routes.explore}>
                <h2 className={cx('logo')}>
                    <FontAwesomeIcon
                        className={cx('logo-icon')}
                        icon={faCompactDisc}
                    />
                    <p className={cx('logo-title')}>Music</p>
                </h2>
            </Link>
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
                    icon={<FontAwesomeIcon icon={faMusic} />}
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
