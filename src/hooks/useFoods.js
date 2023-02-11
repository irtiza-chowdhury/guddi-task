// eslint-disable-next-line import/no-extraneous-dependencies
import { get, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import StartFirebase from '../firebase';

export default function useFoods() {
  const [error, setError] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const db = StartFirebase();
      const foodRef = ref(db, 'food');
      const foodQuery = query(foodRef, orderByKey());

      try {
        setError(false);

        const snapshot = await get(foodQuery);

        if (snapshot.exists()) {
          setFoods((prevfoods) => [...prevfoods, ...Object.values(snapshot.val())]);
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
    foods,
  };
}
