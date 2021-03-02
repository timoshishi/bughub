import { db } from '../config/firebase';
import firebase from 'firebase/app';

const firestoreService = {
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
  deletePhoto: async function (fileName) {
    const bucketName = 'timoshishi-bughub';
    try {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const imageRef = storageRef.child(fileName);

      console.log({ imageRef });
      await imageRef.delete();
      console.log(`gs://${bucketName}/${fileName} deleted.`);
    } catch (err) {
      console.log('deletePhotoFromBucket', err);
    }
  },
};
export default firestoreService;
