package db;

import java.util.concurrent.ConcurrentMap;

import org.mapdb.*;

public class DBs {

	protected DB _db;
	protected ConcurrentMap _jwa;
	
	public void  init() {
		
		_db = DBMaker.memoryDB().make();
		_jwa = _db.hashMap("map").createOrOpen();
		_jwa.put("something", "here");
		
	}
	
	public void close() {
		_db.close();
		
	}
}
