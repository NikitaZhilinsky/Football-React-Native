import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from 'react-native';

type Styles = {
  result_container: ViewStyle,
  team_cell: ViewStyle,
  team_name: TextStyle,
}

export const styles = StyleSheet.create<Styles>({
  result_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  team_cell: {

  },
  team_name: {

  },
}); 
