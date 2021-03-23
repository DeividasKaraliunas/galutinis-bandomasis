const { Router } = require('express');

const {
    getAnimal,
    postAnimal,
    updateAnimal,
    deleteAnimal
} = require('../controllers/animals')

const router = Router();

router.get('/', getAnimal);

router.post('/', postAnimal);

router.patch('/:id', updateAnimal);

router.delete('/:id', deleteAnimal);

module.exports = router;