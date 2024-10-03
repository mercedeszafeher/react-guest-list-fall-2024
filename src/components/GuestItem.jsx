export default function GuestItem({ guest, deleteGuest, updateGuest }) {
  const { id, firstName, lastName, attending } = guest;

  return (
    <div data-test-id="guest" className="guestItem">
      <h4>{`${firstName} ${lastName}`}</h4>
      <input
        type="checkbox"
        checked={attending}
        aria-label={`${firstName} ${lastName} attending status`}
        onChange={() => updateGuest(id, !attending)}
      />
      <button
        onClick={() => deleteGuest(id)}
        aria-label={`Remove ${firstName} ${lastName}`}
      >
        Remove
      </button>
    </div>
  );
}
