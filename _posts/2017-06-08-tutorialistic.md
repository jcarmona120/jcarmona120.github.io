---
layout: post
title: "Tutorialistic"
date: 2017-06-07
---

### Tutorials and Documentation

There are so many tutorials and all the advice on the web says make sure you make your own stuff. I've been going back and forth between both. I may not call mysel an expert in any language but I damn sure have experienced a lot of them. Ruby tutorials, PHP tutorials, Javascript (a lot), Node, Swift, Typescript, Angular, React, Knockout, Handlebars -- and the list goes on. Each one has helped me understand some other part of some other language. It's nice to learn patterns on things like templating and MVC. This Saturday, I'll be taking on my first big workshop on Angular/Typescript. Should be exciting. It'll be the first time I'll be building anything in a team. Really excited to gain that experience and hopefully not piss anyone off.

**Workshops!**

I would love to start a monthly workshop where newbies can present. They'd get a chance to teach other newbies about something they are studying. Compare knowledge. Seeing as I used to do standup comedy open mics, it seems fair to make something similar for developers. I'm sure there are a ton of developer workshops but they tend to be long workshops where pro developers teach one subject. I'd really like the experience what its like to explain a project and communicate my ideas. Going to work on this over time.

### What I Learned Today

**Google App Scripts**

This was somewhat random but we use Google Sheets at my day job. So today, I realized you can write Javascript functions in the Google Script Editor. What's exciting is that since it's work related, I can work on a project for work at work!! I'm really excited to learn more about API's. Check out this function that freezes the top header row for your Google Sheet.

```javascript

function createHeaders() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Freezes the first row
 sheet.setFrozenRows(1);
}

```

OK, I'll talk to you guys tomorrow! Going to work on styling this blog starting tomorrow. Updates soon. 
