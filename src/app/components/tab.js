import React, {TabBarIOS, View, Text} from 'react-native';
import Index from '../../index/components/index';
import Back from '../../back/components/back';
import Home from '../../home/components/home'
import styles from '../styles/tab';

export default React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'index',
        };
    },
    render: function(){
        return (
            <TabBarIOS>
                <TabBarIOS.Item style={styles.ddd}
                    title={'借钱'}
                    renderAsOriginal={false}
                    selected={this.state.selectedTab === 'index'}
                    onPress={() => this.onChange('index')}
                    >
                    <Index route={this.props.router} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title={'还钱'}
                    renderAsOriginal={false}
                    selected={this.state.selectedTab === 'back'}
                    onPress={() => this.onChange('back')}
                    >
                    <Back />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title={'个人中心'}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.onChange('home')}
                    >
                    <Home />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },
    onChange: function(tab){
        this.setState({selectedTab: tab});
    }
})
