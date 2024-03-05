# The pandas module data structure called data Frame can store elments from csv files,
# Lists,dictionaries and more.
# This data structure is two-dimensional,
# That means that the data is aligned in rows and columns.

# 1) DataFram with a dictionary

# Import pandas package
import pandas as pd

# Define a dictionary containing employee data
data = {
    "Name": ["Jai", "Princi", "Gaurav", "Anuj"],
    "Age": [27, 24, 22, 32],
    "Qualification": ["Msc", "MA", "MCA", "Phd"],
}

# Convert the dictionary into DataFrame
df = pd.DataFrame(data)

# To see the result: print(df)

# To print only two columns
# print(df[["Name", "Qualification"]])

# To add another column declare a list to be converted into one
address = ["Delhi", "Kanpur", "Allahabad", "Kannauj"]

# Give it a name and equate it to the list
df["Address"] = address

# Observe the result
# print(df)


# 2) DataFrame with a csv file

# equate the data to the file content
# This is enough to create a dataFrame object
data = pd.read_csv("Python\\pandas\\nba.csv", index_col="Name")

# To delete columns use the drop function
# If there is not "inplace=True", te original dataFrame is not altered
data.drop(["Team", "Weight"], axis=1, inplace=True)

# Observe the result
# print(data)


# 3) Retrieve rows

# Make the data frame from a csv file
data = pd.read_csv("Python\\pandas\\nba.csv", index_col="Name")

# Retrieving row by loc method
first = data.loc["Avery Bradley"]
second = data.loc["R.J. Hunter"]

# Observe result
# print(first, "\n\n\n", second)
