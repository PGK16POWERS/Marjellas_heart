document.addEventListener("DOMContentLoaded", () => {
    fetch("./data.json", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const dataPlot = document.querySelector("#Plot");

        data.forEach(doc => {
            
            const activeUser = document.createElement("div");
            activeUser.style.display = "flex";
            activeUser.style.flexDirection = "column";
            activeUser.style.border = "2px solid black";
            activeUser.style.padding = "8px";
            activeUser.style.maxWidth = "300px";


            const userName = document.createElement('p');
            userName.textContent = JSON.stringify(doc.name);
            activeUser.append(userName);

            dataPlot.append(activeUser)
        })
    })
})