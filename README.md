# Django Real-Time Login Status Updates

Repository for creating users’ online-offline status real-time updates using Django Channels web socket and Redis.

## WebSockets 101

Normally, Django uses HTTP to communicate between the client and server:

1. The client sends an HTTP request to the server.
2. Django parses the request, extracts a URL, and then matches it to a view.
3. The view processes the request and returns an HTTP response to the client.

Unlike HTTP, the WebSockets protocol allows bi-directional communication, meaning that the server can push data to the client without being prompted by the user. With HTTP, only the client that made a request receives a response. With WebSockets, the server can communicate with multiple clients simultaneously. 

The following shows the architecture of WebSockets using Django Channels:

![alt](https://heroku-www-files.s3.amazonaws.com/django-channels/django-wsgi.png)

## References

1. [Django Channels - Updating the user’s online real-time status online](https://itzone.com.vn/en/article/django-channels-for-example-updating-the-users-online-real-time-status-online/)
    - This extensive guide serves as the foundation for this project
    - However, because the guide was written back in 2019, some of the code implementations are wrong and faulty. Necessary modifications were made to successfully run the project.
    - Although the author provides a GitHub repository, unfortunately the repository has been deleted.
2. [ReconnectingWebSocket](https://github.com/joewalnes/reconnecting-websocket)
   - A small JavaScript library that decorates the WebSocket API to provide a WebSocket connection that will automatically reconnect if the connection is dropped.
   - One of the dependencies of the above tutorial that was not included.