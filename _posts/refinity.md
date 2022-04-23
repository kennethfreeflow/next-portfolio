---
title: "Refinity"
subtitle: "Mixed reality shopping kiosk"
date: "2019-06-30T05:35:07.322Z"
description: With hand-tracking and a 3D interface, Refinity is a mixed reality shopping kiosk that allows users to view virtual products in 3D and interact with them using hand gestures. No wearables needed. Made with Unity, UltraLeap, and SeeFront.
featured_image: "/images/projects/refinity/Screen Shot 2020-01-08 at 4.20.33 PM.png"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/6hhJItjbH2I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Refinity is a multi-sensory shopping kiosk I developed at the Alibaba DAMO Academy as an innovative effort to redefine retail. It has a 3D interface that allows customers to select and interact with virtual products using hand-tracking, mid-air haptics, and an auto-stereoscopic 3D display. No wearables are needed.

## Press

Refinity was well-received by the press. We exhibited at numerous conventions across the world, including [CHI 2019](https://www.google.com/search?client=safari&rls=en&q=chi+2019+refinity&ie=UTF-8&oe=UTF-8), and at one of the largest malls in Beijing.

[The future of retail is a seamless digital and physical experience](https://retailtechinnovationhub.com/home/2019/8/7/the-future-of-retail-is-a-seamless-digital-and-physical-experience)

[‘Refinity’ Tech Delivers Multi-sensory Shopping](https://www.alizila.com/video/refinity-tech-delivers-multi-sensory-shopping/)

## Publications

[Demonstration of Refinity: An Interactive Holographic Signage for New Retail Shopping Experiences](https://dl.acm.org/doi/fullHtml/10.1145/3290607.3313269)

## Concept

Refinity was an exciting endeavor to create a retail platform in mixed reality. If you wanted to buy an appliance from Home Depot, you're limited at most to poorly rendered screenshots, blurry user photos, and verbose specification diagrams. With Refinity, you would be able to see a virtual but realistic 3D representation of the product, rotate it, zoom in and out of its anatomy, and watch animated demostrations of its functionality.

![](/images/projects/refinity/Screen Shot 2020-05-13 at 3.50.12 PM.png)

## Stack

Unity was a perfect choice for building the foundation and architecture for this application. We used LeapMotion for hand-tracking, Ultrahaptics for mid-air haptics, and SeeFront for autostereoscopic 3D display.

## Design

The core pillar of design for our team, the Natural Human Computer Interaction (NHCI) lab, is that all applications we build must be _natural_ for the user. Interactions must fit the skills and context of the user. Introducing a mixed reality interface would require teaching new behaviors, so reducing any amount of friction would be beneficial.

### Gestures

This proved to be quite the challenge. Refinity is a completely touchless platform with no keyboard or mouse. We experimented with existing frameworks, like Mixed Reality Toolkit shown below, where pinching was akin to clicking on a mouse or tapping on a phone screen, but we found that these popular frameworks still weren't _natural_ enough. Users we tested it with needed initial guidance.

<div class="gallery" data-columns="2">
	<img src="/images/projects/refinity/vr-magic-hololens_2-hand_interaction-vrroom-4.gif">
	<img src="/images/projects/refinity/vr-magic-hololens_2-hand_interaction-vrroom-2.gif">
</div>

We prototyped a ton of gestures and for each one we conducted focus groups. Since mid-air gestures are not yet mainstream, even in virtual reality, we were able to gather a lot of data based on user behavior to see what was natural. We eventually settled on:

- Point to explore
- Grab to select
- Swipe to change
- Push to return

In fact, we found these gestures naturally mimicked what babies instinctively do when they reach out for something.

### Interface 

The user experience and navigation flow of content was just as important as the gestures. For simplicity's sake, we mapped the eCommerce customer journey as:

![](/images/projects/refinity/Screen Shot 2020-05-13 at 3.41.43 PM.png)

We replicated that journey in Refinity. Products were showcased in a virtual scene, like a living room. Objects that the user pointed at were highlighted with a soft glow. When a product was selected ("grabbed"), the background blurred out and the selected product would appear in front of the user with product details on the sides. The virtual product, which now appears 3D in front of the user, can be "touched" and rotated by the user's hands.

### No virtual hand models

For most people coming from virtual reality, it's common to have hand models represent where your hands are in the virtual scene. However, Refinity is an open system; users don't wear headsets and are not fully immersed in a virtual world. Therefore, seeing floating hand models next to your real hands would have created an immediate disconnect.

Here's an example of what I mean from MRTK (Mixed Reality Toolkit by Microsoft).

![](/images/projects/refinity/vr-magic-hololens_2-hand_interaction-vrroom-3.gif)

The focus is immediately on the models, and the user will begin to rely on the model for all interactions with virtual objects in the scene.
