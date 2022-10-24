import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';

import Cast from './Cast';

import Icon  from 'react-native-vector-icons/Ionicons';

const MovieDetails = ({movieFull, cast}) => {
    return (
        <View style={{backgroundColor: 'floralwhite'}}>
            {/* Detalles */}
            <View style={{marginLeft: 25, flexDirection: 'row'}}>
                <Icon  
                    name="star-outline" 
                    size={16} 
                    color="dimgray"
                    style={{fontWeight: '700'}}
                />
                <Text 
                    style={{
                        fontSize:14, marginLeft: 7, fontWeight: '700'
                    }}
                    >{movieFull.vote_average}
                </Text>
                    
                    <Text style={{fontWeight: '700'}}>
                        - { movieFull.genres.map( genr => genr.name ).join(', ') }
                    </Text>  
            </View>    

            {/* Historia */}
            <View style={styles.history}>
                <Text style={{...styles.historyText, fontSize: 18, fontWeight: '800'}}>Historia:</Text>
                <Text style={styles.historyText}>{movieFull.overview}</Text>
            </View>
            
            <View style={styles.history}>
                <Text style={{...styles.historyText, fontSize: 18, fontWeight: '800'}}>Prosupuesto</Text>
                <Text style={styles.historyText}>{ currencyFormatter.format( movieFull.budget, { code: 'USD'})} USD</Text>
            </View>

            {/* Casting */}
            <View style={{marginTop: 10}}>
                <Text  style={{fontSize: 18, fontWeight: '800', marginLeft: 30, color:'black'}}>Actores</Text>
                <FlatList 
                    data={ cast }
                    renderItem={ ({item}) => (
                        <Cast 
                            castInfo={ item } 
                        /> 
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>                
            
        </View>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    history: {
        marginHorizontal: 30,
        marginTop: 5
    },
    historyText: {
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    }
})