![banner](https://user-images.githubusercontent.com/35783893/39646592-fb560994-4fa9-11e8-899a-d8ca8f9072a7.jpg)
# Citibike
created new working repository!
created index website
## Data
[CitiBike Set](https://s3.amazonaws.com/tripdata/index.html)

## Process

When we start talking about potential projects, we became interested in transportation medium in New York City. Due to a data availability and quality, we decided to use CitiBike data. We acknowledge that there are quite a few analyses done regarding CitiBike, yet we still believe it is worth revisiting since the service has expanded dramatically over the past couple of years. Also, many analyses that were conducted in the past were more based on descriptive statistics and trend studies, and we found a very few studies that focus on the projection of the rider numbers and bike time based on weather conditions. Therefore, we set the goal of our project as to estimate the number of riders and bike time based on people’s profile. The two main question asked in this projects are: (1) how many people like me will be on street with CitiBike when the weather is X, Y, and Z?; and (2) how long are they going to bike? 

To estimate the number of riders and bike time of CitiBike users, two linear regression models were constructed. The data used for this project were the CitiBike System Data (2016) and information from OpenWeatherMap, including temperature, wind speed, and weather conditions. To limit the data to a more manageable size, the second week of each month was selected in lieu of each day, which would have resulted to more than 36 million data points.

After the data was selected, it was reclassified and/or categorized using R. The final binary variables were gender, user types, weather conditions (clear, cloudy, rain, fog, snow, and thunder), hours of the day (5am-11am, 11am-5pm, 5pm-11pm, 11pm-5am), and weekday/weekend. That of continuous variables were the number of riders, age, temperature, and wind. Outliners and NAs for gender and user types were omitted from the analysis. The final number of observation was 2,813,744. The regression models were then made with 14 variables. (ref: female, time 5am-11am, and clear). 


![method_graph](https://user-images.githubusercontent.com/35783893/39645153-58719634-4fa5-11e8-9bab-60632744a93a.png)
## Interactivity 

The interactive portion of the site gives users a chance to explore the complex data set on their own. The interface on the left allows them to enter in information about themselves and the riding conditions. Once the "Submit" button is pressed, the information is added to the regression equation. It will yield a graphic of either the projected number of riders or the projected ride time to compare to the baseline numbers. The tool was created with JavaScript p5 and uses a series of DOM elements to input values into the equation. 



![rider number](https://user-images.githubusercontent.com/35783893/39646168-8ca31d1c-4fa8-11e8-8ffe-b6a2a18ccb40.PNG)

## Design Evolution
![rider duration sketch](https://user-images.githubusercontent.com/35783893/39648744-4ba3ad3c-4fb1-11e8-8c82-3e708a55e43a.jpg)


![rider number sketch](https://user-images.githubusercontent.com/35783893/39648841-a60b3fa6-4fb1-11e8-9863-5c6dad465e68.jpg)

![tt](https://user-images.githubusercontent.com/35783893/39649052-7278aa56-4fb2-11e8-8479-89a6ca88de4c.PNG)
![rn](https://user-images.githubusercontent.com/35783893/39649064-7ae37be4-4fb2-11e8-9bdb-8d8b4fe9977d.PNG)
![tt2](https://user-images.githubusercontent.com/35783893/39649073-81c7e0bc-4fb2-11e8-985c-5b727230e044.PNG)
![rn2](https://user-images.githubusercontent.com/35783893/39649079-8585ef00-4fb2-11e8-820a-a800ed0b8379.PNG)

## Technology

R Statistical Computing Software and 
JavaScript p5

