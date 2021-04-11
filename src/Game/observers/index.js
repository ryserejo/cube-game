const observers = {
  state: {
    observers: [],
  },

  notify_all: (message) => {
    for (const observer of this.state.observers) {
      observer(message);
    }
  },

  add_newObserver: (observer) => {
    this.state.observers.push(observer);
  },
};

module.exports = observers