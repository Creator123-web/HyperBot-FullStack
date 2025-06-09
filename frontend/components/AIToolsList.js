import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AIToolsList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // example dummy fetch or static list
    setTools([
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'MidJourney', url: 'https://www.midjourney.com' }
    ]);
  }, []);

  return (
    <div>
      <h2>AI Tools List</h2>
      <ul>
        {tools.map((tool, i) => (
          <li key={i}><a href={tool.url} target="_blank" rel="noreferrer">{tool.name}</a></li>
        ))}
      </ul>
    </div>
  );
}
