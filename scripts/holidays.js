/*
	Title:
		hubot holidays

	Description:
		Show a list of all holidays, holidays by current month, or by a specified month.

	Dependencies:
		moment

	Configuration:
		None

	Commands:
		Hubot holidays - list of all US holidays
		Hubot holidays month - list of holidays for current month
		Hubot holidays month <month> - list of holidays for specified month

	Author:
		Holly Springsteen
		hhspringsteen
*/

// Moment for dates
var moment = require('moment'),

	year = moment.year(),
	month = moment.month(),
	day = moment.date(),

	months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

	// Holidays from:  http://www.timeanddate.com/holidays/us/<year>
	holidays = {
		"January":[
			{"date":"01-01-"+year,"holiday":"New Years"},
			{"date":"01-06-"+year,"holiday":"Epiphany"},
			{"date":"01-07-"+year,"holiday":"Orthodox Christmas Day"},
			{"date":"01-13-"+year,"holiday":"Stephen Foster Memorial Day"},
			{"date":"01-14-"+year,"holiday":"The Prophet's Birthday"},
			{"date":"01-14-"+year,"holiday":"Orthodox New Year"},
			{"date":"01-16-"+year,"holiday":"Tu Bishvat/Tu B'Shevat"},
			{"date":"01-17-"+year,"holiday":"Lee Jackson Day"},
			{"date":"01-19-"+year,"holiday":"Robert E Lee's Birthday"},
			{"date":"01-19-"+year,"holiday":"Confederate Memorial Day"},
			{"date":"01-20-"+year,"holiday":"Martin Luther King Day"},
			{"date":"01-20-"+year,"holiday":"Idaho Human Rights Day"},
			{"date":"01-20-"+year,"holiday":"Civil Rights Day"},
			{"date":"01-29-"+year,"holiday":"Kansas Day"},
			{"date":"01-31-"+year,"holiday":"Chinese New Year"}
		],
		"February":[
			{"date":"02-01-"+year,"holiday":"National Freedom Day"},
			{"date":"02-02-"+year,"holiday":"Groundhog Day"},
			{"date":"02-04-"+year,"holiday":"Rosa Parks Day"},
			{"date":"02-07-"+year,"holiday":"National Wear Red Day"},
			{"date":"02-12-"+year,"holiday":"Lincoln's Birthday"},
			{"date":"02-14-"+year,"holiday":"Valentine's Day"},
			{"date":"02-15-"+year,"holiday":"Susan B Anthony's Birthday"},
			{"date":"02-17-"+year,"holiday":"President's Day"},
			{"date":"02-17-"+year,"holiday":"George Washington's Birthday"},
			{"date":"02-17-"+year,"holiday":"Daisy Gatson Bates Day"}
		],
		"March":[
			{"date":"03-01-"+year,"holiday":"St. David's Day"},
			{"date":"03-02-"+year,"holiday":"Texas Independence Day"},
			{"date":"03-03-"+year,"holiday":"Casimir Pulaski Day"},
			{"date":"03-03-"+year,"holiday":"Read Across America Day"},
			{"date":"03-04-"+year,"holiday":"Shrove Tuesday / Mardi Gras"},
			{"date":"03-05-"+year,"holiday":"Ash Wednesday"},
			{"date":"03-09-"+year,"holiday":"Daylight Saving Time Starts"},
			{"date":"03-16-"+year,"holiday":"Purim"},
			{"date":"03-17-"+year,"holiday":"St. Patrick's Day"},
			{"date":"03-17-"+year,"holiday":"Evacuation Day"},
			{"date":"03-20-"+year,"holiday":"March Equinox"},
			{"date":"03-25-"+year,"holiday":"Maryland Day"},
			{"date":"03-26-"+year,"holiday":"Prince Jonah Kuhio Kalanianaole Day"},
			{"date":"03-31-"+year,"holiday":"Seward's Day"},
			{"date":"03-31-"+year,"holiday":"César Chávez Day"}
		],
		"April":[
			{"date":"04-01-"+year,"holiday":"April Fools Day"},
			{"date":"04-02-"+year,"holiday":"Pascua Florida Day"},
			{"date":"04-06-"+year,"holiday":"National Tartan Day"},
			{"date":"04-13-"+year,"holiday":"Palm Sunday"},
			{"date":"04-13-"+year,"holiday":"Thomas Jefferson's Birthday"},
			{"date":"04-15-"+year,"holiday":"Passover (first day)"},
			{"date":"04-15-"+year,"holiday":"Tax Day"},
			{"date":"04-15-"+year,"holiday":"Father Damien Day"},
			{"date":"04-15-"+year,"holiday":"National Library Workers' Day"},
			{"date":"04-16-"+year,"holiday":"Emancipation Day"},
			{"date":"04-17-"+year,"holiday":"Maundy Thursday"},
			{"date":"04-18-"+year,"holiday":"Orthodox Good Friday"},
			{"date":"04-18-"+year,"holiday":"Good Friday"},
			{"date":"04-19-"+year,"holiday":"Holy Saturday"},
			{"date":"04-19-"+year,"holiday":"Orthodox Holy Saturday"},
			{"date":"04-20-"+year,"holiday":"Orthodox Easter"},
			{"date":"04-20-"+year,"holiday":"Easter Sunday"},
			{"date":"04-21-"+year,"holiday":"Orthodox Easter Monday"},
			{"date":"04-21-"+year,"holiday":"Easter Monday"},
			{"date":"04-21-"+year,"holiday":"Patriot's Day"},
			{"date":"04-21-"+year,"holiday":"San Jacinto Day"},
			{"date":"04-22-"+year,"holiday":"Last Day of Passover"},
			{"date":"04-22-"+year,"holiday":"Oklahoma Day"},
			{"date":"04-23-"+year,"holiday":"Administrative Professionals Day"},
			{"date":"04-25-"+year,"holiday":"Arbor Day"},
			{"date":"04-26-"+year,"holiday":"Confederate Memorial Day"},
			{"date":"04-28-"+year,"holiday":"Yom HaShoah"},
			{"date":"04-28-"+year,"holiday":"Confederate Memorial Day"}
		],
		"May":[
			{"date":"05-01-"+year,"holiday":"Law Day"},
			{"date":"05-01-"+year,"holiday":"Loyalty Day"},
			{"date":"05-01-"+year,"holiday":"National Day of Prayer"},
			{"date":"05-03-"+year,"holiday":"National Explosive Ordnance Disposal (EOD) Day"},
			{"date":"05-04-"+year,"holiday":"Rhode Island Independence Day"},
			{"date":"05-05-"+year,"holiday":"Cinco de Mayo"},
			{"date":"05-06-"+year,"holiday":"Yom Ha'atzmaut"},
			{"date":"05-06-"+year,"holiday":"National Nurses Day"},
			{"date":"05-06-"+year,"holiday":"Primary Election Day"},
			{"date":"05-08-"+year,"holiday":"Truman Day"},
			{"date":"05-09-"+year,"holiday":"Confederate Memorial Day (observed)"},
			{"date":"05-10-"+year,"holiday":"Confederate Memorial Day"},
			{"date":"05-11-"+year,"holiday":"Mothers' Day"},
			{"date":"05-15-"+year,"holiday":"Peace Officers Memorial Day"},
			{"date":"05-16-"+year,"holiday":"National Defense Transportation Day"},
			{"date":"05-17-"+year,"holiday":"Armed Forces Day"},
			{"date":"05-18-"+year,"holiday":"Lag BaOrner"},
			{"date":"05-21-"+year,"holiday":"Emergency Medical Services for Children Day"},
			{"date":"05-22-"+year,"holiday":"National Maritime Day"}
			{"date":"05-22-"+year,"holiday":"Harvey Milk Day"},
			{"date":"05-25-"+year,"holiday":"National Missing Children's Day"},
			{"date":"05-26-"+year,"holiday":"Memorial Day"},
			{"date":"05-26-"+year,"holiday":"Jefferson Davis Birthday"},
			{"date":"05-27-"+year,"holiday":"Isra and Mi'raj"},
			{"date":"05-29-"+year,"holiday":"Ascension Day"},
		]
		"June":[
			{"date":"06-01-"+year,"holiday":"Statehood Day"},
			{"date":"06-04-"+year,"holiday":"Shavuot"},
			{"date":"06-06-"+year,"holiday":"D-Day"},
			{"date":"06-08-"+year,"holiday":"Pentecost"},
			{"date":"06-09-"+year,"holiday":"Whit Monday"},
			{"date":"06-11-"+year,"holiday":"Kamehameha Day"},
			{"date":"06-14-"+year,"holiday":"Flag Day"},
			{"date":"06-15-"+year,"holiday":"Trinity Sunday"},
			{"date":"06-15-"+year,"holiday":"Fathers' Day"},
			{"date":"06-17-"+year,"holiday":"Bunker Hill Day"},
			{"date":"06-19-"+year,"holiday":"Corpus Christi"},
			{"date":"06-19-"+year,"holiday":"Juneteenth"},
			{"date":"06-19-"+year,"holiday":"Emancipation Day"},
			{"date":"06-20-"+year,"holiday":"West Virginia Day"},
			{"date":"06-21-"+year,"holiday":"June Solstice"},
			{"date":"06-29-"+year,"holiday":"Ramadan starts"}
		],
		"July":[
			{"date":"07-04-"+year,"holiday":"Independence Day"},
			{"date":"07-24-"+year,"holiday":"Lailat al-Qadr"},
			{"date":"07-24-"+year,"holiday":"Pioneer Day"},
			{"date":"07-27-"+year,"holiday":"Parents' Day"},
			{"date":"07-29-"+year,"holiday":"Eid al-Fitr"}
		],
		"August":[
			{"date":"08-01-"+year,"holiday":"Colorado Day"},
			{"date":"08-05-"+year,"holiday":"Tisha B'Av"},
			{"date":"08-11-"+year,"holiday":"Victory Day"},
			{"date":"08-15-"+year,"holiday":"Assumption of Mary"},
			{"date":"08-15-"+year,"holiday":"Statehood Day (Hawaii)"},
			{"date":"08-15-"+year,"holiday":"Bennington Battle Day (observed)"},
			{"date":"08-16-"+year,"holiday":"Bennington Battle Day"},
			{"date":"08-19-"+year,"holiday":"National Aviation Day"},
			{"date":"08-21-"+year,"holiday":"Senior Citizens Day"},
			{"date":"08-26-"+year,"holiday":"Women's Equality Day"},
			{"date":"08-27-"+year,"holiday":"Lyndon Baines Johnson Day"},
		],
		"September":[
			{"date":"09-01-"+year,"holiday":"Labor Day"},
			{"date":"09-06-"+year,"holiday":"Carl Garner Federal Lands Cleanup Day"},
			{"date":"09-07-"+year,"holiday":"National Grandparents Day"},
			{"date":"09-09-"+year,"holiday":"California Admission Day"},
			{"date":"09-11-"+year,"holiday":"Patriot Day"},
			{"date":"09-17-"+year,"holiday":"Constitution Day"},
			{"date":"09-19-"+year,"holiday":"National POW/MIA Recognition Day"},
			{"date":"09-22-"+year,"holiday":"Emancipation Day"},
			{"date":"09-23-"+year,"holiday":"September Equinox"},
			{"date":"09-25-"+year,"holiday":"Rosh Hashana"},
			{"date":"09-26-"+year,"holiday":"Native Americans' Day"},
			{"date":"09-28-"+year,"holiday":"Gold Star Mother's Day"}
		],
		"October":[
			{"date":"10-04-"+year,"holiday":"Yom Kippur"},
			{"date":"10-04-"+year,"holiday":"Feast of St Francis of Assisi"},
			{"date":"10-04-"+year,"holiday":"Yom Kippur"},
			{"date":"10-04-"+year,"holiday":"Eid al-Adha"},
			{"date":"10-06-"+year,"holiday":"Child Health Day"},
			{"date":"10-09-"+year,"holiday":"First Day of Sukkot"},
			{"date":"10-09-"+year,"holiday":"Leif Erikson Day"},
			{"date":"10-13-"+year,"holiday":"Columbus Day"},
			{"date":"10-13-"+year,"holiday":"Native Americans' Day"},
			{"date":"10-13-"+year,"holiday":"Indigenous People's Day"},
			{"date":"10-15-"+year,"holiday":"Last Day of Sukkot"},
			{"date":"10-15-"+year,"holiday":"White Cane Safety Day"},
			{"date":"10-16-"+year,"holiday":"Shmini Atzeret"},
			{"date":"10-16-"+year,"holiday":"Boss's Day"},
			{"date":"10-17-"+year,"holiday":"Simchat Torah"},
			{"date":"10-17-"+year,"holiday":"Alaska Day (observed)"},
			{"date":"10-18-"+year,"holiday":"Alaska Day"},
			{"date":"10-22-"+year,"holiday":"Diwali/Deepavali"},
			{"date":"10-25-"+year,"holiday":"Muharram"},
			{"date":"10-31-"+year,"holiday":"Halloween"},
			{"date":"10-31-"+year,"holiday":"Nevada Day"}
		],
		"November":[
			{"date":"11-01-"+year,"holiday":"All Saints' Day"},
			{"date":"11-02-"+year,"holiday":"All Souls' Day"},
			{"date":"11-02-"+year,"holiday":"Daylight Saving Time Ends"},
			{"date":"11-04-"+year,"holiday":"Election Day"},
			{"date":"11-06-"+year,"holiday":"Return Day (Delaware)"},
			{"date":"11-11-"+year,"holiday":"Veterans Day"},
			{"date":"11-27-"+year,"holiday":"Thanksgiving"},
			{"date":"11-28-"+year,"holiday":"Presidents' Day"},
			{"date":"11-28-"+year,"holiday":"Lincoln's Birthday/Lincoln's Day"},
			{"date":"11-28-"+year,"holiday":"Black Friday"},
			{"date":"11-28-"+year,"holiday":"American Indian Heritage Day"},
			{"date":"11-30-"+year,"holiday":"First Sunday of Advent"}
		],
		"December":[
			{"date":"12-01-"+year,"holiday":"Cyber Monday"},
			{"date":"12-06-"+year,"holiday":"St Nicholas' Day"},
			{"date":"12-07-"+year,"holiday":"Pearl Harbor Day"},
			{"date":"12-08-"+year,"holiday":"Feast of the Immaculate Conception"},
			{"date":"12-12-"+year,"holiday":"Feast of Our Lady of Guadalupe"},
			{"date":"12-17-"+year,"holiday":"Chanukah (first day)"},
			{"date":"12-17-"+year,"holiday":"Pan American Aviation Day"},
			{"date":"12-17-"+year,"holiday":"Wright Brothers Day"},
			{"date":"12-21-"+year,"holiday":"December Solstice"},
			{"date":"12-24-"+year,"holiday":"Chanukah (last day)"},
			{"date":"12-24-"+year,"holiday":"Christmas Eve"},
			{"date":"12-25-"+year,"holiday":"Christmas"},
			{"date":"12-26-"+year,"holiday":"Kwanzaa (Until Jan 1)"},
			{"date":"12-31-"+year,"holiday":"New Year's Eve"}
		]
	};

function getAllHolidays(){
	// christmas = holidays.December[11].date;
	for(var i=0; i<months.length; i++){
		var m = months[i];
		for(var j=0; j<holidays.m.length; j++){
			var holidayDate = holidays.m[j].date,
			var holidayName = holidays.m[j].holiday;
		}
	}
}

function getMonthHolidays(m){
	if(m == '' || m == undefined){
		// if month is not specified
		for(var k=0;k<holidays.month.length;k++){
			var holidayDate = holidays.month[k].date,
			var holidayName = holidays.month[k].holiday;
		}
	}else{
		// month is specified by user
		for(var k=0;k<holidays.m.length;k++){
			var holidayDate = holidays.m[k].date,
			var holidayName = holidays.m[k].holiday;
		}
	}
}

