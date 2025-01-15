const csvFile = '../data/classes.csv';

function buildClassesTable() {
  fetch(csvFile)
    .then(response => response.text())
    .then(data => {
      const parsedData = Papa.parse(data, { download: true, header: true }).data;

      const table = $('<table>');
      table.append($('<tr>').addClass('noMobile')
        .append($('<td>').text('Number'))
        .append($('<td>').text('Name'))
        .append($('<td>').text('Language')));

      parsedData.forEach(row => {
        const dataRow = $('<tr>');
        dataRow.append($('<td>').text(row.Number));
        dataRow.append($('<td>').text(row.Name));
        dataRow.append($('<td>').text(row.Language));
        table.append(dataRow);
      });

      $('main').append(table);
    })
    .catch(error => console.error('Error:', error));
}

buildClassesTable();
