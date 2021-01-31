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
    await updateDocumentInAlgolia(change, context.params.uid);
  });

exports.postsOnDelete = functions.firestore
  .document('posts/{uid}')
  .onDelete(async (snapshot, context) => {
    await deleteDocumentFromAlgolia(snapshot, context.params.uid);
  });
