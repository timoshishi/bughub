import { db } from '../config/firebase';
import firebase from 'firebase/app';

export default {
  createOrUpdatePost: async function (postData, currentBug) {
    try {
      const postsRef = db.collection('posts');
      //check if current object to update and send to firestore
      await postsRef.doc(currentBug?.docId).set({
        ...postData,
        created:
          currentBug?.created || firebase.firestore.Timestamp.now().seconds,
        updated: firebase.firestore.Timestamp.now().seconds,
      });
      await console.log('created', postData);
    } catch (err) {
      console.error(err);
    }
  },
};
