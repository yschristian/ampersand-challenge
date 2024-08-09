import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/root';

type DetailsViewScreenRouteProp = RouteProp<RootStackParamList, 'DetailsView'>;

type Props = {
  route: DetailsViewScreenRouteProp;
};

const DetailsViewScreen = ({ route }: Props) => {
  const { item } = route.params;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isTablet = width >= 768 || height >= 768;
 
  return (
    <View style={[styles.container, isLandscape && isTablet && styles.landscapeTabletContainer]}>
      <View style={[styles.card, isLandscape && isTablet && styles.landscapeTabletCard]}>
        <Text style={styles.title}>{item.name}</Text>
        {item.data && (
          <View style={isLandscape && isTablet ? styles.landscapeTabletDetailsGrid : styles.detailsColumn}>
            {Object.entries(item.data).map(([key, value]) => (
              <View key={key} style={styles.detailContainer}>
                <Text style={styles.detailKey}>{key}:{String(value)}</Text>
              </View>
            ))}
          </View>
        )}
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
  landscapeTabletContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#00264d',
    width: '90%',
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
  landscapeTabletCard: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  detailsColumn: {
    flexDirection: 'column',
  },
  landscapeTabletDetailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  detailKey: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailValue: {
    fontSize: 17,
    color: '#fff',
  },
});

export default DetailsViewScreen;