const express = require('express');
const router = express.Router();
const hoteles = require('../../data/data.json');

router.get('/', (req,res) =>{
    res.render('index.html', { title: 'AVIATUR'});
    
});

router.get('/', (req, res) => {
    res.json(hoteles);

});

module.exports = router;
