const express = require('express');
const router = express.Router();

const menuControllers = require('../controllers/menu-controler');

router.get('/', menuControllers.getMenu);

router.get('/:sectionId', menuControllers.getMenuSection);

router.get('/:sectionId/:itemId', menuControllers.getMenuItem);
module.exports = router;
