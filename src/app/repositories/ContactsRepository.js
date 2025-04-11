const { randomUUID } = require('node:crypto');

let contacts = [
  {
    id: randomUUID(),
    name: 'John Doe',
    email: 'johndoe@test.com',
    phone: '123456789',
    category_id: randomUUID(),
  },
  {
    id: randomUUID(),
    name: 'John Doe 2',
    email: 'johndoe@test.com',
    phone: '123456789',
    category_id: randomUUID(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id)),
    );
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.email === email)),
    );
  }

  update(id, { name, phone, email, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        phone,
        email,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact,
      );

      resolve(updatedContact);
    });
  }
  create({ name, phone, email, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: randomUUID(),
        name,
        phone,
        email,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
