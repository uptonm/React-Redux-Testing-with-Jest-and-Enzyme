export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise in the payload property
  // If it does wait for it to resolve.
  // If not, semd tp the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // Wait for the promise to resolve then create a new action with
  // Its data payload, and dispatch it to the reducer
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
