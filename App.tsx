// .............................Video 3 Code .................

// import React, {useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [myData, setMyData] = useState(null);

//   useEffect(() => {
//     getDatabase();
//   }, []);

//   const getDatabase = async () => {
//     try {
//       const data = await database().ref('users/1').once('value');

//       console.log(data);

//       setMyData(data.val());
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <View>
//       <Text>Name:-{myData ? myData.name : 'Loading...'}</Text>
//       <Text>Age:-{myData ? myData.age : 'Loading...'}</Text>
//     </View>
//   );
// }

// ...........Video: 4 : Todo App Part one............................
// In this video we learn how to create/add a data to Firebase Realtime Database

// Dimsion : ap ko screen ki height width da deta hay.
// Statusbar : screen kay top jo date and time show hota hay usay hide kr deta hay.
// import React, {useEffect, useState} from 'react';
// import {View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [inputTextValue, setInputTextValue] = useState();
//   const [list, setList] = useState();

//   // useEffect(() => {
//   //   getDatabase();
//   // }, []);

//   // const getDatabase = async () => {
//   //   try {
//   //     const data = await database().ref('users/1').once('value');

//   //     console.log(data);

//   //     setMyData(data.val());
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   const handleAddData = async () => {
//     try {
//       const response = await database().ref('todo/2').set({
//         value: inputTextValue
//       })
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={true}/>
//       <View>
//       <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
//           Todo App
//         </Text>
//       <TextInput style={styles.inputBox} placeholder='Enter Any Value' value={inputTextValue} onChangeText={(value) => setInputTextValue(value)}/>
//       <TouchableOpacity
//       onPress={() => handleAddData()}
//           style={styles.addButton}>
//           <Text style={{color: '#fff'}}>Add</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const {height, width} = Dimensions.get('screen')

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   inputBox: {
//     width: width - 30,
//     borderRadius: 15,
//     borderWidth: 2,
//     marginVertical: 10,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 50,
//   },
// });

// // ...........Video: 5 : Todo App Part Two............................
// // In this video we learn how to fetch/read a data from Firebase Realtime Database

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
// } from 'react-native';
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [inputTextValue, setInputTextValue] = useState();
//   const [list, setList] = useState();

//   useEffect(() => {
//     getDatabase();
//   }, []);

//   const getDatabase = async () => {
//     try {
//       // const data = await database().ref('todo').once('value');
//       // on(): method kya krta hay kay jaisay hi kush changes hoti hay to function call krwa deta hay.
//       const data = await database()
//         .ref('todo')
//         .on('value', tempData => {
//           console.log(data);
//           // tempData: jo bhi updated data hoga wo ab tempData, may ayee ga is leyee is ko hum nay state(setList) may pass kr deya hay.
//           setList(tempData.val());
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleAddData = async () => {
//     try {
//       // const response = await database().ref('todo/4').set({
//       // adding manually index to the list
//       const index = list.length;
//       const response = await database().ref(`todo/${index}`).set({
//         value: inputTextValue,
//       });

//       console.log(response);
//       setInputTextValue('');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={true} />
//       <View>
//         <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
//           Todo App
//         </Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter Any Value"
//           value={inputTextValue}
//           onChangeText={value => setInputTextValue(value)}
//         />
//         <TouchableOpacity
//           onPress={() => handleAddData()}
//           style={styles.addButton}>
//           <Text style={{color: '#fff'}}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardContainer}>
//         <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>
//           Todo List
//         </Text>

//         <FlatList
//           data={list}
//           renderItem={item => {
//             if (item.item !== null) {
//               // console.log(item)
//               return (
//                 <View style={styles.card}>
//                   <Text>{item.item.value}</Text>
//                 </View>
//               );
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const {height, width} = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   inputBox: {
//     width: width - 30,
//     borderRadius: 15,
//     borderWidth: 2,
//     marginVertical: 10,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 50,
//   },
//   cardContainer: {
//     marginVertical: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     width: width - 40,
//     padding: 20,
//     borderRadius: 30,
//     marginVertical: 10,
//   },
// });

// // ...........Video: 6 : Todo App Part Three............................
// // In this video we learn how to Updata a data from Firebase Realtime Database

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
//   Alert,
// } from 'react-native';
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [inputTextValue, setInputTextValue] = useState();
//   const [list, setList] = useState();
//   const [isUpdateData, setIsUpdateData] = useState(false);
//   const [selectedCardIndex, setSelectedCardIndex] = useState(false);

//   useEffect(() => {
//     getDatabase();
//   }, []);

//   const getDatabase = async () => {
//     try {
//       // const data = await database().ref('todo').once('value');
//       // on(): method kya krta hay kay jaisay hi kush changes hoti hay to function call krwa deta hay.
//       const data = await database()
//         .ref('todo')
//         .on('value', tempData => {
//           console.log(data);
//           // tempData: jo bhi updated data hoga wo ab tempData, may ayee ga is leyee is ko hum nay state(setList) may pass kr deya hay.
//           setList(tempData.val());
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleAddData = async () => {
//     try {
//       if (inputTextValue.length > 0) {
//       // const response = await database().ref('todo/4').set({
//       // adding manually index to the list
//       // .set(): set method add krnay kay leyee hota hay.
//       const index = list.length;
//       const response = await database().ref(`todo/${index}`).set({
//         value: inputTextValue,
//       });

//       console.log(response);
//       setInputTextValue('');
//     } else {
//       Alert.alert('Please Enter Value then try Again')
//     }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleUpdateData = async () => {
//     try {
//       if (inputTextValue.length > 0) {
//         // .update(): update method update krnay kay leyee hota hay.
//       const response = await database()
//       .ref(`todo/${selectedCardIndex}`)
//       .update({
//         value: inputTextValue,
//       });
//     console.log(response);
//     setInputTextValue('');
//     setIsUpdateData(false);
//       } else {
//         Alert.alert('Please Enter Value then try Again')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // is function kay paramether may hmain wo CardIndex milay ga.
//   const handleCardPress = (cardIndex, cardValue) => {
//     try {
//       setIsUpdateData(true);
//       setSelectedCardIndex(cardIndex);
//       setInputTextValue(cardValue);
//       // console.log(cardIndex)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={true} />
//       <View>
//         <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
//           Todo App
//         </Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter Any Value"
//           value={inputTextValue}
//           onChangeText={value => setInputTextValue(value)}
//         />
//         {!isUpdateData ? (
//           <TouchableOpacity
//             onPress={() => handleAddData()}
//             style={styles.addButton}>
//             <Text style={{color: '#fff'}}>Add</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             onPress={() => handleUpdateData()}
//             style={styles.addButton}>
//             <Text style={{color: '#fff'}}>update</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.cardContainer}>
//         <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>
//           Todo List
//         </Text>

//         <FlatList
//           data={list}
//           renderItem={item => {
//             // cardIndex may wo index hoga jis pr hum click krain gay.
//             const CardIndex = item.index;
//             if (item.item !== null) {
//               // console.log(item)
//               return (
//                 <TouchableOpacity
//                   style={styles.card}
//                   onPress={() => handleCardPress(CardIndex, item.item.value)}>
//                   <Text>{item.item.value}</Text>
//                 </TouchableOpacity>
//               );
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const {height, width} = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   inputBox: {
//     width: width - 30,
//     borderRadius: 15,
//     borderWidth: 2,
//     marginVertical: 10,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 50,
//   },
//   cardContainer: {
//     marginVertical: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     width: width - 40,
//     padding: 20,
//     borderRadius: 30,
//     marginVertical: 10,
//   },
// });

// // ...........Video: 7 : Todo App Part Four............................
// // In this video we learn how to Delete a data from Firebase Realtime Database

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
//   Alert,
// } from 'react-native';
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [inputTextValue, setInputTextValue] = useState();
//   const [list, setList] = useState();
//   const [isUpdateData, setIsUpdateData] = useState(false);
//   const [selectedCardIndex, setSelectedCardIndex] = useState(false);

//   useEffect(() => {
//     getDatabase();
//   }, []);

//   const getDatabase = async () => {
//     try {
//       // const data = await database().ref('todo').once('value');
//       // on(): method kya krta hay kay jaisay hi kush changes hoti hay to function call krwa deta hay.
//       const data = await database()
//         .ref('todo')
//         .on('value', tempData => {
//           console.log(data);
//           // tempData: jo bhi updated data hoga wo ab tempData, may ayee ga is leyee is ko hum nay state(setList) may pass kr deya hay.
//           setList(tempData.val());
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleAddData = async () => {
//     try {
//       if (inputTextValue.length > 0) {
//         // const response = await database().ref('todo/4').set({
//         // adding manually index to the list
//         // .set(): set method add krnay kay leyee hota hay.
//         const index = list.length;
//         const response = await database().ref(`todo/${index}`).set({
//           value: inputTextValue,
//         });

//         console.log(response);
//         setInputTextValue('');
//       } else {
//         Alert.alert('Please Enter Value then try Again');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleUpdateData = async () => {
//     try {
//       if (inputTextValue.length > 0) {
//         // .update(): update method update krnay kay leyee hota hay.
//         const response = await database()
//           .ref(`todo/${selectedCardIndex}`)
//           .update({
//             value: inputTextValue,
//           });
//         console.log(response);
//         setInputTextValue('');
//         setIsUpdateData(false);
//       } else {
//         Alert.alert('Please Enter Value then try Again');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // is function kay paramether may hmain wo CardIndex milay ga.
//   const handleCardPress = (cardIndex, cardValue) => {
//     try {
//       setIsUpdateData(true);
//       setSelectedCardIndex(cardIndex);
//       setInputTextValue(cardValue);
//       // console.log(cardIndex)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCardLongPress = (cardIndex, cardValue) => {
//     try {
//       // Alert: may 3 chezain hay, title, value or last may array.
//       Alert.alert('title', `Are you Sure to Delete ${cardValue} ?`, [
//         {
//           text: 'Cancel',
//           onPress: () => {
//             console.log('Cancel is Press');
//           },
//         },
//         {
//           text: 'Ok',
//           onPress: async () => {
//             try {
//               const response = await database()
//                 .ref(`todo/${cardIndex}`)
//                 .remove();
//               setInputTextValue('');
//               setIsUpdateData(false);
//               console.log(response);
//             } catch (error) {
//               console.log(error);
//             }
//           },
//         },
//       ]);
//       // setIsUpdateData(true);
//       // setSelectedCardIndex(cardIndex);
//       // setInputTextValue(cardValue);
//       // console.log(cardIndex)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={true} />
//       <View>
//         <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
//           Todo App
//         </Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter Any Value"
//           value={inputTextValue}
//           onChangeText={value => setInputTextValue(value)}
//         />
//         {!isUpdateData ? (
//           <TouchableOpacity
//             onPress={() => handleAddData()}
//             style={styles.addButton}>
//             <Text style={{color: '#fff'}}>Add</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             onPress={() => handleUpdateData()}
//             style={styles.addButton}>
//             <Text style={{color: '#fff'}}>update</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.cardContainer}>
//         <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>
//           Todo List
//         </Text>

//         <FlatList
//           data={list}
//           renderItem={item => {
//             // cardIndex may wo index hoga jis pr hum click krain gay.
//             const CardIndex = item.index;
//             if (item.item !== null) {
//               // console.log(item)
//               return (
//                 <TouchableOpacity
//                   style={styles.card}
//                   onPress={() => handleCardPress(CardIndex, item.item.value)}
//                   onLongPress={() =>
//                     handleCardLongPress(CardIndex, item.item.value)
//                   }>
//                   <Text>{item.item.value}</Text>
//                 </TouchableOpacity>
//               );
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const {height, width} = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   inputBox: {
//     width: width - 30,
//     borderRadius: 15,
//     borderWidth: 2,
//     marginVertical: 10,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 50,
//   },
//   cardContainer: {
//     marginVertical: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     width: width - 40,
//     padding: 20,
//     borderRadius: 30,
//     marginVertical: 10,
//   },
// });




// ...........Video: 7 : Todo App Part Four............................
// In this video we learn how to Delete a data from Firebase Realtime Database
// ........................Corrected Code ..................

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';

export default function App() {
  const [inputTextValue, setInputTextValue] = useState('');
  const [list, setList] = useState([]);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = () => {
    try {
      database()
        .ref('todo')
        .on('value', snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const formattedList = Object.keys(data).map(key => ({
              id: key,
              value: data[key].value,
            }));
            setList(formattedList);
          } else {
            setList([]); // Set to an empty array if no data is found
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const newRef = database().ref('todo').push();
        await newRef.set({
          value: inputTextValue,
        });
        setInputTextValue('');
      } else {
        Alert.alert('Please Enter Value & Then Try Again');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateData = async () => {
    try {
      if (inputTextValue.length > 0 && selectedCardId) {
        await database()
          .ref(`todo/${selectedCardId}`)
          .update({
            value: inputTextValue,
          });
        setInputTextValue('');
        setIsUpdateData(false);
        setSelectedCardId(null);
      } else {
        Alert.alert('Please Enter Value then try Again');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (cardId, cardValue) => {
    try {
      setIsUpdateData(true);
      setSelectedCardId(cardId);
      setInputTextValue(cardValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardLongPress = (cardId, cardValue) => {
    try {
      Alert.alert('Alert', `Are you Sure to Delete ${cardValue}?`, [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel is Press');
          },
        },
        {
          text: 'Ok',
          onPress: async () => {
            try {
              await database().ref(`todo/${cardId}`).remove();
              setInputTextValue('');
              setIsUpdateData(false);
              setSelectedCardId(null);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          Todo App With Firebase
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Any Value"
          value={inputTextValue}
          onChangeText={value => setInputTextValue(value)}
        />
        {!isUpdateData ? (
          <TouchableOpacity
            onPress={() => handleAddData()}
            style={styles.addButton}>
            <Text style={{ color: '#fff' }}>Add</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleUpdateData()}
            style={styles.addButton}>
            <Text style={{ color: '#fff' }}>Update</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.cardContainer}>
        <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
          Todo List
        </Text>

        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress(item.id, item.value)}
              onLongPress={() => handleCardLongPress(item.id, item.value)}>
              <Text>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: width - 40,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
});

