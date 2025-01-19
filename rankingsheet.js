document.addEventListener('DOMContentLoaded', () => {
    const rankingBoard = document.getElementById('RankingBoard');

    // Function to fetch and load the Excel file
    async function loadExcelFile() {
        try {
            // Fetch the file
            const response = await fetch('YASSMINE.xlsx');
            if (!response.ok) throw new Error('Failed to load the file.');

            // Read the file as an array buffer
            const data = await response.arrayBuffer();

            // Parse the file using XLSX
            const workbook = XLSX.read(data, { type: 'array' });

            // Read the first sheet
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert to JSON and skip the first row (header)
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Clear the existing table rows
            rankingBoard.innerHTML = '';

            // Populate table with data (skipping headers)
            jsonData.slice(1).forEach((row) => {
                const [robotName, clubName, score, time] = row;

                const tableRow = document.createElement('tr');

                const robotNameCell = document.createElement('td');
                robotNameCell.textContent = robotName || '';
                tableRow.appendChild(robotNameCell);

                const clubNameCell = document.createElement('td');
                clubNameCell.textContent = clubName || '';
                tableRow.appendChild(clubNameCell);

                const scoreCell = document.createElement('td');
                scoreCell.textContent = score === 0 ? '0' : score || '';
                tableRow.appendChild(scoreCell);

                const timeCell = document.createElement('td');
                timeCell.textContent = time === 0 ? '0' : time || '';
                tableRow.appendChild(timeCell);

                rankingBoard.appendChild(tableRow);
            });
        } catch (error) {
            console.error('Error loading the Excel file:', error);
        }
    }

    // Load the Excel file on page load
    loadExcelFile();
});
