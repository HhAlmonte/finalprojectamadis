import React from "react";
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

import nowTheme from "../constants/Theme";
import Images from "../constants/Images";

const { height, width } = Dimensions.get("screen");

class Pro extends React.Component {
  handleBuyNow = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Pro}
            style={styles.imageBackground}
          />
        </Block>

        <Block flex space="between" style={styles.contentContainer}>
          <Block middle row style={styles.logoRow}>
            <Text color="white" size={16} style={styles.logoText}>
              Coded by
            </Text>
            <Image
              source={Images.CreativeTimLogo}
              style={styles.logoImageSmall}
            />
          </Block>

          <Block middle flex space="around" style={styles.content}>
            <Block center style={styles.title}>
              <Block>
                <Text color="white" size={60} style={styles.font}>
                  Now UI
                </Text>
              </Block>
              <Block row>
                <Text middle color="white" size={34} style={styles.font}>
                  React Native
                </Text>
                <Block middle style={styles.pro}>
                  <Text size={14} color="white" style={styles.font}>
                    PRO
                  </Text>
                </Block>
              </Block>
            </Block>

            <Block row middle style={styles.platformsRow}>
              <Image
                source={Images.iOSLogo}
                style={styles.platformLogo}
              />
              <Image
                source={Images.androidLogo}
                style={styles.platformLogo}
              />
            </Block>

            <Block center>
              <Button
                style={styles.button}
                color={nowTheme.COLORS.PRIMARY}
                onPress={this.handleBuyNow}
              >
                BUY NOW
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  imageBackground: {
    flex: 1,
    height: height,
    width: width,
    zIndex: 1,
  },
  contentContainer: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'absolute',
    top: 270,
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  logoRow: {
    marginTop: -50,
    marginBottom: 30,
  },
  logoText: {
    fontFamily: 'montserrat-regular',
    color: 'white',
  },
  logoImageSmall: {
    height: 29,
    width: 129,
    marginLeft: theme.SIZES.BASE,
  },
  content: {
    zIndex: 2,
  },
  title: {
    marginTop: "-5%",
  },
  pro: {
    backgroundColor: nowTheme.COLORS.BLACK,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
  },
  font: {
    fontFamily: 'montserrat-bold',
  },
  platformsRow: {
    marginTop: theme.SIZES.BASE * 4,
  },
  platformLogo: {
    height: 38,
    width: 82,
    marginRight: theme.SIZES.BASE * 1.5,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default Pro;
