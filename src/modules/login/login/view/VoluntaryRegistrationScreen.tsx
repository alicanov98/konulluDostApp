import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {SelectList} from 'react-native-dropdown-select-list';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

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

const VoluntaryRegistrationScreen = () => {
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

  // @ts-ignore
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Image
          style={{width: 300, height: 300, position: 'absolute', zIndex: -1}}
          source={require('../../../../assets/images/image/balonOne.png')}
        />
        <View
          style={{
            paddingTop: 60,
            paddingLeft: 20,
            paddingRight: 20,
            zIndex: 1,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#412B4D',
              paddingBottom: 50,
            }}>
            qeydiyyat
          </Text>
          <View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>Elektron poçt ünvanı</Text>
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
              <Text style={styles.inputText}>Şifrəni təyin et</Text>
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    placeholder="minimum 8 simvol daxil et"
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
              <Text style={styles.inputText}>Şifrəni dəqiqləşdir</Text>
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={GlobalStyles.colors.PlaceHolder}
                    placeholder="minimum 8 simvol daxil et"
                    keyboardType="numeric"
                    secureTextEntry={true}
                  />
                )}
                name="confirmPassword"
                defaultValue=""
              />
              {errors.confirmPassword && (
                <Text style={styles.error}>
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>
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
                    dropdownTextStyles={{color: GlobalStyles.colors.PureBlack}}
                  />
                )}
                name="center"
                defaultValue=""
              />
              {errors.center && (
                <Text style={styles.error}>{errors.center.message}</Text>
              )}
            </View>
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
                    dropdownTextStyles={{color: GlobalStyles.colors.PureBlack}}
                  />
                )}
                name="dkNumber"
                defaultValue=""
              />
              {errors.dkNumber && (
                <Text style={styles.error}>{errors.dkNumber.message}</Text>
              )}
            </View>
            <TouchableOpacity
              style={GlobalStyles.button.buttonPurple}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Qeydiyyatı Tamamla</Text>
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
  buttonText: {fontSize: 16, color: '#fff'},
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
  error: {color: 'red'},
});

export default VoluntaryRegistrationScreen;
