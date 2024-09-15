# Startup
## Specification Deliverable
### Elevator pitch 
 A lot of the time, college lief can be overwhelming and filled with hours of studying at a desk or staring at a screen. For this reason, they encourage us to go out and socialize with friends and explore new activities. However, in small college towns with a very small budget, this becomes an impossible task and leaves most people cooped up in their apartments on weekends with no plans.


### Key features

-Secure login over HTTPS
-Ability to see all activities 
-Interact with users that added events 
-Add your own activities 
-Sort activites based on dating activity or casual activity 
-Rate someone’s choices based on cost and party size 
-Add ongoing or upcoming parties in the area 

## Technologies

**HTML** - Uses correct HTML structure for application. 5 HTML pages. One for login and one for info, one for date ideas, one for parties coming up, one for group activities. Hyperlinks to activity artifacts.


**CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast


**JavaScript** -Provides login, displays activities, adding activities, displays reviews, adding reviews, displays ratings, adding ratings 


**React** - single page application with views componentized and reactive to users actions


**Web service** - Backend service with endpoints for:
-Retrieving activities 
-Submitting reviews
-Submitting ratings
-Retrieving rating status 


**Database data**- Stores users, activities, reviews, and ratings in database.  Register and login users. Credentials securely stored in database. Can’t add reviews or activities unless authenticated


**WebSocket data** - As each user adds an activity/review, it is updated to all other users and put on top as most recent edit
