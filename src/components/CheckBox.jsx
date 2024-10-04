import React, { useState } from 'react';

export default function CheckBox({ checked, onChange, label }) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>
        Attending
        <input
          type="checkbox"
          checked={isChecked}
          aria-label={label}
          onChange={(event) => {
            setIsChecked(event.target.checked);
            onChange(event.target.checked);
          }}
        />
      </p>
    </form>
  );
}
