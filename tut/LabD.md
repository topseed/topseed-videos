## LabD
# Foundation: DataBinding

### Goals
Just because databinding is basic skill, it does not make it easy somehow. You will practice front end data-binding a few different ways (browser, server, web component, etc). Pro-musicians and pro-basketball players practice, so should you. Ideally you know of Sass, Scss or LESS and have more that just a few years out of school, this is not suitable for people with only a few years experience out of school, you need some experience.

We do some foundation level things and then some more advanced level related to data binding. 

### 0. Setup
- Download and run <http://github.com/topseed/topseed> as per instructions there. Also, that website has a link to a support form 'gitter'. Join there. If you have any questions or comments, you'll find support there from the instructors.
- Install  <http://tinyurl.com/mjeka4j> A browser plugin for REST
- Required IDE: <http://code.visualstudio.com> (so you can get instructor support). For god's sake set it to auto-save and use tabs, not spaces, don't be a savage ;-).
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
- https://1595566120.rsc.cdn77.org/_tsts/tst1.html
- view source and tst1.js in there.
This is an example of 'fetch()' that replaces Ajax and XHR.

### 2 Fetch from browser.
Run:
- 

- Optional: Review slides https://1595566120.rsc.cdn77.org/slidesDBind/


# LevelUp: DataBinding

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


# Perspectives: DataBinding

- Web Comp
![](poly.png)


### That is it for the data binding, now on to some more important front end skills. 



