import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RoutStackParamList';
import GlobalStyles from "../../../../assets/globalStyles/styles.ts";
type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'newPassword'
>;
export const OtpScreen = ({
  navigation,
}: {
  navigation: SignUpScreenNavigationProp;
}) => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', height: '100%', paddingTop: 50}}>
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: GlobalStyles.colors.CobaltBlue,
            paddingBottom: 15,
          }}>
          zəhmət olmasa emaili yoxla
        </Text>
        <View>
          <Text style={styles.pageText}>
            Biz kodu bu email adresinə göndərdik helloworld@gmail.com
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value="2"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('newPassword')}>
            <Text style={styles.pageText}>Helelik kecid</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 81,
    height: 77,
    fontSize: 32,
    fontWeight: '600',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8DADC',
    marginBottom: 15,
  },
  button: {
    width: 355,
    height: 56,
    backgroundColor: '#252C36',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttunText: {fontSize: 16, color: '#fff'},
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
  pageText: {color: '#000', marginBottom: 18, fontSize: 16},
});
