import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Calculator } from './components/calculator/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "12px"
  },
});
