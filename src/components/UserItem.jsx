import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserItem({ name, email, phone, id }) {
  return (
    <Card style={{ width: "18rem" }} className="user-item">
      <Card.Img
        variant="top"
        src="https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300490/97923644-ic%C3%B4ne-de-connexion-avatar-ic%C3%B4ne-utilisateur-bouton-de-cercle-avec-vecteur-de-fond-d%C3%A9grad%C3%A9-de-couleur.jpg"
      />
      <Card.Body>
        <Card.Title style={{ color: "deeppink" }}>{name}</Card.Title>
        <Card.Text>
          <span>
            <strong>E-mail:</strong>
          </span>
          {email}
        </Card.Text>
        <Card.Text>
          <span>
            <strong>Phone:</strong>
          </span>
          {phone}
        </Card.Text>
        <Button as={Link} to={`/posts/${id}`} variant="dark">
          Show posts
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserItem;
