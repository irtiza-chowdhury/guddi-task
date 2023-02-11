// eslint-disable-next-line import/no-extraneous-dependencies
import { get, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import StartFirebase from '../firebase';

export default function useTransports() {
  const [error, setError] = useState(false);
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const db = StartFirebase();
      const transportRef = ref(db, 'transport');
      const transportQuery = query(transportRef, orderByKey());

      try {
        setError(false);

        const snapshot = await get(transportQuery);

        if (snapshot.exists()) {
          setTransports((prevtransports) => [...prevtransports, ...Object.values(snapshot.val())]);
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
    transports,
  };
}
