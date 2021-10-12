$(document).ready(function () {

    endpoint = 'ws://' +
        window.location.host +
        '/ws/new-user/'

    // 1. Use ReconnectingWebSocket (auto-reconnect upon disconnect)
    const socket = new ReconnectingWebSocket(endpoint) // 2
    // 2. Use default WebSocket
    // const socket = new WebSocket(endpoint) // 2

    // 3
    socket.onopen = function (e) {
        console.log("open", e);
    }

    socket.onerror = function (e) {
        console.log("error", e)
    }

    socket.onclose = function (e) {
        console.log("close", e)
    }

    socket.onmessage = function (e) {
        console.log("message", e)
        const userData = JSON.parse(e.data)
        document.querySelector('#new_user').innerHTML = userData.html_users
    }

});