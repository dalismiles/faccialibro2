import { useState } from "react";
import Navbar from "./components/Navbar";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import AddFriend from "./components/AddFriend";
import MessageCardList from "./components/MessageCardList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [filteredValue, setFilteredValue] = useState("");

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
            setFilteredValue={setFilteredValue}
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
        </section>
        <section className="App_messages">
          <AddMessage
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <div className="App_messages--research">
            <p>(Type your friends' names here in order to find their messages)</p>
            <input
              onChange={(event) => setFilteredValue(event.target.value)}
              className="search_input"
              type="text"
              placeholder="Search message..."
            />
          </div>
          <MessageCardList
            filteredValue={filteredValue}
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
