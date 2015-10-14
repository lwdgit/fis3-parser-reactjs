'use strict';

var react = require('jstransform/simple');

module.exports = function(content,file){
    try {
        return react.transform(content, {
           react: true,
           es6: true,
           es7: true,
           harmony: true,
           target: 'es3'//for ie8
        }).code;
    } catch(e) {
        fis.log.error(file.toString(), e);
        return '';
    }
};
