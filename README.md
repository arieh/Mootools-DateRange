DateRange
===========

This Class supplies an interface for setting date ranges and checking various dates against them. This can be used to pass time paramaters between colaborating classes
It also allow colabortors to set each other's date-ranges by modifing the same range instance (each range gets a uniq dentifier to make sure that a range will not be mutable).

How to use
----------
	#JS
    var range = new DateRange(new Date, +(new Date)+30000); //will set range between now and 30 seconds in the future.
	
	console.log(range.isValid(new Date)); //true
	
	setTimeout(function(){console.log(range.isValid(new Date));}, 40000); //false 