import { useEffect, useState } from 'react';
import { Text, View, Picker, StyleSheet, TextInput } from 'react-native';
import { UnitSelect } from '../unitSelect/unitSelect';

export const Calculator = () => {
  const [fuelUsed, setFuelUsed] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState(0);
  const [kmCost, setKmCost] = useState(0);

  useEffect(() => {
    if (!fuelUsed || !distance) {
      return
    }

    const fuelConsumptionPerKm = (fuelUsed / distance)
    const _fuelConsumption = fuelConsumptionPerKm * 100
    setFuelConsumption(_fuelConsumption)

    if(fuelCost) {
      setKmCost(fuelConsumptionPerKm * fuelCost)
    }
  }, [fuelUsed, distance, fuelCost])

  return (
    <View style={styles.calculator}>
      <Text style={styles.title}>Выберите тип топлива</Text>
      <Picker label="Средний расход топлива на 100км">
        <Picker.Item label="Средний расход топлива на 100км" value="1" />
        <Picker.Item label="Средний расход топлива на 100миль" value="2" />
      </Picker>
      <View style={styles.line} />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title} >Введите исходные данные</Text>

          <View>
            <Text>Израсходовано топлива</Text>
            <UnitSelect value={fuelUsed} onChange={setFuelUsed} isEditable={true} options={['л']} />
          </View>

          <View>
            <Text>Пройденное расстояние</Text>
            <UnitSelect value={distance} onChange={setDistance} isEditable={true} options={['км', 'мили']} />
          </View>
          <View>
            <Text>Стоимость топлива</Text>
            <UnitSelect value={fuelCost} onChange={setFuelCost} isEditable={true} options={['руб/литр']} />
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.title} >Результаты расчета</Text>

          <View>
            <Text>Средний расход топлива</Text>
            <UnitSelect value={fuelConsumption} isEditable={false} options={['л/100км']} />
          </View>

          <View>
            <Text>Стоимость 1км</Text>
            <UnitSelect value={kmCost} isEditable={false} options={['р/1км']} />
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
  },
  calculator: {
    display: "grid",
    gap: "12px"
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
    minWidth: "400px"
  }
});