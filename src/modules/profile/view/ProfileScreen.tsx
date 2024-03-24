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
  name: yup.string().required('Ad boş olmamalıdır').min(3),
  surname: yup.string().required('Soyad boş olmamalıdır').min(3),
  email: yup.string().required('E-poçt tələb olunur').email('Səhv e-poçt'),
  status: yup.string().required('Statusunuzu seçin'),
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
const volunteerStatus = [
  {label: 'Məzun', value: 'Məzun'},
  {label: 'Cari', value: 'Cari'},
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
      name: '',
      surname: '',
      email: '',
      center: '',
      dkNumber: '',
      status: '',
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
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}>
          <View style={{width: '100%'}}>
            <Image
              source={require('../../../assets/images/image/profilHerro.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{marginTop: -70}}
              source={require('../../../assets/images/image/profil.png')}
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
                name="name"
                defaultValue="Məlik"
              />
              {errors.name && (
                <Text style={styles.error}>{errors.name.message}</Text>
              )}
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
                  />
                )}
                name="surname"
                defaultValue="Əlicanov"
              />
              {errors.surname && (
                <Text style={styles.error}>{errors.surname.message}</Text>
              )}
            </View>
            <View style={{marginBottom: 30}}>
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
                defaultValue="alicanov1998@gmail.com"
              />
              {errors.email && (
                <Text style={styles.error}>{errors.email.message}</Text>
              )}
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
              {errors.center && (
                <Text style={styles.error}>{errors.center.message}</Text>
              )}
            </View>
            <View
              style={{
                marginBottom: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
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
                {errors.dkNumber && (
                  <Text style={styles.error}>{errors.dkNumber.message}</Text>
                )}
              </View>
              {/*--------------*/}
              <View>
                <Text style={styles.inputText}>Status</Text>
                <Controller
                  control={control}
                  render={({field: {onChange}}) => (
                    <SelectList
                      data={volunteerStatus}
                      placeholder="Seçin"
                      setSelected={(value: string) => onChange(value)}
                      search={false}
                      boxStyles={styles.dropDowninput}
                      inputStyles={{color: GlobalStyles.colors.PlaceHolder}}
                      dropdownStyles={styles.dropDownBoxStatus}
                      dropdownTextStyles={{
                        color: GlobalStyles.colors.PureBlack,
                      }}
                    />
                  )}
                  name="status"
                  defaultValue=""
                />
                {errors.status && (
                  <Text style={styles.error}>{errors.status.message}</Text>
                )}
              </View>
              {/*--------------*/}
            </View>
            <TouchableOpacity
              style={GlobalStyles.button.buttonPurple}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Dəyişiklikləri yadda saxla</Text>
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
    borderColor: '#D8DADC',
    backgroundColor: '#fff',
  },
  dropDownBoxStatus: {
    width: 150,
    height: 90,
    borderColor: '#D8DADC',
    backgroundColor: '#fff',
  },
  dropDownBoxCenter: {
    width: 353,
    height: 200,
    borderColor: '#D8DADC',
    backgroundColor: '#fff',
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
