import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { logout } from "../redux/actions.js";

class ConfigPage extends React.Component {
  logout = () => {
    this.props.logout();
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

export default connect(null, { logout })(ConfigPage);
