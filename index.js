function whospaying(names){

    randomnum = Math.floor(Math.random() * names.length)
    return(names[randomnum] + " is going to buy lunch today!")
}

names = ["Harvey", "Harry", "Barry", "Garry"]

whospaying(names)
