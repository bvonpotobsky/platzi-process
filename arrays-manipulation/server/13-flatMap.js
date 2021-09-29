// const users = [
//   { userId: 1, username: "leomessi", attributes: ["Nice", "Best"] },
//   { userId: 2, username: "cronaldo", attributes: ["Cool", "Great"] },
//   { userId: 3, username: "manuginobili", attributes: ["Best", "Champion"] },
// ];

// const getAttr = users.map((data) => data.attributes);
// // console.log("Get Attr:", getAttr);

// // const getAttr = users.map((data) => data.attributes).flat();
// const getAttrFlat = users.flatMap((user) => user.attributes);
// // console.log("FlatMap:", getAttrFlat);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta = Object.values(calendars)
  .flat()
  .map((item) => item.startDate);
// console.log(rta);

const rta2 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
// console.log(rta2);
