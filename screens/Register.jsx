import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

class Register extends React.Component {
  render() {
    return (
      <DismissKeyboard>
        <Block flex middle>
          <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          >
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="between" style={{ paddingVertical: theme.SIZES.BASE * 2 }}>
                  <Block center>
                    <Text style={styles.titleText} color="#333" size={24}>
                      Registrarse
                    </Text>
                  </Block>

                  <Block center>
                    <Button
                      round
                      onlyIcon
                      shadowless
                      icon="twitter"
                      iconFamily="Font-Awesome"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.625}
                      color={nowTheme.COLORS.TWITTER}
                      style={[styles.socialButton, styles.shadow]}
                    />
                    <Button
                      round
                      onlyIcon
                      shadowless
                      icon="facebook"
                      iconFamily="Font-Awesome"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.625}
                      color={nowTheme.COLORS.FACEBOOK}
                      style={[styles.socialButton, styles.shadow]}
                    />
                  </Block>

                  <Block center>
                    <Text style={styles.orText} muted size={16}>
                      or be classical
                    </Text>
                  </Block>

                  <Block center style={styles.inputContainer}>
                    <Input
                      placeholder="Primer Nombre"
                      style={styles.inputs}
                      iconContent={
                        <Icon
                          size={16}
                          color="#ADB5BD"
                          name="profile-circle"
                          family="NowExtra"
                          style={styles.inputIcon}
                        />
                      }
                    />
                    <Input
                      placeholder="Segundo Nombre"
                      style={styles.inputs}
                      iconContent={
                        <Icon
                          size={16}
                          color="#ADB5BD"
                          name="caps-small2x"
                          family="NowExtra"
                          style={styles.inputIcon}
                        />
                      }
                    />
                    <Input
                      placeholder="Email"
                      style={styles.inputs}
                      iconContent={
                        <Icon
                          size={16}
                          color="#ADB5BD"
                          name="email-852x"
                          family="NowExtra"
                          style={styles.inputIcon}
                        />
                      }
                    />

                    <Block style={styles.checkboxContainer}>
                      <Checkbox
                        checkboxStyle={styles.checkboxStyle}
                        color={nowTheme.COLORS.PRIMARY}
                        labelStyle={styles.checkboxLabel}
                        label="Acepto los términos y condiciones."
                      />
                    </Block>
                  </Block>

                  <Block center>
                    <Button color="primary" round style={styles.createButton}>
                      <Text style={styles.createButtonText} size={14} color={nowTheme.COLORS.WHITE}>
                        Registrarme
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1,
  },
  imageBackground: {
    width,
    height,
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialButton: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  orText: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 25,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT,
  },
  checkboxContainer: {
    marginVertical: theme.SIZES.BASE,
    marginLeft: 15,
    width: width * 0.75,
  },
  checkboxStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#E3E3E3',
  },
  checkboxLabel: {
    color: nowTheme.COLORS.HEADER,
    fontFamily: 'montserrat-regular',
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40,
  },
  createButtonText: {
    fontFamily: 'montserrat-bold',
  },
});

export default Register;
