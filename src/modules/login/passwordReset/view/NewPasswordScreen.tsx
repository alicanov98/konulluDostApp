import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

export const NewPasswordScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            color: GlobalStyles.colors.CobaltBlue,
            paddingBottom: 12,
            marginTop: 50,
          }}>
          şifrəni sıfırla
        </Text>
        <View>
          <Text style={styles.pageText}>
            Zəhmət olmasa xatırlayacağın bir şifrə qoy
          </Text>
          <View style={{marginBottom: 30}}>
            <Text style={styles.inputText}>New password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="ən az 8 karakter qoy"
            />
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.inputText}>Confirm new password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="şifrəni təkrarla"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttunText}>Şifrəni sıfılra</Text>
          </TouchableOpacity>
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
