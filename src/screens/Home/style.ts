import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  ImageStyle, 
} from 'react-native';
import { DefaultTheme } from 'react-native-paper';

type Styles = {
  home_container: ViewStyle,
  home_modal: ViewStyle,
  load_indicator: ViewStyle,
  league_cell: ViewStyle,
  league_name: TextStyle,
  league_area: TextStyle,
  league_logo: ImageStyle,
  home_button: ViewStyle,
  button_title: TextStyle,
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#028d45',
  },
};

export const styles = StyleSheet.create<Styles>({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  home_modal: {
    backgroundColor: 'white',
    height: 515,
  },
  load_indicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  league_cell: {
    paddingLeft: 15,
    paddingVertical: 7,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  league_name: {
    fontSize: 21
  },
  league_area: {

  },
  league_logo: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  home_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_title: {
    fontSize: 22,
  },
});