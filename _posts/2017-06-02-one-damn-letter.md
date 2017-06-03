---
layout: post
title: "ONE DAMN LETTER - Every Letter Counts In Coding"
date: 2017-06-02
---

### Don't Call It a Breakthrough

I have been learning Wordpress for about two months. Spent the last month building a portfolio for an artist. They required a video, illustration, and photo section with several categories within that. I used [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) and [Advanced Fields](https://wordpress.org/plugins/advanced-custom-fields/) to set it up. Each item in her portfolio needed a single page so I created a single-$posttype for each section. And category-$slug for each category. I imagine there was an easier way to use some kind of if loop to create the category page but I went with the longer process. 

Two days ago, I could not figure out what was wrong. None of the illustration and photo category pages were working. And sometimes, as you've all probably experienced, you just get more and more frustrated. You miss the obvious. You get angry. You work on another project. You wonder what you would do if you really did throw this computer through the window. 20 minutes on Facebook. Then two days later, you pull yourself together and say 'Let me get back to this and figure it out'. 

Turns out, for two days, I had missed a stupid letter in my post slug name declaration. The _$query_ for the Loop requires a _'post_type'_ and _'category_name'_. I had been calling _'post-type' => 'illustration'_ when my field name was **'illustrations'** with A DAMN S!

![posttype mistake]({{ site.url }}/assets/image.png/assets/img/posttypemistake.jpg)

When I finally fingured out I missed the 's' at the end of 'illustration', I was so happy. Such a little thing. Driving me crazy. It was a huge breakthrough for the project. I really needed to finish that so I could focus on the finishing the project. All I need to do is go through some styling issues (including making it responsive!). 

I'll keep you updated on how the project is going and take on of these days to maybe write a tutorial on Custom Post Types. 

### Things I Learned Today

This little snippet from Learn Node with Wes Bos on how to prevent users from prematurely submitting a form with the Enter Key. He uses ES6 all the time which is really my favorite thing right now. 

![posttype mistake]({{ site.url }}/assets/image.png/assets/img/keydown.jpg)

+ Call an event listener on the input field (input.addEventListener)
+ Call the event which is 'keydown'
+ Call a function with the paramenter (e) for event. Then create an if statement in that function. 
+ In the if statement, you declare that if the keyCode of the key pressed is the Enter Key (13), then preventDefault()
+ preventDefault() is the go to function to stop the form from submitting. The default causes submission and refreshes the page. 

I'll create snippets section soon for stuff like this. Also, if you want to know your keycodes - check this out - [Keycode](http://keycode.info)! 

See you tomorrow!

