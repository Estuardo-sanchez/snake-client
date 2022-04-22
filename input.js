const setupInput = function(conn) {
  // input handler.
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      console.log("Exited game");
      process.exit();
    }

    if (key === 'w') {
      conn.write("Move: up");
    }
  
    if (key === 'd') {
      conn.write("Move: right");
    }
  
    if (key === 's') {
      conn.write("Move: down");
    }
  
    if (key === 'a') {
      conn.write("Move: left");
    }
  
    if (key === 'q') {
      conn.write('Say: hi!');
    }
  
    if (key === 'e') {
      conn.write('Say: bye!');
    }
  };

  // connection setup
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // data stream, calls inputhandler
  stdin.on("data", handleUserInput);
  return;
};




module.exports = setupInput;
