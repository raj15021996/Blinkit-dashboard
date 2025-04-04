// src/cubeClient.js
import cubejs from '@cubejs-client/core';

// The correct way to initialize the Cube.js client with apiUrl in the configuration object
const cubejsApi = cubejs({
  apiUrl: 'https://amaranth-muskox.aws-us-east-1.cubecloudapp.dev/dev-mode/feat/frontend-hiring-task/cubejs-api/v1/load',  // Cube.js API endpoint
  headers: {
    ContentType: 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuZElkIjoiNDkiLCJleHAiOjE3NDM0OTYyMTIsImlzcyI6ImN1YmVjbG91ZCJ9.luqfkt0CQW_B01j5oAvl_8hicbFzPmyLXfvEZYJbej4"  
  }
});

export default cubejsApi;
