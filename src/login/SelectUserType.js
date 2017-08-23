import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';


export default class SelectUserType extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        header : null,
    });

    constructor(props, context) {
        super(props, context);
    }

    render() {
        
        const {navigate} = this.props.navigation;
        return ( <View style={styles.container}>
            <Image source={require('../../assets/images/index/login.png')} style={styles.icon}/>
            <Text style={styles.company} onPress={()=>{
                    navigate('PersonLogin', { type: 20  });
                }}>企业用户</Text>
            <Text style={styles.person} onPress={()=>{
                    navigate('PersonLogin', { type: 10 });
                }}>个人用户</Text>
            <Text style={styles.copyright}>Copyright ©2017-2018 特华小贷保留所有权利</Text>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 66,
    },
    icon: {
        marginTop: 30,
        width: 80,
        height: 95.5,
    },
    company: {
        borderRadius: 5,
        borderColor: '#e0333f',
        borderWidth: 1,
        paddingVertical: 12,
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        marginTop: 160,
        alignSelf: 'stretch',
        marginHorizontal: 16,
    },
    person: {
        marginTop: 12,
        borderRadius: 5,
        backgroundColor: '#e0333f',
        paddingVertical: 12,
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        alignSelf: 'stretch',
        marginHorizontal: 16,
    },
    copyright: {
        position: 'absolute',//相对父元素进行绝对定位
        bottom: 12,
        fontSize: 12,
        color:'#919998',
    },
});