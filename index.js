'use strict';

var react = require('jstransform/simple');

module.exports = function(content,file, conf){
    conf = conf || {};
    conf.react = true;
    conf.es6 = true;
    conf.es7 = true;
    conf.harmony = true;
    conf.target = conf.target || 'es3';//for ie8
    conf.sourceMap = conf.sourceMap === true ? true : false;
    conf.sourceMapInline = conf.sourceMapInline === false ? false : conf.sourceMap ? true : false;
    
    try {
        return react.transform(content, conf).code;
    } catch(e) {
        fis.log.warn(file.toString(), e);
        process.stdout.write('\x07');
        return '';
    }
};
