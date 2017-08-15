import alt from '../../alt';
import RouterActions from '../actions/router';

class RouterStore {
    constructor() {
        this.route = null;
        this.bindActions(RouterActions)
    }

    onInit(router) {
        this.router = router;
    }

    onPush(route) {
        this.router.push(route);
    }
}

export default alt.createStore(RouterStore, 'RouterStore');
