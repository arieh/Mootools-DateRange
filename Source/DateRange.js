(function(){
var dates = {};
DateRange = new Class({
	id : null
	, diff : 0
	, years : 0
	, weeks : 0
	, days  : 0
	, inclusive : true
	, freeze : false
	, initialize : function(start,end, inclusive){
		this.id = 'date'+new Date;
		dates[this.id] = {start:null,end:null}
		
		if (start) dates[this.id].start =  this.getDate(start);
		if (end)   dates[this.id].end   =  this.getDate(end);
		if (inclusive) this.inclusive = !!inclusive;		
		
		if (dates[this.id].start && dates[this.id].end){
			this.calculateDiffs;
		}
	}
	, calculateDiff : function(){
		if (+dates[this.id].start > +dates[this.id].end) throw "Start date is older than end date";
		
		this.diff  = +dates[this.id].end - +dates[this.id].start;
		this.days  = this.diff/86400000;
		this.weeks = this.days/7;
		this.years = this.days/365;
	}
	, isValid : function(date){
		if ($type(date)!='date') date = new Date(date);
		if (!dates[this.id].end) throw "Range not set";
		return this.inclusive ? (+date >= +dates[this.id].start && +date <= +dates[this.id].end) : (+date > +dates[this.id].start && +date < +dates[this.id].end);
	}
	, setStart : function(start){
		if (this.freeze) throw "Range is Frozen. Editing paramaters is not allowed";
		start = this.getDate(start);
		if (+start > +dates[this.id].end) throw "New start date is invalid";
		dates[this.id].start = start;
		if (dates[this.id].end) this.calculateDiff();
	}
	, setEnd : function(end){
		if (this.freeze) throw "Range is Frozen. Editing paramaters is not allowed";
		end = this.getDate(end);
		if (+end < dates[this.id].start) throw "New end date is invalid";
		dates[this.id].end = end;
		if (dates[this.id].start) this.calculateDiff();
	}
	, getDate : function(date){
		date = ($type(date)=='date') ? date : new Date(date);
		if (!$type(date)) throw "Invalid date";
		return date;
	}
	, add : function(num,type){
		var new_date = 0
			, numbers = {
				 miliseconds : 1
				, seconds : 1000
				, minutes : 60000
				, hours   : 3600000
				, days    : 86400000
				, weeks   : 604800000
				, years   : 31536000000				
			}
		if (!type) type = 'miliseconds';
		
		if (!numbers[type]) throw "Invalid incramation type";
		
		new_date = +dates[this.id].end + num*numbers[type];
		dates[this.id].end = new Date(new_date);
	}
	, substract : function(num,type){
		var new_date = 0
			, numbers = {
				 miliseconds : 1
				, seconds : 1000
				, minutes : 60000
				, hours   : 3600000
				, days    : 86400000
				, weeks   : 604800000
				, years   : 31536000000				
			}
		if (!type) type = 'miliseconds';
		
		if (!numbers[type]) throw "Invalid incramation type";
		
		new_date = +dates[this.id].start - num*numbers[type];
		dates[this.id].start = new Date(new_date);
	}
	, setFreeze : function(bool){
		if (bool) this.freeze = !!bool;
		else this.freeze = this.freeze ? false : true;
	}
});
})();