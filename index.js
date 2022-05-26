function loadJSONPSI() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://api.data.gov.sg/v1/environment/psi", true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send();

    req.onload = function () {
        var jsonPSI = JSON.parse(this.responseText);
        var psiReading = jsonPSI["items"][0]["readings"];

        var tbodyContent = ""
        for (var key in psiReading) {

            var psiCentral = psiReading[key]["central"];
            var psiEast = psiReading[key]["east"];
            var psiNational = psiReading[key]["national"];
            var psiNorth = psiReading[key]["north"];
            var psiSouth = psiReading[key]["south"];
            var psiWest = psiReading[key]["west"];

            var tr = "<tr>";
            var psiMetrictd = "<td>" + key + "</td>"
            var psiNationaltd = "<td>" + psiNational + "</td>";
            var psiCentraltd = "<td>" + psiCentral + "</td>";
            var psiWesttd = "<td>" + psiWest + "</td>";
            var psiEasttd = "<td>" + psiEast + "</td>";
            var psiNorthtd = "<td>" + psiNorth + "</td>";
            var psiSouthtd = "<td>" + psiSouth + "</td>";
            var trClose = "</tr>";

            var htmlString = tr
                + psiMetrictd
                + psiNationaltd
                + psiCentraltd
                + psiWesttd
                + psiEasttd
                + psiNorthtd
                + psiSouthtd
                + trClose;

            tbodyContent += htmlString;
        }
        // central
        // east
        // national
        // north
        // south
        // west

        // Get the tbody and replace here
        var psiTable = document.getElementById("psi-table");
        var psiTbody = psiTable.querySelector("tbody")

        psiTbody.innerHTML = "<tbody>" + tbodyContent + "</tbody>";
    }
}



window.onload = () => {

    // Get the date
    var date = new Date();

    var dt = date.toLocaleString('en-GB');
    document.getElementById("last-updated").innerHTML = dt;
    loadJSONPSI();
}