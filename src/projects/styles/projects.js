import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    project: {
        flex: 1,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    thumbnail: {
        height: 50,
        width: 85,
    },
    summary: {
        flex: 1,
        paddingLeft: 10,
        paddingTop:5,
    },
    detail: {
        paddingTop: 10,
    },
    detailText: {
        color: '#666',
        fontSize: 12,
    },
    touch: {
        backgroundColor: '#eee',
    }
})
