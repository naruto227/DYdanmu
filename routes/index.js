var express = require('express');
var router = express.Router();
var EventEmitter = require('events').EventEmitter;
var myEvents = new EventEmitter();
var douyu = require('../models/douyu');
/* GET home page. */
var start = false;

router.get('/', function (req, res, next) {
    if(start)
        res.render('index', {title: 'Express already start'});
    start = true;
    var rooms = ["138286", "65251", "56040", "154537", "10903", "4809", "335166", "93912", "247634", "321358"];
    rooms.forEach(function (room_id) {
        myEvents.emit('danmu',room_id);
    });
    res.render('index', {title: 'Express'});
});

myEvents.on('danmu',function (room_id) {
    douyu.douyu(room_id);
})

module.exports = router;
