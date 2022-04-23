---
title: "Wizards' Duel AR"
subtitle: "Real-time, multiplayer augmented reality mobile game"
date: "2018-07-08T05:35:07.322Z"
description: Two or more players battle each other in real-time using magic spells and shields in augmented reality. Made with Unity, GameSparks, and ARCore.
featured_image: "/images/projects/wizards-duel-ar/Cover-CodenameNeon.png"
---

<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/FaroffFrenchGelada' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
<small>Real gameplay footage, shot on iPhone X, iPhone 6s Plus, and Google Pixel 2 XL.</small>

---

AR is yet to make a major breakthrough, but there has been a slew of exciting advancements in preparation for a future where AR glasses will sit on everybody’s faces.

One of the big topics in AR this year is sharing AR experiences — how can users superimpose virtual content onto the real world that others can see and also interact with.

Imagine, for example, being able to battle other players in Pokémon Go in AR. Or being able to fight a fire-breathing dragon with a group of friends and shield each other from damage using a virtual shield. Or even be able to perform safe experiments in a virtual environment with your classmates during your chemistry lab class. These are now all possible right on our smartphones.

This project is an AR tech experiment made with Unity3D, using Google Cloud Anchors and GameSparks real-time multiplayer networking. You can apply it however you like. Get the project on [Github](https://github.com/kennethlng/WizardsDuelAR) and enjoy!

---

## The Challenge

Previously, AR experiences were reserved for the individual initializing the AR session on his or her phone.

Although other people could also initialize their own session, that individual couldn’t share what s/he’s looking at with other people.

There are 3 key challenges to address:

### 1. A common frame of reference

When a person starts an AR session on their phone, the camera analyzes the environment frame-by-frame to develop a visual understanding of the real world, looking for distinct features like lines and corners. Each person’s camera acts on their own, and without a way for the phone to share what it sees with other phones, it wouldn’t be possible for any two users to place and move virtual content on top of the real world using the same coordinate system.

### 2. Synchronized content between players

If I place a virtual dog on the ground whining for food, it’s expected that everybody looking at my virtual dog sees the same thing. Virtual content needs to be synchronized across all viewers, no matter who initiates it. Otherwise, it creates a blatant disconnect from reality.

### 3. Physical and interactive

When you superimpose virtual content on top of reality, users expect to be able to engage with the virtual content just as you would with real-world objects. AR experiences should therefore encourage its users to engage with the virtual content as much as possible. For example, conventional user interface elements on the smartphone screen, such as buttons, scrolling, and sliders, should be avoided unless they’re augmented onto the real-world for the user to interact with.

---

## The Concept

Almost everybody loves fantasy, right? How good would it feel to be able to wield a fireball in your hand and blast somebody with it? Or to conjure a lightning strike by drawing symbols on the floor?

<p>
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/FamiliarTotalAlligatorgar' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
<small>HADO</small>
</p>

In the excitement of Niantic’s [Codename: Neon](https://www.youtube.com/watch?v=dO1NpT2SSX4), the upcoming [Harry Potter: Wizards Unite](https://www.harrypotterwizardsunite.com/en/) mobile game, and the [2018 HADO World Cup](https://www.youtube.com/watch?v=TjbtH_MxDQI), I opted for a similar concept based on a wizard’s duel. Simply put: players blast each other with magical spells. I wanted to implement a gameplay mechanic that players would feel good doing in AR.

![](/images/projects/wizards-duel-ar/CoverAlt@0.5x.png)

<small>Photo by Reinhart Julian on Unsplash</small>

---

## Stack

### Google Cloud Anchors

During I/O ‘18, Google presented a crafty solution called Google Cloud Anchors, which allows users to host an anchor to the cloud that others can then resolve. What this means is that users can share a spatial mapping of their surrounding environment with each other, and Google helps put together a common frame of reference via an anchor—the cloud anchor.

<p>
<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/1xpBModVoey49S9FvG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
</p>

### Share AR Experiences with Cloud Anchors

With this same cloud anchor situated in the environment on every player’s camera screen, every player’s game has the same reference point from which to share their phone’s relative position and rotation.

Google provides an SDK for Unity, allowing developers to create cross-platform applications. I leveraged the CloudAnchorController script used in the CloudAnchor scene in the GoogleARCore package.
Before building out the game from Unity, make sure the project is set up to use Cloud Anchors. Follow the instructions on their webpage (iOS, Android) to configure a few project settings.

### GameSparks Real-Time Services

Powered by AWS, GameSparks is a full-on backend-as-a service targeted specifically for online multiplayer games. They provide low-latency multiplayer networking solutions that are perfect for real-time synchronization of virtual content between players.
GameSparks also provides an SDK for Unity and lots of documentation and examples for its real-time services.

---

## The Game

Wizard’s Duel AR is a cross-platform, multiplayer AR brawler for players with ARKit- and ARCore-supported smartphones. Two or more players engage in real-time combat by blasting each other with magic and defending themselves with shields. There are no win conditions or rules. Players can host new duels and join or spectate existing duels.

<p>
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/RemorsefulContentArctichare' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
</p>

### Camera-tracking wands

The wand is a visual representation of the position and rotation of each player’s smartphone shared live with all other players. Mobile AR is not without its faults, so how far the wand is from the actual player’s phone gives you an idea of the discrepancy that happens due to drifting.

<p>
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/WhichLightAracari' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
</p>

Additionally, I added a widget that floats above the phone’s theoretical position and displays the player’s username. It’s a visual aide just like the wand, and it can be customized to share other relevant information, such as health, team, and score. The widget has a billboard script, so it will always face your camera.

### Physics-based projectiles

The magical projectiles that fly from each player’s wand are physics-based and set at a speed that allows opponents to dodge and re-position themselves. This encourages players to be physically active during the game.

### Shields

I introduced shields not only as a defensive mechanic but also as a cooperative mechanic that encourages players to physically interact with each other. For example, you could have a version of this game with teams where the win condition is to reduce your opponent’s health. Low-health players could take cover behind the shields of their teammates as they recover.

<p>
<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/DeepForkedArachnid' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>
</p>

### Invisible colliders

As fun it is to blast your opponents, it wouldn’t be very satisfying if the projectiles kept flying through their bodies.

I added capsule colliders that are positioned roughly within the vicinity of the player’s body, so that when you shoot another player and it looks like you’ve hit them, the projectile collides with the collider and activates an explosion effect.

### Drop in & drop out

Lastly, the game is configured to allow players to jump in and out of the game and even spectate if they want to. AR experiences are extensions of the real world, so any public activity should be open to bystanders.

### Game Flow

1. Players log-in with a username and password. Players can input any random username and password to be authenticated.

2. One player selects the option to Host a duel. An AR session is initiated and the player’s camera scans the environment. Once a plane has been created, the hosting player can tap on the screen to place a cloud anchor on the plane and submit it to the Google servers. Once the anchor is successfully processed, other players can join this AR session by resolving the cloud anchor. The game does not start until at least one other player has entered the duel.

3. All other players who are joining the duel select the option to Join. The players must input the room number of the duel and the IP address of the host player — this information is available in the top right corner of the host player’s screen. Once the required information has been inputted, the camera scans the environment to resolve the cloud anchor. Once the anchor has been successfully resolved, the player joins the AR session created by the host player and the game starts.

4. When the game starts, all players in the AR session can immediately begin dueling.

### Controls

Tap on the screen to fire projectiles. Hold your finger on the screen to raise the shield.

---

## Conclusion

Playing AR games on mobile at a 1:1 scale with the real world is quite awkward. Trying to dodge a projectile that you can only see through your phone screen creates an immediate disconnect from reality. That’s why most mobile AR applications either scale the virtual content down to fit the space in front of you or are planted down at a set location that doesn’t require you to look around.

That’s why the future of AR is not in mobile but in glasses to create a fully immersive experience.

If you plan on making a game similar to this project, I recommend trying the following ideas:

- Spawn items and equipment on the floor or wall that you can position yourself around rather than attaching them in front of the phone. For obvious reasons, you just can’t see anything if you put, let’s say, a shield in front.
- Draw symbols on the floor below an opponent to cast spells. Since this uses raycasting, players can feel their touch actions on the phone screen be transposed directly onto the real world.
- Be creative with projectiles. Your eyes have no depth perception on the phone screen because everything is scaled down. You have no way of gauging where and how far you’re shooting — try it yourself by turning off the cross-hairs in a first-person shooter game. However, there are ways to address these challenges. You could try, for example, line renderers instead of particles for the projectile trail because the line renderer visibly reduces in size the farther it travels. You could also have a more concrete object, like a ball or rocket.

---

_Cover image credit goes to Niantic_
