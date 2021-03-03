const { Router} = require('express');
const router = Router();

const hoteles = require('../../data.json');



router.get('/hoteles', (req, res) => {
        res.json(hoteles);

});

module.exports = router;