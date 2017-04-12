package ex;

import java.io.IOException;
import java.util.Locale;

import org.apache.hc.core5.http.ClassicHttpRequest;
import org.apache.hc.core5.http.ClassicHttpResponse;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.core5.http.HttpException;
import org.apache.hc.core5.http.HttpStatus;
import org.apache.hc.core5.http.impl.io.bootstrap.HttpServer;
import org.apache.hc.core5.http.io.HttpRequestHandler;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.apache.hc.core5.http.protocol.HttpContext;

public class MyHttpHandler implements HttpRequestHandler {

	HttpServer _server;

	public void setServer(HttpServer server) {
		_server = server;
	}

	public void handle(final ClassicHttpRequest request, final ClassicHttpResponse response, final HttpContext context)
			throws HttpException, IOException {

		String method = request.getMethod().toUpperCase(Locale.ROOT);
		String path = request.getPath();

		HttpEntity incomingEntity = request.getEntity();

		if (incomingEntity != null) {
			byte[] entityContent = EntityUtils.toByteArray(incomingEntity);
			System.out.println("Incoming incomingEntity content (bytes): " + entityContent.length);
		}

		response.setCode(HttpStatus.SC_OK);
		String json = DS.getData();
		HttpEntity ent = new StringEntity(json);
		response.setEntity(ent);

	}// ()

}