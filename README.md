# UFOs

# Challenge  
In the module, a website on UFO ([index.html](https://github.com/pqrt12/UFOs/blob/master/index.html)) is developed. A css style sheet ([style.css](https://github.com/pqrt12/UFOs/blob/master/static/css/style.css)) is utilized, mostly added two local static images ([nasa.jpg](https://github.com/pqrt12/UFOs/blob/master/static/images/nasa.jpg), [ufo.jpg](https://github.com/pqrt12/UFOs/blob/master/static/images/ufo.jpg)) as background. More importantly, a Javascript [app.js](https://github.com/pqrt12/UFOs/blob/master/static/js/app.js) is embedded to the html file to dynamically filter table data on UFO records from [data.js](https://github.com/pqrt12/UFOs/blob/master/static/js/data.js), and present the selected data to viewers.

In this challenge, more table columns are made filterable. These columns are "Date", "City", "State", "Country" and "Shape". 
In addition to the "Filter Table" clickable button, a new listener is added on all input filter search criteria change (id="form-input"). A "filterCriteria" dictionary is used to track the user inputs, which also helps the listener / filter's loop iterator. Both event (the "filter-btn" click and the "form-input" change) handlers would update the "filterCriteria" dictionary, perform the table filtering, and present the filtered table to viewers.

Instead of a recommendation, one further development is done: adding a repeated image to the table background. This image is to add a little mysterious mood, and be away from sensationalism. 

<img src="https://github.com/pqrt12/UFOs/blob/master/static/images/ufo.jpg" height="50%" width="50%">
