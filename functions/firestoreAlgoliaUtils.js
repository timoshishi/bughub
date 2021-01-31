const algoliasearch = require('algoliasearch');
const functions = require('firebase-functions');
const env = functions.config();
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const postsIndex = client.initIndex('posts');

async function saveDocumentInAlgolia(snapshot, uid) {
  if (snapshot.exists) {
    const record = snapshot.data();
    if (record) {
      record.objectID = uid;
      await postsIndex.saveObject(record);
    }
  }
}

async function updateDocumentInAlgolia(change, uid) {
  /** We gave access to the data before and after the change
   const docBeforeChange = change.before.data();
   const docAfterChange = change.after.data();
   */
  await saveDocumentInAlgolia(change.after);
}

async function deleteDocumentFromAlgolia(snapshot, uid) {
  if (snapshot.exists) {
    await postsIndex.deleteObject(uid);
  }
}

module.exports = {
  saveDocumentInAlgolia,
  updateDocumentInAlgolia,
  deleteDocumentFromAlgolia,
};
