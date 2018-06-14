import { createStackNavigator } from "react-navigation";
import LoginPage from "../pages/LoginPage";
import HomeNavigator from "./HomeNavigator";

const authNav = createStackNavigator(
  {
    LoginPage,
    HomeNavigator
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default authNav;
