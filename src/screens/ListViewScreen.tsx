import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/root';

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
  const isTablet = width >= 768 || height >= 768;

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
      <View style={[
        styles.item,
        isLandscape && isTablet && styles.landscapeTabletItem
      ]}>
        <Text style={styles.text}>{item.name}</Text>
        {isLandscape && isTablet && item.data && (
          <Text style={styles.previewText}>
            {Object.entries(item.data)[0][0]}: {String(Object.entries(item.data)[0][1])}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={isLandscape && isTablet ? 2 : 1}
          key={isLandscape && isTablet ? 'landscape' : 'portrait'}
          contentContainerStyle={isLandscape && isTablet ? styles.landscapeTabletContainer : null}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00264d",
    justifyContent: 'center',
  },
  landscapeTabletContainer: {
    paddingHorizontal: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  landscapeTabletItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '48%',
    margin: '1%',
    backgroundColor: '#003366',
    borderRadius: 10,
    padding: 15,
    borderBottomWidth: 0,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  previewText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});

export default ListViewScreen;
