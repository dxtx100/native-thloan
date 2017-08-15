import React, {View, ListView, Text, TouchableHighlight, Image} from 'react-native';
import Project from './project';
import styles from '../styles/projects';
import Router from '../../app/actions/router';

export default React.createClass({

    propTypes: {
        projects: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        projects = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        return {
            projects: projects.cloneWithRows(this.props.projects),
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if(nextProps.projects){
            this.setState({
                projects: this.state.projects.cloneWithRows(nextProps.projects),
            });
        }
    },

    render: function() {
        return (
            <ListView
                dataSource={this.state.projects}
                renderRow={this.renderProject}
                style={styles.container}
            />
        )
    },

    renderProject: function(project) {
        return (
            <View>
                <TouchableHighlight
                    onPress={()=>this.pushProjectDetail(project.id)}
                    underlayColor={'#eee'}
                    >
                    <View style={styles.project}>
                        <Image
                            source={{uri: project.picture}}
                            style={styles.thumbnail}
                        />
                        <View style={styles.summary}>
                            <Text>{project.title}</Text>
                            <View style={styles.detail}>
                                <Text style={styles.detailText}>{project.status}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    },

    pushProjectDetail: function(projectId){
        Router.push({
            title: '项目详情',
            component: Project,
            passProps: {
                id: projectId,
            }
        });
    }
})
