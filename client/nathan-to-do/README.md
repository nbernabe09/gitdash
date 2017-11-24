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

Our api route should be `/search/user/:searchterm`.

We will pass [query parameters](http://expressjs.com/en/api.html#req.query) to
the github api but will not let users of our api change the settings.

There's three properties, for `type` set `all`, for `sort` set `updated`, and
for `direction` set `desc`.

Here's an example api call to github with the response:

`https://api.github.com/users/almaclaine/repos?sort=created&direction=desc`

res.json the returned data.

### Org Search

Read up on this section in the github API.

[list-organization-repositories](https://developer.github.com/v3/repos/#list-organization-repositories)

Make the route `/search/org/:searchterm/` and set the `type` parameter to `all`.

res.json the returned data.

### Search Repositories

Here is how we search by topic.

Read up on this section in the github API.

[search-repositories](https://developer.github.com/v3/search/#search-repositories)

Our api route should be `/search/repo/:q`. As you can see in the github api,
this route only takes query parameters. So send off our route caputured `q` as
and `sort` as `updated` and `order` as `desc`.

res.json the returned data.

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
