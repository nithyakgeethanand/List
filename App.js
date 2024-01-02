import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>List of Data</Text>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState, useMemo, memo } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';

// const ExpensiveCalculationComponent = ({ data }) => {
//   console.log('hi');
//   const result = useMemo(() => {
//     // Perform expensive calculation based on 'data'
//     console.log('Calculating...');
//     return data * 2;
//   }, [data]); // Dependency array, re-run the calculation only if 'data' changes

//   return (
//     <View style={styles.container}>
//       <Text>Result: {result}</Text>
//     </View>
//   );


// };

// const ExpensiveCalculationComponent = memo(({ data }) => {
//   console.log('Rendering MemoizedComponent...');
//   return (
//     <View style={styles.container}>
//       <Text>Value: {data}</Text>
//     </View>
//   );
// });

// const App = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <View>
//       <ExpensiveCalculationComponent data={value} />
//       <Pressable onPress={() => setValue(value + 1)}>
//         <View style={styles.buttonStyle}>
//           <Text>Change Value</Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   buttonStyle: {
//     backgroundColor: 'green',
//     padding: 10,
//     margin: 20,
//     alignItems: 'center',
//   },
//   container: {
//     padding: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });