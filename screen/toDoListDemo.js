/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalInput from '../components/GoalInput.js';
import GoalItem from '../components/GoalItem.js';

const ToDoListDemo = () => {
    const [goals, setGoals] = useState([]);

    const addGoal = goalTitle => {
        console.log('GoalAdded');
        // console.log(goalTitle);
        // console.log(goals);
        setGoals(currentGoals => [...currentGoals,
        {id: Math.random().toString(), value: goalTitle}]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoal} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={goals}
                renderItem={itemData => <GoalItem title={itemData.item.value}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
});

export default ToDoListDemo;
