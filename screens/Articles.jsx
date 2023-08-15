import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Card } from '../components';
import { articles, nowTheme } from '../constants';

class Articles extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
        <Text style={styles.title} size={16}>
          Tipos de Multas
        </Text>

        {articles.map((article, index) => (
          <Card
            key={index}
            item={{
              title: article.title,
              image: article.image,
              cta: 'Ver artículo',
              horizontal: true,
            }}
            full
          />
        ))}
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
});

export default Articles;
