/**
 * Created by hzq on 16-7-7.
 */
var path = require('path');

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,
    topn:30,
    
    upload: {
        path: path.join(__dirname, 'public/images/'),
        url: '/public/upload/',
        uploadurl: 'http://120.27.94.166:2999/'
    }
    
    
};

module.exports = config;
