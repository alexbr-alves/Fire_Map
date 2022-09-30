import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    map: {
        height: '100%',
        position: 'absolute'
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        height: 40,
        width: 150,
        backgroundColor: '#a71b1a',
        borderRadius: 10,
        
    },
    button__text: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: '#faf9f5',
        fontWeight: 'bold',
       
    },
    modal: {
        backgroundColor: '#a71b1a',
        flex: 1,
        textAlign: 'center',
        //height: 250,
       
       
    },
    modal__image: {
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10,
       
    },
    modal__text: {
        marginTop: 10,
        color: '#faf9f5',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
        paddingBottom: 20
      
    },
    close__button:{
        alignSelf: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
        backgroundColor: '#faf9f5',
        borderRadius: 10,
    },
    close__button__text: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: '#a71b1a',
        fontWeight: 'bold',
    }
})