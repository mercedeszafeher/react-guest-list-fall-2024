import { useEffect, useState } from 'react';
import GuestItem from '../components/GuestItem';
import * as guestListApi from '../components/GuestListApi.js';
import CheckBox from './CheckBox';

export default function GuestList() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all guests
  useEffect(() => {
    guestListApi
      .getAllGuests() // Call API to get all guests
      .then((allGuests) => {
        setGuests(allGuests); // Set guests once the data is received
        setLoading(false); // Set loading to false after guests are set
      })
      .catch((error) => {
        console.error('Error fetching guests:', error); // Log the error if the API fails
        setLoading(false); // Also set loading to false if there's an error
      });
  }, []);

  // Handle adding a new guest
  const handleAddGuest = async (firstName, lastName) => {
    await guestListApi
      .addGuest({ firstName, lastName }) // Add a new guest via API
      .then((newGuest) => {
        setGuests((prevGuests) => [...prevGuests, newGuest]); // Add the new guest to the existing list
      })
      .catch((error) => {
        console.error('Error adding guest:', error); // Log any error during the guest addition
      });
  };

  // Handle deleting a guest
  const handleDeleteGuest = async (id) => {
    await guestListApi
      .deleteSingleGuest(id) // Call API to delete a guest
      .then(() => {
        setGuests((prevGuests) =>
          prevGuests.filter((guest) => guest.id !== id),
        ); // Remove the deleted guest from the list
      })
      .catch((error) => {
        console.error('Error deleting guest:', error); // Log any error during guest deletion
      });
  };

  // Handle updating a guest's attending status
  const handleUpdateGuest = async (id, attending) => {
    await guestListApi
      .updateGuestInfo(id, attending) // Update guest attending status via API
      .then(() => {
        setGuests((prevGuests) =>
          prevGuests.map((guest) => {
            guest.id === id ? { ...guest, attending } : guest;
          }),
        );
      })
      .catch((error) => {
        console.error('Error updating guest info:', error); // Log any error during guest update
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="guestList">
      {guests.map((guest) => (
        <GuestItem
          key={`guest-${guest.id}`}
          guest={guest}
          deleteGuest={handleDeleteGuest}
          updateGuest={handleUpdateGuest}
          addGuest={handleAddGuest}
        />
      ))}
      <CheckBox />
    </div>
  );
}
