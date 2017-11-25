# Nathan To-Do List

## Put stuff on Trello

1. Put that I am making/made the UX on uxpin.com and started building it in react.
2. That you started working on the APIs.
3. Anything you can think of for B.S.

Here is a link the ux pin pages.

[Search Page](https://preview.uxpin.com/92538e18b34858ff45fe1ab09e861161be9f7a19#/pages/77496090/simulate/no-panels?mode=i)

[Results Page](https://preview.uxpin.com/92538e18b34858ff45fe1ab09e861161be9f7a19#/pages/77559299/simulate/no-panels?mode=i)

## Create Constructors for Our Return Data

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

Once you've created these constructors and put them into their own
individual files, you can import them into the api routes. Instead
of `res.json(results)` return `results.map(e => new Repo(e)` which
will give us just the data we want in objects.

From here you can make the data base schema which will naturally
follow from these constructors.

## Create Database Models

As far as I can tell right now we only need repo and user model
schemas. While we might work with other data, I don't believe we
will save actual data. As is indicated by the response relationship,
users need to be related to repos.
