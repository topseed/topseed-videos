
import java.net.SocketTimeoutException;

import org.apache.hc.core5.http.ConnectionClosedException;
import org.apache.hc.core5.http.ExceptionListener;
import org.apache.hc.core5.http.config.SocketConfig;
import org.apache.hc.core5.http.impl.io.bootstrap.HttpServer;
import org.apache.hc.core5.http.impl.io.bootstrap.ServerBootstrap;

import rpc.MyHttpHandler;

public class Main {
	static HttpServer _server = null;

	public static void main(String[] args) throws Exception {

		int port = 8080;

		MyHttpHandler _handler = new MyHttpHandler();

		SocketConfig socketConfig = SocketConfig.custom().setSoTimeout(15000).setTcpNoDelay(true).build();

		_server = ServerBootstrap.bootstrap().setListenerPort(port).setSocketConfig(socketConfig)
				.setExceptionListener(new ExceptionListener() {

					public void onError(final Exception ex) {
						if (ex instanceof SocketTimeoutException) {
							System.err.println("Connection timed out");
						} else if (ex instanceof ConnectionClosedException) {
							System.err.println(ex.getMessage());
						} else {
							ex.printStackTrace();
						}
					}

				}).registerHandler("*", _handler).create();

		_server.start();
		_handler.setServer(_server);

		System.out.println("Listening on port " + port);

	}

}
