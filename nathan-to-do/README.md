# Nathan To-Do List

## Put stuff on Trello

1. Put that I am making/made the UX on uxpin.com and started building it in react.
2. That you started working on the APIs.
3. Anything you can think of for B.S.

Here is a link the ux pin pages.

[Search Page](https://preview.uxpin.com/92538e18b34858ff45fe1ab09e861161be9f7a19#/pages/77496090/simulate/no-panels?mode=i)

[Results Page](https://preview.uxpin.com/92538e18b34858ff45fe1ab09e861161be9f7a19#/pages/77559299/simulate/no-panels?mode=i)

## Create APIs

### User Search

Read up on this section in the github API.

[list-user-repositories](https://developer.github.com/v3/repos/#list-user-repositories)

There's three properties we are using so lets Make the API route `/search/user/`
and use [query parameters](http://expressjs.com/en/api.html#req.query).

Here's an example api call to github with the response:

`https://api.github.com/users/almaclaine/repos?sort=created&direction=desc`

So make our routes match the queries and call off to github and
res.json the returned data.

### Org Search

Read up on this section in the github API.

[list-organization-repositories](https://developer.github.com/v3/repos/#list-organization-repositories)

Only a single parameter on this route but for consistency sake lets
user query parameters as well here. Same deal as above.

### Search Repositories

Here is how we search by topic.

Read up on this section in the github API.

[search-repositories](https://developer.github.com/v3/repos/#list-organization-repositories)

This one has three parameters like the first. Same deal as above.

## Create Constructors for Our Return Data

If you get the APIs made then create these convenience constructors
for dealing with response data.

We need two ES5 constructor functions for Users and Repos.

The data we want from the repo data is:

- id
- name
- ownerObject (processed using User constructor)
- html_url
- forks
- open-issues
- watchers
- clone_url
- language
- updated_at
- description
- star_gazers

We are going to use our constructor functions to pluck out the data
we need from a response and keep a neat orderly and default source of
data. If a property is null, give it a sensible default just in case.

Example:
```javascript
  function Repo(resp) {
    this.id = resp.id || 0;
    this.name = resp.name || "No Name";
    ...
    this.ownerObject = new User(resp.ownerObject);
  }
  ...
  .then(results => results.map(e => new Repo(e)));
```

The owner object on the repo response needs to be processed by
a user object.

The data we want from the user is:

- login
- id
- avatar_url
- html_url