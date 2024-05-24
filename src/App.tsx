import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens';
import {globalStyles} from './config/theme/app-theme';

function App() {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
