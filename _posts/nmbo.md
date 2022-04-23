---
title: "NMBO"
subtitle: "Checklist web app"
date: "2020-11-02T05:35:07.322Z"
description: The fastest way to make a checklist with friends. Create a checklist and share the link, and anyone can start contributing. No account or download needed. Free to use. Made with React and Firebase.
featured_image: "/images/projects/nmbo/Cover@1x.png"
---

![](/images/projects/nmbo/Cover@1x.png)

[NMBO](https://nmbo.app) is the fastest way to make a checklist with friends. Create a checklist and share the link, and anyone can start contributing. No account or download needed.

To use NMBO:

1. Go to [https://nmbo.app](https://nmbo.app).
2. Create a new checklist or open a previous one.
3. Copy the checklist page URL and share it.

That's it!

## Stack

NMBO is made with `React` for the frontend, `Next.js` for server-side rendering, `Bulma` for the stylized components, `Firebase` (Authentication, Firestore, Cloud Functions) and `Node.js` for the backend, and `Google Analytics`.

## Opportunity

Last month my mom asked me what I wanted from Costco, but I had no easy way of sending her a quick grocery list. A week later, my wife and I were planning a weekend trip to the beach, but she uses a different checklist app than I do, so it was hard to collaborate without needing to download a new app.

Currently, there is an overwhelming number of checklist apps out there, but most of them are bloated with features and require you to create an account or download an app. You also can't share your lists with others unless they join the moat.

This made me realize that there could be a potential market opportunity for a niche checklist product that was simple, shareable, and highly accessible.

## Product

Inspired by Zoom's ease of use and Tik Tok's shareability, I chugged away on NMBO to create a simple, no-B.S. tool for collaborating with friends and family, a web app where I could easily share checklists on any messaging app where the conversations are happening.

### Web-based

First and foremost NMBO is web-based. A web-based solution means that it is accessible to _everyone_, especially the less tech-savvy folks, like my wife, who aren't willing to download or learn new apps.

### No account needed

Creating an account on NMBO is not required thanks to Firebase's anonymous authentication. Whenever a user opens NMBO, they are automatically signed in with an anonymous account, which grants them the ability to interact with the Firestore database under the data security rules, like opening shared checklists, creating new checklists, and adding tasks.

### Link sharing

Checklists are easily shareable. All you need to do is copy the checklist page link and share it. When the checklist link is opened, the app automatically routes to the checklist page and grabs the data for the checklist using the checklist ID provided in the URL pathname.

### Link previews with checklist titles

Considering users share the checklists via their messaging apps, server-side rendering with Next.js was an absolute must to show the checklist title in link previews.

The left image shows the link preview for my "Weekend trip" checklist using a client-side rendered React app that I shared on Messages. The checklist page title tag isn't available, so I'm stuck with the default slogan. The right image, on the other hand, shows the same checklist but using server-side rendering with Next.js. Much better 👌🏻.

<div class="gallery" data-columns="2">
	<img src="/images/projects/nmbo/client-side-rendering.jpg">
	<img src="/images/projects/nmbo/server-side-rendering.jpg">
</div>

## Feedback

NMBO is a work-in-progress, and I want to hear your ideas and feedback so I can make it more useful for your needs. Click [here](https://docs.google.com/forms/d/e/1FAIpQLSf_GusPzzA4M1xNiKxHHVwEj4Q3iz_fWrX9pJXihlIjcdVmaQ/viewform) for a brief Google Forms questionnaire.
