import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
export default class First extends Component {
    static navigationOptions = {
        tabBarLabel: 'Page 1',
        //drawerLabel:'Page 1'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    This is our Record mailorder business
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
