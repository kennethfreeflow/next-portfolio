---
title: "WhatsReopening.com"
subtitle: "Online directory for places reopening during COVID-19"
date: "2020-07-07T05:35:07.322Z"
description: Get the current status of your favorite places and find out when they're reopening. Made with React, Firebase, and Google Maps API.
featured_image: "/images/projects/whats-reopening/cover@1x.png"
---

[WhatsReopening.com](https://whatsreopening.com) is a community-driven website I'm currently developing to track places (establishments, geographic locations, and prominent points of interest), their current status, and when they're reopening during COVID-19.

<a href="https://github.com/narwhal-sightings/whats-reopening-web" class="button button--large">See the project on Github</a>

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.31.19 PM.png)

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.34.00 PM.png)

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.34.28 PM.png)

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.34.53 PM.png)

## Stack

The website is built with React for the front-end and Firebase (Firestore, Cloud Functions) for the backend. I'm using Material UI for the UI framework. Location data, photos, and the map are powered by Google Maps API.

## Features

### Place Verification using Google Maps API

In order for users to add places to the website, they must first search for the place to see if it exists using the Google Maps Places autocomplete textfield. This prevents the database from being clouded with duplicate or poor entries.

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.34.18 PM.png)

### Shareable Links

Each filter that is applied is included as a URL parameter. The front page listens for changes to the URL to perform the appropraite query to the database. This allows users to share the places they are querying with others.

![](/images/projects/whats-reopening/Screen Shot 2020-09-04 at 3.55.55 PM.png)
