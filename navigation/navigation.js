import * as React from 'react';
import { Dimensions } from 'react-native';
import {
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadScreen from '../screens/Load';
import PostsSreen from '../screens/Posts';
import PostInfoScreen from '../screens/PostInfo';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styleHeader = {
    headerStyle: {
        backgroundColor: '#404040',
    },
    headerTitleStyle: {
        color: 'white',
    },
    headerBackTitleStyle: {
        color: 'white',
    },
    headerTitleAlign: 'center',
};

const PostStack = createStackNavigator(
    {
        Posts: {
            screen: PostsSreen,
        },
        PostInfo: {
            screen: PostInfoScreen,
        },
    },
    {
        defaultNavigationOptions: styleHeader,
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            Load: LoadScreen,
            Post: PostStack,
        },
        {
            initialRouteName: 'Load',
            defaultNavigationOptions: styleHeader,
            headerMode: 'screen'
        }
    )
);