# sdhacks
Will change later

#createWaitlist() function
needs to just create a new table in our db.

#insert(index, Party)
index will normally be the end of our list/bottom of our table, since most of our defined front end operations are push/pop
Party will be an object containing the 5 listed data above.
Each party = 1 row

#remove(index, Party)
needs to remove the row at the specified index in the table
index will typically be the first row
after removing a party, it's important to update the wait time by subtracting 5 from each wait-time entry on each row. (industry standard, 5 minutes apart for each party)

#deleteTable()
clears table, prompts user for leftovers.

