import React, {useState, useEffect, useRef} from "react";
import { Image, Text, View, StyleSheet, Platform, TouchableOpacity, FlatList } from "react-native";
import MapView, { Marker, Circle} from "react-native-maps";
import { Modalize } from 'react-native-modalize';
import styles from './styles';
import foco from "../../services/foco2"
import filters from "../../mocks/filters";

export default function Home(){
    const modalizeRef = useRef(null);
    const [dados, setDados] = useState([]);
    const [color, setColor] = useState("red")

    useEffect(() => {
        setDados(foco)
    }, []);

    function onOpen(){
        modalizeRef.current?.open();
      };
    function onClose(){
        modalizeRef.current?.close();
    }

      function filtraCor(name){
        if(name === "Fire"){
            setColor('red')
        }else if(name === 'Arctic Ecosystems'){
            setColor("#18AAF3")
        }else if(name === 'Biomass'){
            setColor("#66cc00")
        }else if(name === 'Carbon Cycle'){
            setColor("#cc6600")
        }else if(name === 'Climate'){
            setColor("#fff")
        }else if(name === 'Hydrology and Cryosphere'){
            setColor("#9999ff")
        }else if(name === 'Land Use and Human Dimensions'){
            setColor("#ffff33")
        }else if(name === 'Soils'){
            setColor("#000000")
        }else if(name === 'Vegetation and Forests'){
            setColor("#cc0066")
        }          
}
    return (
        <View style={styles.container}>
            <MapView
            mapType={'satellite'}
            scrollEnabled={true}
            rotateEnabled={false}
            scrollDuringRotateOrZoomEnabled={false}
            userInterfaceStyle="dark"
            style={StyleSheet.absoluteFill}           
            >  
                
               {
                dados.map(({properties, id}) => (
                    <Marker
                    key={id}
                    pinColor={color}
                    coordinate={{
                        latitude: properties.latitude,
                        longitude: properties.longitude
                    }}
                    />
                    
                ))
               
               }
                    
               

            </MapView>
           
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
                    
                  <TouchableOpacity onPress={() => {filtraCor(item.name)}}>
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