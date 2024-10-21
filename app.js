import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("FE udah connect");
  socket.on("disconnect", () => {
    console.log("keputus");
  });
});

let data = 1;
setInterval(() => {
  io.emit("message", `data adalah: ${data}`);
  data += 1;
}, 1000);

// cuyyyyy
app.get("/gmat", (req, res) => {
  res.send({
    title: "woy",
  });
});

app.get("/laptop", (req, res) => {
  res.send("BELI LAPTOP");
});

/*
    {
        a: 1,
        b: 2
    }
*/

app.post("/tambah", (req, res) => {
  const hasil = Number(req.body.a) + Number(req.body.b);
  res.send({ hasil: hasil });
});

// localhost:3000/gmat
server.listen(3000, () => {
  console.log("Server berjalan di port 3000!");
});

// io.on("connection", (socket) => {
//   console.log("Front End Connected");

//   socket.on("end", () => {
//     socket.emit("message", sendData);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
