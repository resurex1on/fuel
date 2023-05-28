import { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Text } from "@react-native-material/core";
import { Linking } from 'react-native'
import qs from 'qs';


export const CompanyDetails = ({ company }) => {
    const phoneCall = () => Linking.openURL(`tel:${company.phone}`)

    async function sendEmail() {

        let url = `mailto:${company.email}`;

        // Create email link query
        const query = qs.stringify({
            subject: "",
            body: "",
            cc: "",
            bcc: ""
        });

        if (query.length) {
            url += `?${query}`;
        }

        // check if we can use this link
        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }

        return Linking.openURL(url); sendEmail
    }
    return (
        <View role="button" style={styles.row}>
            <Text variant='caption'>Компания: <Text style={{ fontWeight: 600 }}>{company.name}</Text></Text>
            <Text variant='caption'>Регистрационный Номер: <Text style={{ fontWeight: 600 }}>{company.id}</Text></Text>
            <Text variant='caption'>ФИО Владельца: <Text style={{ fontWeight: 600 }}>{company.owner}</Text></Text>
            <Text variant='caption'>Форма Собственности: <Text style={{ fontWeight: 600 }}>{company.form || 'Не Указан'}</Text></Text>
            <Text variant='caption'>Адрес: <Text style={{ fontWeight: 600 }}>{company.companyAddress || 'Не Указан'}</Text></Text>
            <Text variant='caption'>Веб-Сайт: <Text style={{ fontWeight: 600 }}>{company.siteUrl || 'Не Указан'}</Text></Text>
            <Text variant='caption'>Номер Телефона: <Text style={{ fontWeight: 600, textDecoration: 'underline' }} onPress={phoneCall}>{company.phone || 'Не Указан'}</Text></Text>
            <Text variant='caption'>Email: <Text style={{ fontWeight: 600, textDecoration: 'underline'  }} onPress={sendEmail}>{company.email || 'Не Указан'}</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 600,
    },
    company: {
        display: "flex",
        padding: "8px"
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        display: "grid",
        gridTemplateColumns: "minmax(300px, 3fr)",
        gap: "12px"
    },
    input: {
        border: "1px solid gray"
    },
    column: {
        gap: "12px",
        minWidth: "200px"
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});