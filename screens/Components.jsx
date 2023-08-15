import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Header, Card } from '../components';
import { nowTheme } from '../constants';

const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSelected: [],
      'switch-1': true,
      'switch-2': false,
    };
  }

  toggleSwitch = (switchId) => this.setState({ [switchId]: !this.state[switchId] });

  renderContent = () => {
    return (
      <Block flex>
        <Text size={16} style={styles.title}>
          Mapas de Multas
        </Text>

        <Text size={16} style={styles.subtitle}>
          Cargando mapa de multas... Por favor ten paciencia, puede tardar varios minutos.
        </Text>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {this.renderContent()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
  subtitle: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    color: nowTheme.COLORS.BLACK,
  },
  scrollViewContent: {
    paddingBottom: 30,
    width,
  },
});

export default Components;
