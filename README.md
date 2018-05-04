# Citibike
created new working repository!
created index website
## Process

When we start talking about potential projects, we became interested in transportation medium in New York City. Due to a data availability and quality, we decided to use CitiBike data. We acknowledge that there are quite a few analyses done regarding CitiBike, yet we still believe it is worth revisiting since the service has expanded dramatically over the past couple of years. Also, many analyses that were conducted in the past were more based on descriptive statistics and trend studies, and we found a very few studies that focus on the projection of the rider numbers and bike time based on weather conditions. Therefore, we set the goal of our project as to estimate the number of riders and bike time based on people’s profile. The two main question asked in this projects are: (1) how many people like me will be on street with CitiBike when the weather is X, Y, and Z?; and (2) how long are they going to bike? 

To estimate the number of riders and bike time of CitiBike users, two linear regression models were constructed. The data used for this project were the CitiBike System Data (2016) and information from OpenWeatherMap, including temperature, wind speed, and weather conditions. To limit the data to a more manageable size, the second week of each month was selected in lieu of each day, which would have resulted to more than 36 million data points.

After the data was selected, it was reclassified and/or categorized using R. The final binary variables were gender, user types, weather conditions (clear, cloudy, rain, fog, snow, and thunder), hours of the day (5am-11am, 11am-5pm, 5pm-11pm, 11pm-5am), and weekday/weekend. That of continuous variables were the number of riders, age, temperature, and wind. Outliners and NAs for gender and user types were omitted from the analysis. The final number of observation was 2,813,744. The regression models were then made with 14 variables. (ref: female, time 5am-11am, and clear). 


![method_graph](https://user-images.githubusercontent.com/35783893/39645153-58719634-4fa5-11e8-9bab-60632744a93a.png)
