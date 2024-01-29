import React, { useState, useEffect } from 'react';

function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://185.125.91.161:8080/posts');
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив, чтобы выполнить эффект только при монтировании компонента

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data</h1>
      <ul className='first'>
        {data.map (item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts