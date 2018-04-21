google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1BhWtH6gLFCkWI2Z-35BdNZ9oAm8LcInuWrK3i_sspfs');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, AG order by AG desc limit 25 label A "Nazwa Zastępu", B "Drużyna", C "Umundurowanie", D "Proporzec", E "Liczebność", F "Sprawność Turniejowa", G "Obozowisko", H "W dowód patriotyzmu", I "Z polecenia Geografa", J "Zielarz w opałach", K "W ukryciu przed wrogiem", L "W dowód patriotyzmu", M "W obliczu niebezpieczeństwa", N "Ranny Strzelec", O "Elminacja Transportu", P "Ukryty wśród drzew", Q "Jeden za wszysktich...", R "Sokole oko", S "By zdobyć szczyt ideałów", T "Rzeka historii", U "Jest 10 praw", V "Gra główna", AG "Suma punktow"');
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
