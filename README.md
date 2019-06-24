# Sofive webapp

### Prod

```bash
git fetch --all; git reset --hard origin/master; cd public; sed -i 's/localhost:8080/app.sofive.com:8080/g' *.html js/*.js;sed -i 's/http:\/\/localhost/http:\/\/app.sofive.com/g' *.html js/*.js; sudo pm2 reload 0
```

#### HTTPS

```bash
git fetch --all; git reset --hard origin/master; cd public; sed -i 's/http:\/\/localhost/https:\/\/app.sofive.com/g' *.html js/*.js; sudo pm2 reload 0
```