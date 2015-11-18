/**
 * Created with JetBrains WebStorm.
 * User: yuyu
 * Date: 13-8-26
 * Time: 上午10:12
 * To change this template use File | Settings | File Templates.
 */

//make_request('/path/to/page.html', {a:1, b:2, c:3}, function(response) {
// do something with the response
//});

var XHRUtil = function () {

};
/**
 *
 * @param url     地址
 * @param data    数据
 * @param target  返回的数据需要回调的对象
 * @param done    回调对象target里的函数名字（可以没有，默认为updataXHR)
 */
XHRUtil.requestGet = function (url, data, target, done) {

    // initialize XMLHttpRequest object here
    var http = new XMLHttpRequest();


    // build query string / URL
    // this should be moved in its own function
    var kv = [];
    for (var prop in data) {
        kv.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]));
    }
    url = url + (url.indexOf('?') === -1 ? '?' : '&') + kv.join('&');
    cc.log("url=>" + url);
    http.open('GET', url);
    sys.garbageCollect();

    http.onreadystatechange = function () {
        if (http.readyState == 4) {
            done = done || "updataXHR"
            if (target && target[done]) {
                target[done](http.responseText); // call callback
            }

        } else {
            cc.log("ERROR http state = " + http.readyState);
        }

    };

    http.send();
    sys.garbageCollect();
}