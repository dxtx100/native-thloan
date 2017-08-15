import alt from '../../alt';
import IndexActions from '../actions/index';
import {ListView} from 'react-native';
import url from '../constants/url';
import {filters} from '../constants/index'

class IndexStore {
    constructor() {
        this.loaded = false;
        this.projects = [];
        this.selectedIndex = 0;
        this.bindActions(IndexActions);
    }

    onFetch() {
        const filter = encodeURIComponent(filters.value[this.selectedIndex]);
        fetch(url.project_list + '?status=' + filter)
        .then((response) => response.json())
        .then((responseData) => {
            this.projects = responseData.list;
            this.loaded = true;
            this.emitChange();
        })
    }

    onSetFilter(index) {
        if(this.selectedIndex === index) return false;
        this.selectedIndex = index;
        this.onFetch();
    }
}

export default alt.createStore(IndexStore, 'IndexStore');
