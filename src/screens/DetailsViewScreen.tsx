import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import { RootStackParamList } from '../types/root';

type DetailsViewScreenRouteProp = RouteProp<RootStackParamList, 'DetailsView'>;

type Props = {
  route: DetailsViewScreenRouteProp;
};

const DetailsViewScreen = ({ route }: Props) => {
  const { item } = route.params;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = Platform.OS === 'ios' || Platform.OS === 'android';
  // const isTablet = DeviceInfo.isTablet();  


  return (
    <View style={[styles.container, isLandscape && styles.landscapeContainer]}>
      <View style={[styles.card, isLandscape && isTablet && styles.landscapeCard]}>
        <Text style={styles.title}>{item.name}</Text>
        {item.data &&
          Object.entries(item.data).map(([key, value]) => (
            <View key={key} style={styles.detailContainer}>
              <Text style={styles.detail}>{key}: {value}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landscapeContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#00264d',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 0.9,
  },
  landscapeCard: {
    width: '80%',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  detail: {
    fontSize: 18,
    color: '#fff',
  },
});

export default DetailsViewScreen;
