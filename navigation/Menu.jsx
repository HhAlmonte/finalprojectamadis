import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { Block, Text, theme } from 'galio-framework';
import { DrawerItem as DrawerCustomItem, Icon } from '../components';

import Images from '../constants/Images';
import nowTheme from '../constants/Theme';

const CustomDrawerContent = ({ navigation, state }) => {
  const insets = useSafeArea();
  const screens = [
    'Multas Registradas',
    'Mapa de Multas',
    'Tipos de Multas',
    'Consultas',
    'Registrarme',
    'Aplicar Multa',
  ];

  return (
    <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Block style={styles.header}>
        <Image style={styles.logo} source={Images.Logo} />
        <Block right style={styles.headerIcon}>
          <Icon name="align-left-22x" family="NowExtra" size={15} color={'black'} />
        </Block>
      </Block>
      <Block flex style={styles.drawerContent}>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => (
            <DrawerCustomItem
              title={item}
              key={index}
              navigation={navigation}
              focused={state.index === index}
            />
          ))}
          <Block style={styles.divider} />
          <Text style={styles.documentationTitle}>DOCUMENTATION</Text>
          <DrawerCustomItem title="GETTING STARTED" navigation={navigation} />
          <DrawerCustomItem title="LOGOUT" navigation={navigation} />
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
  },
  headerIcon: {
    marginTop: -20,
  },
  logo: {
    height: 40,
    width: 37,
    tintColor: 'black',
  },
  drawerContent: {
    paddingLeft: 8,
    paddingRight: 14,
  },
  scrollContainer: {
    flex: 1,
  },
  divider: {
    borderColor: 'black',
    width: '93%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    marginTop: 24,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  documentationTitle: {
    color: nowTheme.COLORS.BLACK,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: 'montserrat-regular',
    fontWeight: '300',
    fontSize: 12,
  },
});

export default CustomDrawerContent;
