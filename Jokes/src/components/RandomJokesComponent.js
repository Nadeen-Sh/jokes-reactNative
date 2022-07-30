import * as React  from 'react';
import { View, Text ,StyleSheet ,Image} from 'react-native';
import axios from "axios"
import themeStyle from '../theme.style';
import ButtonComponent from './ButtonComponent';


const GifsComponent = () =>{;
    const [facts, setFacts] = React.useState("");
    const [answer, setAnswer] = React.useState("");
   
   const getFact = () =>{
    setAnswer(false);
    axios.get('https://joke.deno.dev/').then((res)=>{
      setFacts(res.data);
      })
      .catch((err)=>{console.log(err, "err")})
       
      setTimeout(() => {
        setAnswer(true);
        }, 3000);

   }

     React.useEffect(() => {
      getFact();
     },[])

      
      return (
        <View style={styles.container}>
       <Text style={styles.instructions}> {facts.setup}</Text> 
       {answer &&
       <View style={styles.section2}>
        <Text style={[styles.instructions , styles.text2]}> {facts.punchline}</Text>
       <Image source={require('../../assets/laughing.gif')}  style ={{width:150, height: 150}}/>
       </View>}
       <View style={styles.ButtonStyle}>
       <ButtonComponent text="NEW JOKE" icon='refresh' iconColor={themeStyle.colors.BLACK_COLOR} textColor={themeStyle.colors.BLACK_COLOR} color='transparent' textSize={20} textWeight="bold" iconSize={25} onClick={() => getFact()}/> 
      </View> 
        </View>
      );
    }

  
  const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      backgroundColor: 'rgba(255,255,255, 0.95)',
      padding: 40,
      width: 400,
      alignSelf: 'center',
      borderRadius: 6

    },
    instructions: {
      textAlign: 'center',
      color: themeStyle.colors.BLACK_COLOR,
      marginBottom: 5,
      fontFamily: 'sans-serif',
      fontSize: 22,
      marginBottom: 20,
      fontWeight: "bold"
    },
    section2:{
      alignItems: 'center',
      marginBottom: 50,
      marginTop: 30
    },
    text2: {
      color: themeStyle.colors.YELLOW_COLOR,
      marginTop: 20
    },
    ButtonStyle: {
      alignSelf: 'center',
      
    },
  });
  export default GifsComponent

