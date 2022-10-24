import { Animated} from 'react-native';
import { useRef } from 'react';

export const useFade = () => {

    const opacity = useRef( new Animated.Value(0) ).current;

    const fadeIn = ( callback ) => {
        console.log('fadeIn');
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }
        ).start(() => callback ? callback() : null);
    };

    const fadeOut = () => {
        console.log('fadeOut');
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }
        ).start();
    };

    return {
       fadeIn,
       fadeOut,
       opacity
    }
};

