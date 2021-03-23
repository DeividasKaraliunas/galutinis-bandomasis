const {Router} = require('express');

const router = Router();

router.get('/', (req,res) => {
 res.send("GET")
});

router.post('/', (req,res) => {
     res.send("POST")
});

router.patch('/:id', (req,res) => {
    res.send("UPDATE") 
});

router.delete('/:id', (req,res) => {
     res.send("DELETE")
});

module.exports = router;