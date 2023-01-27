import { useState } from "react";
import HireForm from "./components/HireForm";
import { useEffect, useState } from "react";
import { useLocation } from "react";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  if (!person) return <p>Loading...</p>;

  const location = useLocation();

   useEffect(() => {
    setPerson(location.state.person)
  }
  },[location])

  if (!person) return <p>Loading...</p>;
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople } />
    </article>
)
);
  
  
}

export default PersonProfile;
