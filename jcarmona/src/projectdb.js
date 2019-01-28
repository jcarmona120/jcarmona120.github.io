module.exports = {
    "projects": {
        "baywatch": {
            "name": "Abel Cine 'Baywatch' Web App",
            "website": "",
            "short_description": "The project invovled building a web app that could be used for rental clients to communicate their needs with AbelCine employees to grab equipment as necessary. All data is updated live.",
            "description": "The web application was built using HTML, CSS, and Javascript with a Firebase backend. Clients access their specific bay on an iPad and all employees have access to view the bays to help clients when necessary. Each item on the list features different states via React for when it's being addressed, counter, and when the client has received it. The individual bay screens feature an information panel, the list panel, and will soon feature a shopping panel for items via the AbelCine Sales Department. There is also a suggestions feature based on items they type into the input.",
            "images": "https://s3.amazonaws.com/jc-images120/baywatch.png",
            "skills": [
                "HTML", "CSS Grid", "Javascript", "Firebase", "React", "Redux", 
            ],
            "thumbnails": [],
            "link": "/projects/baywatch",
            "id": 4

        },
        "abelcinebays": {
            "name": "Abel Cine Rental Bay Chart",
            "website": "",
            "short_description": "A website that features an admin panel, a welcome screen that faces clients when they enter the facility, a front-facing map for clients to find their rental bay, and back of house map that features more information about clients for staff.",
            "description": "Designed multiple maps that reflected information input on an admin page for a film and video rental house. A vertical interface and admin page were built first using HTML5 and CSS. Utitlized CSS grid to build organize the bays correctly. Used vanilla Javascript and a Firebase database to supply the data input from admin page to the front-facing vertical interface upon data change.",
            "images": "https://s3.amazonaws.com/jc-images120/rentalbayadmin.png",
            "skills": [
                "HTML", "CSS Grid", "Javascript", "Firebase"
            ],
            "link": "/projects/acbays",
            "id": 5

        },
        "KitchenClash": {
            "name": "Kitchen Clash",
            "website": "http://www.thekitchenclash.com",
            "short_description": "A culinary events company website that was built to supply information to potential clientele and provide contact forms for inquiries and email subscription.",
            "description": "This project was built for my side project, a culinary events company. The main challenge was to create a website that featured informational pages, a newsletter subscription option, and a contact form that would send a direct email to our email. In order to build this, I decided to use Node.js and Express serving HTML. In order to keep with the existing Mailchimp subscription list, the Mailchimp API was used for our subscription form. The contact form is supported by the Sendgrid API to send emails directly to us from clients when they have requests. ",
            "images": "https://s3.amazonaws.com/jc-images120/newsizedimage.png",
            "skills": [
                "HTML", "CSS", "NodeJS", "Express", "API Integration"
            ],
            "exampleImages": ["https://s3.amazonaws.com/jc-images120/kitchenlcash/aboutUsKC.png", "https://s3.amazonaws.com/jc-images120/kitchenlcash/bookUsKC.png"],
            "link": "/projects/kitchenclash",
            "bullets": [],
            "id": 1
        },
        "artcritical": {
            "name":"ArtCritical",
            "website": "https://list.artcritical.com",
            "short_description": "An art gallery event listing website was moved from Wordpress to React.",
            "description": "The client wanted administration accounts for staff so they could keep edit event and venue listings. The user accounts needed to be able to keep track of events they were interested in and suggest events. My role was as junior web developer creating forms and accompanying modals.",
            "images": "https://s3.amazonaws.com/jc-images120/artcritical/artcriticalform-modal-main.png",
            "skills": [
                "React", "NodeJs", "MongoDB", "Alt"
            ],
            "link": "/projects/artcritical",
            "id": 3
        },
        "cinnamon": {
            "name":"Cinnamon",
            "website": "http://cinnamonapp.herokuapp.com",
            "short_description": "Proof Of Concept for App that helps writers find synonyms, rhyming words, and other forms of inspiration.",
            "description": "A prototype of a personal project using the Datamuse API to create a fun to use thesaurus. Currently, I am looking to change out the API and switch to a Python backend for better natural language processing.",
            "images": "https://s3.amazonaws.com/jc-images120/cinnamon_two.png",
            "skills": [
                "React", "Words API", "SemanticUI", "TypeScript"
            ],
            "link": "/projects/cinnamon",
            "id": 3
        },
        "StudioPhantasmagoria": {
            "name": "Studio Phantasmagoria",
            "website": "http://www.studiophantasmagoria.com",
            "short_description": "A multimedia artist website built on CMS to help keep a constantly updated portfolio.",
            "description": "Multimedia Artist Portfolio that was built on Wordpress. Theme design was created from scratch with HTML, CSS, and PHP. It featuers several Custom Post Types and Advanced Fields to allow the admin to update each category as well as allow the admin to choose Featured projects.",
            "images": "https://s3.amazonaws.com/jc-images120/spdesktop.png",
            "exampleImages": [],
            "skills": [
                "Wordpress", "PHP"," JS/JQuery", "HTML", "CSS", "Custom Post Types", "Advanced Custom Fields"
            ],
            "link": "/projects/studiophantasmagoria",
            "id": 2
        },

    }
}