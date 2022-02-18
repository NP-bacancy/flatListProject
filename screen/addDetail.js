/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Button, Text, FlatList} from 'react-native';

const AddDetail = (props) => {
    const [detail, setDetail] = useState([]);
    let recFname = props.navigation.getParam('Data','');
    console.log(recFname);
    const FetchDetail = () => {
        props.navigation.navigate('TD');
        setDetail([...detail,recFname]);
    };

    return (
        <View>
            <Button title="Add Detail"
            onPress={FetchDetail}
            />
            {/* <Text>{JSON.stringify(recFname)}</Text> */}
            <FlatList
                data={detail}
                renderItem={({ item }) => {
                    return (
                    <Text>{JSON.stringify(item)}</Text>
                    );
                }}
            />
        </View>
    );
};

export default AddDetail;
