import pandas as pd
import sys
import os

# Default file names
input_csv_name = "leaderboard.csv"
output_csv_name = "sorted_leaderboard.csv"

# Ensure both files exist in the current folder
if not os.path.exists(input_csv_name):
    print(f"Error: File '{input_csv_name}' not found in the current directory.")
    sys.exit(1)

try:
    # Load the CSV file
    data = pd.read_csv(input_csv_name)

    # Sort the data based on the criteria
    sorted_data = data.sort_values(
        by=['Max Points', 'Time', 'TotalHomPoint'], 
        ascending=[False, True, False]  # Descending for Max Points, ascending for time, descending for TotalHomPoint
    )

    # Display the sorted data
    print(sorted_data)

    # Save the sorted data to a new CSV file
    sorted_data.to_csv(output_csv_name, index=False)
    print(f"Sorted data saved to {output_csv_name}")

except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
