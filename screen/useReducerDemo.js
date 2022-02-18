/* eslint-disable prettier/prettier */
import React, { useReducer } from 'react';
import { Text, Button, View } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count : state.count + 1};
        case 'DECREMENT':
            return {count : state.count - 1};
        case 'SQUARE':
            return {count : state.count * state.count };
        default:
            return state;
    }
};

const useReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});


    return (
        <View>
            <Text>{state.count}</Text>
            <Button
                title="Click me for increment."
                onPress={() => {
                    dispatch({type: 'INCREMENT'});
                }}
            />
            <Button
                title="Click me for decrement."
                onPress={() => {
                    dispatch({type: 'DECREMENT'});
                }}
            />
            <Button
                title="Click me for Square."
                onPress={() => {
                    dispatch({type: 'SQUARE'});
                }}
            />
        </View>
    );
};

export default useReducerDemo;
