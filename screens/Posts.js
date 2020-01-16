import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Post from '../component/Post';
import { loading } from '../store/action';
import styles from './styles';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Все посты',
        };
    };

    componentDidMount() {

    }
    render() {
        const { posts, location} = this.props;
        console.log(location)
        return (
            <SafeAreaView style={styles.posts}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post
                    key={item.id}
                    id={item.id}
                    userId={item.userId}
                    title={item.title}
                    body={item.body}
                    navigation={this.props.navigation}
                />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.2}
            />
            </SafeAreaView>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer.posts,
        location: state.PostReducer.location,
    }
}
const mapDispatchToProps = {
    loading
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);