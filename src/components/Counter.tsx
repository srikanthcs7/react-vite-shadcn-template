import { useState } from 'react';
import { Button } from './ui/button';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="flex space-x-2">
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
}