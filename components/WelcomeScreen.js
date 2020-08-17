import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const WelcomeScreen = (props) => {
    return (
        <View style={{padding: 50}}>
            <Text>Welcome Screen</Text>
            <Button title="Dashboard" onPress={() => {console.log('bawli'); props.navigation.navigate('Dashboard')}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default WelcomeScreen;

