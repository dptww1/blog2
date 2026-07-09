---
layout: post
title: "Above the Trenches: The Units"
excerpt: "What's on the counters?"
date: 2026-06-21
categories: ["abovethetrenches"]
---

In addition to the [aces](/abovethetrenches/2026/06/08/02-aces/) previously mentioned, my prototype of long ago had four different kinds of units:
fighters, reconnaissance, bombers, and zeppelins.

These types were divided into generations, F1-F5 for fighters, R0-R4 for recce aircraft, B0-B2 for bombers and Z0-Z2 for zeppelins.  The idea was
that the German F3 fighter was roughly equivalent to the French and British F3 fighters.  But the specific type of aircraft didn't matter much in
the big picture.  As an example, the Albatros D.III, D.V, and D.Va were all roughly equivalent and would have been rated F3.  So though the counter
values were generic, you could still potentially have different aircraft types there, which would be visually interesting.

There are many aircraft sequences that work pretty well in this scheme:

<table class="simple">
<tr><td></td><td><b>German</b></td><td><b>French</b></td><td><b>British</b></td></tr>
<tr><td>F1</td><td>Fokker E types</td><td>Nieuport 11</td><td>DH-2</td></tr>
<tr><td>F2</td><td>Halberstadt D types</td><td>Nieuport 17</td><td>Sopwith Pup</td></tr>
<tr><td>F3</td><td>Albatros D types</td><td>SPAD 7</td><td>Sopwith Triplane</td></tr>
<tr><td>F4</td><td>Fokker Dr.I</td><td>SPAD 13</td><td>Sopwith Camel, SE-5a</td></tr>
<tr><td>F5</td><td>Fokker D.VII</td><td>Nieuport 27?</td><td>Sopwith Dolphin & Snipe?</td></tr>
</table>

But there are important aircraft which are hard to fit into this typology.  Do we consider the multi-seat aircraft like the Bristol Brisfit, German
CL-types, and Caudron R types to be fighters, or bombers?  Is the FE-2 a reconnaissance aircraft or a bomber?

And the reconnaissance types themselves are less of a good fit.  Until the improved DH-9a comes out, the DH-9 is arguably a backward
step from the DH-4, which ruins the smooth technological progression.  And the Brisfit and the Breguet 14 are top-notch reconnaissance
units that are probably two steps better than FE2s and AR1s that they replaced.

To solve those problems, I'd like to explore ditching the generational approach and shifting instead to counters representing specific
aircraft types, with values reflecting the capabilities of that type.

So what values do we need?  A good first start would be:

- **air-to-air combat value**: how good was this machine at inflicting damage on targets in the air?  This would be affected by number and type
of machine guns, speed, and manueverability.

- **air-to-ground combat value**: how good was this machine at inflicting damage on targets on the ground?  Potential bomb load would be the biggest
determiner here.  Also needed is some sort of indicator that this aircraft has the range for strategic bombing.

- **defense value**: how well can the machine can survive the rigors of combat?  Speed and sturdiness are the important elements here.

- **altitude**: not the ceiling, but an abstract measure of the operating height of the airplane, say on a 1 (low) to 3 (high) scale.

The first three are pretty obvious.  What's driving altitude is another problem I had with the generational system, namely that it didn't
account for the high-flying Rumpler C.VII which was essentially immune from Allied interference until their own high-altitude machines
reached the front.  The altitude value restricts the air-to-air combat value, which can only affect enemies at the same altitude or lower.

The units in most wargames have a movement value, but with three-month turns any group of aircraft could operate essentially anywhere.  There need to be
some movement restrictions because even when air forces became administratively independent they couldn't just entirely denude a front.  But
that's game-level mechanic, not a per-unit value.

Determining those values for the aircraft represented in the game will have to develop simultaneously with the combat resolution system, which is
still inchoate.

The main disadvantage that I can forsee here is that production may become more complicated, because there are more types of aircraft.  While
aircraft like the Halberstadt D.I - D.IV can certainly be combined, and types that never had more than, say, 40 aircraft at the front can probably
be ignored, there are still likely going to be more than the 5 fighter + 5 recce + 2 bombers + 2 zeppelins = 14 types.
