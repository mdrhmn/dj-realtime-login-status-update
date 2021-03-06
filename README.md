# Django Real-Time Login Status Updates

Repository for creating users’ online-offline status real-time updates using Django Channels web socket and Redis. his side-project serves as a prototype/proof-of-concept for developing a real-time chatroom for mental health experts to communicate with Arduino smart watch users as part of my Final Year Project (FYP) titled 'Fitweet: Arduino-based Smart Watch for Early Anticipatory Anxiety Notification System'.

## Run Project Locally

To run this app in your local environment, run the following preferably in a virtual environment:

```
pip install -r requirements.txt
```

The app can now be viewed at `localhost:8000` or preferably `127.0.0.1`.

## Running Redis

Redis is used as a backing store for Channels. Like an in-memory cache. 

### Using Docker

If you don't have Docker installed on your computer, you need to install it before you can continue. When you have Docker running, you can run this command to start the redis server:

```
docker run --name <CONTAINER_NAME> -p 6379:6379 -d redis
```

### Using Homebrew (Mac)

If you don’t have Homebrew, install it with the following command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

Once Redis is installed using Homebrew, use Homebrew to launch it:

```
brew services start redis
```

To stop Redis using Homebrew:

```
brew services stop redis
```

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