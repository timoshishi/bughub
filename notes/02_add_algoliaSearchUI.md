# Adding algolia instant search in react app

1. `npm i react-instantsearch-dom algoliasearch` (or use algolia search lite)
2. Setup a config for your client using the **Search** api key in your algolia
   project as well as the app id

- Admin api key should not be sent to the client

### /config/algolia.js

```javascript
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

export default searchClient;
```
