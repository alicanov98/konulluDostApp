import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../navigation/KonulluDostNavigator.tsx';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';
import {useNavigation} from '@react-navigation/native';

export const PasswordResetScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image
          style={{
            width: 400,
            height: 400,
            position: 'absolute',
            zIndex: -1,
            top: '50%',
          }}
          source={require('../../../../assets/images/image/ballonthree.png')}
        />
        <View
          style={{
            paddingTop: 60,
            paddingBottom: 40,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={GlobalStyles.textKind.introTitle}>
            şifrənin bərpası
          </Text>
          <View>
            <Text style={styles.pageText}>
              Narahat olma! Sadəcə bir kliklə onu yeniləyə bilərsən
            </Text>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                placeholder="email adresi daxil et"
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('OtpScreen')}
              style={GlobalStyles.button.buttonPurple}>
              <Text style={styles.buttunText}>Kodu göndər</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 353,
    height: 56,
    fontSize: 16,
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
  pageText: {color: '#000', marginBottom: 35, fontSize: 16},
});
