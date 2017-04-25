## LabD
#  DataBinding

### Goals
Just because databinding is a basic skill, it does not make it easy somehow. You will practice front end data-binding
a few different ways (browser, server, web component, etc). Pro-musicians and pro-basketball players practice; and so should you.
Ideally you know of Sass, Scss or LESS and have more that just a few years out of school, this is not suitable for 
people with only a few years experience out of school, you need some experience.

We do some foundation level things and then some more advanced level related to data binding:

## I Databinding basics
### 0. Setup
- Download and run <http://github.com/topseed/topseed> as per instructions there (maybe use a released version). Also,
that website has a link to a support form 'gitter'. Join there. If you have any questions or comments, 
you'll find support there from the instructors.
- Install  <http://tinyurl.com/mjeka4j> Advanced REST Client, a Chrome browser plugin for REST
- Required IDE: 
 <http://code.visualstudio.com> (so you can get instructor support). Set it to auto-save and use tabs, not spaces, don't be a savage ;-).
- Use Chrome browser. Click menu (:) on right/ More Tools/ Developer Tools. This will show you 'console' for: console.log('here'); in .js.
- Optional: Install <https://zeit.co> and deploy /topseed/webApp. This way you start learning how to host a web site. Also setup CDN77, to learn how to have a web app on www.

### 1a. MicroService, REST(y)
Using Advanced REST Client above, execute POSTs to these urls:
- https://topseed.now.sh/membersPg/mem
- https://topseed.now.sh/membersPg/list
Both should return some JSON data.

### 1b. Using fetch() for remote data calls
- In the browser with the Developer Tools open, go to http://localhost:8080/_tsts/tst1.html
- View page source (rightclick on content) and tst1.js.
This is an example of JavaScript 'fetch()' browser standard that replaces Ajax and XHR.

### 2a. Reading data from HTML form
In browser with the Developer Tools open, go to <https://topseed-demos.now.sh/members/authJoin/>
- Enter some data and click on NEW/JOIN button. See the form data logged in Developer Tools console.
- View page source and the JavaScript function init(). It uses jQuery jsForm to access the html form data.
(jQuery is loaded in /_js/setup.js) 

### 2b. Client-side binding of list data
You can use JavaScript to dynamically
populate a list, and do further operations in the browser. That may help with
a smoother, more desktop-like user experience.
- Go to <https://topseed-demos.now.sh/members/dBindDT/index0.html>
- View Developer Tools console. When you click on a line, you get a 'primary key' of the clicked row.
- View page source and the JavaScript function dtInit(). 
- Recommended: Read documentation at <http://datatables.net>. 

### 2c. In-Browser binding of data obtained via fetch()
In the previous step, we saw list the list data in JSON format hardcoded in the page.
- Go to https://topseed-demos.now.sh/members/dBind/?w=1 
- View page source.

## II More databinding

### 3a. Server-side binding of list data: the output
In certain situations (e.g. SEO, fast loading or older ddevices) you can't use .js in browser. If you are able to avoid JavaScript at all the page may qualify as an "AMP" page 
which gets higher ranking for mobile searches by Google. To get there, you  need 
to bind your data server-side before sending it to the browser as an already complete page.
- Go to https://1595566120.rsc.cdn77.org/members/dBind/ (edge of topseed-demos.now.sh )
- View page source and see the complete HTML and zero JavaScript.  

### 3b. Server-side binding of list data: the mechanism 
To obtain complete HTML in 1a we use JavaScript on the server (running on Node.js) to compose the page before 
returning it to the browser. Inspect the server-side code here:
- <https://github.com/topseed/topseed-demos/blob/master/webApp/route/membersAmp.js>
See ~ line 108 for a fetch(). It is using Promise, not callbacks. Also don't use XHR or Ajax. We place the fetch results in the HTML response.  


### 4a. Deciding whether to return the client-side or server-side rendered version
In production, you can use subdomains to decide. E.g. when m.topseed.io is called, return the AMP "html only" version.
When www.topseed.io is called, return the "Web" version that contains JavaScript.
In development we don't use domains, so we use ?w=1 to simulate a call to the "Web" version.
- Optional: If you are curious how this "deciding" is done on the server, inspect
<https://github.com/topseed/topseed/blob/master/webApp/util/Decider.js>  See isW() function ~ line 48.

Node.js - which runs JavaScript on the server - allows us to use essentially the same code to obtain data 
from an API, either client-side or server-side, depending on the request.

For Search Engine Optimization (SEO), you may aim to make at least the homepage AMP/HTML only. Links may lead
to rich "Web" pages that have JavaScript and nicer UX.

### 4b. File Layout

![](layout.png)

For each url, we have a directory and in that directory is both amp.html and spa.html.

### 5. Authentication
- Using Advanced REST Client, try: 
- https://topseed.now.sh/membersPg/join
with 'body' of message as 
{
	"userEmail": "vicmasons@gmail.com"
	,"password": "123"
}
and custom Content-Type: application/json

This will return a JSON Web Token, or an error message if the password is not '123'.

### End of this section.

![](weknow.gif)
