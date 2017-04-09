'use strict'

console.log('BaseCompsDS')

class CDS {
			
clearCookies() {
	var cookies = document.cookie.split(';')
	for (var i = 0; i < cookies.length; i++){
		var spcook =  cookies[i].split('=')
		document.cookie = spcook[0] + '=;expires=Thu, 21 Sep 1979 00:00:01 UTC;'
	}
}//()

static get DT_() { return 'DT_' }

writeC(nam, str) {
	var jstr = JSON.stringify(str)
	var exp = 1/12  // 2 hours

	var hash = window.btoa(jstr)
	Cookies.set(nam, hash, { expires: exp})
	Cookies.set(CDS.DT_, new Date(), { expires: 10 })// so we know when it will time out
}//()

static get XBASIC() { return  'X-BASIC'}

static get XJT() { return  'X-JWT'}

Cfetch(ROOT_, url_, data_) {
	var xjt_ = Cookies.get(CDS.XJT)
	var xb_  = Cookies.get(CDS.XBASIC)
	console.log('fetching ', url_, xb_)
	return fetch(ROOT_ + url_ , { //1 call
			method: 'post'
			, headers: {
				'Content-Type': 'application/json',
				'X-JWT' : xjt_,
				'X-BASIC': xb_
			}
			, body: JSON.stringify(data_)
		}).then(function(response) { //2 returns a promise
			//console.log(response.headers)

			if (!response.ok) {
				console.log('not ok')
				console.log(response)
				throw Error(response.statusText)
			}
			return (response.json())//,response.headers.get('X-JWT'))
		})
}//_()

} // class



