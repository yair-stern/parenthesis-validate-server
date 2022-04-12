# cloud server for validate of parenthesis
this program is written on node.js.

it get string of patenthesis from a client and returns whether it is validate.

the app support post REST design.
# manual

the table below shows the Instructions for using the app by the client app: which REST method to use, the URL and the body of the message.


|REST method|URL|URL example|body|body example|
|---|---|---|---|---|
|post|/${ip}:${port}/api/validate|http://localhost:3000/api/validate|{"text":"${parenthesis}"}|{"text":")()[][]{}{}"}|

# validate
the app checks the whether or not a parenthesis is validate. the result send as a boolean property of the response to the client.
the complexity is the length of the string.
