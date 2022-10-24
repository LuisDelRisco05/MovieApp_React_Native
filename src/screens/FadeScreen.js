import { Animated, Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useFade } from '../hooks/useFade';



const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity} = useFade();

    return (
         <View style={styles.containerAnimated}>
         
            <Animated.View style={{...styles.animated, opacity: opacity,}} />
            
            <Button 
                title='FadeIn'
                onPress={() => fadeIn ()}
            />

            <Button 
                title='FadeOut'
                onPress={ () => fadeOut()}
            />
            
        </View>
    );
};

export default FadeScreen;

const styles = StyleSheet.create({
    containerAnimated:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animated:{
        backgroundColor:'dimgray',
        width: 150,
        height: 150,
        borderColor: 'darkslateblue',
        borderWidth: 10,
        marginBottom: 10
    }
})