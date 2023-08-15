import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';

import Screens from './navigation/Screens';
import { Images, articles, nowTheme } from './constants';

const assetImages = [
  Images.Onboarding,
  Images.Logo,
  Images.Pro,
  Images.NowLogo,
  Images.iOSLogo,
  Images.androidLogo,
  Images.ProfilePicture,
  Images.CreativeTimLogo,
  Images.InvisionLogo,
  Images.RegisterBackground,
  Images.ProfileBackground,
  ...articles.map(article => article.image)
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadResourcesAsync = async () => {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
    });

    setFontLoaded(true);
    await Promise.all([...cacheImages(assetImages)]);
    setLoadingComplete(true);
  };

  const handleLoadingError = error  => {
    console.warn(error);
  };

  return !isLoadingComplete ? (
    <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={() => setLoadingComplete(true)}
    />
  ) : (
    <GalioProvider theme={nowTheme}>
      <NavigationContainer>
        <StatusBar hidden />
        <Block flex>
          <Screens />
        </Block>
      </NavigationContainer>
    </GalioProvider>
  );
};

export default App;
