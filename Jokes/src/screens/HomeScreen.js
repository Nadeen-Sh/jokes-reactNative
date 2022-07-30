import * as React  from 'react';
import { View, Text , ScrollView,Image, ImageBackground} from 'react-native';
import { AppBar } from "@react-native-material/core";
import axios from "axios";
import styles from './HomeScreenStyle';
import RandomJokes from '../components/RandomJokesComponent';
import ButtonComponent from '../components/ButtonComponent';
import ImagesComponent from '../components/ImagesComponent';
import Tabs from 'react-native-tabs';


const HomeScreen = () =>{

    const [page,setPage] = React.useState('first');
    const [jokes, setJokes] = React.useState([]);
    const [show, setShow] = React.useState(false);
   


     React.useEffect(() => {
      getNewJoke(); 

     },[])

      
    const getNewJoke = () =>{
      setShow(false);
      axios.get("https://backend-omega-seven.vercel.app/api/getjoke").then((res)=> { 
          setJokes(res.data)
    }
        )
    .catch((err) => console.log(err, "err"))

    setTimeout(() => {
      setShow(true);
      }, 5000);
    }

      return (
        <ScrollView style={styles.container}>
             <ScrollView horizontal = {true}>
             <AppBar style={styles.AppBarStyle}>
             <Tabs selected={page} style={styles.tabStyle}
                selectedStyle={styles.selecteStyles} selectedIconStyle={styles.selectedIconStyle} onSelect={el => setPage(el.props.name)}>
              <Text style={styles.textStyle} id="first" name="first">DEVELOPER JOKES</Text>
              <Text style={styles.textStyle} name="second" >IMAGES</Text>
              <Text style={styles.textStyle} name="third">JOKES</Text>
          </Tabs>
              
             </AppBar>
    </ScrollView>
    <ImageBackground resizeMode="cover" source={require('../../assets/smile.jpg')} style={{width:"100%" , height:700}}>
  {page === "first" ? ( 
    jokes.map((joke , index)=>{
  return( 
    <View key={index} style={styles.jokeStyle}>
  <Text style={styles.jokeText}> {joke.question}</Text>
  
{ show && <View style={styles.punchlineStyle }>
  <Text style={[styles.instructions, styles.punchlineText] }> {joke.punchline}</Text>
  <Image source={require('../../assets/laughingImage.gif')}  style ={{width:150, height: 150}}/>
  </View>
  }
  <View style={styles.ButtonStyle}>
 <ButtonComponent text="NEW JOKE " icon='refresh' iconColor='#000000' textColor='#000000' color='#ffffff' textSize={20} textWeight="bold" iconSize={25} onClick={() => getNewJoke()}/>
 </View>
  </View>
  )
 }))
 :( page === 'third' ? (
  <RandomJokes />
 ) : (
  <ImagesComponent />
 )) 
  }
</ImageBackground>
        </ScrollView>
      );
    }

 
  export default HomeScreen

