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

export const OtpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', height: '100%', paddingTop: 50}}>
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
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: GlobalStyles.colors.darkPlum,
              paddingBottom: 15,
            }}>
            zəhmət olmasa emaili yoxla
          </Text>
          <View>
            <Text style={styles.pageText}>
              <Text style={{color: GlobalStyles.colors.TransparentBlack}}>
                Biz kodu bu email adresinə göndərdik
              </Text>{' '}
              helloworld@gmail.com
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value="1"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value="2"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value="3"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value="4"
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('NewPasswordScreen')}>
              <Text style={styles.pageText}>Helelik kecid</Text>
            </TouchableOpacity>
          </View>
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
