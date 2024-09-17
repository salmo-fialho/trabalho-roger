import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/Home';
import Tela2 from './componentes/Tela2';
import {StyleSheet, Image } from 'react-native';
 const Drawer = createDrawerNavigator();

export default function App() {
   return (
     <>
          <>
            <Image source={require('./imagens/ifms-cor.png')}style={estilo.Logo}/>
          </>
     <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="Tela2" component={Tela2} />
       </Drawer.Navigator>
     </NavigationContainer>
     </>
   );
   
   }
const estilo = StyleSheet.create({
    Logo: {
      width: 60,
      height: 60,
      marginTop:40,
    }})
