import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Imageperso from './components/Imageperso';
import Textperso from './components/Textperso';
import Home from './components/Home';

export default function App() {

  const Nav = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
        <Nav.Navigator  >
            <Nav.Screen
             name="Home"
             component={Home}
              />
            <Nav.Screen
             name="Image"
             component={Imageperso}
              />
          <Nav.Screen name="Texte" component={Textperso} />
        </Nav.Navigator>
    </NavigationContainer>
  );
}