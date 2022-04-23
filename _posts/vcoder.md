---
title: "vCoder"
subtitle: "Virtual reality coding game"
date: "2018-10-21T05:35:07.322Z"
description: Learn computer science fundamentals in virtual reality by completing problem solving objectives. vCoder is designed to attract, inspire, and empower new programmers. Made with Unity.
featured_image: "/images/projects/vcoder/block-coding-2.png"
---

vCoder is a virtual reality game that teaches computer science fundamentals through problem solving objectives. It is designed to attract, inspire, and empower new programmers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8wjKmSahCow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Objective

vCoder is a participant of the 2018 Oculus Launch Pad (OLP) and one of the winners of the scholarship. As a participant of this program, we had two months to deliver a polished and functional prototype to compete for a scholarship.

Our mission for vCoder is to create the first educational coding game that teaches computer science directly inside virtual reality. The approach offers significant benefits over traditional platforms.

- The immersive quality of VR means that the player gets to be the hero rather than control the hero, resulting in a personalized and more focused learning experience.
- Transforming the coding language into something physically interactive improves recall and the speed of learning.
- Merging the coding lessons into a game allows for real-time feedback on the player’s decisions.

<p><div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/WellgroomedDependentComet' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

By gamifying the education and leveraging the enclosed and interactive nature of virtual reality, vCoder makes learning coding more engaging and experiential. With vCoder we can nurture interest in computer science at an early age and ultimately improve the diversity of students majoring in computer science.

Along with a small team of six engineers and artists, my objective was to deliver a fully functional prototype that encapsulated that mission. The design criteria included:

1. An interactive, spatial coding language that’s easy to learn, primitive, and feels natural in virtual reality.
2. Locomotion for 3D movement and exploration.
3. Hand-tracking and 3D controls for physical interactions.
4. Objective-based lessons.
5. Guided, step-by-step tutorial with sequential lessons that build on previous learnings.

As our plan was to also seek investments, I also helped develop the business plan and pitch decks.

![screenshot](/images/projects/vcoder/block-coding-1.png)

## Game

In vCoder, players play as a superhero traversing through a broken world and must solve coding challenges using coding blocks.

On the left hand, players have a coding ray that they can use to extrapolate an object’s code. Once the player extrapolates the code, the player can open their coding block inventory and commence with manipulating the object’s code.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/InsistentClearcutAntarcticfurseal' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

The coding blocks are based on the Scratch grammar. This was an intentional design choice—since Scratch is used by primary school students for learning coding, we felt the best way to onboard that same market onto our platform was to introduce a familiar language to reduce user friction.

![screenshot](/images/projects/vcoder/block-coding-2.png)

Each coding lesson is objective-based, which means that the player passes the lesson only once they’ve achieved the objective and not when they’ve picked the right blocks. We believe everyone has a unique thought process for discovering the solution, so there is no right way to accomplishing anything. For each lesson we unlock a multitude of coding blocks that players can choose from, which inspires them to be creative and play around with different sequences to achieve the correct end result.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/WellgroomedSerpentineAvians' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

For the core puzzle we created a rendition of Beat Saber, which we cleverly called Beach Saber… I’ll see myself out… We wanted the goal of the higher-difficulty puzzle to be easily identifiable, so we figured that players would enjoy interacting with the world using familiar mechanics from popular VR titles.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/UniformSevereDutchshepherddog' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

The game and coding language are seamlessly integrated to provide real-time feedback.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/HeartfeltWindyBullmastiff' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

Throughout the lesson, you are guided by a friendly bot called Cod-E. Additionally, you meet fun, likeable characters like Mr. Orca.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/BlandAcidicChick' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

## Production and Engineering

In my previous experience managing my own indie game development studio, I became a huge proponent of agility, efficiency, and scalability—the earlier you prepare, the less headaches you’ll deal with that impede progress and potentially lead to burnout.

I developed the vCoder prototype in Unity and implemented Virtual Reality Toolkit (VRTK) to make vCoder cross-platform. Deploying a build for Oculus and HTC was, for the most part, effortless.

<p><div style='position:relative; padding-bottom:calc(56.33% + 44px)'><iframe src='https://gfycat.com/ifr/UnrulyHarshGyrfalcon' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div></p>

I utilized ScriptableObject events and event listeners to create a clean, efficient, and fully decoupled game architecture. The following system is from Schell Games’ “Game Architecture with Scriptable Objects” presentation at Unite Austin 2017.

<p><script src="https://gist.github.com/kennethlng/f10363f7013f236412735940232e5534.js"></script></p>

<p><script src="https://gist.github.com/kennethlng/6395fdfa3852287dde110cd4bdc8b71e.js"></script></p>

## Team

- Angela Patterson, CEO
- Keith Patterson, COO, Engineer
- Kenneth Ng, Engineer
- Tejas Shroff, Designer, Engineer
- Kwan Sukasame, Art Director
