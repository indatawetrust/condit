const choose = (mainCondition, Data = null) => {
  const back = {
    when: (condition, data) => {
      if (mainCondition == condition) {
        Data = data;
        return back;
      } else {
        return back;
      }
    },
    otherwise: data => {
      if (!Data) Data = data;
      return back;
    },
    do: () => {
      return Data;
    },
  };

  return back;
};

module.exports = choose;
