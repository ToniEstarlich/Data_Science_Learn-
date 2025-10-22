import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getSamples } from './api';

type Sample = {
  id: number;
  name: string;
  value: string;
};

export default function App() {
  const [samples, setSamples] = useState<Sample[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSamples();
      setSamples(data);
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <h1>welcome a the new app for practice Data Science</h1>
      <FlatList
        data={samples}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}: {item.value}</Text>
        )}
      />
    </View>
  );
}
