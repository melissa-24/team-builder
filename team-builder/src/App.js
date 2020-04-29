import React, { useState, useEffect } from "react";
import data from "./data";
import TeamMembers from "./components/TeamMembers";
import { Container, Row } from "reactstrap";
import AddForm from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const updateTeam = (newMember) => {
    setTeam([...team, newMember]);
  };

  const sendEditedMember = (editedMember) => {
    setTeam([...team, editedMember]);
    setMemberToEdit();
    setIsEditing(false);
  };

  useEffect(() => {
    if (memberToEdit) {
      const newTeam = team.filter((t) => {
        return t.name !== memberToEdit.name;
      });
      setTeam(newTeam);
    }
  }, [memberToEdit]);

  return (
    <Container>
      <h1>Development Team</h1>
      <hr />
      <Row>
        {team.map((t) => {
          return (
            <TeamMembers
              data={t}
              setMemberToEdit={setMemberToEdit}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
            />
          );
        })}
      </Row>
      <AddForm
        updateTeam={updateTeam}
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        sendEditedMember={sendEditedMember}
      />
    </Container>
  );
}

export default App;