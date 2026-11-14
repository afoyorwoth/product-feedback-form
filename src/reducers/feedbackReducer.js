
export const initialRatings = {
  comfort: 0,
  looks: 0,
  price: 0,
}

export function feedbackReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_RATING':
      return {
        ...state,
        [action.name]: action.value,
      }

    case 'RESET_RATINGS':
      return initialRatings

    default:
      return state
  }
}
