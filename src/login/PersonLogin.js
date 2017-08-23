import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import Conts from "../Conts"

export default class PersonLogin extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: (navigation.state.params && navigation.state.params.type == 20 ) ? "企业经营贷       " : "个人消费贷         ",
    });

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            userpassword: '',
        };
        storage.load({
            key: 'userinfo',
        }).then(ret => {
            if (ret && ret.token) {

            }
            if (ret) {
                this.setState({username: ret.phone,});
            }
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            // console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    break;
                case 'ExpiredError':
                    break;
            }
        })
    }

    async doLogin() {
        try {
            let response = await fetch(Conts.base_url + '/login/doin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phone: this.state.username,
                        password: this.state.userpassword,
                        type: this.props.navigation.state.params.type,
                    })
                }
            );

            let responseJson = await response.json();

            if (!responseJson) {
                alert('服务器错误');
                return
            }
            if (responseJson.code == '00000000') {
                // alert(JSON.stringify(responseJson));
                storage.save({
                    key: 'userinfo',  // 注意:请不要在key中使用_下划线符号!
                    data: {
                        name: responseJson.res.name,
                        phone: responseJson.res.phone,
                        token: responseJson.res.token,
                        type: responseJson.res.type,
                        step:JSON.stringify(responseJson.res.step)
                    },
                });
                //登录成功,导航到

            } else {
                alert(responseJson.msg);
            }
        } catch
            (error) {
            alert('erro:' + error);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return ( <View style={styles_login.container}>
                <Image source={require('../../assets/images/index/login.png')} style={styles_login.icon}/>
                <TextInput
                    style={{ alignSelf: 'stretch',color:'#444',fontSize:14,marginHorizontal:40, marginTop: 40,} }
                    placeholder={"输入您的手机号码"}
                    placeholderTextColor={'#ccc'}
                    keyboardType={'numeric'}
                    maxLength={11}
                    underlineColorAndroid={'#888'}
                    onChangeText={(text) => this.setState({username:text})}
                    value={this.state.username}
                />
                <TextInput
                    style={{alignSelf: 'stretch',color:'#444', fontSize:14,marginHorizontal:40,}}
                    placeholder={"输入您的密码"}
                    placeholderTextColor={'#ccc'}
                    autoCorrect={false}
                    secureTextEntry={true}
                    underlineColorAndroid={'#888'}
                    onChangeText={(text) => this.setState({userpassword:text})}
                />
                <Text
                    onPress={()=>this.doLogin()}
                    style={styles_login.login_button}>登录</Text>

                <View style={{flexDirection:'row',marginTop:20,position:'absolute',bottom: 20,}}>
                    <Text style={styles_login.forget}>忘记密码</Text>
                    <View style={styles_login.deviderLine}/>
                    <Text style={styles_login.forget} onPress={()=>{
                        navigate('Regist', { type: this.props.navigation.state.params.type });
                    }}>注册账号</Text>
                </View>
            </View>
        );
    }
}

const styles_login = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 28,
    },
    icon: {
        marginTop: 30,
        width: 80,
        height: 95.5,
    },
    login_button: {
        alignSelf: 'stretch',
        color: 'white',
        borderRadius: 10,
        backgroundColor: '#e0333f',
        margin: 40,
        textAlign: 'center',
        fontSize: 14,
        padding: 14,
    },
    forget: {
        fontSize: 13,
        color: '#919998',
        paddingHorizontal: 20,
    },
    deviderLine: {
        width: 1,
        backgroundColor: '#919998',
        alignSelf: 'stretch',
    },
})