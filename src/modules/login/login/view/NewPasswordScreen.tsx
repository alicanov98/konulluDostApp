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
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

export const NewPasswordScreen = () => {
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
          source={require('../../../../assets/images/image/ballonFour.png')}
        />
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
              color: GlobalStyles.colors.darkPlum,
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
              <Text style={styles.inputText}>Yeni şifrəni</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                placeholder="ən az 8 karakter qoy"
              />
            </View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>Şifrəni təkrarla</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                placeholder="şifrəni təkrarla"
              />
            </View>
            <TouchableOpacity style={GlobalStyles.button.buttonPurple}>
              <Text style={styles.buttunText}>Şifrəni sıfılra</Text>
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
  },
  buttunText: {fontSize: 16, color: '#fff'},
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
  pageText: {
    color: GlobalStyles.colors.TransparentBlack,
    marginBottom: 35,
    fontSize: 16,
  },
});
