// from data.js
var tableData = data;

// get table references from HTML

var tbody = d3.select("tbody");

//Build initial data from data.js using foreach
function buildTable(data) {
 

 //loop through each row and append sightings to initial table 
data.forEach((sightings) => {
 
    var row = tbody.append("tr");

    
    Object.values(sightings).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
// function to handle clicking on date button

function handleClick() {

  // set variable with entered date
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

 // create new variable with just filtered date data using arrow function which acts kind of like a regular expression
  if (date) {

    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
 
  buildTable(filteredData);
}

// Listen for clicks and form data change
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
