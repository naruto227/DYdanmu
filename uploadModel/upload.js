/**
 * Created by hzq on 16-7-7.
 */
var request = require('request');
var config = require("../config.js");

exports.uploadServe = function (room_id, platform, data) {
    var options = {
        headers: {"Connection": "close"},
        url: config.upload.uploadurl + "dm?platform=" + paltform +
        "&room_id=" + room_id,
        method: 'POST',
        json: true,
        body: {data: data}
    };
    request(options,function (err,response,body) {
        if(!err && response.status == 200){
            console.log('-------info--------' + body);
        }
    })
}