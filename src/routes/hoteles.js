const { Router} = require('express');
const router = Router();

const hoteles = require('../../data/data.json');



router.get('/hoteles', (req, res) => {
        res.json(hoteles);

});

module.exports = router;
