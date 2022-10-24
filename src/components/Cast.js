import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';



const Cast = ({castInfo}) => {

        const uri = `https://image.tmdb.org/t/p/w500${castInfo.profile_path}`;


    return (
        <View style={styles.imgContainer}>
            <View style={styles.img}>
            {
                castInfo.profile_path && (
                    <Image 
                        source={{uri}}
                        style={styles.actor}
                    />
                )
            }
                
                <View style={{ marginLeft: 10, justifyContent: 'center'}}>
                    <Text style={{color: 'black', fontWeight: '600' }}>{castInfo.name}</Text>
                    <Text style={{fontWeight: '600'}}>{castInfo.character}</Text>
                </View>
                
            </View>
        </View>
    
    );
};

export default Cast;

const styles = StyleSheet.create({
    imgContainer:{
        height: 130
    },
    img: { 
        height: 65,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.97,

        elevation: 13,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,

        paddingRight: 15,
        paddingBottom: 5,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: 'ghostwhite',
        flexDirection: 'row',
        alignItems: 'center' 
    },
    actor: {
        width: 65,
        height: 65,
        borderRadius: 100,
        
    }
});