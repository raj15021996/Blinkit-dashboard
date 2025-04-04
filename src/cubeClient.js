import cubejs from '@cubejs-client/core';

// The correct way to initialize the Cube.js client with apiUrl in the configuration object
const cubejsApi = cubejs({
  apiUrl: process.env.NEXT_PUBLIC_CUBEJS_API_URL,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CUBEJS_API_TOKEN}`  
});
export default cubejsApi;
