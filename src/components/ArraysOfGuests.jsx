import React, { useState } from 'react';

export default function ArrayOfGuests() {
  const [guests, setGuests] = useState();
  return (
    <div>
      {guests.map((guest) => {
        return (
          <div key={`guest-${guest.id}`}>
            <h4>
              {guest.name.first} {guest.name.last}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
