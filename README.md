# Django Real-Time Login Status Updates

Repository for creating users’ online-offline status real-time updates using Django Channels web socket and Redis.

## Run Project Locally

To run this app in your local environment, run the following preferably in a a virtual environment:

```
pip install -r requirements.txt
```

The app can now be viewed at `localhost:8000` or preferably `127.0.0.1`.

## Running Redis on Docker

Redis is used as a backing store for Channels. Like an in-memory cache. I'm going to use Docker to install and run a Redis server.

If you don't have Docker installed on your computer, you need to install it before you can continue. When you have Docker running, you can run this command to start the redis server:

`docker run -p 6379:6379 -d redis:5`

## Building a Docker Image

To build a Docker image of this application and run it, do the following:

1. Install Docker
2. Build the image using the following:
   ```
   docker build -t <NAME> .
   ```
   - The t flag indicates the name for this image (an optional tag is also possible using the name:tag syntax)
   - The . at the end refers that the Dockerfile is in the current directory (ensure that the image is built when in this project directory)
3. Run the built image using the following:
   ```
   docker run -p 8501:8501 <NAME>
   ```
   - The p flag indicates publishing the exposed port to the host interface.
   - 8501:8501 refers to the binding of the host port to the exposed container port.
   - With this, once the container has started, the application can be viewed at `localhost:8501`.

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
3. [Deploying Docker on Heroku](https://www.youtube.com/watch?v=tTwGdUTR5h8)
    - This YouTube tutorial guides on how to deploy a Docker containers in Heroku, should you decide to deploy it in that manner.