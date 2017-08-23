import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import Conts from "../Conts"

export default class RegistPage extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: "注册",
    });

    constructor(props, context) {
        super(props, context);
        this.state = {
            phone: '',
            userpassword: '',
            sms_code: ''
        };
    }

    async regist() {
        if (!this.state.phone) {
            alert('请输入手机号码');
            return
        } else if (!this.state.sms_code) {
            alert('请输入验证码');
            return
        } else if (!this.state.userpassword) {
            alert('请输入密码');
            return
        }
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(Conts.base_url + 'reg/beuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone,
                    password: this.state.userpassword,
                    sms_code: this.state.sms_code,
                    type: this.props.navigation.state.params.type,
                })
            });
            let responseJson = await response.json();
            if (!responseJson) {
                alert('服务器错误');
                return
            }
            if (responseJson.code == '00000000') {
                alert(JSON.stringify(responseJson));
            } else {
                alert(responseJson.msg);
            }
        } catch (error) {
            alert("erro" + JSON.stringify(error));
        }
    }

    async send_sms() {
        try {
            let response = await  fetch(Conts.base_url + 'reg/sendsms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: this.state.phone,
                    type: this.props.navigation.state.params.type,
                })
            });
            let responseJson = await response.json();
            if (!responseJson) {
                alert('服务器错误');
                return
            }
            if (responseJson.code == '00000000') {
                alert(JSON.stringify(responseJson));
            } else {
                alert(responseJson.msg);
            }
        } catch (error) {
            alert('erro:' + error);
        }
    }

    render() {

        return ( <View style={styles_regist.container}>
                <TextInput
                    style={styles_regist.input }
                    placeholder={"输入手机号码"}
                    placeholderTextColor={'#ababab'}
                    keyboardType={'numeric'}
                    maxLength={11}
                    underlineColorAndroid={'#eee'}
                    onChangeText={(text) => this.setState({phone:text})}
                />
                <View
                    style={{flexDirection:'row',alignSelf: 'stretch',marginHorizontal: 48,alignItems: 'center',marginTop:20,}}>
                    <TextInput
                        style={{ color: '#444',fontSize: 14,flex:1}}
                        placeholder={"输入验证码"}
                        placeholderTextColor={'#ababab'}
                        autoCorrect={false}
                        underlineColorAndroid={'#eee'}
                        onChangeText={(text) => this.setState({sms_code:text})}
                    />
                    <Text style={{ color: '#ababab',fontSize: 14,}} onPress={()=>this.send_sms()}>| 获取验证码</Text>
                </View>
                <TextInput
                    style={styles_regist.input}
                    placeholder={"输入密码"}
                    placeholderTextColor={'#ababab'}
                    autoCorrect={false}
                    secureTextEntry={true}
                    underlineColorAndroid={'#eee'}
                    onChangeText={(text) => this.setState({userpassword:text})}
                />
                <Text
                    onPress={()=>this.regist()}
                    style={styles_regist.login_button}>确定</Text>

            </View>
        );
    }
}

const styles_regist = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        paddingTop: 28,
    },
    login_button: {
        color: 'white',
        backgroundColor: '#e0333f',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        height: 48,
        marginHorizontal: 48,
        marginTop: 40,
    },
    input: {
        alignSelf: 'stretch',
        color: '#444',
        fontSize: 14,
        marginHorizontal: 48,
        textAlignVertical: 'center',
        height: 40,
        marginTop: 20,
    },
});