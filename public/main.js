document.addEventListener("DOMContentLoaded", () => {
    fetch("./data.json", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const dataPlot = document.querySelector("#Plot");

        data.forEach(doc => {
            dataPlot.append(JSON.stringify(doc))
        })
    })
})