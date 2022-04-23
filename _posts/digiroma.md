---
title: "Digiroma"
subtitle: "Product web portal"
date: "2020-03-25T05:35:07.322Z"
description: Product web portal for viewing and editing product details and visualizing data in interactive charts. Made with React, MySQL, Node.js, Viser.js, Koa, and Ant Design.
featured_image: "/images/projects/digiroma/Digiroma mock-up orange bg.png"
---

_The project is in stealth so I’m not able to share much about its use case. All screenshots are from a mock-up using the same frameworks._

---

![](/images/projects/digiroma/Digiroma mock-up orange bg.png)

Digiroma is a full stack product web portal I developed at Alibaba for viewing and editing product details and visualizing data in interactive charts.

<div class="gallery" data-columns="2">
	<img src="/images/projects/digiroma/Screen Shot 2020-04-27 at 7.34.16 PM.png">
	<img src="/images/projects/digiroma/Screen Shot 2020-04-20 at 8.46.38 PM.png">
</div>

<a href="https://github.com/kennethlng/digiroma-mockup" class="button button--large">See the mock-up project on Github</a>

## Stack

The back-end server was written on Node.js. The front-end was written with React with Ant Design for UI. I used Koa.js middleware for routing and APIs, Viser.js for data visualization, axios for HTTP client, and MySQl for database management.

## Features

### Live Search

We wanted users to be able to search for products as they type and see results pop up in real-time. I used a timeout to make sure API requests were only sent after the user stopped typing for a brief duration, which otherwise would've resulted in a build-up of requests. For extra measure, axios’ Cancellation feature was used to cancel requests in the event of duplicate requests to the same endpoint.

![Live search](https://i.imgur.com/E2o9BIA.gif)

### Role-Based Access Control

Because the product web portal was to be used both internally by our team and externally by our clients, I needed to add restrictions to pages or components on a page.

I created an Authorization component that receives role and perform props and verifies them against the signed-in user’s permissions. If the user has permission to perform the action based on his or her role, the Authorization component renders the isAuthorized prop. Otherwise, the isNotAuthorized prop is rendered.

<p><script src="https://gist.github.com/kennethlng/dda055a1eff925127cf5cb59215e90bc.js"></script></p>

I also added the `ProtectedRoute` from [ReactTraining](https://reacttraining.com/react-router/web/example/auth-workflow) to redirect users to the login page if they weren’t signed in or didn’t have the proper access.

<p><script src="https://gist.github.com/kennethlng/c2832d03d6fea7f88faec7ef2d9099a8.js"></script></p>

### RESTful APIs

In addition to opening the website to our clients, we also wanted them to be able to plug into our APIs. I designed RESTful APIs with CRUD operations and HTTP status codes and messages. The user’s token is included in the Authorization header to validate the request.

### Data Visualization

[Viser.js](https://viserjs.github.io/) was used for data visualization. They have a huge library of ready-to-use components for React. It was just a matter of properly mapping over the data.

![Visualization](https://i.imgur.com/s7ypvAs.gif)

### Documentation

As with all my projects, I maintain a wiki to document all variables and processes.
