document.addEventListener("DOMContentLoaded", () => {

    const dataPlot = document.querySelector("#Plot");
    const nearestUsersPlot = document.querySelector("#nearest-users");

    fetch("./data.json", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {

        data.forEach(doc => {

            activeUsers.push(doc);
            
            const activeUser = document.createElement("div");
            activeUser.style.display = "flex";
            activeUser.style.flexDirection = "column";
            activeUser.style.border = "2px solid black";
            activeUser.style.padding = "8px";
            activeUser.style.width = "100%";
            activeUser.style.maxWidth = "300px";


            const userName = document.createElement('p');
            userName.textContent = doc.name;
            activeUser.append(userName);

            dataPlot.append(activeUser);
        });

        console.log("Current active users: " + activeUsers.length);
    });


});

class nearestSchema {
    constructor(name,distance) {
        this.name = name,
        this.distance = distance
    }
}

function subForm() {

    nearestUsers = []

    // ACCESS ACTIVE USER COORDS 
    const lng = document.querySelector("#longitude").value;
    const lat = document.querySelector("#latitude").value;

    activeUsers.forEach(user => {
        const distance = calculateDistance(lat, lng, user.coords.lat, user.coords.lon).toFixed(2);
        console.log("The distance: " + distance + " Km");

        if (distance < 2.00) {
            const potentialUser = new nearestSchema(user.name, distance)
            nearestUsers.push(potentialUser)
        }
    });

    console.log("Current amount: " + JSON.stringify(nearestUsers));

    showNearest()
}

var nearestUsers = [];
var activeUsers = [];

// CREATE FUNCTION TO SHOW
function showNearest() {
    // ACCESS PLOT FOR NEAREST USERS
    const nearestUsersPlot = document.querySelector("#nearest-users");

    nearestUsers.forEach(user => {

        const activeUser = document.createElement("div");
        activeUser.style.display = "flex";
        activeUser.style.flexDirection = "column";
        activeUser.style.border = "2px solid black";
        activeUser.style.padding = "8px";
        activeUser.style.width = "100%";
        activeUser.style.maxWidth = "300px";

        const userName = document.createElement('p');
        userName.textContent = user.name;
        activeUser.append(userName);

        nearestUsersPlot.append(activeUser);
    })
}

// Haversine Formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
};

function toRadians(degrees) {
    return degrees * Math.PI / 180
}