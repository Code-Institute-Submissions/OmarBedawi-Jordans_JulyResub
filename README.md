# Jordans

Jordans website has two main tasks:
1. to be among the firsts, to put on market the latest and the Limited Edition shoes coming out from the Jordan Brand House
1. to have a variety of products to satisfy different categories and ages

This website is suitable to who is looking for special edition like the retros or the ones dedicated to special events or 
memories or anniversary of the NBA or Michael Jordan himself.



## Installation

In the head of the project I have installed the links to have access to different ![libraries](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/images/jordans-head.png?raw=true)
1. Bootstap 4: a library with templates for buttons, form or other components. For this project I use it to build the responsive navigation bar.
1. Font Awesome: is an icon library. I use this library for the flames in the jordan_in page for example ![flames](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/images/jordans-icon.png?raw=true)
1. Cdnjs is a Javascript library and below the external link to the style.css file.


I build this project with a shade of blue responsive navbar, that shows a toggle menu when reduced to screens below 991px.
To build it I followed an accurate and guided video that you can find at this [link](https://youtu.be/gt8zOLQ8A0w)

I enrich the home page with pictures of Jordan collections and cards with shoes on sale and then below the cards you can find 
the links to access the Indoor and Outdoor pages.

The Indoor and the Outdoor pages are the most important because is where our products are exposed.
In our pages you can find shoes for players, but also for who want to wear a pair of Jordans even out of the basket-ball court.

The WhyJordan page is explaining why the Jordans are so competitive on the market and some info on Michael Jordan.

In the contact us page we dedicate a space to our customer to expose ideas regarding any customization of Jordan shoes


## UX
The CSS file is divided by comments, that I used as title to separate the pages.
This make any future correction or research much easier.
And I did the same for the mobile and other screen sizes ![css2](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/images/jordan-mob.png?raw=true)

For the Html files has been the same ![html](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/images/html.png?raw=true)
Every element built, has a comment explaining the reasons and the source of that code

### Users
We are expecting users of any age, not with the mandatory to be a basketball fan but only pleasure for nice shoes.


### Wireframes
The wireframes have been built using the Balsamiq Cloud service.

All wireframes can be found [here](https://github.com/OmarBedawi/Jordans/tree/master/readme_files/wireframes.md)  
 
For individual files, please click the desired page:
  * [Homepage](https://github.com/OmarBedawi/Jordans/trees/master/readme_files/wireframes_images/1.homepage.png)
  * [Indoor Page](https://github.com/OmarBedawi/Jordans/tree/master/readme_files/wireframes_images/2.indoor_page.png)
  * [Outdoor Page](https://github.com/OmarBedawi/Jordans/tree/master/readme_files/wireframes_images/3.outdoor_page.png)
  * [Why Jordan Page](https://github.com/OmarBedawi/Jordans/tree/master/readme_files/wireframes_images/4.why_jordan_page.png)
  * [Contact Page](https://github.com/OmarBedawi/Jordans/tree/master/readme_files/wireframes_images/5.contact_page.png)


  Please note that these wireframes may not match the finished product. 
  
  Some elements may be moved or changed based on feedback or styling issues discovered during development.



## Technologies Used

This project makes use of:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - HTML for strucutre
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - CSS for Styling
- [JavaScript](https://www.w3schools.com/jsref/)
    - **JavaScript** for application controller
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Google Chrome](https://www.google.com/chrome/)
    - Used for browser and dev tools
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new)
    - Used for browser and dev tools
- [Google](https://www.google.com/)
    - **Google** was used for research.
- [Bootstrap](https://getbootstrap.com/)
    - HTML and CSS Framework from **Bootstrap**
    - This project was built using the **Gitpod** IDE
- [Git](https://git-scm.com/)
    - **Git** used for Version Control
- [GitHub](https://github.com/)
    - Repository hosted on **GitHub**
- [Github Pages](https://pattern-projects.github.io/oireachtas-ifd-project/)
    - Website hosted on **Github Pages**




## Testing

The site was tested through the [W3C Markup Validator](https://validator.w3.org/#validate_by_input) for Html and Css.
I had to correct an error in the <header>. Was about a <div> nested in <ul>.

The validator still call as an error some of the classes regarding the map section.

The project still presenting 2 little bugs in the contacs.html page: 
1. in the form, the "Describe your shoes" area has the cursor not align at the top but in the middle
1. the form is not having regular margin-bottom on all screen sizes despite I made lot of tentatives

The site was also tested through different browser (Mozilla Firefox, Google Chrome and Internet Explorer) and different screen sizes
![here](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/images/screens.png?raw=true)

## Deployment

The project is hosted on [GitHub Pages](https://github.com/OmarBedawi/Jordans)

The process involved:
- Host a git repository on GitHub. Explained [here](https://help.github.com/en/articles/create-a-repo).
- The root folder contains README.md and index.html files
- On GitHub repository settings page move to GitHub Pages section
- Change source to master branch. (Or any desired branch)
- Provided link will be your projects home (index.html) page.
 
To deploy your own version of the website:
- Have git installed
- Visit the [repository]([GitHub](https://github.com/OmarBedawi/Jordans))
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (in my case Gitpod)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository
    - ```git clone https://github.com/OmarBedawi/Jordans-ifd-project.git```
- When this completes you have your own version of the website
    - Feel free to make any changes to it
- The website can be run by opening one of the HTML files within a web browser
- Visit the link provided
- Your website with any made changes will appear
- Saved changes to the website will appear here after refreshing the page

The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete.

It may take a moment for changes to appear on the hosted website.

During development the site is written in Gitpod.

### Acknowledgements
Thank you to the following for inspiration, motivation and the direction I needed:

- Seun Owonikoko    @seun_mentor
- Code Institute staff
