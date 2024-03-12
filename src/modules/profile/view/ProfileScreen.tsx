import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Controller, useForm} from 'react-hook-form';
import {SelectList} from 'react-native-dropdown-select-list';
import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

const schema = yup.object().shape({
  email: yup.string().required('E-poçt tələb olunur').email('Səhv e-poçt'),
  password: yup
    .string()
    .required('Parol tələb olunur')
    .min(8, 'Parol ən azı 8 simvoldan ibarət olmalıdır'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifrələr uyğun gəlmir'),
  center: yup.string().required('Mərkəz seçimi tələb olunur'),
  dkNumber: yup.string().required('DK nömrəsi tələb olunur'),
});

const centers = [
  {label: '1 saylı Bakı DOST Mərkəzi', value: '1 saylı Bakı DOST Mərkəzi'},
  {label: '2 saylı Bakı DOST Mərkəzi', value: '2 saylı Bakı DOST Mərkəzi'},
  {label: '3 saylı Bakı DOST Mərkəzi', value: '3 saylı Bakı DOST Mərkəzi'},
  {label: '4 saylı Bakı DOST Mərkəzi', value: '4 saylı Bakı DOST Mərkəzi'},
  {label: '5 saylı Bakı DOST Mərkəzi', value: '5 saylı Bakı DOST Mərkəzi'},
  {
    label: '6 saylı Abşeron DOST Mərkəzi',
    value: '6 saylı Abşeron DOST Mərkəzi',
  },
  {
    label: 'DOST İnkluziv İnkişaf və Yaradıcılıq Mərkəzi',
    value: 'DOST İnkluziv İnkişaf və Yaradıcılıq Mərkəzi',
  },
];

const dkNumbers = Array.from({length: 71}, (_, index) => ({
  label: index.toString(),
  value: index.toString(),
}));

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [formData, setFormData] = useState<any[]>([]);

  const onSubmit = (data: object) => {
    setFormData(prevData => [...prevData, data]);
    reset();
  };
  console.log(formData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.TransparentBlack}
      />
      <View>
        <Image
          source={require('../../login/login/images/SignupPhoto.png')}
          style={{
            zIndex: -5,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            top: -200,
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            width: 626,
            height: 626,
            borderRadius: 9999,
            left: -97,
            bottom: 60,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              paddingLeft: 60,
              paddingRight: 80,
              marginTop: 0,
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{marginTop: 36}}
                source={require('../../../assets/images/image/personNewImg.png')}
              />
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '500',
                  fontSize: 18,
                  marginTop: 10,
                }}>
                Əlicanov Məlik
              </Text>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '500',
                  fontSize: 16,
                  marginTop: 10,
                }}>
                4DK 32
              </Text>
            </View>
            <ScrollView style={{marginBottom: 130}}>
              <View>
                <View style={{marginBottom: 30}}>
                  <Text style={styles.inputText}>Ad</Text>
                  <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        value={value}
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        placeholder="ad"
                        onChangeText={onChange}
                      />
                    )}
                    name="email"
                    defaultValue=""
                  />
                </View>
                <View style={{marginBottom: 30}}>
                  <Text style={styles.inputText}>Soyad</Text>
                  <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        placeholder="Soyad"
                        keyboardType="numeric"
                        secureTextEntry={true}
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                  {errors.password && (
                    <Text style={styles.error}>{errors.password.message}</Text>
                  )}
                </View>
                <View style={{marginBottom: 25}}>
                  <Text style={styles.inputText}>E-poçt</Text>
                  <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        value={value}
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        placeholder="E-poçt"
                        onChangeText={onChange}
                      />
                    )}
                    name="email"
                    defaultValue=""
                  />
                </View>
                {/*---------*/}
                <View style={{marginBottom: 30}}>
                  <Text style={styles.inputText}>
                    Fəaliyyət göstərdiyiniz mərkəz
                  </Text>
                  <Controller
                    control={control}
                    render={({field: {onChange}}) => (
                      <SelectList
                        data={centers}
                        placeholder="Seçin"
                        setSelected={(value: string) => onChange(value)}
                        search={false}
                        boxStyles={styles.input}
                        inputStyles={{color: GlobalStyles.colors.PlaceHolder}}
                        dropdownStyles={styles.dropDownBoxCenter}
                        dropdownTextStyles={{
                          color: GlobalStyles.colors.PureBlack,
                        }}
                      />
                    )}
                    name="center"
                    defaultValue=""
                  />
                </View>
                {/*----------*/}
                <View style={{marginBottom: 30}}>
                  <Text style={styles.inputText}>DK nömrəsi</Text>
                  <Controller
                    control={control}
                    render={({field: {onChange}}) => (
                      <SelectList
                        data={dkNumbers}
                        placeholder="Seçin"
                        setSelected={(value: string) => onChange(value)}
                        search={false}
                        boxStyles={styles.dropDowninput}
                        inputStyles={{color: GlobalStyles.colors.PlaceHolder}}
                        dropdownStyles={styles.dropDownBoxDk}
                        dropdownTextStyles={{
                          color: GlobalStyles.colors.PureBlack,
                        }}
                      />
                    )}
                    name="dkNumber"
                    defaultValue=""
                  />
                  {/*--------------*/}
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.buttonText}>
                    Dəyişiklikləri yadda saxla
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 340,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>

      {/*  ---------------------*/}
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
    alignItems: 'center',
  },
  dropDowninput: {
    width: 150,
    height: 56,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8DADC',
    alignItems: 'center',
    position: 'relative',
  },
  dropDownBoxDk: {
    width: 150,
    height: 450,
    borderColor: '#D8DADC',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: '#fff',
    right: 70,
    bottom: 0,
  },
  dropDownBoxCenter: {
    width: 353,
    height: 200,
    borderColor: '#D8DADC',
    position: 'absolute',
    zIndex: 5,
    top: 51,
    backgroundColor: '#fff',
  },
  button: {
    width: 355,
    height: 56,
    backgroundColor: '#2858EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 15,
  },
  buttonText: {fontSize: 16, color: '#fff'},
  inputText: {
    color: '#252C36',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 14,
  },
  error: {color: 'red'},
});

export default ProfileScreen;
