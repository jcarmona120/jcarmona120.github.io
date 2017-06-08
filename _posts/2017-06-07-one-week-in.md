---
layout: post
title: "Keeping Confident"
date: 2017-06-07
---

### KEEPING CONFIDENT

Today mirrors what I spoke about yesterday. I came across a really simple website today called [CodeQuizzes](http://www.codequizzes.com) and it was definitely a confidence booster to see I could handle all the beginner stuff. The website offers quizzes on Ruby, Rails, Javascript, Git, Computer Science, and others. Each category features quizzes with quick click to reveal answers with explanations. I plan to incorporate these quizzes into my weekly study. Another little victory!

**A Book to Check Out**

I've been reading [Don't Make Me Think](https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/ref=pd_lpo_sbs_14_t_0?_encoding=UTF8&psc=1&refRID=R8SN0RJ4QG960W7XNPV4) right now. Definitely helpful to keep UX in mind. Make sure you don't get too caught up trying to make some crazy new design and lose focus of the people who will be using the your fancy schmancy website overloaded with CSS animations and Javascript widgets.


### What I Learned Today

**Functions and Scope**

Something I learned before, but got a good reminder from CodeQuizzes. It has to do with declaring a variable and global scope.

```javascript
function book() {
  good_book = "Slaughterhouse Five";
}
book();
console.log(good_book);
```

This will log "Slaughterhouse Five" to the console. _good_book_ becomes global because it was not declared with the var keyword! If it had been:

```javascript
function book() {
  var good_book = "Slaughterhouse Five";
}
book();
console.log(good_book);
```
Then it would be local and only able to call using the book() function.
