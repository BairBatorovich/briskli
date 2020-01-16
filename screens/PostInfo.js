import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

class PostInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Пост',

            headerLeft: () => <Icon
                name="angle-left"
                color="#FFF"
                size={30}
                style={{ marginLeft: 20 }}
                onPress={() => navigation.navigate('Posts')}
            />,

        };
    };
    componentDidMount() {

    }
    render() {
        const { userId, title, body, id } = this.props.post
        return (
            <View style={styles.postInfo}>
                <Text style={styles.postUser}>Пользователь: {userId}</Text>
                <Text style={styles.postttl}>{title}</Text>
                <Text style={styles.postbody}>{body}</Text>
            </View>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        post: state.PostReducer.post,
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);