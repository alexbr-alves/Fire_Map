import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const pickerItems = [
  { label: 'América do Sul', value: 'América do Sul' },
  { label: 'América do Norte e Central', value: 'América do Norte' },
  { label: 'África', value: 'África' },
  { label: 'Europa', value: 'Europa' },
];

export default function Picker({ selectedValue, onValueChange }) {
  return (
    <RNPickerSelect
      items={pickerItems}
      onValueChange={onValueChange}
      value={selectedValue}
    />
  );
}
