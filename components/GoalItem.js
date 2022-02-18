/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const GoalItem = props => {
    return (
        <View>
            {/* {console.log('In Goal Item')} */}
            <Text>{props.title}</Text>
        </View>
    );
};

export default GoalItem;
