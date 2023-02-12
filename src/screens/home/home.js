import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";

import ModalComponent from '../../Components/ModalComponent/ModalComponent.js'
import Picker from "../../Components/PickerComponent/PickerComponent.js"; 
import MapViewComponent from "../../Components/MapViewComponent/MapViewComponent.js";

import focos from "../../mocks/focos.js";

import styles from './styles';


export default function Home(){  

    const [list, setList] = useState([]);
    const [selectedValue, setSelectedValue] = useState("América do Sul");
    const [dados, setDados] = useState(focos.americaSul);
    const [isOpen, setIsOpen] = useState(false); 
   
    
      function addList(municipio, estado, pais, data, satelite, bioma, frp) {
        list.unshift(
            municipio,
            estado,
            pais,
            data,
            satelite,
            bioma,
            frp,
        );
      
      }
   useEffect(() => {
    if(selectedValue == 'África'){
        setDados(focos.africa)
        
    }if(selectedValue == 'Europa'){
        setDados(focos.europa)
        
    }if(selectedValue ==  'América do Norte'){
        setDados(focos.americaCent)
        
    }if(selectedValue ==  'América do Sul'){
        setDados(focos.americaSul)}
}, [selectedValue])


    return (
        <View style={styles.container}>
    
            <MapViewComponent dados={dados} setIsOpen={setIsOpen} addList={addList}/>

            <Text style={styles.legenda_picker}>Escolha a área</Text>

            <View style={styles.pickerView}>

                <Picker
                    selectedValue={selectedValue}
                    onValueChange={setSelectedValue}
                />
       
            </View>       


            <ModalComponent 
                isOpen={isOpen}
                list={list}
                onClosed={() => setIsOpen(false)}
                style={{height: 220,borderRadius: 10,}}>
            </ModalComponent> 

        </View>
    )

};

