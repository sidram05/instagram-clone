import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB2UjXBJO0WOGiHTphIucDs-pWbYE0GFps',
  authDomain: 'instagram-sid.firebaseapp.com',
  projectId: 'instagram-sid',
  storageBucket: 'instagram-sid.appspot.com',
  messagingSenderId: '915366998182',
  appId: '1:915366998182:web:26f5bd71f9b9137ca60467'
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
export { firebase, FieldValue };
