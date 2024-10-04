import { useState } from 'react';
import CheckBox from './CheckBox';

export default function GuestForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const baseUrl = 'http://localhost:4000';

  // Add a guest to the list
  async function addGuest(guest) {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await addGuest({ firstName, lastName });
      }}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        onKeyPress={async (event) => {
          if (event.key === 'Enter') {
            await addGuest({ firstName, lastName }); // Submit on pressing Enter
            setFirstName(''); // Clear the first name
            setLastName(''); // Clear the last name
          }
        }}
      />
      <CheckBox />
      <button>Add Guest</button>
    </form>
  );
}
