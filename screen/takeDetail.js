/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Button, View, TextInput} from 'react-native';

const TakeDetail = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mob, setMob] = useState('');

    const fnameChange = enteredText => {
        setFname(enteredText);
        // console.log(enteredText);
    };
    const lnameChange = enteredText => {
        setLname(enteredText);
        // console.log(enteredText);
    };
    const mobChange = enteredText => {
        setMob(enteredText);
        // console.log(enteredText);
    };

    return (
        <View>
            <TextInput placeholder="Firstname" onChangeText={fnameChange} value={fname} />
            <TextInput placeholder="Lastname" onChangeText={lnameChange} value={lname} />
            <TextInput placeholder="Mobile Number" onChangeText={mobChange} value={mob} />
            <Button title="Save"
                onPress={() =>{props.navigation.navigate('AD',
                {Data: {fname, lname, mob},
                });}}
                // onPress={() =>{props.navigation.navigate('AD', data: {[{fname},{lname},{mob}]});}}
            />
        </View>
    );
};

export default TakeDetail;
