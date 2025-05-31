const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`,
    );

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);

    if (deleteOp.rowCount === 0) {
      throw new Error('Contact not found');
    }

    return { id };
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);

    return row;
  }

  async update(id, { name, phone, email, category_id }) {
    const [row] = await db.query(
      `UPDATE contacts
       SET name = $1, phone = $2, email = $3, category_id = $4
       WHERE id = $5
       RETURNING *`,
      [name, phone, email, category_id, id],
    );

    if (!row) {
      throw new Error('Contact not found');
    }
    return row;
  }

  async create({ name, phone, email, category_id }) {
    const [row] = await db.query(
      'INSERT INTO contacts (name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone, category_id],
    );

    return row;
  }
}

module.exports = new ContactsRepository();
