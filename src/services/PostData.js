

export function PostData(type, userData) {

    let baseUrl = 'http://localhost:4000/'

    return new Promise((resolve, reject) => {
      fetch(baseUrl + type, {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error)
      })
    })
  }
