const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    if (!categories) {
      return response.status(500).json({ error: 'Error fetching categories' });
    }
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({ name });

    if (!category) {
      return response.status(500).json({ error: 'Error creating category' });
    }

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findById(id);
    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const category = await CategoryRepository.update(id, { name });

    if (!category) {
      return response.status(500).json({ error: 'Error updating category' });
    }

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }
    const deletedCategory = await CategoryRepository.delete(id);

    if (!deletedCategory) {
      return response.status(500).json({ error: 'Error deleting category' });
    }

    response.json(deletedCategory);
  }
}

module.exports = new CategoryController();
