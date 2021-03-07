import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  ImageStyle 
} from 'react-native';

type Styles = {
  result_container: ViewStyle,
  load_indicator: ViewStyle,
  team_cell: ViewStyle,
  team_logo: ImageStyle,
  team_name: TextStyle,
  team_modal: ViewStyle,
}

export const styles = StyleSheet.create<Styles>({
  result_container: { 
    flex: 1, 
    justifyContent: 'center' ,
    // backgroundColor: '#eae9ef',
  },
  load_indicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  team_cell: {
    padding: 15,
    borderBottomWidth: 2,
  },
  team_logo: {
    // width: 50,
    // height: 50,
  },
  team_name: {
    fontSize: 21
  },
  team_modal: {
    backgroundColor: 'white',
  }
}); 
