import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  ListResult: undefined;
  Property: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

type ListResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListResult'
>;

export type ResultProps = {
  navigation: ListResultScreenNavigationProp;
};