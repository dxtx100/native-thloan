import ProjectActions from '../actions/project';
import ProjectStore from '../stores/project';
import React, {View, Text, Image} from 'react-native';
import Spinner from '../../components/spinner'

export default React.createClass({

    propTypes: {
        id: React.PropTypes.number.isRequired,
    },

    getInitialState: function() {
        return ProjectStore.getState();
    },

    componentDidMount: function() {
        ProjectStore.listen(this.onChange);
        ProjectActions.fetch(this.props.id);
    },

    componentWillUnmount: function(){
        ProjectStore.unlisten(this.onChange);
    },

    onChange: function(state){
        this.setState(state);
    },

    render: function(){
        const project = this.state.project;
        if(!this.state.loaded) return (<Spinner />);
        if(!project) return (
            <View>
                <Text>Project not found</Text>
            </View>
        )
        return (
            <View>
                <Text>{project.title}</Text>
            </View>
        );
    }
})
