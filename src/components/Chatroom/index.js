// == Import
import Settings from "../Settings";
import Messages from "../Messages";
import Form from "../Form";

import "./style.scss";

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;
