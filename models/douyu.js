/**
 * Created by hzq on 16-7-7.
 */
// Import library
var douyu = require('douyu');
var upload = require('../uploadModel/upload');

exports.douyu = function (roomID) {
// Initialize Room entity
//     var roomID = "bage";
    var values = [];
    var room = new douyu.ChatRoom(roomID);

// System level events handler
    room.on('connect', function(message){
        console.log('DouyuTV ChatRoom #' + roomID + ' connected.');
    });
    room.on('error', function(error){
        console.error('Error: ' + error.toString());
    });
    room.on('close', function(hasError){
        console.log('DouyuTV ChatRoom #' + roomID + ' disconnected' + hasError ? ' because of error.' : '.');
    });

// Chat server events
    room.on('chatmsg', function(message){
        message.ctime = new Date().getTime();
        values.push(message);
        if(values.length > 100){
            upload.uploadServe(roomID, 'douyu', values);
            console.log(roomID + ' 完成')
        }
        // console.log('[' + message.nn + ']: ' + '---level: ' + message.level + '---rid: ' + message.rid + '---uid: ' + message.uid + '---type: ' + message.type + message.txt);

    });

// Knock, knock ...
    room.open();    
}
