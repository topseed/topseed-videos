const ROOT = 'http://jsonplaceholder.typicode.com/'
class Page1CDS extends CDS {
	doFetch() {
		this.Cfetch(ROOT, 'comments')
			.then(function(value) { 
				console.log('back')
				console.log(JSON.stringify(value))
		

		}).catch(function(err) { //error
			console.error('err')
			console.error(err)
		})//fetch()
	}//()
}//class

QUnit.test( 'test: fetch()', function( assert ) {
	
	assert.expect(0)

	doTest(assert)

})//tst

const _cds = new Page1CDS()
function doTest(assert) {
	var done = assert.async()
	_cds.doFetch()
	var val = ''
	//assert.ok( val, 'we got something, check console' )
	done()

}
