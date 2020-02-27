const fs = require('fs')
const path = require('path'); 

const pipe = (...fns) => x => fns.reduce((f, g) => g(f), x);

const Box = x => ({
  map: f => Box(f(x)),
  chain: f => f(x),
  fold: f => f(x),
  toString: `${x}`
});

const Sum = x => ({
  x,
  concat: s => Sum(s.x + x),
  valueOf: () => x
});

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString: `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString: `Left(${x})`
});

const fromNullable = x => (x != null ? Right(x) : Left(null));

const tryCatch = f => {
  try {
    return Right(f())
  }
  catch (e) {
    return Left(e)
  }
}

const a = Sum(4).concat(Sum(5));

a.valueOf();

const b = (x, y) =>
  Box(x)
    .chain(x =>
      Box(x + y).map(x => ({
        value: x
      }))
    )
    .fold(x => x);

b(4, 5);

const findColor = name => fromNullable({
    red: "#ff4444",
    blue: "#3b5998",
    yellow: "#fff68f"
  }[name])

const res = color =>
  findColor(color)
    .map(x => x.toUpperCase())
    .fold(() => "no color", color => color);

const exclaim = x => `${x}!`;
const split = term => arr => arr.split(term);
const err = val => `typeof ${val} is not a valid color`

res("redd");

const pathFile = path.resolve(__dirname, "../../../../../Users/juliancastellanos/Desktop/config.json")

const readFileSync = path =>
  tryCatch(() => fs.readFileSync(path))

const parseJSON = contents => 
  tryCatch(() => JSON.parse(contents))

const getPort = path => 
  readFileSync(path)
  .chain(contents => parseJSON(contents))
  .map(config => config.port)
  .fold(() => 8080, x => x)

const result = getPort(pathFile)

console.log(result)





























