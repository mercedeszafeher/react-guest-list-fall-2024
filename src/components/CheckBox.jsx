import React, { useState } from 'react';

export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>Attending</p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.currentTarget.value)}
      />
    </form>
  );
}
