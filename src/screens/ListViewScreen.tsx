import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, useWindowDimensions, Platform } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/root';
import DeviceInfo from 'react-native-device-info'; 

type Item = {
  id: string;
  name: string;
  data?: {
    [key: string]: string | number;
  };
};

type ListViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListView'
>;

const ListViewScreen = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = Platform.OS === 'ios' || Platform.OS === 'android';
  // const isTablet = DeviceInfo.isTablet();
  console.log('isTablet', isTablet);

  const navigation = useNavigation<ListViewScreenNavigationProp>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.restful-api.dev/objects');
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsView', { item })}>
      <View style={[styles.item, isLandscape && isTablet && styles.landscapeItem]}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00264d"
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  landscapeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ListViewScreen;
