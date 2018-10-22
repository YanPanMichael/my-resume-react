const headerShadow = (state = false, action) => {
  switch (action.type) {
    case 'SET_HEADER_SHADOW':
      return action.flag;
    default:
      return state;
  }
};

export default headerShadow;
