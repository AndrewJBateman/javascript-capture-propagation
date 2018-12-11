javascript-capture-propagation
=================

Understanding how Javascript event capture works in triggering events and how to prevent propagation.

Notes
-----------

The bubbling principle: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. The process is called “bubbling”, because events “bubble” from the inner element up through parents like a water bubble.

The method to stop bubbling is event.stopPropagation().

Link to: [Wes Bos Youtube Javascript30 tutorial 25](https://www.youtube.com/watch?v=F1anRyL37lE&index=25&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)

