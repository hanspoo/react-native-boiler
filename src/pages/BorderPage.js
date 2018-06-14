import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Root } from "native-base";

const back = require("../../assets/images/background.jpg");

// const back = {
//   uri:
//     "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Space/H-P/milky-way-2.adapt.945.1.jpg"
// };

export default class BorderPage extends React.Component {
  render() {
    return (
      <Root>
        <KeyboardAvoidingView style={styles.keyboardAv} behavior="padding">
          <ImageBackground
            style={[styles.imageContainer, this.props.style]}
            source={back}
            imageStyle={styles.image}
          >
            {this.props.children}
          </ImageBackground>
        </KeyboardAvoidingView>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  keyboardAv: {
    flex: 1,
    backgroundColor: "transparent"
  },
  imageContainer: {
    flex: 1
    // backgroundColor: "transparent"
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    backgroundColor: "transparent"
  }
});
