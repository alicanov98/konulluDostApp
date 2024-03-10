import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

const LegalPersonRegistrationScreen = () => {
  const [number, onChangeNumber] = React.useState('');

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
            fontSize: 40,
            fontWeight: 'bold',
            color: GlobalStyles.colors.CobaltBlue,
            paddingBottom: 50,
          }}>
          qeydiyyat
        </Text>
        <View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="example@gmail.com"
            />
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.inputText}>Şifrəni təyin et</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="minimum 8 sinvol daxil et"
              keyboardType="numeric"
            />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.inputText}>Şifrəni dəqiqləşdir</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="şifrəni təkrarla"
              keyboardType="numeric"
            />
          </View>
          <View style={{marginBottom: 50}}>
            <Text style={styles.inputText}>Təsdiq kodu</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="XXXX"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttunText}>Qeydiyyatı tamamla</Text>
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
    marginBottom: 15,
    marginTop: 50,
    borderRadius: 15,
  },
  buttunText: {fontSize: 16, color: '#fff'},
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
});

export default LegalPersonRegistrationScreen;
