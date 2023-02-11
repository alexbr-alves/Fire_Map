import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        height: '100%',
    }, 
    legenda_picker: {
      position: 'absolute', 
      bottom: 85, 
      right: 10, 
      padding: 15,
      color: 'white',
      borderRadius: 5
    },   
      pickerView: {
        position: 'absolute', 
        bottom: 50, 
        right: 10, 
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center'
      }
})