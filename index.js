// write your code below!
function happyHolidays () { 
         
       console.log('happy Holidays!')
}

function happyHolidaysTo (name){ 
  return (`Happy holidays, ${name}!`)

  
}

function happyHolidayTo (holiday, name){ 
    return(`Happy ${holiday}, ${name}!`)

}

function holidayCountdown (days,holiday) {  
  return(`It's ${days} days until ${holiday}!`)
  
}
happyHolidays()
happyHolidaysTo('Isabel')
happyHolidayTo("Julio", "hello")
holidayCountdown('20','Mother's Day')