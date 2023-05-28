import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CompaniesListItem } from '../companyListItem/CompanyListItem';
import { CompanyDetails } from '../CompanyDetails/CompanyDetails'
import { Divider, Text } from "@react-native-material/core";

export const CompaniesList = () => {
    const [companies, setCompanies] = useState([])
    const [selectedCompany, setSelectedCompany] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8002/company`, { method: 'GET' })
            .then(response => response.json())
            .then(data => setCompanies(data.companies));
    }, [])

    useEffect(() => {
        console.log(selectedCompany)
    }, [selectedCompany])


    return (
        <View style={styles.companiesList}>
            <View style={styles.companies}>
                {(companies.length > 0) && <>
                    {companies.map((company, index) => {
                        return <CompaniesListItem selectCompany={setSelectedCompany} company={company} key={index} />
                    })}</>}
            </View>

            {
                selectedCompany ? <>
                    <Divider />
                    <CompanyDetails company={selectedCompany} />
                </> : <Text style={styles.noItem}>Компания не выбрана(</Text>
            }

        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 600,
    },
    companies: {
        display: "grid",
        gap: "12px",
        padding: "8px",
        overflowY: "auto",
        maxHeight: "400px",
    },
    companiesList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "12px",
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
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
    },
    noItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});