// // Using jQuery (support for older browsers)
// $(function () {
//     endpoint = 'ws://' +
//         window.location.host +
//         '/ws/new-user/'

//     // 1. Use ReconnectingWebSocket (auto-reconnect upon disconnect)
//     var socket = new ReconnectingWebSocket(endpoint) // 2
//     // 2. Use default WebSocket
//     // var socket = new WebSocket(endpoint) // 2

//     // 3
//     socket.onopen = function (e) {
//         console.log("open", e);
//     }

//     socket.onerror = function (e) {
//         console.log("error", e)
//     }

//     socket.onclose = function (e) {
//         console.log("close", e)
//     }

//     socket.onmessage = function (e) {
//         console.log("message", e)
//         var userData = JSON.parse(e.data)
//         $('#new_user').html(userData.html_users)
//     }
// });

// // Using vanilla JavaScript (preferred, but lack support for older browsers)
document.addEventListener("DOMContentLoaded", function(event) { 
    
    endpoint = 'ws://' +
        window.location.host +
        '/ws/new-user/'

    // 1. Use ReconnectingWebSocket (auto-reconnect upon disconnect)
    // const socket = new ReconnectingWebSocket(endpoint) // 2
    // 2. Use default WebSocket
    const socket = new WebSocket(endpoint) // 2

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