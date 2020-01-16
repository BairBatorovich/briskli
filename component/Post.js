import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { savePost } from '../store/action';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    select = () => {
        const { userId, title, body, id } = this.props;
        let post = { id, userId, title, body };
        this.props.savePost(post);
        this.props.navigation.navigate('PostInfo');
    }
    componentDidMount() {

    }
    render() {
        const { userId, title, body, id } = this.props

        return (
            <TouchableOpacity style={styles.post} onPress={this.select}>
                <View style={styles.postTitle}>
                    <Text style={styles.postttl}>{userId} {title}</Text>
                </View>
                <Text style={styles.body}>{body}</Text>
            </TouchableOpacity>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        post: state.PostReducer.post,
    }
}
const mapDispatchToProps = {
    savePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);