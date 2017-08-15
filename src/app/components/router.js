import Tab from './tab';
import React from 'react-native';
import RouterActions from '../actions/router';
import RouterStore from '../stores/router';

export default React.createClass({

    componentDidMount: function() {
        RouterActions.init(this.props.navigator);
    },

    render: function(){
        return (
            <Tab />
        );
    }
})
