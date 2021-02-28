const initState = {
  cars: [],
  car: {},
  loading: false,
  error: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {...state, cars: action.payload}
    case 'SET_CAR': 
      return {...state, car: action.payload}
    case 'SET_LOADING': 
      return {...state, loading: action.payload}
    case 'SET_ERROR':
      return {...state, error: action.payload}
    default: 
      return state
  }
}

export default reducer