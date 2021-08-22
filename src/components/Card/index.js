import React from "react";
import { CardBody, CardContainer, CardHeader, CardId } from "./CardElements";
import CardFooter from "./CardFooter/index";
import Logo from "../Logo";

const Card = ({ site, id, followers, today }) => {
  return (
    <CardContainer site={site}>
      <CardHeader>
        <Logo logo={site} />
        <CardId>{id}</CardId>
      </CardHeader>
      <CardBody>
        <h1>{followers}</h1>
        <h4>{site !== "youtube" ? "FOLLOWERS" : "SUBSCRIBER"}</h4>
      </CardBody>
      <CardFooter change={today} />
    </CardContainer>
  );
};

export default Card;
