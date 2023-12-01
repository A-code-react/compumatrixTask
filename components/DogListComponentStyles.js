import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";
import { ActivityIndicator } from "react-native-web";
import styles from "./DogListComponent";
const DogListComponent = () => {
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json"
        );
        setDogData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const renderDogItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dogContainer}
      onPress={() => setSelectedDog(item)}
    >
      <Image source={{ uri: item.url }} style={styles.dogImage} />
      <Text style={styles.dogName}>{item.name}</Text>
      <Text>{`Breed Group: ${item.breed_group}`}</Text>
      <Text>{`Temperament: ${item.temperament}`}</Text>
      <Text>{`Life Span: ${item.life_span}`}</Text>
    </TouchableOpacity>
  );

  const renderDetailedView = () => {
    if (selectedDog) {
      return (
        <View style={styles.detailedViewContainer}>
          <Image
            source={{ uri: selectedDog.url }}
            style={styles.detailedImage}
          />
          <Text style={styles.dogName}>{selectedDog.name}</Text>
          <Text>{`Breed Group: ${selectedDog.breed_group}`}</Text>
          <Text>{`Temperament: ${selectedDog.temperament}`}</Text>
          <Text>{`Life Span: ${selectedDog.life_span}`}</Text>
          <TouchableOpacity onPress={() => setSelectedDog(null)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <FlatList
            data={dogData}
            renderItem={renderDogItem}
            keyExtractor={(item) => item.id.toString()}
          />
          {renderDetailedView()}
        </>
      )}
    </View>
  );
};

export default DogListComponent;
