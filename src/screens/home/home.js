import React, {useState, useEffect, useRef} from "react";
import { Image, Text, View, StyleSheet, Platform, TouchableOpacity, FlatList,Alert } from "react-native";
import MapView, { Marker, Circle} from "react-native-maps";
import { Modalize } from 'react-native-modalize';
import styles from './styles';
import  fluxoC02 from '../../mocks/fluxoC02.json';
import filters from '../../mocks/filters'
import { useRoute } from "@react-navigation/native";

export default function Home(){
    
    const modalizeRef = useRef(null);
    const modalizeRefMarker = useRef(null);
    const [cou, setCou] = useState();
    const [dados, setDados] = useState([]);
    useEffect(() => {
        setDados(fluxoC02)
    })

    
    function onOpen(){
        modalizeRef.current?.open();
      };
    function onClose(){
        modalizeRef.current?.close();
    }



    function onOpenMarker(){
        modalizeRefMarker.current?.open();
      };
    function onCloseMarker(){
        modalizeRefMarker.current?.close();
    }

    return (
        <View style={styles.container}>
            <MapView
            initialRegion={{
                latitude: 64.8689,
                longitude: -111.5748,
                latitudeDelta: 1,
                longitudeDelta: 1
            }}
            mapType={'satellite'}
            paddingAdjustmentBehavior={'always'}
            scrollEnabled={true}
            rotateEnabled={false}
            scrollDuringRotateOrZoomEnabled={true}
            userInterfaceStyle="dark"
            style={StyleSheet.absoluteFill}           
            >  
                
             {
                dados.map(({latitude, longitude, id, country }) => (
                    <Marker
                    key={id}
                    onPress={onOpenMarker}
                    pinColor={'red'}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }} 
                    
                    />   
                ))
             }
            </MapView>
            <Modalize
                ref={modalizeRefMarker}
                snapPoint={500}
                modalHeight={500}
                >
                <Text>{cou}</Text>   
            </Modalize> 
           
                <TouchableOpacity style={styles.button} onPress={onOpen}>
                    <Text style={styles.button__text}>Filter</Text>
                </TouchableOpacity>
               
                <Modalize 
                    modalStyle={{backgroundColor: '#a71b1a'}}
                    withHandle={Platform.OS === 'android'? false : true}
                    ref={modalizeRef}
                    snapPoint={Platform.OS === 'ios'? 270 : 310}
                    modalHeight={Platform.OS === 'ios'? 270 : 310}
                    withReactModal={true}
                >
                  
                <FlatList horizontal={true} style={styles.modal} 
                    data={filters}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({name}, index) => name}
                    renderItem={({item}) => (
                        
                    <TouchableOpacity>
                        <Image source={item.image} style={styles.modal__image}  />
                        <Text style={styles.modal__text}>{item.name}</Text>
                    </TouchableOpacity>
                 
                  
                )}
                
                />
                {Platform.OS === 'android'? 
                 <View style={{ backgroundColor: '#a71b1a'}}>
                    <TouchableOpacity style={styles.close__button} onPress={onClose}>
                        <Text style={styles.close__button__text} >Close</Text>
                    </TouchableOpacity>
                </View>
                   :
                   null
            }
                
                </Modalize>
               
        </View>
    )
}

