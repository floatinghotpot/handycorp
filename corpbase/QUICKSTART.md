# Step1: loopback & angularjs

```bash
npm install -g strongloop

slc loopback
[?] name? corpbase
[?] folder: corpbase

slc loopback:model Chat
[?] name: Chat
[?] data source: db (memory)
[?] base class: PersistedModel
[?] Expose via REST? Y
[?] plural? [leave blank]
[?] property:
id, number
name, string
lastText, string
face, string

mv server/boot/root.js server/boot/root.js.default
mkdir client/js
lb-ng server/server.js client/js/corpbase.js
```
index.html
```html
<script src="http://0.0.0.0:3000/js/corpbase.js"></script>
```

# Step2: loopback & mongodb

```bash
sudo port -v install mongodb  (mac)
sudo apt-get install mongodb (linux)

npm install loopback-connector-mongodb --save

slc loopback:datasource [mongoDS]
[?] name: mongoDS
[?] MongoDB
```

/server/datasources.json

```javascript
{
  "mongoDS": { 
    "name": "mongoDS",
    "connector": "mongodb",
    "host": "127.0.0.1", 
    "database": "devDB", 
    "username": "devUser", 
    "password": "devPassword", 
    "port": 27017 
  }
}
```



