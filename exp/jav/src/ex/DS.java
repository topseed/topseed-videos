package ex;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class DS {

	static String getData() {
		Map<String, String> myMap = new HashMap<String, String>();
		myMap.put("one", "hello");
		myMap.put("two", "world");

		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(myMap);

		return json;
	}
}
