import config from '~/config';
import Charts from '~/pages/Charts';
import Explore from '~/pages/Explore';
import Genres from '~/pages/Genres';
import Library from '~/pages/Library';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.explore, component: Explore },
    { path: config.routes.chart, component: Charts },
    { path: config.routes.genres, component: Genres },
    { path: config.routes.mymusic, component: Library },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
