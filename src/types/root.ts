export type RootStackParamList = {
  ListView: undefined;
  DetailsView: { item: { id: string; name: string; data?: { [key: string]: string | number } } };
};