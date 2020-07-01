**Activate the virtual enviornment**

```
blockchainenv\Scripts\activate
```
**Install all packages**
```
pip install -r requirements.txt
```

*** Run the test ***
Make sure to activate vitual enviornment
```
python -m pytest backend\tests
```

*** Run the app ***
Make sure to activate vitual enviornment

```
python -m backend.app
```

*** Run a peer instance ***
```

$env:SEED_DATA="True"   
python -m backend.app

```

**Run the frontend**

In the frontend directory:
```
npm run start
```



**Seed the backend with data**

Make sure to activate the virtual environment.

```
export SEED_DATA=True && python -m backend.app
```

