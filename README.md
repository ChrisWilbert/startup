# Startup
## Specification Deliverable
### Elevator pitch 
 A lot of the time, college lief can be overwhelming and filled with hours of studying at a desk or staring at a screen. For this reason, they encourage us to go out and socialize with friends and explore new activities. However, in small college towns with a very small budget, this becomes an impossible task and leaves most people cooped up in their apartments on weekends with no plans.

## Design

![About Page](https://github.com/user-attachments/assets/fb2ce792-c088-4b64-b4a7-0d77890e32d1)

![Date ideas](https://github.com/user-attachments/assets/899819cd-7243-41ef-b6eb-abc0e724d399)

![uPCOMING EVENTS](https://github.com/user-attachments/assets/e50a0252-ec98-418b-a9cc-8ff64ffc75cf)

![GROUP4](https://github.com/user-attachments/assets/070ee1ba-1025-46b8-b52f-9edeac12e215)


### Key features

- Secure login over HTTPS
- Ability to see all activities 
- Interact with users that added events 
- Add your own activities 
- Sort activites based on dating activity or casual activity 
- Rate someone’s choices based on cost and party size 
- Add ongoing or upcoming parties in the area 

## Technologies

- **HTML** - Uses correct HTML structure for application. 5 HTML pages. One for login and one for info, one for date ideas, one for parties coming up, one for group activities. Hyperlinks to activity artifacts.


- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast


- **JavaScript** -Provides login, displays activities, adding activities, displays reviews, adding reviews, displays ratings, adding ratings 


- **React** - single page application with views componentized and reactive to users actions


- **Web service** - Backend service with endpoints for:
    - Retrieving activities 
    - Submitting reviews
    - Submitting ratings
    - Retrieving rating status 


- **Database data**- Stores users, activities, reviews, and ratings in database.  Register and login users. Credentials securely stored in database. Can’t add reviews or activities unless authenticated


- **WebSocket data** - As each user adds an activity/review, it is updated to all other users and put on top as most recent edit

HTML Deliverable

The following is the structure of the HTML used in the website

 4 HTML pages: Home, Date Ideas, Functions, Login, and Login
 Header/Footer: header and footer HTMl files are in layouts folder (loaded by JS)
 Text: Stocks are represented by a textual description, including different important aspects
 Images: A favicon image is used for the website, as well as historic stock pictures
 DB/Login: Input boxes for ticker symbols, user login, as well as display what stocks the user has.
 WebSocket: Shows the actual dates and what some potential parties are displayed in realtime.
CSS Deliverable

The following describes what has been achieved using CSS

 Bootstrap 5: Uses the newest Bootstrap 5 and flexboxes for better user interaction.
 Header, Footer, Main content, Sections
 Navigation Elements: Includes a header that has hightlighted your current page, with hyperlinks to go to each page.
 Responsive to Window Sizing: Header/footer disapear if the window is too small, alongsize resizing text on the learn page
 Application Elements: The elements fill up the entire page, without leaving whitespace, with good contrast and seperation between sections
 Application Text Content: The forms are consistent, however as of now they do not have custom error messages for invalid submitions
 Application Images: The favicon image is used to link to the root page. Additionally, there are images to help reader understand stocks on the learn page.
React Deliverable

The following describes what has been done using React, Vite, and Routers

 Bundled and Transpiled: Done.
 Components: Login/signup, Logout,  are all components with mocks for login/WebSocket (all currently use localStorage)
 Login: Allows login, which grants access to the user's date ideas and parties pages.
 Database: Using arrays in index.js, counts how many parties and date ideas there area
 Application logic: Putting in date ideas accurately displays user's positions, with errors if the order cannot be completed, and redirection if the user is not authorized to view a certain page.
 Router: Routing between pages is done with the BrowserRouter, Router, and NavLink components
 
Service Deliverable

The following shows what has been done using Node.js, Express, and API calls

 Node.js/Express HTTP Service - Completed.
 Static Middleware for frotend - Completed.
 Calls to third party endpoints - Using a date idea API, information are correctly displayed, and prevents users from inputing invalid information.
 Backend service endpoints - Placeholders to login that stores current users on the server 
 Frontend calls service endpoints - Using the fetch function (coupled with async or React.useEffect), this is accomplished.

Login Deliverable


 MongoDB Atlas Database - Created.
 Stores data in MongoDB - Yes. Stocks and user information.
 User Registration - Creates new accounts, and uses bcrypt to hash the passwords
 Existing Users - Uses bcrypt and MongoDB to check if a user already exists.
 Use MongoDB to Store Credentials - Stores both users, and their date ideas and events
 
WebSocket Deliverable

 Backend listens for WebSocket connections - Done.
 Frontend makes WebSocket connection - Done.
 Data sent over WebSocket connection - Done
 WebSocket data displayed - All current date ideas and functions are shown in "realtime". 
