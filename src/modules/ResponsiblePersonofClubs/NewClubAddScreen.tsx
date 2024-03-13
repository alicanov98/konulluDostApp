import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../assets/globalStyles/styles.ts';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {SelectList} from 'react-native-dropdown-select-list';

const schema = yup.object().shape({
  name: yup.string().required('E-poçt tələb olunur').email('Səhv e-poçt'),
  password: yup
    .string()
    .required('Parol tələb olunur')
    .min(8, 'Parol ən azı 8 simvoldan ibarət olmalıdır'),
  about: yup.string().oneOf([yup.ref('about')], 'Şifrələr uyğun gəlmir'),
  center: yup.string().required('Mərkəz seçimi tələb olunur'),
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

export const NewClubAddScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      password: '',
      about: '',
    },
  });

  const [formData, setFormData] = useState<any[]>([]);

  const onSubmit = (data: object) => {
    setFormData(prevData => [...prevData, data]);
    reset();
  };
  console.log(formData);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
      }}>
      <View style={{marginBottom: 15, alignItems: 'flex-end'}}>
        <Image source={require('../../assets/images/icons/logo.png')} />
      </View>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          <View
            style={{
              marginBottom: 25,
              backgroundColor: '#EAEAEA',
              width: 380,
              height: 193,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#D8DADC',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{marginBottom: 5}}
              source={require('../../assets/images/icons/plusImage.png')}
            />
            <Text style={styles.inputText}>Şəkil əlavə et</Text>
          </View>
          <View style={{marginBottom: 30}}>
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <SelectList
                  data={centers}
                  placeholder=" Klubu Seçin"
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
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <SelectList
                  data={centers}
                  placeholder="Mərkəzi Seçin"
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
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <SelectList
                  data={centers}
                  placeholder="Tarixi Seçin"
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
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  placeholderTextColor="rgba(0, 0, 0, 0.5)"
                  placeholder="Kvota"
                  keyboardType="numeric"
                  onChangeText={onChange}
                />
              )}
              name="name"
              defaultValue=""
            />
            {errors.name && (
              <Text style={styles.error}>{errors.name.message}</Text>
            )}
          </View>
          <View style={{marginBottom: 30}}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  placeholderTextColor="rgba(0, 0, 0, 0.5)"
                  placeholder="Başlıq əlavə et"
                  onChangeText={onChange}
                />
              )}
              name="name"
              defaultValue=""
            />
            {errors.name && (
              <Text style={styles.error}>{errors.name.message}</Text>
            )}
          </View>
          <View style={{marginBottom: 25}}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.TextInput}
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor={GlobalStyles.colors.PlaceHolder}
                  placeholder="Klub Haqqında"
                  secureTextEntry={true}
                />
              )}
              name="about"
              defaultValue=""
            />
            {errors.about && (
              <Text style={styles.error}>{errors.about.message}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Prosesi tamamla</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 377,
    height: 56,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8DADC',
    alignItems: 'center',
    color: '#000',
  },
  TextInput: {
    width: 377,
    height: 153,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8DADC',
    color: '#000',
  },
  dropDownBoxCenter: {
    width: 380,
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
    borderRadius: 15,
    marginBottom: 50,
  },
  buttonText: {fontSize: 16, color: '#fff'},
  inputText: {
    color: '#5A5A5A',
    marginBottom: 5,
    fontSize: 14,
  },
  error: {color: 'red'},
  scrollView: {
    paddingTop: 25,
  },
});
