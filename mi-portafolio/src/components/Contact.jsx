import React from 'react';

const Contact = () => {
  return (
    <section>
      <h1>Contacto</h1>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
