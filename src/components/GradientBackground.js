import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackgroundContext } from '../context/BackgroundContext';
import { useFade } from '../hooks/useFade';

const GradientBackground = ({children}) => {

    const { colorsCurrent, prevcolors, setPrevColors } = useContext(BackgroundContext);
    const { colorPrimario, colorSecundario } = colorsCurrent;

    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn( () => {
            setPrevColors(colorsCurrent);
            fadeOut();
        })
    }, [ colorsCurrent ])

    return (
        <View style={{ flex: 1}}>
            <LinearGradient
                colors={[prevcolors.colorPrimario, prevcolors.colorSecundario, 'white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{ x: 0.5, y: 0.1}} //punto inicial X de izq a der, y de arriba a bajo
                end={{x: 0.5, y:0.8}} // donde termina el gradient x: 0.5 = 50%, y: igual
                
            />
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient
                    colors={[colorPrimario, colorSecundario, 'white']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{ x: 0.5, y: 0.1}} //punto inicial X de izq a der, y de arriba a bajo
                    end={{x: 0.5, y:0.8}} // donde termina el gradient x: 0.5 = 50%, y: igual
                
                />
            </Animated.View>

            {children}
            
        </View>
    );
};

export default GradientBackground;