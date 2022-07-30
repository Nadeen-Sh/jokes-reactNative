import * as React  from 'react';
import { View,StyleSheet , Image} from 'react-native';

import axios from "axios"
import themeStyle from '../theme.style';
import ButtonComponent from './ButtonComponent';

const ImagesComponent = () =>{
  const [image , setImage] = React.useState("");  
  const [cat , setCat] = React.useState("");  

  const getImages = () =>{
    axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>{
        setImage(res.data.message)
          })
          .catch((err)=>{
            console.log(err , "err");
          })

          axios.get('https://aws.random.cat/meow?ref=apilist.fun').then((res)=>{
            setCat(res.data.file)
       
              })
              .catch((err)=>{
                console.log(err , "err");
              })
  }


React.useEffect(()=>{
    getImages();
},[])
return (
    <View>
        <View style={styles.container1}>
 <Image source={{uri : image   !=="" ?  image: undefined}} style={{height: 240 , width: 240}} />
 </View>
 <View style={[styles.container1 , styles.container2]}>
 <Image source={{uri : cat  !=="" ?  cat: undefined }} style={{height: 240 , width: 240}} />
 </View>
 <View style={styles.ButtonStyle}>
<ButtonComponent text="NEW photo " icon='refresh' iconColor='#ffff' textColor='#FFFF' color={themeStyle.colors.YELLOW_COLOR} textSize={20} textWeight="bold" iconSize={25} onClick={() => getImages()}/>
</View>
</View>
)

}
const styles = StyleSheet.create({
    container1: {
  margin: 10,
  backgroundColor: themeStyle.background.YELLOW_BACKGROUND_COLOR,
  height: 260,
  width: 260,
  alignItems: 'center',
  justifyContent: "center"
    },
    container2: {
      alignSelf: "flex-end",
    
        },
    ButtonStyle: {
        width: 300,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius:5,
        padding: 20
    }
 
  });
export default ImagesComponent