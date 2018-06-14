import React from "react";
import { ActivityIndicator } from "react-native";
import Expo from "expo";
import AuthNavigator from "./src/navs/AuthNavigator";

export default class App extends React.Component {
  state = { loading: true };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading)
      return <ActivityIndicator size="large" style={styles.centrado} />;

    return <AuthNavigator />;
  }
}

const styles = {
  centrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
