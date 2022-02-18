/* eslint-disable prettier/prettier */
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screen/homeScreen.js';
import GettingStarted from './screen/gettingStarted.js';
import FlatListDemo from './screen/flatListDemo.js';
import useStateDemo from './screen/useStateDemo.js';
import useReducerDemo from './screen/useReducerDemo.js';
import ToDoListDemo from './screen/toDoListDemo.js';
import AddDetail from './screen/addDetail.js';
import TakeDetail from './screen/takeDetail.js';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    GS: GettingStarted,
    FL: FlatListDemo,
    US: useStateDemo,
    UR: useReducerDemo,
    TDL: ToDoListDemo,
    AD: AddDetail,
    TD: TakeDetail,
  },
  {
    initialRouteName: 'AD',
    defaultNavigationOptions: {
      title: 'Learn React Native',
    },
  }
);

export default createAppContainer(navigator);
