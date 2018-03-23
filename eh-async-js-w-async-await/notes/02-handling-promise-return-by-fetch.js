//-------------------------------------------------

import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 05 .....')


  class GitHubApiClient_old {
    fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      return fetch(url).then(
        response=> {
          const status = response.status;
          console.log('old: status: ', status);

          const p_response = response.json(); // [! remember response.json() here is still a promise ]
          p_response.then(
            (bodyJson) => {
              console.log('old: bodyJson: ', bodyJson)
            }
          );
          return p_response;
        }
      )
    }
  }

  const oldApi = new GitHubApiClient_old();
  oldApi.fetchUser('apollotang').then(
  // oldApi.fetchUser('apollotang111').then(
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
      const bodyJson = await p_response;
      console.log('new: bodyJson: ', bodyJson)
      return p_response;
    }
  };

  ;(async ()=>{
    const newApi = new GitHubApiClient_new();
    const json = await newApi.fetchUser('apollotang');
    // const json = await newApi.fetchUser('apollotang111');
    console.log('newApi: ', json)
  })();

}

