import Icon from 'react-native-vector-icons/Entypo';
import { Image, StyleSheet, View, Platform } from 'react-native'

function Imageperso({navigation}) {


  return (
    <View style = {styles.imgContainer}>
      <View style = {styles.imgCont2}>
          <Image
              style={styles.img}
              source={require('../assets/flower.png')}
          />
      </View>
     <View style = {styles.iconCont}>
      <Icon.Button
                width = {340}
                backgroundColor= '#e84393'
                color = "pink"
                name={Platform.OS === "android" ? "home" : "home-city"}
                size = {35}
                onPress={() => navigation.navigate('Home')}
                iconStyle = {{marginLeft : 150}}
           />
         
         </View>
      </View>
  )
}

const styles = StyleSheet.create({
imgCont2 : {
  flex : 1,
  alignItems : 'center',
  justifyContent : 'center',
  backgroundColor : "pink"
},

iconCont : {
  flexDirection : "row",
  justifyContent : "center",
  backgroundColor : "pink"
},


imgContainer : {
  flex : 1,

  },
  
img : {
  height : 250,
  width : 250,

  }, 
})



export default Imageperso