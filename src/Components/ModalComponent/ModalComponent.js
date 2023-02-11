import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './styles';

const ModalComponent = ({isOpen, onClosed, style, list}) => {
  return (
  <Modal
      isOpen={isOpen}
     onClosed={onClosed}
     style={style}
     list={list}
     position={"bottom"}
     backdrop={true}>
  <View style={styles.areaModal}>
            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Cidade: </Text>
                <Text style={styles.textoModal_2}>{list[0]?.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</Text>
            </View>

            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Estado: </Text>
                <Text style={styles.textoModal_2}>{list[1]?.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</Text>
            </View>

            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>País: </Text>
                <Text style={styles.textoModal_2}>{list[2]}</Text>
            </View>

            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Data e hora: </Text>
                <Text style={styles.textoModal_2}>{list[3]}</Text>
            </View>

            { list[5] == null ? null : 
            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Bioma: </Text>
                <Text style={styles.textoModal_2}>{list[5]}</Text>
            </View>
            }

            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Satelite: </Text>
                <Text style={styles.textoModal_2}>{list[4]}</Text>
            </View>

            <View style={styles.areaModal_row}>
                <Text style={styles.textoModal}>Fire Radiative Power: </Text>
                <Text style={styles.textoModal_2}>{list[6]}</Text>
            </View>
        </View>
  </Modal>
  );
  };
  
  export default ModalComponent;

