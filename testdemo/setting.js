/**
 * Created by alvayin on 2016/8/26.
 */
(function(){
    var width = window.innerWidth,
        height = parseInt(parseInt(width* (9/16) )),//parseInt()解析一个字符串并返回一个整数
        height = height > window.innerHeight ? window.innerHeight : height;
    window.tvpSetting = {
        width: width,
        height: height,
        vid: 'l0171ne1fjx',
        vid2: 'o0171fmfwmf',
        vid_limit: 'z0016v1ocio',//
        vid_short: 'f162169s71x',//
        lid: '123002500'//
    };
})();