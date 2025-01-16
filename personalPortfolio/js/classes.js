$(document).ready(function() {
  // const csvFile = '../data/classes.csv'; Works locally, not on github pages
  const csvFile = 'https://nelskev.github.io/personalPortfolio/data/classes.csv';
  const $existingTable = $('table.classTable'); 

  function buildClassesTable() {
    fetch(csvFile)
      .then(response => response.text())
      .then(data => {
        // Split the CSV data into rows
        const rows = data.trim().split('\n');

        // Iterate through the rows and create table cells
        for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].split(',');
          const dataRow = $('<tr>');
          dataRow.append($('<td>').text(cells[0]));
          dataRow.append($('<td>').text(cells[1]));
          dataRow.append($('<td>').text(cells[2]));
          $existingTable.append(dataRow);
        }
      })
      .catch(error => console.error('Error:', error));
  }

  buildClassesTable();
});
