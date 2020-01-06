export default (state = [], action) => {
  let index;
  let quote;
  let votes;

  switch(action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote];
    
    case "REMOVE_QUOTE":
      const quotesArray = state.filter(quo => quo.id !== action.quoteId);
      return quotesArray

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      quote.votes ? (votes = quote.votes += 1) : (votes = 1)

      return [
        ...state.slice(0, index), {...quote, votes: votes}, ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];
        return quote.votes > 0 ?
        [...state.slice(0, index), {...quote, votes: quote.votes -= 1}, ...state.slice(index + 1)] : state
  
    default:
      return state;
  }
}
