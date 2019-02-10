# Peppermint

### A Sales Dashboard
example demonstrates how a small Bicycle Company (Handlebars Express) might implement Peppermint sales dashboard

Run Application: [Launch Peppermint ](https://herokuapp.com/)

**Team Members:** Alton Salmon, Kevin Luu, Vicki Hope

**Features**
* Create/manage user-profiles
* Login authentication
* Company Dashboard View
  * Top 4 Stores by Sales
  * Top 4 Items by Sales
  * Top 4 Items by Quantity
  * Sales Distribution by Store
  * Company Sales Goals
  * Yearly Performance by Month
  * Sales Projection (next 6 months)


**Technologies Used**
* JavaScript
* Axios
* Mongoose
* Express.js
* React.js
* Node.js
* ApexCharts.js
* graphQL
* Passport-jwt
* Redux
* Material-UI
* Model View Controller (MVC) design pattern


**Problems to Solve**
* Display complex company sales data for analysis
* Authenticate user and endpoints
* Securely and reliably store data, with scalability in mind
* Access to shared database
* Quickly provide up-to-date company sales statistics
* Allow for separation of concerns to improve maintainability and expandability of code
* Deploy full-stack project for others to use

**Solutions**
* Use ApexCharts to visualize sales data
* Implement passport-jwt for user/endpoint authentication
* Use MongoDB/Mongoose database for data storage
* Configure mLab for shared access to database
* Use of graphQL queries to access database data
* Follow Model View Controller (MVC) design pattern
* Deploy project using Heroku

**Setup to run application on your system**
* Node.js, mongoDB, and Mongoose must be installed on your system
* You must know YOUR mLab username and password
* You will store YOUR mLab username and password in your local .env file
* You must know your JWT secret and store it in your local .env file
    ```
    MONGODB_URI=mongodb://usernamehere:passwordhere@ds161485.mlab.com:61485/peppermint
    secret=yoursecretkeyhere
    ```
* Clone the Peppermint repo into a dirctory on your system
* From command line, while in that directory key: npm install
* From that same directory, populate the database
    ```
    node seedDB.js
    ```
* To start server, key:
 ```
 npm run start:dev
  ```
* in browser, navigate to "http://localhost:3001", you should see the Peppermint Home Login Screen

* Click sign up button to create a user profile
* Login with user profile to view the sales dashboard

**Resource Contributors**
* Home page background image: [Pixabay](https://pixabay.com/en/)

**Future Enhancement Ideas**
* Add password encryption
* Add two-factor authentication
* Update UI based on enhancements/branding
* Support additional database views (Store, Item)
* Improve responsive design
* Create version suitable for smaller devices

