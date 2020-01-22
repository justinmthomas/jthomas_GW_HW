// from data.js
var tableData = data;
// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");




function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }
// function buildTable(data) {
//     // First, clear out any existing data
//     //tbody.html("");
//     tableData.forEach(([row]) => {

//     // Append one table row per student/grade
//     var row = tbody.append("tr");
  
//     // append one cell for the student and one cell for the grade
//     row.append("td").text(datetime);
//     row.append("td").text(city);
//     row.append("td").text(state);
//     row.append("td").text(country);
//     row.append("td").text(shape);
//     row.append("td").text(durationMinutes);
//     row.append("td").text(comments);
//   });
// }

buildTable(tableData);
// // YOUR CODE HERE!
