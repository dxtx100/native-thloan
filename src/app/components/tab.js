import React, {TabBarIOS, View} from 'react-native';
import Index from '../../index/components/index';
import Activities from '../../activities/components/activities';

export default React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'index',
        };
    },
    render: function(){
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title={'首页'}
                    selected={this.state.selectedTab === 'index'}
                    onPress={() => this.onChange('index')}>
                    <Index route={this.props.router} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title={'活动'}
                    selected={this.state.selectedTab === 'activities'}
                    onPress={() => this.onChange('activities')}>
                    <Activities />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },
    onChange: function(tab){
        this.setState({selectedTab: tab});
    }
})
