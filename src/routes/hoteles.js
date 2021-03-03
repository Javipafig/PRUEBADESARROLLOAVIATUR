const { Router} = require('express');
const router = Router();

const hoteles = require('../../data.json');
console.log(hoteles);

router.get('/', (req, res) => {
        res.send('hoteles');

});

module.exports = router;