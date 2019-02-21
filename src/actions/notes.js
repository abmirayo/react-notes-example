import 'whatwg-fetch'

// Dispatchers

const notesFetchLoading = (payload) => (
  {
    type: 'NOTES_FETCH_LOADING',
    payload,
  }
)

const notesFetchErrored = (payload) => (
  {
    type: 'NOTES_FETCH_ERRORED',
    payload,
  }
)

const notesFetchSuccess = (payload) => (
  {
    type: 'NOTES_FETCH_SUCCESS',
    payload,
  }
)

// Actions

export const fetchNotes = () => (dispatch) => {
  dispatch(notesFetchLoading(true))
  return fetch('https://notas-0f3f.restdb.io/rest/notes', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5c6e0a9b39b86d2811730fcb'
    }})
    .then(response => {
      dispatch(notesFetchLoading(false))
      if (response.ok) {
        return response.json()
      } else {
        throw Error('Shit happened')
      }
    })
    .then( jsonResponse => {
      dispatch(notesFetchSuccess(jsonResponse))
    })
    .catch( error => {
      dispatch(notesFetchErrored(true))
    })
}

export const addNote = (noteText) => (dispatch) => {
  return fetch('https://notas-0f3f.restdb.io/rest/notes', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ noteText }),
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5c6e0a9b39b86d2811730fcb',
      'content-type': 'application/json'
    }})
    .then((response) => {
      if (response.ok) {
        dispatch(fetchNotes())
      }
    })
}
