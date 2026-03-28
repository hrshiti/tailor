const express = require('express');
const {
    createStyleAddon,
    getStyleAddons,
    updateStyleAddon,
    deleteStyleAddon
} = require('../controllers/styleAddon.controller');

const router = express.Router();

router.route('/')
    .post(createStyleAddon)
    .get(getStyleAddons);

router.route('/:id')
    .put(updateStyleAddon)
    .delete(deleteStyleAddon);

module.exports = router;
