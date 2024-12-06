const createAvailableTimes = (date: Date) => {
  const availableTimes = [];
  for (let i = 8; i < 20; i++) {
    availableTimes.push({
      from: date.setHours(i, 0, 0, 0),
      to: date.setHours(i + 1, 0, 0, 0),
    });
  }
  return availableTimes;
};

export default createAvailableTimes;
