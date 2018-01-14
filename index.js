// write your code below!
function happyHolidays () { 
         
       console.log('happy Holidays!')
}

function happyHolidaysTo (name){ 
  return (`Happy holidays, ${name}!`)

  
}

function happyHolidayTo (holiday, name){ 
    console.log(`Happy ${holiday}, ${name}!`)

}

function holidayCountdown (days,holiday) {  
  return(`It's ${days} days until ${holiday}!`)
  
}
happyHolidays()
happyHolidaysTo('Isabel')
happyHolidayTo("Julio", "hello")
holidayCountdown('10','Cristmas')