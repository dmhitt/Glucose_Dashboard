# Glucose Dashboard 📈

This project is a personal data dashboard that visualizes glucose measurements over time. It allows users to track their glucose levels, filter the data by specific dates, and see food consumption events overlaid on the same graph for contextual analysis.

## Features ✨

* **Glucose Visualization:** A dynamic line graph displays glucose measurements over time.
* **Date Filtering:** A dropdown menu allows users to select a specific date or view all data.
* **Food Log Integration:** Food consumption events are plotted as distinct markers on the graph, providing a visual correlation between meals and glucose levels.
* **Responsive Design:** The dashboard is built with Bootstrap and D3.js, ensuring it is mobile-friendly and adjusts to different screen sizes.
* **Interactive Plotting:** Utilizes Plotly.js for interactive features like zooming, panning, and hover-over information for both glucose readings and food items.

---

## Technologies Used 🚀

* **HTML & CSS:** The foundational structure and styling of the webpage.
* **Bootstrap 3:** A front-end framework used for responsive layout and styling.
* **JavaScript (ES6):** The core logic for data manipulation and event handling.
* **D3.js (v5):** Used for fetching and parsing the local JSON data files.
* **Plotly.js (v2):** The powerful charting library used to create the interactive line graph.

---

## Getting Started 💻

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [your-project-name]
    ```
3.  **Open `index.html` in your web browser.**
    * This project uses local data files (`glucose.json` and `food.json`), so it should run directly without a server. However, some browsers may have security restrictions. If you encounter issues, you may need to run a local web server (e.g., using Python's `http.server`).

    **Using a Python server:**
    ```bash
    python -m http.server
    ```
    Then, navigate to `http://localhost:8000` in your browser.

---

## Data Structure 📊

The dashboard uses two JSON files:

### `glucose.json`
Contains an array of glucose measurements with timestamps.

```json
[
  {
    "timestamp": "YYYY-MM-DDTHH:mm:ss.sss",
    "measurement": 98.0,
    "spike_type": "Normal"
  }
]

```

### `food.json`
Contains an array of food consuption events.

```json
[
  {
    "event_time": "YYYY-MM-DDTHH:mm:ss",
    "meal": "breakfast",
    "food": "Coffee, oat milk, sugar"
  }
]
```
Sure, here's the complete README.md file again, with all sections and formatting intact. You can copy and paste this directly into your project's GitHub repository.

README.md
Markdown

# Glucose Dashboard 📈

This project is a personal data dashboard that visualizes glucose measurements over time. It allows users to track their glucose levels, filter the data by specific dates, and see food consumption events overlaid on the same graph for contextual analysis.

## Features ✨

* **Glucose Visualization:** A dynamic line graph displays glucose measurements over time.
* **Date Filtering:** A dropdown menu allows users to select a specific date or view all data.
* **Food Log Integration:** Food consumption events are plotted as distinct markers on the graph, providing a visual correlation between meals and glucose levels.
* **Responsive Design:** The dashboard is built with Bootstrap and D3.js, ensuring it is mobile-friendly and adjusts to different screen sizes.
* **Interactive Plotting:** Utilizes Plotly.js for interactive features like zooming, panning, and hover-over information for both glucose readings and food items.

---

## Technologies Used 🚀

* **HTML & CSS:** The foundational structure and styling of the webpage.
* **Bootstrap 3:** A front-end framework used for responsive layout and styling.
* **JavaScript (ES6):** The core logic for data manipulation and event handling.
* **D3.js (v5):** Used for fetching and parsing the local JSON data files.
* **Plotly.js (v2):** The powerful charting library used to create the interactive line graph.

---

## Getting Started 💻

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [your-project-name]
    ```
3.  **Open `index.html` in your web browser.**
    * This project uses local data files (`glucose.json` and `food.json`), so it should run directly without a server. However, some browsers may have security restrictions. If you encounter issues, you may need to run a local web server (e.g., using Python's `http.server`).

    **Using a Python server:**
    ```bash
    python -m http.server
    ```
    Then, navigate to `http://localhost:8000` in your browser.

---

## Data Structure 📊

The dashboard uses two JSON files:

### `glucose.json`
Contains an array of glucose measurements with timestamps.

```json
[
  {
    "timestamp": "YYYY-MM-DDTHH:mm:ss.sss",
    "measurement": 98.0,
    "spike_type": "Normal"
  }
]
```

License 📜
This project is licensed under the MIT License - see the LICENSE file for details.
