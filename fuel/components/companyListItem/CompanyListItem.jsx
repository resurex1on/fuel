import { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from "@react-native-material/core";



export const CompaniesListItem = ({ company, selectCompany }) => {
    return (
        <View style={styles.company}>
            <View style={styles.info}>
                <Text variant='caption'>
                    {company.name}
                </Text>

                <Text variant='caption'>
                    {company.id}
                </Text>
            </View>

            <Button title="Open" onPress={() => selectCompany(company)}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 600,
    },
    company: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px"
    },
    info: {
        gap: "6px",
        
    }
});