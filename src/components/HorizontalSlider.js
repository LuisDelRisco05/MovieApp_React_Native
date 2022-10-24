import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import MoviePoster from './MoviePoster';

const HorizontalSlider = ({movies, title}) => {
    return (
        <View 
            style={{
                height: (title) ? 260 : 220
            }}>

            {
                title && <Text style={styles.titleMovie}> {title} </Text>
                
            }
            <FlatList 
                data={ movies }
                renderItem={ ({item}) => (
                    <MoviePoster 
                        movie={ item } 
                        width={140} 
                        height={200} 
                    /> 
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    titleMovie:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'black',
        marginLeft: 10
    }
});

export default HorizontalSlider;