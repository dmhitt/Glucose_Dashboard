// A global object to store both datasets
const appData = {};
/**
 * @description Initializes the dashboard by fetching data, populating the dropdown, and drawing the initial graph.
 */
function init() {

    Promise.all([
    d3.json("glucose.json"),
    d3.json("food.json")
  ]).then(function([glucoseData, foodData]) {
 
    // Store the fetched data in the global variable.
    appData.glucose = glucoseData;
    appData.food = foodData;

    // Extract unique dates from the timestamps.
    const allDates = glucoseData.map(item => item.timestamp.slice(0, 10));
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
function plotGraph(selectedDate) {
    let filteredGlucoseData = appData.glucose;
    let filteredFoodData = appData.food;

    // Filter both datasets based on the selected date
    if (selectedDate !== "All") {
        filteredGlucoseData = appData.glucose.filter(item => item.timestamp.startsWith(selectedDate));
        filteredFoodData = appData.food.filter(item => item.event_time.startsWith(selectedDate));
    }

    // Glucose Data Trace (the line graph)
    const glucoseTrace = {
        x: filteredGlucoseData.map(item => item.timestamp),
        y: filteredGlucoseData.map(item => item.measurement),
        mode: 'lines+markers',
        name: 'Glucose Measurement',
        line: { color: 'blue' }
    };

    // Food Data Trace (the food events)
    const foodTrace = {
        x: filteredFoodData.map(item => item.event_time),
        y: filteredFoodData.map(item => {
            // Find the glucose reading with the timestamp closest to the food event time.
            const foodTime = new Date(item.event_time).getTime();
            
            // Find the closest glucose data point
            const closestGlucose = filteredGlucoseData.reduce((prev, curr) => {
                const glucoseTime = new Date(curr.timestamp).getTime();
                return (Math.abs(glucoseTime - foodTime) < Math.abs(new Date(prev.timestamp).getTime() - foodTime) ? curr : prev);
            });

            // Return the measurement of the closest glucose data point
            return closestGlucose ? closestGlucose.measurement : null;
        }),
        mode: 'markers',
        name: 'Food Consumed',
        marker: {
            color: 'red',
            symbol: 'diamond-open',
            size: 10
        },
        hoverinfo: 'text',
        text: filteredFoodData.map(item => `Meal: ${item.meal}<br>Food: ${item.food}`)
    };

    const plotData = [glucoseTrace, foodTrace];
    const layout = {
        title: `Glucose Measurement and Food Log on ${selectedDate}`,
        xaxis: { title: 'Time' },
        yaxis: { title: 'Measurement' },
        responsive: true
    };

    Plotly.newPlot("line", plotData, layout);
}
// Initialize the dashboard.
init();
