import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/entries'); // Replace with your actual backend URL
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newEntry.trim() !== '') {
      try {
        await axios.post('http://localhost:3000/api/entries', { entry: newEntry }); // Replace with your actual backend URL
        await fetchEntries(); // Fetch updated entries after submission
        setNewEntry('');
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    }
  };

  return (
    <div>
      <h2>Guestbook</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Guestbook;
