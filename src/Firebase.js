const FIREBASE_URL = 'https://awesomerestaurant-3b117.firebaseio.com/records.json?auth=tZc3gQVSqmuA49ogucX1m932vHW8k8C6naHV3yJC'

const save = async data => fetch(FIREBASE_URL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data), // body data type must match 'Content-Type' header
})

const read = async () => {
    const res = await fetch(FIREBASE_URL)
    return await res.json()
}

export default {
    save,
    read,
}