# sdhacks
Welcome to our repository for our CheckIn app!

The original work flow utilizes react native for front end and google functions for the backend. Here is a broad overview of each endpoint function:

# createWaitlist() function
needs to just create a new table in our db.

# insert(index, Party)
index will normally be the end of our list/bottom of our table, since most of our defined front end operations are push/pop
Party will be an object containing the 5 listed data above.
Each party = 1 row

# remove(index, Party)
needs to remove the row at the specified index in the table
index will typically be the first row
after removing a party, it's important to update the wait time by subtracting 5 from each wait-time entry on each row. (industry standard, 5 minutes apart for each party)

# deleteTable()
clears table, prompts user for leftovers.

# Deploy!
This current version is just a prototype, but assuming you have all the needed dependencies (react native, react.js, npm, expo), simply just run 'npm start'

## Routes

‘/’ - welcome page
‘/resturaunt’ displays the viewWaitlist.js
‘/resturaunt/add’ displays the customer join.js
‘/employee’ displays the employee.js page
‘/foodbank’ displays the foodbank.js 


