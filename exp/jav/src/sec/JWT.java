package sec;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import java.security.Key;

public class JWT {

	protected JwtBuilder _builder = Jwts.builder();
	protected JwtParser  _parser = Jwts.parser();
	
	public void foo() {
		Key key = MacProvider.generateKey();

		String str = _builder
		  .setSubject("Joe")
		  .signWith(SignatureAlgorithm.HS512, key)
		  .compact();

		 Jws<Claims> jwt= _parser.setSigningKey(key)
	    	.parseClaimsJws(str);
		 
		 System.out.println(jwt);

		 
	    
	}
}
