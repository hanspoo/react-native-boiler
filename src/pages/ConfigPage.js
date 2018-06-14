import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { NavigationActions } from "react-navigation";

export default class ConfigPage extends React.Component {
  logout = () => {
    this.props.navigation.dispatch({
      type: NavigationActions.NAVIGATE,
      routeName: "LoginPage",
      action: {
        type: NavigationActions.RESET,
        index: 0,
        actions: [{ type: NavigationActions.NAVIGATE, routeName: "LoginPage" }]
      }
    });
  };

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <View style={styles.container}>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
