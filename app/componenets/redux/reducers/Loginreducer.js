const initialState = {
  isLogged: true,
  user: {},
};

  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogged: true,
          user: action.payload,
        };
  
      case 'LOGOUT':
        return {
          ...state,
          isLogged: false,
          user: {},
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  