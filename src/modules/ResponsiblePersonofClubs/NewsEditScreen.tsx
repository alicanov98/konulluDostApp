import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const NewsEditScreen = () => {
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
        <View style={{marginBottom: 24}}>
          <Image source={require('../../assets/images/icons/logo.png')} />
        </View>
      </View>
      <View>
        <View style={{width: '100%'}}>
          <Image
            style={{
              width: '100%',
              height: 192,
              borderRadius: 5,
              marginBottom: 35,
            }}
            source={require('../../assets/images/image/image1News.jpg')}
          />
          <View>
            <Text
              style={{
                color: '#424954',
                fontWeight: 'bold',
                fontSize: 14,
                marginBottom: 21,
              }}>
              “Könüllü Klubları” layihəsi çərçivəsində növbəti təlim
            </Text>
            <Text
              style={{
                color: '#5A5A5A',
                fontWeight: '500',
                fontSize: 12,
                marginBottom: 21,
              }}>
              Klublar barədə yeniliklər
            </Text>
            <Text style={{color: '#000000', fontWeight: '500', fontSize: 14}}>
              “Caspian Energy Club”ın baş icraçı direktoru Telman Əliyev 5 saylı
              Bakı DOST Mərkəzində olub.Könüllülərlə iş şöbəsinin müdiri Solmaz
              Həsənova qonağı "Könüllü DOST" proqramı ilə tanış edib. Daha sonra
              Telman Əliyev Agentliyin “Könüllü DOST” proqramının üzvlərinə
              "Gələcək biznes ideyasının formalaşdırılması" mövzusunda təlim
              keçib. Təlim “Könüllü Klubları” layihəsinin “Fərdi İnkişaf” klubu
              çərçivəsində baş tutub. Görüş qarşılıqlı diskussiya şəklində davam
              edib. Sonda gəncləri maraqlandıran suallar cavablandırılıb. Qeyd
              edək ki, “Könüllü Klubları” layihəsi 2022-ci ildən etibarən 12
              müxtəlif istiqamət üzrə fəaliyyət göstərir. Layihənin əsas məqsədi
              cəmiyyətin habelə asudə vaxtlarının daha səmərəli təşkilidir.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Redaktə et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2858EE',
    width: 380,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  buttonText: {color: '#fff', fontWeight: '500', fontSize: 16},
});

export default NewsEditScreen;
