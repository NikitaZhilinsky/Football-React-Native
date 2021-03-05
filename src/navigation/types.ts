import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  Teams: undefined;
  Property: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

type TeamsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Teams'
>;

export type ResultProps = {
  navigation: TeamsScreenNavigationProp;
};