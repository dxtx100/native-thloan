import Index from '../../index/components/index';
import Activities from '../../activities/components/activities';
import Home from '../../home/components/home';

export default [
    {
        title: '首页',
        component: Index,
        name: 'index',
        icon: 'featured',
    },
    {
        title: '活动',
        component: Activities,
        name: 'activities',
        icon: 'history',
    },
    {
        title: '我',
        component: Home,
        name: 'home',
        icon: 'more',
    }
]
