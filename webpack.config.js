import path from "path";

export default{
  entry: "./src/main.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve('dist')
    
  }
}

