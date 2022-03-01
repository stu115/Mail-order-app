import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
export default class SecondPage extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: 'page 2',
        //drawerLabel:'Page 2'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    We have records of 80s music - vinyl LP's, EP's including King - Love and pride
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    
});
