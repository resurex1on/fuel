import { useEffect, useState } from 'react';
import { Text, View, Picker, StyleSheet, TextInput, Button } from 'react-native';
import { UnitSelect } from '../unitSelect/unitSelect';

export const Navigator = ({ navigation, route }) => {
    return (
        <View style={styles.navigator}>
            <Button title="Calculator"
                onPress={() => navigation.push('Calculator')}> </Button>
            <Button title="Company" onPress={() => navigation.push('Company')}> </Button>
            <Button title="Companies" onPress={() => navigation.push('Companies')}> </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    navigator: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: '12px'
    }
});