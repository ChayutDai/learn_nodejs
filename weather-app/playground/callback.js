
var getUser = (id, callback) =>{
    var user ={
        id: id,
        name: 'Vikram'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (object) => {
    console.log(object);
}); 

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY