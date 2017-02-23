## LabD
# Foundation: DataBinding

### Goals
Just because databinding is basic skill, it does not make it easy somehow. You will practice front end data-binding a few different ways (browser, server, web component, etc). Pro-musicians and pro-basketball players practice, so should you. Ideally you know of Sass, Scss or LESS and have more that just a few years out of school, this is not suitable for people with only a few years experience out of school, you need some experience.

We do some foundation level things and then some more advanced level related to data binding. 

## I Basics
### 0. Setup
- Download and run
- <http://github.com/topseed/topseed> as per instructions there. Also, that website has a link to a support form 'gitter'. Join there. If you have any questions or comments, you'll find support there from the instructors.
- Install  
 <http://tinyurl.com/mjeka4j> Advanced REST Client, a Chrome browser plugin for REST
- Required IDE: 
 <http://code.visualstudio.com> (so you can get instructor support). Set it to auto-save and use tabs, not spaces, don't be a savage ;-).
- Use Chrome browser. Click menu (:) on right/ More Tools/ Developer Tools. This will show you 'console' for: console.log('here'); in .js.
- Optional: Install prepros.io and add /topseed/webApp as project.
- Recommended: Install <https://zeit.co> and deploy /topseed/webApp. This way you start learning how to have a learning web site.

### 1a. MicroService, REST(y)
Using Advanced REST Client above, execute POSTs to these urls:
- https://middle4top-vgylwtpbxs.now.sh/membersPg/mem
- https://middle4top-vgylwtpbxs.now.sh/membersPg/list
Both should return some JSON data.

### 1b. Using fetch() for remote data calls
In the browser with the Developer Tools open, go to:
- <https://1595566120.rsc.cdn77.org/_tsts/tst1.html>
- View page source (rightclick on content) and tst1.js.
This is an example of JavaScript 'fetch()' browser standard that replaces Ajax and XHR.
You can find the source at https://github.com/topseed/topseed-demos/tree/master/webApp/www/_tsts 

### 2a. Reading data from HTML form
In browser with the Developer Tools open, go to:
- <https://1595566120.rsc.cdn77.org/members/authJoin/>
- Enter some data and Click on NEW/JOIN button. See the form data logged in Developer Tools console.
- View page source and <script> function init(). It uses jQuery jsForm to access the html form data.
(jQuery is loaded in /_js/setup.js) 


### 2b. Rendering List data
Go to:
- <https://1595566120.rsc.cdn77.org/members/dBindDT/index0.html>
- View Developer Tools console. When you click on a line, you get a 'primary key' of the clicked row.
- View page source and <script> function dtInit(). 
- Recommended: Read docs at <http://datatables.net>. 

## II Intermediate: DataBinding

### 1 Auth
- Using Advanced REST Client 
 Try:
- https://middle4top-vgylwtpbxs.now.sh/membersPg/join
with 'body' of message as 
{
	"userEmail": "vicmasons@gmail.com"
	,"password": "123"
}
and Content-Type: application/json

This will return a (JWT) token. Or error if password is not '123' :-)

### 2 SPA or SSR, both!
Most of the time, you also have to make a SSR (Server Side Rendering) version of your rich SPA. Check out isW() function here ~line 48.
- <https://github.com/topseed/topseed/blob/master/webApp/util/Decider.js>

Something like that can be used to signal to server to send out SPA or SSR page. You can use w/ layout like:

![](layout.png)

Just because you are talking advanced topics, does not imply that one can implement them.
Review fetch() for server side rendering (SSR) /data binding.
- <https://github.com/topseed/topseed-demos/blob/master/webApp/route/membersAmp.js>
See ~ line 108 a fetch() that we then place in our htm. If your app does SSR and in-browser data binding, geeks will call it 'isomorphic'. Most of the times this is a requirement in front end coding to have an rich SPA and a SSR. For example mobile, landing page, or SEO might need to be SSR. Then when user clicks, they get SPA.

You can see the SPA:
- https://1595566120.rsc.cdn77.org/members/dBind/?w=1
and SSR:
- https://1595566120.rsc.cdn77.org/members/dBind

View source on both! Same component is used both in SPA and in SSR. 

## III Advanced

### 1 Web Comp
There are many component libs, and you may need to 'polyglot', ie know more than one, since they change every 18 months or so.
![](poly.png)
We will use the easiest one to learn: <http://riotjs.com>

Check out SPA again, notice it is using a component:
- <https://1595566120.rsc.cdn77.org/members/dBind/?w=1>

- Optional: Review slides https://1595566120.rsc.cdn77.org/slidesDBind/

# Lab:Hands on DataBinding component`

- <https://github.com/topseed/topseed/tree/master/webApp/www/members/LABD>
The lab is in the topseed that you downloaded.
The component used on page is missing DOM mark up.
Implement it to make it works. (Solution is in -demo, if you just want to cut paste from a working component: just the DOM)

### Notice that a page action loads the page. The page then fetches the data and loads the component. The data comes from page, and gets stored in component('s DOM). The component then can notify the page of something page may need to listen to - in an loosely coupled way (via events). So it flows from page to comp, and then it may bubble back up from comp to page. Also the (UI) component should be reusable, independent, and encapsulated. 

#### That is it for the data binding, now on to some more important front end skills. 



