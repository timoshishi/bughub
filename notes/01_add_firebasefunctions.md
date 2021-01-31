# Add firebase functions to an existing project

### Useful Resources

- Youtube video on
  [adding algoliasearch to firebase app](https://www.youtube.com/watch?v=3Z0V3cvgns8)
- ## Medium article on
  ## [integrating firestore with algolia search](https://medium.com/@soares.rfarias/how-to-set-up-firestore-and-algolia-319fcf2c0d37)

1. Add blaze plan to your firebase project

- `firebase init functions`
  - do not add eslint to the project when prompted
- firebase functions will automatically be installed with a package.json in your
  project root

2. Create algolia project and get the keys

3. Add the admin api keys to your firebase project in terminal (must have
   firebase cli tools installed globally)
   `firebase functions:config:set algolia.appid="<appid>" algolia.apikey="<apikey>"`

- Message after setting api key
  `Please deploy your functions for the change to take effect by running firebase deploy --only functions`

5. When using `firebase init functions` a functions folder will be created in
   project root. Create functions in the index.js

6. Create a function (these functions add and delete posts to the index)

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');
const {
  saveDocumentInAlgolia,
  updateDocumentInAlgolia,
  deleteDocumentFromAlgolia,
} = require('./firestoreUtilityFunctions.js');

admin.initializeApp();
const env = functions.config();

const client = algoliasearch(env.algolia.appid, env.algolia.apikey);

const index = client.initIndex('posts');

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
```

### Utility Functions

```javascript
async function saveDocumentInAlgolia(snapshot, uid) {
  if (snapshot.exists) {
    const record = snapshot.data();
    if (record) {
      record.objectID = uid;
      await index.saveObject(record);
    }
  }
}

export async function updateDocumentInAlgolia(change, uid) {
  const docBeforeChange = change.before.data();
  const docAfterChange = change.after.data();
  await saveDocumentInAlgolia(change.after);
}

async function deleteDocumentFromAlgolia(snapshot, uid) {
  if (snapshot.exists) {
    await collectionIndex.deleteObject(uid);
  }
}

module.exports = {
  saveDocumentInAlgolia,
  updateDocumentInAlgolia,
  deleteDocumentFromAlgolia,
};
```

7. Deploy the function to firebase

`firebase deploy --only functions`
