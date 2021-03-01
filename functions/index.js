const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {
  saveDocumentInAlgolia,
  updateDocumentInAlgolia,
  deleteDocumentFromAlgolia,
} = require('./firestoreAlgoliaUtils.js');

admin.initializeApp();

exports.postsOnCreate = functions.firestore
  .document('posts/{uid}')
  .onCreate(async (snapshot, context) => {
    await saveDocumentInAlgolia(snapshot, context.params.uid);
  });

exports.postsOnUpdate = functions.firestore
  .document('posts/{uid}')
  .onUpdate(async (change, context) => {
    console.info('updating', change);
    await updateDocumentInAlgolia(change, context.params.uid);
  });

exports.postsOnDelete = functions.firestore
  .document('posts/{uid}')
  .onDelete(async (snapshot, context) => {
    await deleteDocumentFromAlgolia(snapshot, context.params.uid);
  });

// exports.fireOnUpload = functions.storage
//   .object()
//   .onFinalize((object, context) => {
//     console.log({ context });
//     console.info({ object, context });
//   });

// Get a reference to the Cloud Storage component
// const { Storage } = require('@google-cloud/storage');
// const storage = new Storage();

// Get a reference to the Cloud Vision API component
// const Vision = require('@google-cloud/vision');
// const vision = new Vision.ImageAnnotatorClient();
// const bucketName = 'timoshishi-bughub';

// exports.imageTagger = functions.storage
//   .bucket(bucketName)
//   .object()
//   .onFinalize(async (event) => {
//     //file data
//     const object = event.data;
//     const filePath = object.name;
//     //location of saved file in bucket
//     const imageUri = `gs://${bucketName}/${filePath}`;
//     // firestore docID = filename
//     const docId = filePath.split('.jpg')[0];
//     const docRef = admin.firestore().collection('images').doc(docId);

//     const [textDetections] = await vision.textDetection(imageUri);
//     const [annotation] = textDetections.textAnnotations;
//     const bug = annotation ? annotation.description : '';
//     console.log('Extracted text from image:', bug);
//     console.info({ bug });
//     return docRef.set({ bug });
//   });

/**   // try {
    //   console.info({ event });
    //   const object = event.data;
    //   const filePath = object.name;
    //   const imageUri = `gs://${bucketName}/${filePath}`;

    //   const docId = filePath.split('.jpg')[0];
    //   const docRef = admin.firestore().collection('images').doc(docId);

    //   const textRequest = await visionClient.documentTextDetection(imageUri);

    //   const fullText = textRequest[0].textAnnotations[0];
    //   const text = fullText ? fullText.description : null;
    

    //   const webRequest = await visionClient.webDetection(imageUri);
    //   const web = webRequest[0].webDetection;

    //   const landmarksRequest = await visionClient.landmarkDetection(imageUri);
    //   const landmarks = landmarksRequest[0].landmarkAnnotations;

    //   const data = { text, web, landmarks };
    //   console.info({ data });
    //   return docRef.set(data);
    // } catch (err) {
    //   console.error(err);
    // } */
