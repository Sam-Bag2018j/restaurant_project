
const cach_name = 'restaurant_version2';
//array for all files to cache it
const cach_assets = [
    '/',
    'js/main.js',
    '/restaurant.html',
    'js/restaurant_info.js',
    'js/dbhelper.js',
    'css/styles.css',
    'data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',

];

// install event
self.addEventListener('install', event => {
    console.log('successfully installed serviceworker');

    event.waitUntil(
        caches.open(cach_name).then(function (cach) {
            console.log(cach);
            return cach.addAll(cach_name);
        }).catch(error => {
            console.log(error);
        })
    );
});
            //return Promise.all(
                //caches_names.filter(function (cachName){
                    //return cachName.startsWith('restaurant_')&&
                  //  cachName != cach_name;
                //}).map(function (cachName){
               //         return caches.delete(cachName);
             //        
           //     })
         //   );
       // })
            //.open(cach_name)
            //.then(cache => {
             //   console.log('caching the files of service worker');
              //  return cache.addAll(cach_assets);
            //}).catch(error => {
             //   console.log(error);
           // })
        // .then(() => self.skipWaiting())
   // );
//});
// active event
self.addEventListener('activate', event => {
    console.log('successfully activated serviceworker');
    event.waitUntil(
        caches.keys().then(caches_names => {
            return Promise.all(
                caches_names.filter(function (cachName) {
                    return cachName.startsWith('restaurant_') &&
                        cachName != cach_name;
                }).map(function (cachName) {
                    return caches.delete(cachName);


                })
                /* caches_names.map(cache => {
                     if (cache !== cach_name) {
                         return caches.delete(cache);*/


            );
        })
    );

});
//fetch event
self.addEventListener('fetch', function (event) {
    console.log("fetching");
    event.respondWith(
        //caches.open(cach_name).then(cache => {
           /* return*/ caches.match(event.request).then(function (response) {
        return response || fetch(event.request);//.then(function (response) {
        //cache.put(event.request, response.clone());
        //  return response;
    })
        // });

        //  })
    );
});