import database from '@react-native-firebase/database';

export const init = () => {
  // const reference = database().ref('test');
  database()
    .ref('test')
    .once('value')
    .then((snapshot) => {
      console.log('User data: ', snapshot.val());
    });
};
