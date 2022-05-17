import { Text, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

function Textperso({navigation}) {
  
    const str = "🌸🌸A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs. Flowers may facilitate outcrossing (fusion of sperm and eggs from different individuals in a population) resulting from cross-pollination or allow selfing (fusion of sperm and egg from the same flower) when self-pollination occurs.🌸🌸"

  return (
    <View style = {styles.textCont}>
      <View style = {styles.textCont2}>
          <Text style = {styles.txt}>{str}</Text>
     </View>
     <View style = {styles.iconCont}>
     <Icon.Button
     width = {340}
                backgroundColor= '#e84393'
                color = "pink"
                name={Platform.OS === "android" ? "home" : "ios-home-outline"}
                size = {35}
                onPress={() => navigation.navigate('Home')}
                iconStyle = {{marginLeft : 150}}
           />
</View>
    </View>
  )
}

const styles = StyleSheet.create({

iconCont : {
    flexDirection : "row",
    justifyContent : "center",
    backgroundColor : "pink"
  },


textCont2 : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "pink"
},

textCont : {
    flex : 1
  },

txt: {
    fontSize : 15,
    width : '70%'
  }, 
})


export default Textperso