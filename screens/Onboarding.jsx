import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';

const { height, width } = Dimensions.get('screen');

class Onboarding extends React.Component {
  handleGetStarted = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };

  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={Images.Onboarding}
          style={styles.imageBackground}
        />
        <Block space="between" style={styles.contentContainer}>
          <Block middle style={styles.logoContainer}>
            <Image source={Images.NowLogo} style={styles.logoImage} />
          </Block>
          <Block middle>
            <Text
              style={styles.appName}
              color="white"
              size={44}
            >
              Now UI React Native
            </Text>
          </Block>
          <Block middle row style={styles.logoRow}>
            <Text style={styles.logoText} color="white" size={16}>
              Designed by
            </Text>
            <Image
              source={Images.InvisionLogo}
              style={styles.logoImageSmall}
            />
          </Block>
          <Block middle row style={styles.logoRow}>
            <Text style={styles.logoText} color="white" size={16}>
              Coded by
            </Text>
            <Image
              source={Images.CreativeTimLogo}
              style={styles.logoImageSmall}
            />
          </Block>
          <Block middle>
            <Button
              shadowless
              style={styles.button}
              color={nowTheme.COLORS.PRIMARY}
              onPress={this.handleGetStarted}
            >
              <Text style={styles.buttonText} color={theme.COLORS.WHITE}>
                GET STARTED
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  imageBackground: {
    flex: 1,
    height: height,
    width: width,
    zIndex: 1,
  },
  contentContainer: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  logoContainer: {
    bottom: 200,
    position: 'absolute',
  },
  logoImage: {
    width: 115,
    height: 124,
  },
  appName: {
    bottom: 50,
    position: 'absolute',
    fontFamily: 'montserrat-regular',
    letterSpacing: 2,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
  },
  logoRow: {
    marginTop: 15,
    marginBottom: 30,
  },
  logoText: {
    fontFamily: 'montserrat-regular',
    color: 'white',
  },
  logoImageSmall: {
    height: 28,
    width: 91,
    marginLeft: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
  },
});

export default Onboarding;
