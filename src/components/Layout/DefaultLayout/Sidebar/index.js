import classNames from 'classnames/bind';
import {
    faCompactDisc,
    faChartSimple,
    faIcons,
    faList,
    faRecordVinyl,
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
        </aside>
    );
}

export default Sidebar;
