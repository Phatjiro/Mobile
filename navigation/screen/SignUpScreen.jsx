import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable';

import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputNameChange: false,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputNameChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                name: val,
                check_textInputNameChange: true
            })
        } else {
            setData({
                ...data,
                name: val,
                check_textInputNameChange: false
            })
        }
    }

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle={'light-content'} />
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            style={styles.footer}
            animation='fadeInUpBig'
        >

            <Text style={styles.text_footer}>User Name</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color='#05375a'
                    size={20}
                />
                <TextInput
                    placeholder='Your name'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => textInputNameChange(val)}
                />
                {data.check_textInputNameChange ?
                <Animatable.View animation='bounceIn'>
                    <Feather
                        name='check-circle'
                        color='green'
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {marginTop: 15}]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color='#05375a'
                    size={20}
                />
                <TextInput
                    placeholder='Your email'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View animation='bounceIn'>
                    <Feather
                        name='check-circle'
                        color='green'
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer,
            {marginTop: 15}]}>Password</Text>
            <View style={styles.action}>
                <Feather
                    name='lock'
                    color='#05375a'
                    size={20}
                />
                <TextInput
                    placeholder='Your Password'
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        />
                    :
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer,
            {marginTop: 15}]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather
                    name='lock'
                    color='#05375a'
                    size={20}
                />
                <TextInput
                    placeholder='Confirm Your Password'
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {data.confirm_secureTextEntry ?
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        />
                    :
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                    }
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color: 'white'}]}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 14
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -6,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 12
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});