```console
% vite build
% docker run -d --init --rm -p 8080:80 --mount type=bind,src=`pwd`/dist,dst=/usr/share/nginx/html --name nginx-container nginx
```

Go to http://localhost:8080/src/hoge and you should see the app running.
