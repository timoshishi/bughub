import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

export default searchClient;
// const index = searchClient.initIndex('posts');

// index.setSettings({
//   // Select the attributes you want to search in
//   searchableAttributes: ['Name', 'Owner', 'Account', 'Email', 'Website'],
//   // Define business metrics for ranking and sorting
//   customRanking: ['desc(Amount)'],
//   // Set up some attributes to filter results on
//   attributesForFaceting: ['type'],
//   // Define the attribute we want to distinct on
//   attributeForDistinct: 'type',
// });
// fetch('https://alg.li/doc-saas.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (contacts) {
//     console.log(contacts);
//     // return index.saveObjects(contacts, {
//     //   autoGenerateObjectIDIfNotExist: true,
//     // });
//   });
