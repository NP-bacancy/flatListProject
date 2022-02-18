/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

const useStateDemo = () => {
    const [data, setData] = useState(0);

    return (
        <View>
            <Button
                title="Click me for increment."
                onPress={() => {
                    setData(data + 1);
                }}
            />
            <Text>{data}</Text>
            <Button
                title="Click me for decrement."
                onPress={() => {
                    setData(data - 1);
                }}
            />
        </View>
    );
};

export default useStateDemo;
