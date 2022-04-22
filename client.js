const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.3',
    port: 50541

  });

  conn.on("connect", () => {
    console.log("connected succesfully");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write("Name: ESL");
    // setTimeout(() => conn.write("Move: up"), 50);
    // setTimeout(() => conn.write("Move: left"), 100);
    // setTimeout(() => conn.write("Move: down"), 150);
    // setTimeout(() => conn.write("Move: right"), 200);
    
  });

  

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;