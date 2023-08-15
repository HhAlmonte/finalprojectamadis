import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Input, Icon, Button } from 'galio-framework';

import { Images, nowTheme } from '../constants';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const Profile = () => {
  return (
    <Block style={styles.container}>
      <Block flex={0.6}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block middle style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Consultar Vehículo por placa
            </Text>
            <Input
              placeholder={''}
              style={styles.input}
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
          </Block>
          <Block middle style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Consulta de conductor por licencia
            </Text>
            <Input
              placeholder={''}
              style={styles.input}
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
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  titleText: {
    color: '#2c2c2c',
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: 'montserrat-bold',
    marginTop: 15,
    marginBottom: 30,
    zIndex: 2,
  },
  input: {
    left: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
});

export default Profile;
