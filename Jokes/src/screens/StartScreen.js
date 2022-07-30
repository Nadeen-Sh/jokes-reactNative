import * as React  from 'react';
import { View, Text ,ImageBackground} from 'react-native';
import ButtonComponent from "../components/ButtonComponent"
import styles from './StartScreenStyle';

const StartScreen = ({navigation}) =>{

return (
    <View >
        <ImageBackground resizeMode="cover" source={require('../../assets/StartBackground.jpg')} style={{width:"100%" , height:"100%"}}>
        <Text style={styles.TextStyle}>Let's try to have Fun !!</Text>
        <View style={styles.buttonStyle}>
        <ButtonComponent text="LETS GO " icon='arrow-right' iconColor='#000000' textColor='#000000' color='transparent' textSize={20} textWeight="bold" iconSize={25} onClick={() => navigation.navigate('JOKES')}/>
        </View>
            </ImageBackground>
    </View>
)

}

export default StartScreen