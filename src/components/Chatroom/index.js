// == Import
import Messages from "../Messages";
import Form from "../Form";
import "./style.scss";

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;
