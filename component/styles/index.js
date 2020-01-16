import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    post: {
        width: WIDTH - 10,
        height: 120,
        backgroundColor:'#B0B0B0',
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
    },
    postttl: {
        textAlign: 'center',
        color: 'green'
    },
    postTitle: {
        justifyContent: 'center'
    },
    body: {
        justifyContent: 'flex-start',
        textAlign:'justify'
    },
});

export default styles;