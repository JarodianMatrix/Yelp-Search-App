import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';
import ResultsList from "../components/ResultsList";
import useResults from '../hooks/useResults';


const SearchScreen = function () {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = function (price) {
        return results.filter((result) => {
            return result.price === price;
        })
    };

    return (

        //This is a placeholder element
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage }</Text> : null}

            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'} />
                <ResultsList results={filterResultsByPrice('$$')} title={'Bit Pricier'} />
                <ResultsList results={filterResultsByPrice('$$$')} title={'Expensive'} />
            </ScrollView>

        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;