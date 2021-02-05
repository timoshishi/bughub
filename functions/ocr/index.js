// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();
// // Get a reference to the Cloud Storage component
// const { Storage } = require('@google-cloud/storage');
// const storage = new Storage();

// // Get a reference to the Cloud Vision API component
// const Vision = require('@google-cloud/vision');
// const vision = new Vision.ImageAnnotatorClient();
// const bucketName = 'timoshishi-bughub';

// exports.imageTagger = functions.storage
//   .bucket(bucketName)
//   .object()
//   .onChange(async (event) => {
//     //file data
//     const object = event.data;
//     const filePath = object.name;
//     //location of saved file in bucket
//     const imageUri = `gs://${bucketName}/${filePath}`;
//     // firestore docID === filename
//     const docId = filePath.split('.jpg')[0];
//     const docRef = admin.firestore().collection('images').doc(docId);

//     const [textDetections] = await vision.textDetection(imageUri);
//     const [annotation] = textDetections.textAnnotations;
//     const bug = annotation ? annotation.description : '';
//     console.log('Extracted text from image:', bug);
//     return docRef.set({ bug });
//   });

// /**
//  * This function is exported by index.js, and is executed when
//  * a file is uploaded to the Cloud Storage bucket you created
//  * for uploading images.
//  *
//  * @param {object} event A Google Cloud Storage File object.
//  */
// /**
//  *
//  exports.processImage = async (event) => {
//    const { bucket, name } = event;

//    if (!bucket) {
//      throw new Error(
//        'Bucket not provided. Make sure you have a "bucket" property in your request'
//      );
//    }
//    if (!name) {
//      throw new Error(
//        'Filename not provided. Make sure you have a "name" property in your request'
//      );
//    }

//    await detectText(bucket, name);
//    console.log(`File ${name} processed.`);
//  };

//  /**
//   * Detects the text in an image using the Google Vision API.
//   *
//   * @param {string} bucketName Cloud Storage bucket name.
//   * @param {string} filename Cloud Storage file name.
//   * @returns {Promise}
//   const detectText = async (bucketName, filename) => {
//     console.log(`Looking for text in image ${filename}`);
//     const [textDetections] = await vision.textDetection(
//       `gs://${bucketName}/${filename}`
//       );
//       const [annotation] = textDetections.textAnnotations;
//       const text = annotation ? annotation.description : '';
//       console.log('Extracted text from image:', text);
//     };
//     */

// /**
//   * This function is exported by index.js, and is executed when
//   * a message is published to the Cloud Pub/Sub topic specified
//   * by the RESULT_TOPIC environment variable. The function saves
//   * the data packet to a file in GCS.
//   *
//   * @param {object} event The Cloud Pub/Sub Message object.
//   * @param {string} {messageObject}.data The "data" property of the Cloud Pub/Sub
//   * Message. This property will be a base64-encoded string that you must decode.
//   exports.saveResult = async (event) => {
//     const pubsubData = event.data;
//     const jsonStr = Buffer.from(pubsubData, 'base64').toString();
//     const { text, filename, lang } = JSON.parse(jsonStr);

//     if (!text) {
//       throw new Error(
//         'Text not provided. Make sure you have a "text" property in your request'
//         );
//       }
//       if (!filename) {
//         throw new Error(
//           'Filename not provided. Make sure you have a "filename" property in your request'
//           );
//         }
//         if (!lang) {
//           throw new Error(
//             'Language not provided. Make sure you have a "lang" property in your request'
//             );
//           }

//           console.log(`Received request to save file ${filename}`);

//           const bucketName = process.env.RESULT_BUCKET;
//           const newFilename = renameImageForSave(filename, lang);
//           const file = storage.bucket(bucketName).file(newFilename);

//           console.log(`Saving result to ${newFilename} in bucket ${bucketName}`);

//           await file.save(text);
//           console.log('File saved.');
//         };

//         */
