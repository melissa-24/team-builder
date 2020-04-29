import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./component.css";

const AddForm = ({ updateTeam, memberToEdit, isEditing, sendEditedMember }) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      let modifiedMember = {
        name: member.name,
        email: member.email,
        role: member.role,
      };
      sendEditedMember(modifiedMember);
      setMember({ name: "", email: "", role: "" });
    } else {
      let newMember = {
        name: member.name,
        email: member.email,
        role: member.role,
      };
      setMember({ name: "", email: "", role: "" });
      updateTeam(newMember);
      console.log(newMember);
    }
  };

  useEffect(() => {
    if (memberToEdit && isEditing) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  const btn_color = isEditing ? "success" : "primary";
  const btn_text = isEditing ? "Save" : "Submit";

  return (
    <Form className="Form" onSubmit={(e) => handleSubmit(e)}>
      <h1>New Member Form</h1>
      <hr />
      <FormGroup>
        <Label for="form_name">Name</Label>
        <Input
          type="name"
          name="name"
          value={member.name}
          id="form_name"
          placeholder="John Doe"
          onChange={(e) => handleChange(e)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="form_email">Email</Label>
        <Input
          value={member.email}
          type="email"
          name="email"
          id="form_email"
          placeholder="johndoe@email.com"
          onChange={(e) => handleChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="form_role">Role</Label>
        <Input
          type="role"
          value={member.role}
          name="role"
          id="form_role"
          placeholder="Front End Developer"
          onChange={(e) => handleChange(e)}
          required
        />
      </FormGroup>
      <Button color={btn_color}>{btn_text}</Button>
    </Form>
  );
};

export default AddForm;