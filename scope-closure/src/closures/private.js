const person = () => {
  let saveName = 'Name';

  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

const newPerson = person();

console.log(newPerson.getName());

newPerson.setName('Benjamin');
console.log(newPerson.getName());
