## Twitter HashTag Lookup

### Introduction

This application allows a user to search for tweets containing different hashtags on Twitter. It uses the Twitter API and the TwitterJSClient to make server side requests from a Node.js backend, and then push them to a client-side react app. A user simply enters a search query, chooses a number of tweets to display, and then chooses to sort results by either favorites or retweets counts.

![Demo](https://media.giphy.com/media/1ylQmn9khwHle6swCe/giphy.gif)

### Features

The Search Component sanitizes a query upon entry, so a user can search by either including a hashtag or not (ex. entering "#javascript, node react" will run a search for tweets containing #javascript, #node and #react hashtags). The user can also select different options to sort displayed tweets by. Selecting this option does not make a new request for tweets, rather it changes the order of the currently displayed tweets, this information is stored in react App component state. I also used the React-Linkify library to make any links that show up in tweets clickable.

### Future Features

In the future, I plan to add logic to make hashtags displayed in returned tweets clickable, so the user can run a new search by clicking a hashtag in a returned tweet.
