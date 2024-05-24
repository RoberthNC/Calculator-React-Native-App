import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('DEL')}
          label="DEL"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => console.log('/')}
          label="/"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('x')}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          label="0"
          color={colors.darkGray}
          doubleSize
        />
        <CalculatorButton
          onPress={() => console.log('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
