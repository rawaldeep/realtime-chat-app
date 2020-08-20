import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import {Container} from 'shards-react';

import "./index.css";
import Chat from 'chat/Chat';

const App = () => (
    <Container>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere felis leo, vitae consequat urna vehicula id. Praesent suscipit facilisis eros non commodo. </p>
    <h1>Chat!</h1>
    <Chat />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere felis leo, vitae consequat urna vehicula id. Praesent suscipit facilisis eros non commodo. </p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
