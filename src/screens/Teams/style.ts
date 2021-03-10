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
  team_statistics: ViewStyle,
  team_statistics_title: TextStyle,
  team_statistics_value: TextStyle,
  team_statistics_games: ViewStyle,
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
    fontSize: 21,
  },
  team_modal: {
    backgroundColor: 'white',
  },
  team_statistics: {
    padding: 15,
  },
  team_statistics_title: {
    fontSize: 21,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  team_statistics_value: {
    fontWeight: 'bold',
  },
  team_statistics_games: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}); 