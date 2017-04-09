
QUnit.test( 'test: fetch()', function( assert ) {
	
	assert.expect(0)

	doTest(assert)

})//tst

function doTest(assert) {
	var done = assert.async()

	fetch('http://jsonplaceholder.typicode.com/comments', { //1 call
			//method: 'post'
		}).then(function(response) { //2 return a promise

			return (response.json())
			}).then(function(value) { // 3 done:
				// your code here:
				console.log('back')
				//console.log(JSON.stringify(value))
				
				assert.ok( JSON.stringify(value), 'we got something, check console' )
				done()

	})//fetch()

}

const ROOT = 'http://jsonplaceholder.typicode.com/'
class MyPageCompsCDS extends CompsDS {

}

/*
ex fetch use:
	X.fetch(ROOT, 'RM/signUp', dat)
		.then(function(value) { 
			console.log('back')
			//console.log(JSON.stringify(value))
			...

	}).catch(function(err) { //error
		console.error('err')
		console.error(err)
	})//fetch()
*/