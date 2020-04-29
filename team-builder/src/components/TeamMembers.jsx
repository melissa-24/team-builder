import React from "react";
import "./component.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Col,
  CardSubtitle,
  Button,
} from "reactstrap";

const TeamMembers = ({ data, setMemberToEdit, setIsEditing, isEditing }) => {
  const sendMemberToEdit = () => {
    if (isEditing === false) {
      setIsEditing(true);
      const member = {
        name: data.name,
        email: data.email,
        role: data.role,
      };
      setMemberToEdit(member);
    } else if (isEditing === true) {
      setIsEditing(false);
    }
  };

  const btn_color = isEditing ? "secondary" : "danger";
  const btn_active = isEditing ? true : false;

  return (
    <Col xs="6" md="4" b xl="3" className="Member">
      <Card>
        <CardBody>
          <CardTitle>{data.name}</CardTitle>
          <CardSubtitle>{data.role}</CardSubtitle>
          <hr />
          <CardText>{data.email}</CardText>
          <Button
            color={btn_color}
            onClick={sendMemberToEdit}
            disabled={btn_active}
          >
            Edit
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeamMembers;