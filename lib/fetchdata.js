function getData() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        var south_africa_data = null;
        var global_data = null;
        if (xhr.readyState === 4) {
            var obj = JSON.parse(xhr.responseText);
            for (let index = 0; index < obj.length; index++) {
                const element = obj[index];
                if (element.country == "South Africa") {
                    south_africa_data = element;
                }
                if (element.country == "World") {
                    global_data = element;
                }
                if (global_data && south_africa_data) {
                    break;
                }
            }

            document.getElementById('south_africa_total_infections').innerHTML = JSON.stringify(south_africa_data.cases);
            document.getElementById('south_africa_infections_today').innerHTML = JSON.stringify(south_africa_data.todayCases);
            document.getElementById('south_africa_currently_infected').innerHTML = JSON.stringify(south_africa_data.active);
            document.getElementById('south_africa_total_recovered').innerHTML = JSON.stringify(south_africa_data.recovered);
            document.getElementById('south_africa_critical').innerHTML = JSON.stringify(south_africa_data.critical);
            document.getElementById('south_africa_total_deaths').innerHTML = JSON.stringify(south_africa_data.deaths);

            document.getElementById('global_total_infections').innerHTML = JSON.stringify(global_data.cases);
            document.getElementById('global_infections_today').innerHTML = JSON.stringify(global_data.todayCases);
            document.getElementById('global_currently_infected').innerHTML = JSON.stringify(global_data.active);
            document.getElementById('global_total_recovered').innerHTML = JSON.stringify(global_data.recovered);
            document.getElementById('global_critical').innerHTML = JSON.stringify(global_data.critical);
            document.getElementById('global_total_deaths').innerHTML = JSON.stringify(global_data.deaths);
        }
    };
    xhr.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries');
    xhr.send();
}

setInterval(function () {
    alert("DATA UPDATED");
}, 10);