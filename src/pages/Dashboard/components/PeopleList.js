import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;
  //props:either or hiredpeople
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
