var config={
	apiKey:"AIzaSyBr9Bl7aqTbU6a3SMRbjiX4qE7kQ84WIHU",
	authDomain:"tutor-31650.firebaseapp.com",
	databaseURL:"https://tutor-31650.firebaseio.com"
}
firebase.initializeApp(config)
db=firebase.database()

// TABLE -----------------------------------------
var commentsTable='comments/'
function commnetAdd(s_fk,message_pk,commentator,msg){
	var row={
		pk:message_pk,
		story_fk:s_fk,
		commentator:commentator,
		msg:msg
		}//row
	db.ref(commentsTable+message_pk).set(row)
}//()
function commentFind(commentator){
	db.ref(commentsTable)
		.orderByChild('commentator')
		.equalTo(commentator)
		.once('value',function(res){
			var row=res.val()
			var rows=_toArray(row)
			console.log(JSON.stringify(rows))
		})
}//()
function SAMPLE_DATA(){
	var fk='2'//fk:storyid
	commnetAdd(fk,_makePK(),'kenadal@gmail.com','break the web.')
	commnetAdd(fk,_makePK(),'kylie@gmail.com','how?')
	commnetAdd(fk,_makePK(),'kenadal@gmail.com','by posting a sexy pic!')

	console.log(commentFind('kenadal@gmail.com'))
}//()

// firebase js is laoded in main.js
//uncoment this next line (and open developer console in browser)
SAMPLE_DATA()


// UTILS ---------------------------------------------------------
function _toArray(ra){
	var array=[]
	for(var key in ra){
		array.push(ra[key])
	}
	return array
}//()

function _makePK(){
	return getTime() + randomString(5)
}//()

function randomString(len) {
	var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	var randomString = ''
	for (var i = 0; i < len; i++) {
		var randomPoz = Math.floor(Math.random() * charSet.length)
		randomString += charSet.substring(randomPoz,randomPoz+1)
	}
	return randomString
}//()

function getTime() {
	var d = new Date()
	return d.getTime()
}//()
