import { useState } from "react";
import Navbar from "./components/Navbar";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import AddFriend from "./components/AddFriend";
import MessageCardList from "./components/MessageCardList";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);

  return (
    <div className="App">
      <div className="Header">
        <Navbar />
      </div>
      <div className="App__mainContent">
        <section className="App__friends">
          
          <FriendCardList
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <AddFriend
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
        </section>
        <section className="App_messages">
          <AddMessage
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <MessageCardList
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
