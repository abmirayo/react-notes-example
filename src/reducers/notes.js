// Main state
export const notes = (state = [], { type, payload }) =>
  type === 'NOTES_FETCH_SUCCESS' ?
    payload
    :
    state


// Loading states

export const notesFetchLoading = (state = false, { type, payload }) =>
  type === 'NOTES_FETCH_LOADING' ?
    payload
    :
    state

// Failure state

export const notesFetchErrored = (state = false, { type, payload }) =>
  type === 'NOTES_FETCH_ERRORED' ?
    payload
    :
    state
