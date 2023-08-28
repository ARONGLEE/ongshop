import React from 'react';

interface nickname {
  user: string;
}

export default function User({ user }: nickname) {
  window.console.log(user);
  return <div className="mx-4">{user}</div>;
}
