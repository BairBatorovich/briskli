import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    load: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#585858'
    },
    posts: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#585858'
    },
    postInfo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#B0B0B0'
    },
    postUser: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postttl: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    postbody: {
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'justify'
    },
});

export default styles;