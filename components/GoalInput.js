/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, Button, View} from 'react-native';

const GoalInput = props => {
    const [goalText, setGoalText] = useState('');

    const goalInput = enteredText => {
        setGoalText(enteredText);
        // console.log('Text Changed');
    };

    return (
        <View>
            <TextInput placeholder="Goal" onChangeText={goalInput} value={goalText} />
            <Button title="Add" onPress={props.onAddGoal.bind(this, goalText)} />
        </View>
    );
};

// const styles = StyleSheet.create({});

export default GoalInput;
