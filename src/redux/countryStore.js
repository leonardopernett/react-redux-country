const initialization = {
  countryList: [],
  countryByName: [],
  countryByRegion: [],
};

export const createReducer = (state = initialization, actions) => {
  if (actions.type === "GET_LIST_COUNTRY") {
    return {
      ...state,
      countryList: actions.payload,
    };
  }
  if (actions.type === "GET_LIST_BY_NAME") {
    return {
      ...state,
      countryByName: state.countryList.filter((country) =>
        country.name.toLowerCase().includes(actions.payload.toLowerCase())
      ),
    };
  }
  if (actions.type === "GET_FILTER_REGION") {
    return {
      ...state,
      countryByRegion: state.countryList.filter((country) => 
         country.region.toLowerCase() === actions.payload.toLowerCase()
      ),
    };
  }
  return state;
};
