import BasicLayout from './layout/index';
import BlogList from './pages/blogList';
import BlogEditor from './pages/blogEditor';
import Details from './pages/blogDetails';

const routes = [
    {
        path:'/',
        component: BasicLayout,
        routes:[
            {
                path:'/',
                exact: true,
                component: BlogList
            },
            {
                path:'/list',
                component: BlogList
            },
            {
                path:'/editor',
                component: BlogEditor
            },
            {
                path:'/details',
                component: Details
            },
        ]
    },
];

export default routes;