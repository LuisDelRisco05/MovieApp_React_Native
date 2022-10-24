import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MoviePoster = ({movie, width = 300, height = 420}) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 2,
            }}>
            <View style={styles.imgContainer} >
                <Image 
                    source={{uri}} //cuando tiene mismo nombre propiedad y la constante se deja uno solo
                    style={styles.img}
                />                
            </View>
        </TouchableOpacity>
    );
};

export default MoviePoster;

const styles = StyleSheet.create({
    imgContainer:{
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.97,

        elevation: 13,
        borderRadius: 30,
        
        paddingBottom: 5
        
    },
    img:{
        flex: 1,
        borderRadius: 20
    }
})