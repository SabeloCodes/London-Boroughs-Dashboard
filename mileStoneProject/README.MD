<h2>Milestone Project II – Data Visualisation</h2><br>
<h3>Dashboard</h3>
<h4>Interactive Frontend Development</h4>

This is a data visualization project to analyse and compare different relationships within 
the inner London and outer London housing dataset. Taking to consideration all of London’s 32 boroughs, 
this dynamic dashboard illustrates interesting results regarding air-pollution, population, car ownership, 
etc. All of this is done through associations in data pairings.

**UX**
* Using the latest dataset sourced from [.gov.uk](https://www.gov.uk/government/statistical-data-sets) a user can 
find out information relating to the city of London. The user is a typical Londoner with an interest in a 
sustainable lifestyle for themselves and others. Commuting to work using public transportation, having access 
to a section of the city but curious about other parts of the city too. Anything from knowing which borough is 
the most populated, which is the largest in surface area and the correlation between car numbers and emissions.

**Objectives:**
* I am looking for an easy to use visual display of data with charts or graphs.
* An interactive display with filters that can be filtered according to location. 
* I commute into work by bicycle so would like to find out about the level of emissions and the number of cars.
* With the population of the city rising year on year, what are the possible implications on the environment. 
Target Audience
* From those concerned about the environment and the impact of carbon emissions to our lives, to those merely 
interested in city life and its pros and cons.

**User Stories**
* User 1 has recently settled in London with his family. Kids cycle to school, play in local parks and he commutes 
to work by bicycle and his wife drives a car to work in the centre of London.  


**Wireframe**
* Please find the wireframe sketch [here:](href="mileStoneProject/README.MD") 
* The dashboard is responsive to an extent but not developed for mobile use. 

**Look & Style**
* The dashboard has a clean and simplified look. All charts clearly marked and coloured. It should use plain sans-serif 
fonts on a plain white background. Bright block colours should be used to differentiate data.
* It should look functional and appeal to people who have a job to get done.

**Features**<br>
_The project has 5 parts divided into 4 charts and one scatterplot:_
* The dashboard features graphs and charts for visualising the housing data.
* An interactive dashboard for isolating or filtering specific data and visualise exclusively. 
* Bar chart visualising CO2 emissions per borough.
* The number of cars in each borough displayed as a bar chart.
* London is split into two sections, inner London and outer London. A two bar chart breaks down the difference in 
population between the two by calculating the average.
* The scatter plot combines three sets of data. It takes in population, emissions and the borough. When the mouse 
hovers over any of the dots, the user learns just how many people each borough pollutes. Also the scatter plot displays 
how much emissions are polluting the air in a particular borough. 

**Features left to implement**
* A heat-map display of the most polluted parts of London would make great visualisation. spend on the map itself, but due to the potential scale of data sets is particularly difficult to implement.

**Technologies Used**<br>
_HTML5_
* Providing basic site structure.

_CSS_
* Provides styling for the page and all content.

_JavaScript_
* Enables site interactivity.

_dc.js v2.1.8_
* Library creating charts used on the dashboard, combining with Crossfilter v1.3.12 in order to explore and filter the data.

_D3.js v3.15.17_
* Data visualisation structure to execute animations and support for the charts.

**Testing**
I tried using Jasmine to test some of the Java Script, however Jasmine did not seem suitable for testing data visualisation. 
Eventually I resorted to manual testing. By clicking on every bar on the chart and trying different combinations, 
I was able to certify that the dashboard works properly. Also refreshed the page, changed segments of data on the dataset 
and the changes would be reciprocated on the dashboard.Finally these charts use D3.js, and d3.js which are not designed to 
be mobile responsive. D3.js is designed for desktop or large-screen viewing. However I have tried to make it as mobile 
friendly as i could as you can see in the CSS file and using the bootstrap grid system in my index.html file.

**Browser Compatibility**<br>
_Site viewed and tested in the following browsers:_
* Opera
* Mozilla Firefox
* Google Chrome
* Safari

**Responsive Testing**
Used Chrome Dev Tools to imitate different devices and widths. No errors were found.

**Deployment**<br>
_Github Deployment_
* Git repository initiated using the git init command onto the terminal.
* Added amended files to the staging area using git add 
* Commited files with this command git commit -m "Initial commit"
* Linked repository to a .git file on github by issuing the 
.git remote add origin https://github.com/SabeloCodes/London-Boroughs-Dashboard.git 
followed by .git push -u origin master

**Credits**<br>
_Content_
This is where all my data came from: [.gov.uk](https://www.gov.uk/government/statistical-data-sets) 

