import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age:'20' },
        { name: 'Friend #2', age:'30' },
        { name: 'Friend #3', age:'40' },
        { name: 'Friend #4', age:'20' },
        { name: 'Friend #5', age:'20' },
        { name: 'Friend #6', age:'23' },
        { name: 'Friend #7', age:'55' },
        { name: 'Friend #8', age:'21' },
        { name: 'Friend #9', age:'53' }
    ];


    return (
        <FlatList
        keyExtractor= {(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.element}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    element: {
        marginVertical: 50
    }

});

export default ListScreen;