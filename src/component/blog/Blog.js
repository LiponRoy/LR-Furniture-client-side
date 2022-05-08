import React from 'react';
import './Blog.css';
const Blog = () => {
	return (
		<div>
			<div className='myBlog'>
				<div className='blogPart'>
					<p className=''>
						<div className='QA'>
							<h2>1:</h2>
							<h4>difference between javascript and node.js ?</h4>
							<h5>JavaScript:</h5>
							<p>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development. Brendan Eich of Netscape created it, and it was first published in 1995.</p>
							<h5>Node.js:</h5>
							<p>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications..</p>
						</div>
						<div className='QA'>
							<h2>2:</h2>
							<h4>Difference Between SQL and NoSQL?</h4>
							<h5>SQL:</h5>
							<p>SQL databases are primarily called RDBMS or Relational Databases.Structured query language (SQL).SQL databases are table based databases.SQL databases are vertically scalable.Oracle, Postgres, and MS-SQL.An ideal choice for the complex query intensive environment.SQL databases are not suitable for hierarchical data storage.It was developed in the 1970s to deal with issues with flat file storage</p>
							<h5>NoSQL:</h5>
							<p>NoSQL databases are primarily called as Non-relational or distributed database.NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.No declarative query language.NoSQL databases can be document based, key-value pairs, graph databases.NoSQL databases are horizontally scalable. MongoDB, Redis, Neo4j, Cassandra, Hbase.It is not good fit complex queries.More suitable for the hierarchical data store as it supports key-value pair method.</p>
							<h2>3:</h2>
							<h4>What is purposeof JWT. How Dose it work ? ?</h4>
							<p>
								{' '}
								JSON Web Token is a standard used to create access tokens for an application. It works this way: the server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity. This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API.<br></br>
								Using Node.js you can generate the first part of the token by using this code
							</p>
							<p></p>
							Header:<br></br> The header consists of two parts: The signing algorithm being used The type of token, which is in this case mostly “JWT” <br></br>Payload:<br></br> The payload usually contains the claims (user attributes) and additional data like issuer, expiration time, and audience. <br></br>Signature:<br></br> This is typically a hash of the header and payload sections of the JWT. The algorithm which is used to create the signature is the same algorithm mentioned in the header section of the JWT. Signature is used to validate that the JWT token wasn’t modified or changed during transit. It can also be used to validate the sender. The header and Payload section of the JWT is always Base64 encoded.
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
