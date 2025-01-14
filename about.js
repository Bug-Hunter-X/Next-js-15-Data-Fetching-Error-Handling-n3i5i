```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error if the data fetching fails.
  const data = fetchData(); 

  return (
    <div>
      <h1>About Page</h1>
      <p>Some information about the app...</p>
      <p>Data from API: {JSON.stringify(data)}</p> 
    </div>
  );
}

async function fetchData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Or handle the error appropriately
  }
}
```
```javascript
//pages/api/data.js

export default function handler(req, res) {
  // Simulate an API error occasionally
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```