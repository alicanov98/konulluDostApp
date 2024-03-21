import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

interface TabProps {
  setIsActive: (isActive: boolean) => void;
}

export const Tab: React.FC<TabProps> = ({setIsActive}) => {
  const [activeTab, setActiveTab] = useState<string>('voluntary');

  useEffect(() => {
    if (activeTab !== 'voluntary') {
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
        style={[styles.tab, activeTab === 'voluntary' && styles.activeTab]}
        onPress={() => handleTabPress('voluntary')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'voluntary' && styles.activeTab,
          ]}>
          Könüllü
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'offical' && styles.activeTab]}
        onPress={() => handleTabPress('offical')}>
        <Text
          style={[styles.tabText, activeTab === 'offical' && styles.activeTab]}>
          Məsul şəxs
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 353,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#CBDFFC',
    borderRadius: 10,
    padding: 3,
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: GlobalStyles.colors.purple,
    borderRadius: 10,
    color: '#fff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});
