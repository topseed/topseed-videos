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
- <http://tinyurl.com/mjeka4j> A browser plugin for REST
- Required IDE: 
- <http://code.visualstudio.com> (so you can get instructor support). For god's sake set it to auto-save and use tabs, not spaces, don't be a savage ;-).
- Use Chrome browser. Click menu (:) on right/ More Tools/ Developer Tools. This will show you 'console' for: console.log('here'); in .js.
- Not required: prepros.io
- Recommended: also deploy webApp to <https://zeit.co>. This way you start learning how to have a learning web site.

### 1a. MicroService, REST(y) and fetch()
You have setup Advanced REST Client above, run it:
- https://middle4top-vgylwtpbxs.now.sh/membersPg/mem
- https://middle4top-vgylwtpbxs.now.sh/membersPg/list
Both should return some JSON data on a POST.

### 1b.
In later labs, you will use topseed-demos for github. But now, in browser w/ 'developer console' open, go to:
- <https://1595566120.rsc.cdn77.org/_tsts/tst1.html>
- view source and tst1.js in there.
This is an example of 'fetch()' that replaces Ajax and XHR.

### 2a.
In browser form:
- <https://1595566120.rsc.cdn77.org/members/authJoin/>
Click on button and view developer console.
You'll see the form data captured. Just like the basic form processing using 'name' attribute of a form field.

### 2b. 
Now a table/list:
- <https://1595566120.rsc.cdn77.org/members/dBindDT/index0.html
View console. When we click, we get a 'primary key' of the clicked row.
VIew source.
You should glance docs on <http://datatables.net>. 

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

## III Advanced

### 1 Web Comp
There are many component libs, and you may need to polyglot, ie know more than one, since they change every 18 months or so.
![](poly.png)
We will use the easiest one to learn: <http://riotjs.com>

Check out SPA vs SSR:
- <https://1595566120.rsc.cdn77.org/members/dBind/?w=1>
vs
- <https://1595566120.rsc.cdn77.org/members/dBind/>

- Optional: Review slides https://1595566120.rsc.cdn77.org/slidesDBind/

# Lab: DataBinding
## Hands on:

This does not work. It is in the topseed that you downloaded.
- <https://github.com/topseed/topseed/tree/master/webApp/www/members/LABD>
The component is missing DOM mark up.
Implement it.

### Notice that the page action loads the component. And the data comes from page. The component then notifies the page of something page may need to listen to - in an loosely coupled way (via events)


#### That is it for the data binding, now on to some more important front end skills. 


