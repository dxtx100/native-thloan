import Index from '../../index/components/index';
import Back from '../../back/components/back';
import Home from '../../home/components/home';

export default [
    {
        title: '借钱',
        component: Index,
        name: 'index',
        icon: 'featured',
    },
    {
        title: '还钱',
        component: Back,
        name: 'back',
        icon: 'history',
    },
    {
        title: '个人中心',
        component: Home,
        name: 'home',
        icon: 'more',
    }
]
