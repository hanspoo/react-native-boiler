import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ConfigPage from "../pages/ConfigPage";
import ItemsList from "../pages/ItemsList";
import ItemDetail from "../pages/ItemDetail";

const ConfigNav = createStackNavigator({
  ConfigPage
});

const ItemsNav = createStackNavigator({
  ItemsList,
  ItemDetail
});

const homeNav = createBottomTabNavigator({
  ItemsNav,
  ConfigNav
});

export default homeNav;
