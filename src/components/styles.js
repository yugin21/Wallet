import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper:{
        backgroundColor: '#57606f',
        height: 235,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    titleStyle:{
        fontSize: 17,
        color: '#fff'
    },
    headerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        
    },
    profileIconStyle:{
        fontSize: 17, 
        color:'white',
        marginLeft: 17
    },
    searchIconStyle:{
        fontSize: 17, 
        color:'white',
        marginRight: 17,
    },
    cardWrapper:{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',  
        paddingTop: 10, 
    },
    cardImageStyle:{
        height: 145,
        width: 249
    },
    balanceText:{
        fontSize: 15,
        color: '#fff',
        paddingBottom: 10,
        alignSelf: 'center'
    },
    contactContainer:{
        backgroundColor: '#fcfcfc',
        height: 140,
        paddingTop: 10,
        position: 'relative',
        paddingLeft: 20,
    },
    contactText:{
        fontSize: 15,
        color: '#b7b5b5',
        paddingBottom: 7,
    },
    addcontactCard:{
        height: 90,
        width: 70,
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#efeded',
        borderStyle: 'dashed',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginHorizontal: 4,
    },
    contactCard:{
        height: 90,
        width: 70,
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginHorizontal: 4,
    },
    addIconStyle:{
        height: 15,
        width: 15,
        borderWidth: 1,
        borderRadius: 15 / 2,
    },
    contactName:{
        fontSize: 11,
        color: '#b7b5b5',
        textAlign: 'center'
    },
    ppStyle:{
        height: 35,
        width: 35,
        borderWidth: 1,
        borderRadius: 35 / 2,
    },
    transContainer:{
        backgroundColor: '#fcfcfc',
        height: '100%',
        position: 'relative',
        paddingLeft: 20,
        paddingBottom: '87.5%',
    },
    transText:{
        fontSize: 15,
        color: '#b7b5b5',
        paddingBottom: 7,
    },
    transSection:{
        height: 47,
        width: '95%',
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 2,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        marginVertical: 4,
    },
    loadSection:{
        height: 47,
        width: '95%',
        borderRadius: 2,
        backgroundColor: '#fff',
        marginTop: 4,
        marginBottom: 45,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    transIconStyle:{
        height: 35,
        width: 35,
        marginLeft: 5,
        marginRight: 10,
    },
})