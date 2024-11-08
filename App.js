import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  console.log("App executed");

  const handlePress = () => console.log("Text clicked");
  console.log(require('./assets/icon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native! A really really long text. Now I wanna make this really longer and see what happens.</Text>
      {/* <Image source={require('./assets/icon.png')}/> */}
      <Image 
      blurRadius= {10}
      // fadeDuration={1000}
      loadingIndicatorSource={{uri: "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fubbi1p7z7euc1.gif"}}
      source={{width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
