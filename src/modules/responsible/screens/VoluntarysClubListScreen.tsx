import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import GraduateVoluntaryCard from '../component/voluntaryCards/GraduateVoluntaryCard.tsx';
import {voluntaryTypes} from '../type/VoluntaryListType.ts';
import {db} from '../../../fakeDb/db.ts';
import {Controller, useForm} from 'react-hook-form';
import {SelectList} from 'react-native-dropdown-select-list';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {clubs} from '../../../utils/utils.ts';

const schema = yup.object().shape({
  clubs: yup.string().required(),
});

const VoluntarysClubListScreen = () => {
  const [loading, setLoading] = useState(false);
  const [voluntary, setVoluntary] = useState<voluntaryTypes[]>([]);
  const [searchPersons, setSearchPersons] = useState<voluntaryTypes[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedClubValue, setSelectedClubValue] = useState<string>('');

  useEffect(() => {
    if (
      inputValue === '' &&
      (selectedClubValue === 'Klub seçin' || selectedClubValue === '')
    ) {
      setSearchPersons(voluntary.map(item => item));
    } else if (
      inputValue !== '' &&
      (selectedClubValue === '' || selectedClubValue === 'Klub seçin')
    ) {
      setSearchPersons(
        voluntary.filter(item =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    } else if (inputValue === '' && selectedClubValue) {
      const filterSelected = voluntary.filter(
        item => item.club === selectedClubValue,
      );
      setSearchPersons(filterSelected);
    } else if (inputValue !== '' && selectedClubValue) {
      const selectedSearchFilter = searchPersons.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setSearchPersons(selectedSearchFilter);
    }
  }, [inputValue, selectedClubValue, voluntary]);

  useEffect(() => {
    const getVoluntary = async () => {
      setLoading(true);
      try {
        setVoluntary(db.voluntarys);
      } catch (err) {
        console.log(err);
        console.log(loading);
      }
    };
    getVoluntary();
  }, [loading]);

  const {control} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      clubs: '',
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <View>
          <Image source={require('../../../assets/images/icons/logo.png')} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <View style={{position: 'relative', marginTop: 24}}>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                placeholder="ad,soyad"
                value={inputValue}
                onChangeText={(text: string) => setInputValue(text)}
              />
              <Image
                style={{position: 'absolute', top: 12.5, left: 12}}
                source={require('../../../assets/images/icons/search.png')}
              />
            </View>

            <Controller
              control={control}
              render={() => (
                <SelectList
                  data={clubs}
                  placeholder="Klub seçin"
                  setSelected={(item: string) => setSelectedClubValue(item)}
                  search={false}
                  boxStyles={styles.dropDowninput}
                  inputStyles={{color: GlobalStyles.colors.PlaceHolder}}
                  dropdownStyles={styles.dropDownBoxDk}
                  dropdownTextStyles={{
                    color: GlobalStyles.colors.PureBlack,
                  }}
                />
              )}
              name="clubs"
              defaultValue=""
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {searchPersons.map(item => (
          <GraduateVoluntaryCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 230,
    height: 42,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 41,
    borderRadius: 5,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  dropDowninput: {
    width: 150,
    height: 42,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8DADC',
    alignItems: 'center',
    position: 'relative',
    marginTop: 24,
  },
  dropDownBoxDk: {
    width: 150,
    height: 165,
    position: 'absolute',
    borderColor: '#D8DADC',
    zIndex: 5,
    backgroundColor: '#fff',
    top: 57,
  },
  scrollView: {
    paddingTop: 25,
  },
  buttonRate: {
    width: 81,
    height: 28,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#861DBF',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
  buttonRateText: {
    fontSize: 8,
    color: '#5A5A5A',
    fontWeight: '500',
  },
});

export default VoluntarysClubListScreen;
