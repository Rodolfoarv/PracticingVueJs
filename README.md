# Practicing Vue.js Frontend / Backend

This is a personal project to put in practice some Vue.js concepts :) it is a really simple TODO MVC aplication

I will describe the process of building the application and also how the code was written with Pull Requests for each of the features needed.

## Demo

![FullDemo](client/public/fullDemo.gif)

## Objective

To create a TODO MVC application with the requirements provided in:

Requirements:

- Typescript
- Vue Composition API
- Pug
- BEM methodology
- Responsive, use Flexbox (no media queries 🙂)
- Relative CSS units
- CSS/SCSS variables where applicable

## Procedure

Before writting any code it is important to note what is needed before hand, this is the technology structure but also each of the features and not try to build them all at once.

This is why it is important to separate each of them in a separate Pull Request.

### The application has the following features:

- Basic Interface Creation (Todo List and Todo Item)
- Connection with the backend (in order to extract the todolist and execute REST operations)
- Todo List Feature: Create a new todo
- Todo List Feature: Delete a todo
- Todo List Feature: Fetch all todos
- Todo List Feature: Update a todo with the current status
- Todo List Feature: Pagination
- Testing

Every "small feature" was developed in a separated pull request with the commits associated to it. This is a common practice I follow, afterwards someone reviews my PR or do a Pair Programming exercise to ensure the quality and coding standards of the feature being developed.

## Who reviewed my PR's ?

My friend's dog was in charge with the mission of reviewing my PRs in exchange for treats.

### Wow this big guy really checks all my PRs

![Doggo](client/public/doggo.jpg)

## Demo usage

### Fetching

When the backend is running, it will fetch all the todo tasks

![Fetch](client/public/1.png)

### Create a new

At the top corner there is a "Take note". Users are able to write a note and it will display at the bottom

![New](client/public/2.png)

After writting you can see there is a new todo task which is **Learn Vue.js**

### Delete a task

Each of the items, on hover have a cross sign. Users are able to perform this action to delete a todo task and it will get deleted in the backend.

In this case I have erased every task but two, which is one that was already written and the one to learn Vue.js.

![Delete1](client/public/3.png)

![Delete2](client/public/4.png)

### Update a task

Users are able to update a task either as complete or incomplete. Users are able to click on the circle on the left to perform this.

![Update1](client/public/5.png)

![Update2](client/public/6.png)

Users are able to do this in the frontend and the backend will get updated.

### Pagination

Users are able to scroll through pages

![Pagination](client/public/pagination.gif)

### Searching

Users are able to search for a todo task

![Search](client/public/search.gif)

## Additional UI testing

I have used the tool Polypane in order to ensure every browser is working correctly.

Another way of doing this and as future work is to use End to End tests or integrate a tool such as LogRocket or Sentry

![Search](client/public/polypane.png)

## What did I learn?

A lot of things! I have been mainly focusing my work in React.js and Vue.js seems really fun so far.

It has many advantages, some of them are the learning curve it is much faster, the performance, scalability and versatibility one of the disadvantages for me is that the structure of the project is way different from React or Angular, also the community is much smaller but this will change over time :)

## What can be done next?

Many things! While my mind comes with many additional features we could build such as sorting, adding a priority to each task or even make it collaborative.

The first thing will always to validate that the product is useful for our end clients, in this case someone uses the Todo website.

Once this, we can discuss with the users and validate which are the next features to be developed and possibly add support for other frameworks like Algolia (Improving the search) and also integrate Sentry and LogRocket in case anything wrong happens.
