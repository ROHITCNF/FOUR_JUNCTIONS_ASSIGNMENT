# Movie Management Application 🎬

## Overview
This is a full-stack application that allows users to manage a movie database. Users can view all existing movies, edit movie details, and add new movies. If a producer or cast is not already in the database, they can be added dynamically during movie creation.

---

## Features
1. **View Movies**: Displays all movies stored in the database on the home page.
2. **Edit Movie Details**: Update details such as name, rating, year, and poster URL of a movie.
3. **Add New Movie**: Create a new movie and dynamically add new producers and casts if they don't exist.
4. **Dynamic Search**: Producers and casts can be searched or selected while creating or editing movies.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB

---

## Project Structure
```plaintext
root
├── client          # React frontend
│   ├── public      # Static assets
│   ├── src         # React components and logic
│   └── package.json
├── server          # Node.js backend
│   ├── controllers # API logic
│   ├── models      # Mongoose schemas
│   ├── routes      # API routes
│   └── package.json
├── README.md       # Project documentation
