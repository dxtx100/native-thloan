import Projects from '../../projects/components/projects';
import IndexActions from '../actions/index';
import IndexStore from '../stores/index';
import Spinner from '../../components/spinner';
import React, {View, SegmentedControlIOS, Text} from 'react-native';
import Container from '../../components/container';
import {filters} from '../constants/index';
import styles from '../styles/index';


export default React.createClass({

    getInitialState: function() {
        return IndexStore.getState();
    },

    componentDidMount: function() {
        IndexStore.listen(this.onChange);
        IndexActions.fetch();
    },

    componentWillUnmount: function() {
        IndexStore.unlisten(this.onChange);
    },

    onChange: function(state) {
        this.setState(state);
    },

    render: function() {
        if(!this.state.loaded) return (<Spinner />);
        return (
            <Container>
                <View style={styles.filters}>
                    <SegmentedControlIOS
                        values={filters.label}
                        selectedIndex={this.state.selectedIndex}
                        tintColor="#ff0000"
                        onChange={this.setFilter} />
                </View>
                <Projects projects={this.state.projects} />
            </Container>
        )
    },

    setFilter: function(event){
        const selectedIndex = event.nativeEvent.selectedSegmentIndex;
        IndexActions.setFilter(selectedIndex);
    },
})
