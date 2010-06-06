Class: DateRange {#DateRange}
==========================================

This Class supplies an interface for setting date ranges and checking various dates against them. This can be used to pass time paramaters between colaborating classes
It also allow colabortors to set each other's date-ranges by modifing the same range instance (each range gets a uniq dentifier to make sure that a range will not be mutable).

### Demo
[Demo @ gh-pages](http://arieh.github.com/DateRange/)


DateRange Method: constructor {#DateRange:constructor}
---------------------------------------------------------------
### Syntax

	var range = new DateRange([start_date,end_date]);

### Arguments

1. start_date (`int`/`string`/`Date`) : Range's start date
2. end_date (`int`/`string`/`Date`) : Range's end date

*Dates can be passed as integers (timestamp by miliseconds), strings (valid date string), or javascript Date.*

DateRange Method: isValid {#DateRange:isValid}
-------------------------------------------------
Checks if a certain date is within the range.
Will only work if range is set (both start and end);

### Syntax
	range.isValid(date);
	
### Arguments

1. date (`int`/`string`/`Date`) : a date to check against

DateRange Method: setStart {#DateRange:setStart}
-------------------------------------------------
Sets a new start date to the range. 
*If new date is newer than end date the class will throw a proper exception*

### Syntax
	range.setStart(date);
	
### Arguments

1. date (`int`/`string`/`Date`) : a new start date for the range.

DateRange Method: setStart {#DateRange:setEnd}
-------------------------------------------------
Sets a new end date to the range. 
*If new date is older than start date the class will throw a proper exception*

### Syntax
	range.setEnddate);
	
### Arguments

1. date (`int`/`string`/`Date`) : a new end date for the range.

DateRange Method: setFreeze {#DateRange:setFreeze}
-------------------------------------------------
Allows to freeze or unfreeze the range's paramaters. When a date is freezed, attempts to change it's paramaters will result with a propper exception.

### Syntax
	range.setStart(bool);
	
### Arguments

1. state (`bool`) : New freeze state. If not suppied will toggle state.

DateRange Method: substract {#DateRange:substract}
---------------------------------------
Substracts specified time from start date

### Syntax
	range.substract(int,unit);
	
### Arguments

1. int (`int`) : How much time to substract.
2. unit (`string`) : What time-unit to substract. Can be 'miliseconds','seconds','minutes','hours','days','weeks','years'. (default: `milisc