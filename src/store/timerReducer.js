const timerReducer = (state, action) => {
  switch (state.currentState) {
    case "IDLE":
      if (action.type === "start") {
      }

      if (action.type === "reset") {
      }

      return state;
    case "RUNNING":
      if (action.type === "stop") {
      }

      if (action.type === "reset") {
      }

      return state;
    default:
  }
};

export default timerReducer;
