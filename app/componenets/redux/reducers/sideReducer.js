const initialState = {
    isOpened: false,
    Loading:false
  };
  
  const SideReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {
          ...state,
          isOpened: !state.isOpened,
          
        };
    break
    case 'ON':
      return{...state,Loading:true}
      break
    case 'OFF':
      return{...state,Loading:false}
      break
    
      default:
        return state; // Make sure to return the current state if the action is not recognized.
    }
  };
  
  export default SideReducer;
  