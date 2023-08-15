import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components';
import { nowTheme } from '../constants';
import Components from '../screens/Components';
import Onboarding from '../screens/Onboarding';
import ApplyFine from '../screens/ApplyFine';

const { width } = Dimensions.get('screen');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Header for screens
const CustomHeader = ({ navigation, scene, title, transparent, white, search }) => (
  <Header
    title={title}
    navigation={navigation}
    scene={scene}
    transparent={transparent}
    white={white}
    search={search}
  />
);

// Stack Screens
const ApplyFineStack = () => (
  <Stack.Navigator
    initialRouteName="Aplicar Multa"
    screenOptions={{
      mode: 'card',
    }}
  >
    <Stack.Screen
      name="Aplicar Multa"
      component={ApplyFine}
      options={({ navigation, scene }) => ({
        header: () => (
          <CustomHeader navigation={navigation} scene={scene} title="Aplicar Multa" transparent />
        ),
        headerTransparent: true,
      })}
    />
  </Stack.Navigator>
);

const ComponentsStack = () => (
  <Stack.Navigator
    initialRouteName="Mapa de Multas"
    screenOptions={{
      mode: 'card',
    }}
  >
    <Stack.Screen
      name="Mapa de Multas"
      component={Components}
      options={({ navigation, scene }) => ({
        header: () => (
          <CustomHeader navigation={navigation} scene={scene} title="Mapa de Multas" />
        ),
        cardStyle: { backgroundColor: '#FFFFFF' },
      })}
    />
  </Stack.Navigator>
);

// ... Similar pattern for other stacks (ArticlesStack, AccountStack, ProfileStack, HomeStack)

const AppStack = () => (
  <Drawer.Navigator
    style={{ flex: 1 }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: nowTheme.COLORS.PRIMARY,
      width: width * 0.8,
    }}
    // ... Other drawer options
  >
    <Drawer.Screen name="Multas Registradas" component={HomeStack} />
    <Drawer.Screen name="Mapa de Multas" component={ComponentsStack} />
    <Drawer.Screen name="Tipos de Multas" component={ArticlesStack} />
    <Drawer.Screen name="Consultas" component={ProfileStack} />
    <Drawer.Screen name="Registrarme" component={AccountStack} />
    <Drawer.Screen name="Crear Cuenta" component={ApplyFineStack} />
    <Drawer.Screen name="Aplicar Multa" component={ApplyFineStack} />
  </Drawer.Navigator>
);

const OnboardingStack = () => {
  useEffect(() => {
    console.log('hello world');
    const fines = AsyncStorage.getItem('fines');
    if (!fines) {
      AsyncStorage.setItem('fines', '[]');
    }
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
