const localSTorage = (isTrue) => {
  const data = localStorage.getItem("tasks");
  if (isTrue) {
    const data = JSON.stringify(isTrue);
    localStorage.setItem("tasks", data);
  }
  if (data) {
    return JSON.parse(data);
  }
  return {
    tasks: [
      {
        id: 1,
        task: "Buy Ice Cream",
        completed: false,
      },
      {
        id: 2,
        task: "Playing Cricket",
        completed: false,
      },
      {
        id: 3,
        task: "Eat Rice",
        completed: true,
      },
      {
        id: 4,
        task: "Ride The Cycle",
        completed: false,
      },
    ],
  };
};

export default localSTorage;
