const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData =  await Category.findAll()
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try { 
    const oneCategory = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        where: {
          category_id: req.params.id
        }
      }
    })
    res.status(200).json(oneCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
      const newCategory = await Category.create({
        category_name: req.body.category_name
      });
      res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try { 
    const categoryData = await Category.update({
      where: {
        id: req.params.id
      }
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try { 
    const categoryData = await Category.destroy(req.body,
      {
      where: {
        id: req.params.id
      }
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
