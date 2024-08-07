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
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';

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
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
                fontSize: 16,
                marginTop: 10,
              }}>
              Könüllünün şəxsi məlumatları!
            </Text>
          </View>
          <View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>Ad</Text>
              <Text style={styles.inputText}>Məlik</Text>
            </View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>Soyad</Text>
              <Text style={styles.inputText}>Əlicanov</Text>
            </View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>E-poçt</Text>
              <Text style={styles.inputText}>alicanov@gamil.com</Text>
            </View>
            {/*---------*/}
            <View style={{marginBottom: 30}}>
              <Text style={styles.inputText}>
                Fəaliyyət göstərdiyiniz mərkəz
              </Text>
              <Text style={styles.inputText}>4 saylı Bakı DOST Mərkəzi</Text>
            </View>
            <View
              style={{
                marginBottom: 30,
              }}>
              <View
                style={{
                  marginBottom: 30,
                }}>
                <Text style={styles.inputText}>DK nömrəsi</Text>
                <Text style={styles.inputText}>4DK-32 </Text>
              </View>
              {/*--------------*/}
              <View>
                <Text style={styles.inputText}>Status</Text>
                <Text style={styles.inputText}>Məzun</Text>
              </View>
              {/*--------------*/}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilScreenEdit')}
              style={GlobalStyles.button.buttonPurple}
             >
              <Text style={styles.buttonText}>Məlumatları dəyiş</Text>
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
