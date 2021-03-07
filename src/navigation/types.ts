import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  TeamsScreen: undefined;
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
  'TeamsScreen'
>;

export type TeamsProps = {
  navigation: TeamsScreenNavigationProp;
};