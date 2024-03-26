import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

interface TabProps {
  setIsActive: (isActive: boolean) => void;
}

export const TabResponsible: React.FC<TabProps> = ({setIsActive}) => {
  const [activeTab, setActiveTab] = useState<string>('current');

  useEffect(() => {
    if (activeTab !== 'current') {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [activeTab]);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'current' && styles.activeTab]}
        onPress={() => handleTabPress('current')}>
        <Text
          style={[styles.tabText, activeTab === 'current' && styles.activeTab]}>
          Cari
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'graduate' && styles.activeTab]}
        onPress={() => handleTabPress('graduate')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'graduate' && styles.activeTab,
          ]}>
          Məzun
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: 20,
    width: 286,
    height: 29,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  tab: {
    width: 122,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#861DBF',
  },
  activeTab: {
    backgroundColor: GlobalStyles.colors.purple,
    borderRadius: 5,
    color: '#fff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
});
