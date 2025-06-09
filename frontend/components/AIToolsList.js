import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AIToolsList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ai-tools`)
      .then(res => setTools(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">AI Tools</h2>
      <ul className="space-y-2">
        {tools.map(tool => (
          <li key={tool.id} className="p-2 border rounded">
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <strong>{tool.name}</strong>: {tool.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
