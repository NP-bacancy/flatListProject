/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Button, Text, FlatList} from 'react-native';

const AddDetail = (props) => {
    const [detail, setDetail] = useState([]);
    const [disable, setDisable] = useState(false);
    // let recFname = props.navigation.getParam('Data','');
    // console.log(recFname);
    useEffect(() =>{
        let recFname = props.navigation.getParam('Data','');
        // console.log(recFname);
        if (recFname !== '') {
        setDetail(currentDetail => [...currentDetail,recFname]);}
    },[props.navigation]);
    const FetchDetail = () => {
        props.navigation.navigate('TD');
        if (detail.length > 8){
            console.log(detail.length);
            setDisable(true);
        }
        // console.log(detail.length);
        // setDetail([...detail,recFname]);
    };

    return (
        <View>
            <Button title="Add Detail"
            onPress={FetchDetail}
            disabled = {disable}
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
