$(document).ready(function() {
  const csvFile = '../data/classes.csv';

  function buildClassesTable() {
    fetch(csvFile)
      .then(response => response.text())
      .then(data => {
        // Split the CSV data into rows
        const rows = data.trim().split('\n');

        // Create the table
        const table = $('<table>');
        table.append($('<tr>').addClass('noMobile')
          .append($('<td>').text('Number'))
          .append($('<td>').text('Name'))
          .append($('<td>').text('Language')));

        // Iterate through the rows and create table cells
        for (let i = 1; i < rows.length; i++) {
          const cells = rows[i].split(',');
          const dataRow = $('<tr>');
          dataRow.append($('<td>').text(cells[0]));
          dataRow.append($('<td>').text(cells[1]));
          dataRow.append($('<td>').text(cells[2]));
          table.append(dataRow);
        }

        $('main').append(table);
      })
      .catch(error => console.error('Error:', error));
  }

  buildClassesTable();
});
