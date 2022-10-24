import ImageColors from 'react-native-image-colors';


export const getImageColors = async ( uri ) => {
    
    const colors = await ImageColors.getColors(uri, {})

    let primary;
    let secondary;

    if (colors.platform === 'android') {
        // android
        primary = colors.dominant,
        secondary =colors.average
    } else {
        // ios
        primary = colors.primary,
        secondary = colors.secondary
    }

    return {
        primary,
        secondary
    }
};