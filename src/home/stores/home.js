import alt from '../../alt'
import HomeActions from '../actions/home'
import {ListView} from 'react-native'
import url from '../constants/url'

class HomeStore {
    constructor() {
        this.loaded = false;
        this.projects = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        this.bindActions(HomeActions);
    }

    onFetch() {
        fetch(url.projects)
        .then((response) => response.json())
        .then((responseData) => {
            const projects = responseData.list;
            this.projects = this.projects.cloneWithRows(projects);
            this.loaded = true;
            this.emitChange();
        })
    }
}

export default alt.createStore(HomeStore, 'HomeStore');
