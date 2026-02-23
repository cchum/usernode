Node.js Messaging API

A simple messaging backend built with Node.js, Express, and MongoDB. Supports users, conversations between two users, and messages within those conversations. Includes basic CRUD operations for messages and conversations.

Table of Contents
Technologies
Features
Installation
Usage
API Endpoints
Future Improvements
Technologies
Node.js
Express.js
MongoDB (Mongoose ORM)
Insomnia/Postman for API testing


Features
Create and manage users
Start conversations between two users
Send messages within conversations
Fetch messages for a conversation
Update and delete messages
Delete conversations (optionally cascade delete messages)

Installation
Clone the repository:
git clone <repository-url>
cd <project-folder>

Install dependencies:
npm install
Start MongoDB locally (make sure mongod is running).
Start the server:
npm start
The server will run on http://localhost:9000.

Usage
Use Insomnia or Postman to test endpoints.
Make requests to /users, /conversations, and /messages.
Request bodies should be in JSON format.
API Endpoints

Users
GET /users – List all users

POST /users – Create a new user
Conversations

GET /conversations/:userId – Get all conversations for a user

POST /conversations – Create a conversation between two users

DELETE /conversations/:conversationId – Delete a conversation (optional: cascade delete messages)
Messages

GET /messages/:conversationId – Get all messages in a conversation

POST /messages – Send a new message
{
    "senderID": "userId1",
    "receiverID": "userId2",
    "text": "Hello!"
}

PATCH /messages/:messageId – Update a message
{
    "text": "Updated message text"
}

DELETE /messages/:messageId – Delete a message


Future Improvements
Add authentication (JWT)
Real-time messaging with WebSockets
Add timestamps for messages and conversations
Pagination for messages
Frontend integration with React