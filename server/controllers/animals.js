const getAnimal = (req, res) => {
    res.status(200).json('GET')
};

const postAnimal = (req, res) => {
    res.status(200).json('POST')
};

const updateAnimal = (req, res) => {
    res.status(200).json('UPDATE')
};

const deleteAnimal = (req, res) => {
    res.status(200).json('DELETE')
};

module.exports = {
    getAnimal,
    postAnimal,
    updateAnimal,
    deleteAnimal
}