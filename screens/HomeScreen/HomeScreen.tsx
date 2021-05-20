import * as React from "react";
import { SafeAreaView, FlatList } from "react-native";

import styles from "./styles";
import { View, Text } from "../../components/Themed";
import categories from "../../assets/data/categories";

import HomeCategory from "../../components/HomeCategory";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={categories.items}
          renderItem={({ item }) => <HomeCategory category={item} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
