import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView, LogBox} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import {BackgroundContext} from '../context/BackgroundContext';

import Carousel from 'react-native-snap-carousel';
import { getImageColors } from '../helpers/getColores';


LogBox.ignoreLogs(['React']);


const { width: windoWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { moviescurrent, moviespopular, moviestoprated, moviesupcoming, isloading} = useMovies();
    const { top } = useSafeAreaInsets(); // para el noch de ios parte superior

    const {setColorsCurrent} = useContext(BackgroundContext);
    
    
    const getPosterColors = async (index) => {

        const movie = moviescurrent[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        const { primary, secondary } = await getImageColors(uri);


        setColorsCurrent({
            colorPrimario: primary,
            colorSecundario: secondary
        });
    };

    useEffect(() => {
        if(moviescurrent.length > 0) {
            getPosterColors(0)
        }
    }, [moviescurrent])

    if (isloading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color='darkslateblue' size={100} />
            </View>
        )
    };

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop: top + 20}}>
              
                    <View style={{ height: 440}}>
                        <Carousel 
                            data={ moviescurrent }
                            renderItem={ ({item}) => <MoviePoster movie={ item } /> } // debe tener el nombre item, no requiere key, e itera con cada objeto del arrays
                            sliderWidth={ windoWidth } // control de deslizar
                            itemWidth={ 300 } 
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index)} // me da el index
                        />
                    </View>

                    {/*peliculas populares*/}

                    <HorizontalSlider title="Populares"     movies={moviespopular}   /> 
                    <HorizontalSlider title="Más valorados" movies={moviestoprated}  /> 
                    <HorizontalSlider title="Próximamente"  movies={moviesupcoming}  /> 
                        
                   
                </View>
            </ScrollView>
        </GradientBackground>
    );
};


export default HomeScreen;