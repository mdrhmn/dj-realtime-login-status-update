$(function () {
    endpoint = 'ws://' +
        window.location.host +
        '/ws/new-user/'
    '/'
    
    var socket = new ReconnectingWebSocket(endpoint) // 2

    // 3
    socket.onopen = function (e) {
        console.log("open", e);
    }
    socket.onmessage = function (e) {
        console.log("message", e)
    }
    socket.onerror = function (e) {
        console.log("error", e)
    }
    socket.onclose = function (e) {
        console.log("close", e)
    }

    socket.onmessage = function (e) {
        console.log("message", e)
        var userData = JSON.parse(e.data)
        $('#new_user').html(userData.html_users)
    }
});