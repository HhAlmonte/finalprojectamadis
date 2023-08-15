import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    const articleData = [
      {
        title: 'Multa de tránsito #421',
        image: require(`../assets/imgs/fine5.jpg`),
        cta: '13-02-2022',
      },
      // ... Add more article data objects here
    ];

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        {articleData.map((article, index) => (
          <Block key={index} flex>
            <Card
              item={{
                title: article.title,
                image: article.image,
                cta: article.cta,
                horizontal: true,
              }}
              horizontal
            />
          </Block>
        ))}
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default Home;
