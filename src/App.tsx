import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens';

function App() {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
