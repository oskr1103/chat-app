import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="a5fee9e0-a96c-406f-976a-54e72cabf593"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
