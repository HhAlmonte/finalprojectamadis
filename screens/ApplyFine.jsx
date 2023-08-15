import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Block, Checkbox, Text, Button, Input, Icon } from 'galio-framework';
import { DismissKeyboard } from '../components';
import { nowTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

const inputs = [
  {
    key: 'cedula',
    placeholder: 'Cédula',
  },
  {
    key: 'plate',
    placeholder: 'Placa del Vehículo',
  },
  {
    key: 'reason',
    placeholder: 'Motivo de la Multa',
  },
  {
    key: 'evidenceImage',
    placeholder: 'Foto de Evidencia',
  },
  {
    key: 'comment',
    placeholder: 'Comentario',
  },
  {
    key: 'latitude',
    placeholder: 'Latitud',
  },
  {
    key: 'longitude',
    placeholder: 'Longitud',
  },
  {
    key: 'date',
    placeholder: 'Fecha',
  },
  {
    key: 'hour',
    placeholder: 'Hora',
  },
];

const ApplyFine = () => {
  const [inputStates, setInputStates] = useState({});

  const genericOnChange = (key) => (value) => {
    setInputStates({ ...inputStates, [key]: value });
  };

  return (
    <DismissKeyboard>
      <Block flex middle>
        <Block style={styles.registerContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text color="#333" size={24} style={styles.title}>
              Aplicar Multa
            </Text>
            <Text muted size={16} style={styles.subtitle}>
              Ingresa la información correspondiente
            </Text>
            {inputs.map((input) => (
              <Block key={input.key} style={styles.inputBlock}>
                <Input
                  onChangeText={genericOnChange(input.key)}
                  placeholder={input.placeholder}
                  style={styles.input}
                  iconContent={<Icon name="profile-circle" family="NowExtra" style={styles.inputIcon} />}
                />
              </Block>
            ))}
            <Block row style={styles.checkboxBlock}>
              <Checkbox
                checkboxStyle={styles.checkbox}
                color={nowTheme.COLORS.PRIMARY}
                labelStyle={styles.checkboxLabel}
                label="Acepto los términos y condiciones como agente de tránsito."
              />
            </Block>
            <Block center>
              <Button color="primary" round style={styles.createButton}>
                <Text style={styles.createButtonText}>Aplicar</Text>
              </Button>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 55,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'montserrat-regular',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'montserrat-regular',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputBlock: {
    marginBottom: 15,
    width: width * 0.8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5,
  },
  inputIcon: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT,
  },
  checkboxBlock: {
    marginLeft: 15,
    marginTop: 10,
  },
  checkbox: {
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
    fontSize: 14,
    color: nowTheme.COLORS.WHITE,
  },
});

export default ApplyFine;
