import React, {useState, useEffect, useRef} from "react";
import { Image, Text, View, StyleSheet, FlatList} from "react-native";
import MapView, { Marker} from "react-native-maps";
import { Modalize } from 'react-native-modalize';
import PureChart from 'react-native-pure-chart'

import styles from './styles';
import  co2 from '../../mocks/co2.json';

export default function Home(){    
    const modalizeRefMarker = useRef(null);
    const [dados, setDados] = useState([]);
    const [datas, setDatas] = useState([]);
    const [historico, setHistorico] = useState([]);
    const [indice, setIndice] = useState(0);
    
   

    if(datas.length == 0){
        for(let i=0; i < co2.length; i++){
            if(co2[0].latitude == co2[i].latitude && co2[0].longitude == co2[i].longitude){
                datas.push(co2[i].start_date)
             }
        }
    }
   
        for(let j = 0; j < co2.length; j++){
            if(co2[j].start_date == datas[indice]){
                dados.push(co2[j])
        }
    }    
   
   
    function onOpenMarker(){
        modalizeRefMarker.current?.open();
      };
    function onCloseMarker(){
        modalizeRefMarker.current?.close();
    }
    async function modalizeHistorico(latitude, longitude){
        onOpenMarker();
        for(let i =0; i < co2.length; i++){
            if(latitude === co2[i].latitude && longitude === co2[i].longitude){
                historico.push(co2[i].nee)
            }
            
        }
    }
    return (
            <View style={styles.container}>            
            <MapView           
            mapType={'satellite'}          
            scrollEnabled={true}
            rotateEnabled={false}
            scrollDuringRotateOrZoomEnabled={true}
            userInterfaceStyle="dark"
            style={StyleSheet.absoluteFill}
            >

            {dados.map(({latitude, longitude, id}) => (
            <Marker           
            key={id}
            image={require('../../../assets/imeges/home.png')}
            onPress={() => {{modalizeHistorico(latitude, longitude)}{onCloseMarker}}}            
            coordinate={{
                latitude: latitude,
                longitude: longitude
        }}/>
            
            ))}
            </MapView>
           
                <Modalize
                ref={modalizeRefMarker}
                snapPoint={500}>
                     <PureChart 
                     data={historico} 
                     height={300}
                     type='line' 
                     numberOfYAxisGuideLine={20}
                     />
              
         
            </Modalize> 
            
        </View>
    )

};