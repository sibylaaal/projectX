const initialState = {
    data:{
        if:'df.k'
    },
  };
  
  const DocumentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DOCUMENT_CREATE':
        return {
          ...state,
          data: action.payload,
        };
  
    
      default:
        return state; 
    }
  };
  
  export default DocumentReducer;
  