import React, { Component } from "react";
import { Text, View, Button, Image, Linking } from "react-native";
import { connect } from "react-redux";
import { Toast } from "native-base";
import t from "tcomb-form-native";
import { doLogin, register } from "../redux/actions.js";
import BorderPage from "./BorderPage";

const Form = t.form.Form;

// here we are: define your domain model
const Email = t.subtype(t.Str, email => {
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
});

const LoginFields = t.struct({
  email: Email, // a required string
  password: t.String // a required string
});

// const appIcon = require("../../assets/images/background.jpg");

const options = {
  auto: "none",
  fields: {
    password: {
      secureTextEntry: true,
      type: "password",
      auto: "none",
      placeholder: "Contraseña",
      value: "secret"
    },
    email: {
      placeholder: "e.g: abc@gmail.com",
      autoCorrect: false,
      auto: "none",
      value: "hans@welinux.cl"
    }
  }
}; // optional rendering options (see documentation)

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      buttonState: true,
      value: { email: "xxxxx@gmail.com", password: "123456" }
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("will receive props");
    const { error } = nextProps.LoginReducer;
    if (error) {
      Toast.show({
        text: error,
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }

    const { navigation: { navigate } } = nextProps;
    const { isLoggedIn } = nextProps.LoginReducer;
    if (isLoggedIn) navigate("HomeNavigator");
  }

  onChange = () => {
    console.log("onchange");
    const value = this.loginForm.getValue();
    if (value) {
      this.setState({
        value,
        buttonState: false
      });
    }
  };

  _onSubmit = () => {
    console.log("onsubmit");
    const value = this.loginForm.getValue();
    if (value) {
      const { email, password } = value;
      if (email && password) {
        this.props.doLogin(value);
      } else {
        Toast.show({
          text: "Email or password are empty",
          duration: 2000,
          position: "top",
          textStyle: { textAlign: "center" }
        });
      }
      // if validation fails, value will be null
      console.log(value);
      // value here is an instance of LoginFields
    } else {
      Toast.show({
        text: "Please complete the fields to continue",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }

    // this.props.navigator.push({
    //   id: "Home"
    // });
  };

  render() {
    console.log("render", this.props.LoginReducer);

    return (
      <BorderPage
        style={{
          justifyContent: "center",
          paddingHorizontal: 20
        }}
      >
        <View
          style={{
            flex: 1 / 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Image source={appIcon} /> */}
        </View>

        <Form
          ref={c => (this.loginForm = c)}
          type={LoginFields}
          options={options}
          value={this.state.value}
          onChange={this.onChange}
        />
        <Text
          style={{ color: "blue", marginBottom: 10 }}
          onPress={() => Linking.openURL("http://www.xxxxxxxx.cl")}
        >
          ¿ Your forgot your password ?
        </Text>
        <Button
          onPress={this._onSubmit}
          title="Entrar"
          disabled={false}
          accessibilityLabel="Ok, Great!"
        />
      </BorderPage>
    );
  }
}

const s2p = state => {
  return {
    LoginReducer: state.LoginReducer
  };
};

const Login = connect(s2p, {
  doLogin,
  register
})(LoginScreen);

export default Login;
