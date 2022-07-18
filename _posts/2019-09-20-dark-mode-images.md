---
layout: post
title: "Dark Mode Images"
microblog: false
guid: http://dezinezync.micro.blog/2019/09/20/dark-mode-images.html
date: 2019-09-20T17:24:00+0530
type: post
categories:
- "technical"
url: /2019/09/20/dark-mode-images.html
---
<p>I recently published the update website for <a href="https://elytra.app">Elytra</a>. Something I wanted to try was to seamlessly support both Dark and Light mode images using the simplest code snippet. </p>
<p>This is what I ended up with:</p>
<script src="https://gist.github.com/dezinezync/c9cd6edd3aacca02223c8610eb7374ff.js"></script>
<p>The key thing to note for this to work, the source with the <code>prefers-color-scheme:dark</code> media query must appear first in the list. If you add it anywhere else, it does not work.</p>
<p>I use <a href="https://github.com/DZNS/ES6Views">ES6Views</a> to render all these pages so I can have a function that returns the above struct and all I have to pass it are 3 arguments: The URL, width and alt-text.</p>
