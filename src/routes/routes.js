import config from '~/config';
import Charts from '~/pages/Charts';
import Explore from '~/pages/Explore';
import Favorite from '~/pages/Favorite';
import Genres from '~/pages/Genres';
import History from '~/pages/History';
import Library from '~/pages/Library';
import Search from '~/pages/Search';
import Top from '~/pages/Top';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.explore, component: Explore },
    { path: config.routes.chart, component: Charts },
    { path: config.routes.genres, component: Genres },
    { path: config.routes.mymusic, component: Library },
    { path: config.routes.favorite, component: Favorite },
    { path: config.routes.top, component: Top },
    { path: config.routes.history, component: History },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
