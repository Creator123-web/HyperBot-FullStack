import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CodingPractice() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/coding`)
      .then(res => setProblems(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Coding Challenges</h2>
      <ul className="space-y-2">
        {problems.map(problem => (
          <li key={problem.id} className="p-2 border rounded">
            <strong>{problem.title}</strong> | {problem.difficulty}
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
