# Note Taker Application

- Connect the Backend of the note taker app with the pre-existing frontend.

## Requirements

- When opening Note Taker user lands on main page with a link button to go to notes page.
- At notes page:
- - Existing notes are in a column on the left
- - Place to end new note Title along with separate place for additional details.
- - When user clicks on delete icon next to existing notes that note is deleted.
- - Save Icon appears when note is finished, when clicked it adds note to existing notes at the left.
- - When user clicks on a note on the left the note an additional details appear on right.
- - After viewing existiing note, if user clicks the `+` icon, they can write a new note in an empty field.

## Connections

- `GET /notes` leads to `notes.html` file.
- `GET *` leads to `index.html` file.
- `/api` leads to `/routes/index.js` file with routes for `GET POST & DELETE`

## Deployed Page

- https://git.heroku.com/note-taker-napoleondd86.git


## Screenshots

[Preview Screenshot](../Develop/public/images/existing-note-screenshot.png)

[Preview Screenshot](../Develop/public/images/new-note-screenshot.png)



