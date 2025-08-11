// A global variable to store the data after it's been fetched once.
let globalData;

/**
 * @description Initializes the dashboard by fetching data, populating the dropdown, and drawing the initial graph.
 */
function init() {
  d3.json("glucose.json").then((data) => {
    // Store the fetched data in the global variable.
    globalData = data;

    // Extract unique dates from the timestamps.
    const allDates = data.map(item => item.timestamp.slice(0, 10));
    const uniqueDates = [...new Set(allDates)];

    // Populate the dropdown menu.
    const selector = d3.select("#selDataset");
    
    // Add the 'All' option first.
    selector.append("option").text("All").property("value", "All");
          
    // Add unique dates to the dropdown.
    uniqueDates.forEach((uniqueDate) => {
        selector
            .append("option")
            .text(uniqueDate)
            .property("value", uniqueDate);
    });
   
    // Draw the initial graph with all data.
    plotGraph("All");
  });
}

/**
 * @description Event handler for when the user selects a new date.
 * @param {string} selectedDate The date chosen by the user.
 */
function optionChanged(selectedDate) {
    // Use the globally stored data to avoid re-fetching.
    plotGraph(selectedDate);
}

/**
 * @description Filters the data and plots the line graph using Plotly.
 * @param {string} dateChoosen The date to filter the data by.
 */
function plotGraph(dateChoosen) {
    let filteredData = globalData;
    if (dateChoosen !== "All") {
          filteredData = globalData.filter(item => item.timestamp.startsWith(dateChoosen));
    }
    
    const xData = filteredData.map(item => item.timestamp);
    const yData = filteredData.map(item => item.measurement);
  
    const trace1 = {
        x: xData,
        y: yData,
        type: "scatter",
        mode: "lines",
        name: "Glucose"
    };
 
    const plotData = [trace1];
 
    const layout = {
        title: `Glucose Measurement on ${dateChoosen}`,
        xaxis: { title: 'Timestamp' },
        yaxis: { title: 'Measurement' },
        // Make the graph responsive to the container size.
        responsive: true
    };

    Plotly.newPlot("line", plotData, layout);
}

// Add an event listener to handle window resizing
window.addEventListener('resize', () => {
    Plotly.relayout('line', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
});
// Initialize the dashboard.
init();
