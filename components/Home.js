import { View, StyleSheet, Text} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Ionicons';


function Home({navigation}) {
  return (
    <View style = {styles.home}>
        <View style = {styles.txtCont}>
        <Text style = {styles.txt}>HOME</Text>
        </View>
        <View style = {styles.btnContainer}>
        <Icon.Button
          width = {170}
          
                backgroundColor= '#e84393'
                color = "pink"
                name={Platform.OS === "android" ? "flower" : "ios-flower-outline"}
                size = {35}
                onPress={() => navigation.navigate('Image')}
                iconStyle = {{marginLeft : 50}}
           />
          <Icon2.Button
         
                width = {170}
                backgroundColor= '#ef5777'
                color = "pink"
                size = {35}
                name={Platform.OS === "android" ? "document-text" : "ios-text-sharp"}
                onPress={() => navigation.navigate('Texte')}
                iconStyle = {{marginLeft : 50}}
            />
           </View>
    </View>
  )
}

const styles = StyleSheet.create({
    home : {
        flex : 1,
        backgroundColor : "pink",
    },

    btnContainer : {
        flexDirection : "row",
        justifyContent : 'center',
    },

    txtCont : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },

    txt : {
      fontSize : 40
    }
})



export default Home