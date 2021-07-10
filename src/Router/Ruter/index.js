import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Home,
  Messages,
  Hospital,
  UploadDocument,
  Lapor,
  SuksesLapor,
  LiveChat,
  EditProfil,
  InputGejala,
  KonfirmasiNegatif,
  KonfirmasiLapor,
  Login,
  ProfilAdmin,
  PetaIsolasi,
  Informasi,
  JenisGejala,
  SaranObat,
  FaqPage,
} from '../../pages';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Lapor" component={Home} />

      <Tab.Screen name="Messages" component={Messages} />

      <Tab.Screen name="Darurat" component={Hospital} />
    </Tab.Navigator>
  );
};

const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="Laporan"
        component={Lapor}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SuksesLapor"
        component={SuksesLapor}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="LiveChat"
        component={LiveChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfil"
        component={EditProfil}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="InputGejala"
        component={InputGejala}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="KonfirmasiNegatif"
        component={KonfirmasiNegatif}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="KonfirmasiLapor"
        component={KonfirmasiLapor}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ProfilAdmin"
        component={ProfilAdmin}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="PetaIsolasi"
        component={PetaIsolasi}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="JenisGejala"
        component={JenisGejala}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="SaranObat"
        component={SaranObat}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FaqPage"
        component={FaqPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Ruter;
