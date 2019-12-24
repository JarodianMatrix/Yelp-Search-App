import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from 'react-navigation'

const ResultsList = function ( {title, results, navigation} ) {

    if (!results.length) {
        return null;
    };

    return (<View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal = {true}
             showsHorizontalScrollIndicator={false}
            data = {results}
            keyExtractor = {(result) => {result.id}}
            renderItem = {({item}) => {

                return(
                <TouchableOpacity onPress={()=>navigation.navigate('Results', {id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
               )
            }}
        />
    </View>)

};

const styles = StyleSheet.create({

    titleStyle: {
         fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },

    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);