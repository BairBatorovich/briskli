import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import styles from './styles';
import { loadPosts, saveGps } from '../store/action';

class Load extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
          } else {
            this._getLocationAsync();
          }
            try {
                const post = await Axios.get('posts');
                this.props.loadPosts(post.data);
                this.props.navigation.navigate('Posts')          
            } catch (error) {
                console.log(post.error)
            }
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.props.saveGps({ location });
      };
    render() {
        return (
            <View style = {styles.load}>
                <ActivityIndicator size="large" color="white" />
            </View>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer.posts,
    }
}
const mapDispatchToProps = {
    loadPosts,
    saveGps,
}

export default connect(mapStateToProps, mapDispatchToProps)(Load);