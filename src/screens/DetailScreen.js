import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import useDetails from '../hooks/useDetails';


import MovieDetails from '../components/MovieDetails';
import Icon  from 'react-native-vector-icons/Ionicons';


const heightPoster = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}) => {

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { movieFull, cast, isloading} = useDetails(movie.id);


    return (
        <ScrollView>

        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
        >
            <Icon 
                color='white'
                size={40}
                name='arrow-undo-outline'
            />
        </TouchableOpacity>

            <View style={{flex: 1, backgroundColor: 'floralwhite' }}>

                <View style={styles.posterContainer}>
                    <View style={styles.imgContainer} >
                        <Image 
                            source={{uri}} //cuando tiene mismo nombre propiedad y la constante se deja uno solo
                            style={styles.img}
                        />                
                    </View>
                </View>

                <View style={styles.descriptionPoster}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>{movie.original_title}</Text>
                        <Text style={styles.titleDescription}>{movie.title}</Text>
                </View>                
                    
            </View>
                {
                    isloading
                    ? <ActivityIndicator style={{marginTop: 20}} color='darkslateblue' size={40} />
                    : 
                        <MovieDetails 
                            movieFull={movieFull}
                            cast={cast}
                        />
                }

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    posterContainer:{
        width: '100%',
        height: heightPoster * 0.7,
    },
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
        paddingBottom: 5   
    },
    img:{
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    descriptionPoster:{
        marginTop: 20,
        marginHorizontal: 30
    },
    titleDescription:{
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    backButton: {
        zIndex: 999,
        position: 'absolute',
        top: 10,
        left: 5

    }

})

export default DetailScreen;

