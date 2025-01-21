// Function to load and parse the CSV file
async function loadCSV(filePath) {
    // Fetch the CSV file
    const response = await fetch('sorted_leaderboard.csv');
    const csvText = await response.text();
    
    // Parse CSV data into rows
    const rows = csvText.split("\n").map(row => row.split(","));
    
    return rows;
}

// Function to populate the table with CSV data
async function populateTable() {
    const tableBody = document.getElementById("RankingBoard");
    const csvData = await loadCSV("sorted_leaderboard.csv"); // Path to your CSV file

    // Loop through each row (skipping the header row)
    for (let i = 1; i < csvData.length; i++) {
        const row = csvData[i];
        if (row.length < 6) continue; // Skip empty or invalid rows

        // Create a new table row
        const tr = document.createElement("tr");

        // Add table cells for each column
        row.forEach(cellData => {
            const td = document.createElement("td");
            td.textContent = cellData.trim(); // Add data to the cell
            tr.appendChild(td); // Add cell to the row
        });

        // Append the row to the table body
        tableBody.appendChild(tr);
    }
}

// Call the function to populate the table when the page loads
populateTable();
