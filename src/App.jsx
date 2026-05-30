import "./App.css";
import contactsArr from "./contacts.json"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5))

  const addRandomContact = () => {
    const remainingContacts = contactsArr.filter(contact => !contacts.includes(contact))
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const newContact = remainingContacts[randomIndex]
    setContacts([newContact, ...contacts])
  }

  const sortedByName = () => {
    const sortedContacts = contacts.toSorted((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedContacts)
  }
  
  const sortedByPopularity = () => {
    const sortedContacts = contacts.toSorted((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts)
  }

  const deleteContact = (id) => {
    console.log("Contact id : " + id)
    const newList = contacts.toSpliced(id, 1)
    setContacts(newList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button name="addContact" onClick={addRandomContact}>Add random contacts</button>
      <button name="sortedByPopularity" onClick={sortedByPopularity}>Sort by popularity</button>
      <button name="sortedByName" onClick={sortedByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => {
            return (
              <tr key={id} className="card">
                <td>
                  <img src={contact.pictureUrl} alt="Picture profile" className="logo"/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(1)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🌟"}</td>
                <td>
                  <button name="deleteContact" onClick={() => deleteContact(id)}>Delete</button>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
