import * as React from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SectionGrid } from 'react-native-super-grid';


function Feed() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.TextoHome}>Autos de coleccion</Text>
    <Image source={(require('./assets/Fotos/mgg.gif'))}/>
  </View>
  );
}

function Profile() {
const [items, setItems] = React.useState([
  { name: 'Mustang 1969', prec: '1969', img: require('./assets/Fotos/a.png'), code: '#191970' },
  { name: 'Pontiac GTO', prec: '1949', img:  require('./assets/Fotos/b.png'), code: '#191970' },
  { name: 'Mercury Cougar', prec: '1970', img:  require('./assets/Fotos/c.png'), code: '#191970' },
  { name: 'Javelin AMX 401', prec: '1969', img:  require('./assets/Fotos/d.png'), code: '#191970' },
  { name: 'Chevrolet Chevelle', prec: '1971', img:  require('./assets/Fotos/e.png'), code: '#191970' },
  { name: 'Chevrolet Camaro', prec: '1969', img:  require('./assets/Fotos/f.png'), code: '#191970' },

  { name: 'Porsche 718', prec: '2019', img:  require('./assets/Fotos/g.png'), code: '#4876ff' },
  { name: 'Mazda MX-5', prec: '2019', img:  require('./assets/Fotos/h.png'), code: '#4876ff' },
  { name: 'BMW   M2', prec: '2018', img:  require('./assets/Fotos/i.png'), code: '#4876ff' },
  { name: 'Mercedes_GT', prec: '2020', img:  require('./assets/Fotos/j.png'), code: '#4876ff' },
  { name: 'Chevrolet Corvette', prec: '2019', img:  require('./assets/Fotos/k.png'), code: '#4876ff' },
  { name: 'Honda Type_R', prec: '2018', img:  require('./assets/Fotos/l.png'), code: '#4876ff' },

  { name: 'Ford Ranger', prec: '2021', img:  require('./assets/Fotos/m.png'), code: '#B22222' },
  { name: 'Isuzu D-MAX', prec: '2019', img:  require('./assets/Fotos/n.png'), code: '#B22222' },
  { name: 'Jeep Wrangler', prec: '2020', img:  require('./assets/Fotos/o.png'), code: '#B22222' },
  { name: 'Land_R Discovery', prec: '2021', img:  require('./assets/Fotos/p.png'), code: '#B22222' },
  { name: 'Nissan Navara', prec: '2020', img:  require('./assets/Fotos/q.png'), code: '#B22222' },
  { name: 'Toyota Cruiser', prec: '2020', img:  require('./assets/Fotos/r.png'), code: '#B22222' },
]);
function createButtonAlert (titulo,nombre,precio){
  Alert.alert(
    titulo,
    nombre + "\nAño: " + precio,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  }

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Catalogo</Text>

    <SectionGrid
    itemDimension={90}
    // staticDimension={300}
    // fixed
    // spacing={20}
    sections={[
      {
        title: 'Muscle',
        data: items.slice(0, 6),
      },
      {
        title: 'Deportivos',
        data: items.slice(6, 12),
      },
      {
        title: 'Todo terreno',
        data: items.slice(12, 18),
      },
    ]}
    
    style={styles.gridView}
    renderItem={({ item, section, index }) => (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#bdb76b" onPress={() => createButtonAlert(section.title,item.name,item.prec)}>
          
      <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
        <Image style={styles.estiloImagen} 
                source = {item.img}/>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.prec}</Text>
      </View>
      </TouchableHighlight>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    )}
  />

  </View>

  );
}

function Pantalla1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola a todos!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Pan2(){
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mi primer tab!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: "#feb72b",
        tabBarInactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: "#527318"
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Feed}
        options={{
          tabBarLabel: 'Catalogo',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pantalla1"
        component={Pantalla1}
        options={{
          tabBarLabel: 'Ejemplo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="baby-face" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  TextoHome: {
    textAlign: 'center',
    fontSize: 50,
    fontStyle: 'italic',
  },
  estiloImagen: {
    width: 75,
    height: 70,
    marginTop: 30,
  },
});