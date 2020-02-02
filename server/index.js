const express = require("express");
const mc = require("./controllers/message_controller");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(messagesBaseUrl, mc.update);
app.delete(messagesBaseUrl, mc.delete);



const port = 3001;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

