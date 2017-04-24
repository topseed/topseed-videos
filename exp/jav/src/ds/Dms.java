package ds;

import java.util.concurrent.ConcurrentMap;

import org.mapdb.*;

public class Dms {

	public void  foo() {
		
		DB db = DBMaker.fileDB("file.db").make();
		ConcurrentMap map = db.hashMap("map").createOrOpen();
		map.put("something", "here");
		db.close();
		
	}
	
}
