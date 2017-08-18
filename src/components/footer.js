import React, {View, SegmentedControlIOS, Text} from 'react-native';
import styles from './styles/footer';
import Router from '../app/actions/router';
import Home from '../home/components/home';
import Back from '../back/components/back';
import Borrow from '../index/components/index';


export default React.createClass({
    render: function() {
        return (
            <View style={styles.loginmain}>
                <Text style={styles.logintext} onPress={()=>this.pushRouter('borrow')}>
                    <Text style={styles.sss}>&#xe607;</Text>借钱
                </Text>
                <Text style={styles.logintext} onPress={()=>this.pushRouter('back')}>还钱</Text>
                <Text style={styles.logintext} onPress={()=>this.pushRouter('home')}>个人中心</Text>
            </View>
        );
    },

    pushRouter: function(name){
        if (name === 'borrow') {
            Router.push({
                title: '借钱',
                component: Borrow,
            });
        }else if (name === 'back') {
            Router.push({
                title: '还钱',
                component: Back,
            });
        }else {
            Router.push({
                title: '个人中心',
                component: Home,
            });
        }
    }
})
