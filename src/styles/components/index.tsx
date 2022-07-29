import { StyleSheet, Dimensions } from "react-native";

const { height: windowHeight } = Dimensions.get('screen');

export const modalStyle = StyleSheet.create({
    container: {
        padding: 8,
        position: 'absolute',
        alignSelf: 'center',
        top: '45%',
        height: 'auto',
        width: 300,
        borderRadius: 4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        shadowColor: '#34495e',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.4,
        elevation: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
});

export const footerBtn = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    divider: {
        borderWidth: 0.75,
        borderColor: '#c3c3c3'
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 40,
    },
    layout: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    },
    align: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    }
});

export const listStyle = StyleSheet.create({
    container: {
        borderColor: '#c3c3c3',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1,
        padding: 16,
        margin: 4
    },
    title: {
        fontSize: 16,
        fontWeight: '400'
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    },
    right: {
        width: '70%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export let screen = StyleSheet.create({
    layout: {
        flex: 1,
        height: windowHeight
    },
    text: {
        fontSize: 24,
        color: '#01579B',
        fontWeight: '900',
        textDecorationLine: 'underline'
    },
    container: {
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center',
        maxWidth: windowHeight,
        justifyContent: 'space-between',
    }
});
