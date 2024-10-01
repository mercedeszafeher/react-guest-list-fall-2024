import React, { useState } from 'react';
import GuestListApi from '../components/GuestListApi.jsx';

export default function GuestsList() {
  const [guests, setGuests] = useState();
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  return (
    <div>
      <div className="addGuest">
        <h1>Welcome to our special Event</h1>
        <h4>
          To add a guest please enter Firstname and Lastname and click Add Guest
        </h4>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setFirstName(firstName);
            setLastName(lastName);
          }}
        >
          <label>
            First name:
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
            />
          </label>
          <label>
            Last name:
            <input
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
            />
          </label>
          <button
            onClick={() => {
              const newGuestId = guests[guests.length - 1].id + 1;
              const newGuest = {
                id: newGuestId,
                firstName: firstName,
                lastName: lastName,
                attending: false,
              };
              setGuests([...guests, newGuest]);
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="guestList">
        {guests.map((guest) => {
          return (
            <div
              key={`guest-${guest.id}`}
              data-test-id="guest"
              className="guestItem"
            >
              <h4>
                {guests.firstName} {guests.lastName}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
