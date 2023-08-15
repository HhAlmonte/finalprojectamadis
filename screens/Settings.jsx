import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Block, Text, theme, Icon } from 'galio-framework';
import { Switch } from '../components';
import nowTheme from '../constants/Theme';

class Settings extends React.Component {
  state = {};

  toggleSwitch = switchNumber =>
    this.setState({ [switchNumber]: !this.state[switchNumber] });

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    switch (item.type) {
      case 'switch':
        return (
          <Block row middle space="between" style={styles.rows}>
            <Text style={styles.itemText} size={14} color={theme.COLORS.GRAY}>
              {item.title}
            </Text>
            <Switch
              onValueChange={() => this.toggleSwitch(item.id)}
              value={this.state[item.id]}
            />
          </Block>
        );
      case 'button':
        return (
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigate(item.id)}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text style={styles.itemText} size={14} color={theme.COLORS.GRAY}>
                  {item.title}
                </Text>
                <Icon name="angle-right" family="font-awesome" style={styles.icon} />
              </Block>
            </TouchableOpacity>
          </Block>
        );
      default:
        break;
    }
  };

  renderSectionHeader = (title, subtitle) => (
    <Block center style={styles.title}>
      <Text style={styles.sectionTitle} size={theme.SIZES.BASE} color={theme.COLORS.BLACK}>
        {title}
      </Text>
      <Text style={styles.sectionSubtitle} size={12} color={theme.COLORS.GRAY}>
        {subtitle}
      </Text>
    </Block>
  );

  render() {
    const recommended = [
      { title: 'Use FaceID to sign in', id: 'face', type: 'switch' },
      { title: 'Auto-Lock security', id: 'autolock', type: 'switch' },
      { title: 'Notifications', id: 'NotificationsSettings', type: 'button' },
    ];

    const payment = [
      { title: 'Manage Payment Options', id: 'Payment', type: 'button' },
      { title: 'Manage Gift Cards', id: 'gift', type: 'button' },
    ];

    const privacy = [
      { title: 'User Agreement', id: 'Agreement', type: 'button' },
      { title: 'Privacy', id: 'Privacy', type: 'button' },
      { title: 'About', id: 'About', type: 'button' },
    ];

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.settings}
      >
        <FlatList
          data={recommended}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderSectionHeader(
            'Recommended Settings',
            'These are the most important settings'
          )}
        />

        <FlatList
          data={payment}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderSectionHeader(
            'Payment Settings',
            'These are also important settings'
          )}
        />

        <FlatList
          data={privacy}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderSectionHeader(
            'Privacy Settings',
            'Third most important settings'
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    paddingVertical: theme.SIZES.BASE / 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  sectionTitle: {
    fontFamily: 'montserrat-bold',
    paddingBottom: 5,
  },
  sectionSubtitle: {
    fontFamily: 'montserrat-regular',
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
  itemText: {
    fontFamily: 'montserrat-regular',
  },
  icon: {
    paddingRight: 5,
  },
});

export default Settings;
