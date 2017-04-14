## hosting SPA

##### build/run:
```
    install: npm i
    start server: heroku local
```

#### local configuration (.env file):
```
    PORT = 3000
```

#### remote configuration (process.env variables):
```
    Absent so far
```

#### deploy back-end to heroku (after building front-end):
```
    cd ../
    git subtree push --prefix back-end heroku master
```
