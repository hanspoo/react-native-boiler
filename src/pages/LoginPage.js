import React from "react";
import { StyleProvider, Container, Text } from "native-base";
import estilos from "../estilos";
import getTheme from "../../native-base-theme/components";

export default class LoginPage extends React.Component {
  render() {
    console.log("En login page");
    return (
      <StyleProvider style={getTheme()}>
        <Container style={estilos.centrado}>
          <Text>This is Content Section</Text>
        </Container>
      </StyleProvider>
    );
  }
}
