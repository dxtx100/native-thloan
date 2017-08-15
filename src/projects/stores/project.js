import alt from '../../alt';
import ProjectActions from '../actions/project';
import url from '../constants/url';

class ProjectStore {

    constructor() {
        this.project = null;
        this.loaded = false;
        this.bindActions(ProjectActions);
    }

    onFetch(id) {
        if(!id) return false;
        fetch(url.project_simple)
        .then((response) => response.json())
        .then((responseData) => {
            this.project = responseData.project;
            this.loaded = true;
            this.emitChange();
        })
    }
}

export default alt.createStore(ProjectStore, 'ProjectStore');
