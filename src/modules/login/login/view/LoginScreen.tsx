import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RoutStackParamList';
import GlobalStyles from "../../../../assets/globalStyles/styles.ts";
type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'passwordReset'
>;

const schema = yup.object().shape({
  email: yup.string().required('E-poçt tələb olunur').email('Səhv e-poçt'),
  password: yup
    .string()
    .required('Parol tələb olunur')
    .min(8, 'Parol ən azı 8 simvoldan ibarət olmalıdır'),
});

export const LoginScreen = ({
  navigation,
}: {
  navigation: SignUpScreenNavigationProp;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };
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
          giriş
        </Text>
        <View>
          <View style={{marginBottom: 20}}>
            <Text style={styles.inputText}>E-poçt</Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  placeholderTextColor="rgba(0, 0, 0, 0.5)"
                  placeholder="example@gmail.com"
                  onChangeText={onChange}
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.inputText}>Şifrə</Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="rgba(0, 0, 0, 0.5)"
                  placeholder="minimum 8 sinvol daxil et"
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
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttunText}>Daxil ol</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('passwordReset')}>
            <Text>Şifrəni unutmusan?</Text>
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
    borderRadius: 15,
  },
  error: {
    color: 'red',
  },
  buttunText: {fontSize: 16, color: '#fff'},
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
});
