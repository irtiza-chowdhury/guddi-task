// eslint-disable-next-line import/no-extraneous-dependencies
import { get, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import StartFirebase from '../firebase';

export default function useRooms() {
  const [error, setError] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const db = StartFirebase();
      const roomRef = ref(db, 'room');
      const roomQuery = query(roomRef, orderByKey());

      try {
        setError(false);

        const snapshot = await get(roomQuery);

        if (snapshot.exists()) {
          setRooms((prevrooms) => [...prevrooms, ...Object.values(snapshot.val())]);
        }
      } catch (err) {
        console.log(err);

        setError(true);
      }
    }

    fetchVideos();
  }, []);

  return {
    error,
    rooms,
  };
}
