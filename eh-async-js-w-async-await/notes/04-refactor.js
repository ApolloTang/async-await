// import {createStore, applyMiddleware, compose} from 'redux';

//-------------------------------------------------
import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 04 .....')

  // const user = 'apollotang';
  const user = 'apollotang1111';

  class GitHubApiClient_old {
    fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      return fetch(url).then(
        response=> {
          const status = response.status;
          console.log('old: status: ', status);
          const p_response = response.json(); // [! remember response.json() here is still a promise ]
          return p_response;
        }
      ).then(
        body => {
            console.log('old: body: ', body)
            console.log('old: bodyMessage: ', body.message) // message is inside response.json()
            return body
        }
      )
    }
  }

  const oldApi = new GitHubApiClient_old();
  oldApi.fetchUser(user).then(
    response=>{ console.log('oldApi: ', response) }
  );


  // ---------------------------------
  class GitHubApiClient_new {
    async fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      const response = await fetch(url);

      const status = response.status;
      console.log('new: status: ', status);

      const p_response = response.json(); // [! remember response.json() here is still a promise ]
      const body = await p_response;
      console.log('new: body: ', body)
      console.log('new: bodyMessage: ', body.message)

      return p_response;
    }
  };

  ;(async ()=>{
    const newApi = new GitHubApiClient_new();
    const json = await newApi.fetchUser(user);
    console.log('newApi: ', json)
  })();

}

