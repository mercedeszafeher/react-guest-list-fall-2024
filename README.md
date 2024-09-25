# React Guest List Fall 2024

## Description

The Guest List App is a React-based application that allows users to manage a list of guests. Users can add guests with separate first and last name fields, manage their attendance status, and interact with a RESTful API to store and retrieve guest data.

## Features

- **Add a Guest**:
  - Enter a first name and last name in separate input fields.
  - The first name input is labeled "First name" and the last name input is labeled "Last name".
  - Guests are added by pressing Return in the last name input.
  - After adding a guest, both input fields are cleared automatically.
  - Newly created guests are set as "not attending" by default.
- **Guest List Management**:
  - Each guest is displayed within a `<div>` element that includes the attribute `data-test-id="guest"`.
  - A "Remove" button is available to delete a guest.
    - The button contains the text "Remove" and has an `aria-label` that starts with "Remove" (e.g., `Remove John Doe`).
- **Attendance Status**:

  - Each guest has a checkbox to toggle their attendance status.
    - The checkbox has an `aria-label` that includes the text "attending" (e.g., `John Doe attending status`).
    - Clicking the checkbox once sets the guest to "attending", and clicking it again sets them back to "not attending".

- **API Integration**:
  - The app loads the guest list from a specified API on page load.
  - While the guest list is being loaded, a loading message ("Loading...") is displayed, and form fields are disabled.
  - Changes made to the guest list are saved to the API.
