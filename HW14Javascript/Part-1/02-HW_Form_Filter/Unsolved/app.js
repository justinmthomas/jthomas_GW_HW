// Assign the data from `data.js` to a descriptive variable
var patients = data;

// Select the button
var button = d3.select("#button");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // Use the form input to filter the data by blood type

  function filterPatients(patients) {
    return patients.bloodType == inputValue;
  }
  var filteredPatients = patients.filter(filterPatients);
  console.log(filteredPatients);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var ages = filteredPatients.map(age => age.age);
  console.log(ages)

// Use math.js to calculate the mean, median, mode, var, and std of the ages
var mean = math.round(math.mean(ages));

//median
var median = math.median(ages);

//mode
var mode = math.mode(ages);

//variance
var variance = math.var(ages);

//stnd dev

var standardDev = math.std(ages);

console.log("Mean ", mean, " | Median: ", median, " | Variance: ", variance, " | Standard Deviation: ", standardDev);


// Select the unordered list element

var list = d3.select(".summary");

// Add the summary stats to the `ul` tag
var myDiv = d3.select('.summary').append("li").text("Blood Type:"  + inputValue)
                                 .append("li").text("Average Age:" + mean)
                                 .append("li").text("Median Age:"  + median)
                                 .append("li").text("Modal Age:"    + mode)
                                 .append("li").text("Age Variance: " + variance)
                                 .append("li").text("Age Standard Deviation: " + standardDev);
});