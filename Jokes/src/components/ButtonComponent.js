import * as React from 'react';
import { Text,StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const ButtonComponent =( {icon , iconColor, color , text , textColor , onClick , iconSize, textSize , textWeight} ) => {

    return <TouchableOpacity  style={{ ...styles.btnStyle, backgroundColor: color}} onPress={onClick}>
    <Icon style={styles.IconStyle} type="EvilIcons" name={icon} color= {iconColor} size={iconSize}  />
    <Text style={ {...styles.textStyle , color: textColor, fontSize: textSize , fontWeight:textWeight }}> {text}</Text>
  </TouchableOpacity >
  }

  const styles = StyleSheet.create({
  btnStyle: {  
   flexDirection: 'row',
  height: 40,
  borderRadius: 4,
  marginTop: 10,
  paddingRight: 10,
  justifyContent: 'center'
},

  IconStyle: {
     padding: 5
  },
  textStyle: {
    padding: 5
  }
    });

  export default ButtonComponent