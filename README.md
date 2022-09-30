# Phase-2-App
## Application
Our bucklet-list application will be a figital bucket list: users will be able to make profiles where they can post and view tasks they want to complete before they die (i.e: trips they want to take). These tasks will be displayed as cards on the user's page, which they can click on to see details about their task (i.e.: a journal entry with pictures about their trip to Venice). 

### MVP Core Features
This application will use at least six components: App, Home, User (for user profiles), Cardlist (to hold the "bucket list cards"), Cards (to store code for each card, which will display the tasks), and Blog (to store code for the blog entries where users can memorialize their bucket list tasks). 

There will be at least three client-side routes using React Router: routing to a userpage, routing to a blog entry, and routing back to the homepage. They will be able to do this via navigation buttons. 

We will be creating our own RESTful API for the backend to hold user information and bucket list tasks. The tasks will include a title, a description, a picture, and a date. 

Users will be able to view their bucket list via task cards, which will display some minimum information about the task on their bucket list. They will be able to post new tasks with a controlled submittable form. They will also be able to edit and delete their own tasks with a button and conditional form. They will also be able to click on each card and be routed to a blog entry page where they can add and display details about the task. (For example, plans for a trip, as well as details and pictures from that trip).

### Component Tree Draft
Component tree is subject to change as we add code, specially when we get into stretch goals. But for the MVP, with App at the top of the tree:  
App -> Home -> User -> CardList -> Card -> Blog

### Stretch Goals 
1. MVP cards will be static cards with information. But, if there is time, we hope to make flip cards that display a picture or icon on the front and details about the task on the back. 

2. We hope to include a Map page, which can be routed to from the user-profile page. Travel-loving users will be able to place their tasks onto the map to show where they have been. 

3. Once the project is done, we hope to deploy it. 
