import React from 'react';

function Message({ user }) {
  return (
    <div>
      <h1>Mensaje para el Usuario</h1>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Mensaje:</strong> {user.message}</p>
    </div>
  );
}

export default Message;
