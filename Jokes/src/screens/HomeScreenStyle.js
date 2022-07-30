 
  import themeStyle from '../theme.style';
  import {StyleSheet} from 'react-native';
  
  export default StyleSheet.create({
    AppBarStyle:{
     backgroundColor: "transparent", width: 900, margin: 10 },
     tabStyle:{backgroundColor:'transpernt', width: 600},
    instructions: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 5,
      fontFamily: 'sans-serif',
      fontWeight: "900",
      fontSize: 20
    },
    jokeText:{
      textAlign: 'center',
      color: 'black',
      marginBottom: 5,
      fontFamily: 'sans-serif',
      fontWeight: "900",
      fontSize: 20,
      fontWeight: "bold"
    },
    textStyle: {
        color: "rgba(255,255,255, 0.7)",
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
      fontWeight: "900",
      fontSize: 20
    },
    selecteStyles:{
      color: themeStyle.colors.YELLOW_COLOR,
      fontWeight: "900",
      fontFamily: 'sans-serif',
      fontWeight: "900",
      fontSize: 20
    },
    jokeStyle:{
      marginTop: 40,
      backgroundColor: themeStyle.background.YELLOW_BACKGROUND_COLOR,
      padding: 40,
      width: 400,
      alignSelf: 'center',
      borderRadius: 5
    },
    punchlineStyle:{
      marginTop: 40,
      alignItems: "center"
    },
    ButtonStyle: {
    alignSelf: 'center',
    padding: 5,
    marginTop: 50
    },
    punchlineText: {
    marginBottom: 30,
    color: 'white',
    },
    selectedIconStyle: {borderBottomWidth:2,
        borderBottomColor:'#FFFF'}
  });

