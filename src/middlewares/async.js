export default ({ dispatch }) => next => action => {
  debugger;
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
