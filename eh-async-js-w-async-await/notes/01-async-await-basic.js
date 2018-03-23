//
//----------------------------------------------------
import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 01 .....')

  function showGitHubUser_old(handle) {
    const url = `https://api.github.com/users/${handle}`;
    fetch(url).then(
      response=> {
        console.log('1: ', response)
        return response
      }
    ).then(
      sameResponse=>console.log('2: ', sameResponse)
    )
  }

  async function showGitHubUser_new(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    console.log('1: ', response)
    const sameResponse = await response
    console.log('2: ', sameResponse)
  }
  showGitHubUser_old('apollotang')
  showGitHubUser_new('apollotang')
}



//-------------------------------------------------
import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 02 .....')

  function showGitHubUser_old(handle) {
    const url = `https://api.github.com/users/${handle}`;
    fetch(url).then(
      response=> {
        const json_response = response.json();
        console.log('1: ', json_response)
        return json_response
      }
    ).then(
      json_response=>console.log('2: ', json_response)
    )
  }

  async function showGitHubUser_new(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    console.log('n1: ', response)
    const json_response = await response.json();
    console.log('n2: ', json_response)
  }
  showGitHubUser_old('apollotang')
  showGitHubUser_new('apollotang')
}



//-------------------------------------------------
import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 03 .....')

  const showGitHubUser_old = function showGitHubUser_old(handle) {
    const url = `https://api.github.com/users/${handle}`;
    return fetch(url).then(
      response=> {
        const json_response = response.json();
        console.log('o1: ', json_response)
        return json_response
      }
    ).then(
      json_response=>{
        console.log('o2: ', json_response)
        return json_response;
      }
    )
  }

  showGitHubUser_old('apollotang').then(
    json=>console.log('o3: ', json)
  )

  const showGitHubUser_new = async function showGitHubUser_new (handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    console.log('n1: ', response)
    const json_response = await response.json();
    console.log('n2: ', json_response)
    return json_response;
  }

  /*
  v------- this semicolumn is important if you want use standard lint
           https://github.com/feross/standard/issues/373
           https://stackoverflow.com/questions/42036349/uncaught-typeerror-intermediate-value-is-not-a-function
    */
  ;( async () => {
    const json = await showGitHubUser_new('apollotang')
    console.log('n3: ', json)
  })()

}


//-------------------------------------------------
//
// ES6 class async method
//

import fetch from 'isomorphic-fetch';
export default function() {
  console.clear();
  console.log('..... 04 .....')


  class GitHubApiClient_old {
    fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      return fetch(url).then(
        response=> {
          const json_response = response.json();
          return json_response
        }
      ).then(
        json_response=>{
          return json_response;
        }
      )
    }
  }

  const oldApi = new GitHubApiClient_old();
  oldApi.fetchUser('ApolloTang').then( json=>{
    console.log('oldApi: ', json)
  });


  // ---------------------------------
  class GitHubApiClient_new {
    async fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      const response = await fetch(url);
      const json_response = await response.json();
      return json_response;
    }
  };

  ;(async ()=>{
    const newApi = new GitHubApiClient_new();
    const json = await newApi.fetchUser('ApolloTang');
    console.log('newApi: ', json)
  })();

}


