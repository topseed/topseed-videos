const ROOT = 'http://jsonplaceholder.typicode.com/'
class Page1CDS extends CDS {
	doFetch() {
		CDS.fetch(ROOT, 'comments')
			.then(function(value) { 
				console.log('back')
				console.log(JSON.stringify(value))
				return value

		}).catch(function(err) { //error
			console.error('err')
			console.error(err)
		})//fetch()
	}//()
}//class

const _cds = new Page1CDS()
QUnit.test( 'test: fetch()', function( assert ) {
	assert.expect(0)
	const pro = doTest(assert)


})//tst

function doTest(assert) {
	var done = assert.async()
	_cds.doFetch()
	var val = ''
	//assert.ok( val, 'we got something, check console' )
	done()

}
