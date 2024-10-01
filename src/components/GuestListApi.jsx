const baseUrl = 'http://localhost:4000';

// Add a guest to the list
export async function addGuest(guest) {
  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guest),
  });
  const createdGuest = await response.json();
}

// Get all guest from the list
export async function getAllGuests() {
  const response = await fetch(`${baseUrl}/guests`);
  const allGuests = await response.json();
}

// Get a single guest from the list
export async function getSingleGuest(id) {
  const response = await fetch(`${baseUrl}/guests/:id`);
  const guest = await response.json();
}

// Update info for a single guest
export async function updateGuestInfo(id, update) {
  const response = await fetch(`${baseUrl}/guests/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });
  const updatedGuest = await response.json();
}

// Delete a single guest
export async function deleteSingleGuest(id) {
  const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
  const deletedGuest = await response.json();
}
