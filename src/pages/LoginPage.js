import React from "react";
import { StyleProvider, Container, Text, Button } from "native-base";
import estilos from "../estilos";
import getTheme from "../../native-base-theme/components";

export default class LoginPage extends React.Component {
  render() {
    console.log("En login page");
    const { navigation: { navigate } } = this.props;
    return (
      <StyleProvider style={getTheme()}>
        <Container style={estilos.centrado}>
          <Text>This is Content Section</Text>
          <Button onPress={() => navigate("HomeNavigator")}>
            <Text>Simulate successfull login</Text>
          </Button>
        </Container>
      </StyleProvider>
    );
  }
}
