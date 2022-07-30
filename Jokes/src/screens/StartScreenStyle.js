import {StyleSheet} from 'react-native';
import themeStyle from '../theme.style';

export default StyleSheet.create({
    TextStyle: {
      textAlign: 'center',
      color: themeStyle.colors.YELLOW_COLOR,
      fontWeight: themeStyle.FONT_WEIGHT_BOLD,
      fontSize: 50,
      marginTop: 20,
      textShadowColor: themeStyle.colors.YELLOW_COLOR,
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 2
    },
    buttonStyle: {
   alignItems: 'center', 
   width: 200,
   marginTop: 50,
   justifyContent:'center',
   alignSelf: "center",
   
    }
  });

 