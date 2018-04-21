google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1BhWtH6gLFCkWI2Z-35BdNZ9oAm8LcInuWrK3i_sspfs');
    query.setQuery('SELECT A, B, W, X, Y, Z, AA order by AA desc label A "Nazwa Zastępu", B "Drużyna", W "Smak", X"Wygląd",Y "Okrzyk",Z "Kuchnia",AA"Konkurs Kulinarny" ');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
