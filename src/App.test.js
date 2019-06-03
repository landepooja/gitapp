import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';
import mockAxios from 'axios';
var async = require('async');
 
it("fetched data from App", async () => {
  mockAxios.get.mockImplementionOnce(() => 
   Promise.resolved ({
     data: { results : [11]}
   })
  );

  // expect
  expect(images).toEqual([11]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
 expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.github.com/users/",
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: ""
      }
    }
  );

});


