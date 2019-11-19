import React from 'react';

import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import { View, Text } from 'native-base';

import styles from './styles';

function Item({item,setSelect}) {
    return (
        <TouchableOpacity style={styles.item} onPress={()=>setSelect(item)}>
            <Text list style={styles.title}>{item.name}</Text>
        </TouchableOpacity>

    );
}

class LocationComponent extends React.Component {
    render() {
        const { data, setSelect } = this.props;

        return (
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} setSelect={setSelect} />}
                keyExtractor={item => (item.id).toString()}
            />
        )
    }
}

//            <Icon name='check' size={20} color='red'/>


export default LocationComponent;
