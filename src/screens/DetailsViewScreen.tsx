import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/root';

type DetailsViewScreenRouteProp = RouteProp<RootStackParamList, 'DetailsView'>;

type Props = {
  route: DetailsViewScreenRouteProp;
};

const DetailsViewScreen = ({ route }: Props) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
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