const sharp = require("sharp");

// A cropped version of Blue Mosaic Bathroom Tiles by William Warby
// https://www.flickr.com/photos/wwarby/6963447776
const warby = {
  path: "./assets/warby.jpg",
  width: 1880,
  height: 3012,
  tile: {
    width: 327,
    height: 327
  }
};

const sources = { warby };

const cli = args => {
  const { source = "warby", gridSize = 50, output = "tile.jpg" } = args || {};
  const photo = sources[source];
  const scale = gridSize / photo.tile.width;

  const width = Math.round(photo.width * scale);
  const height = Math.round(photo.height * scale);
  return sharp(photo.path).resize(width, height).toFile(output, err => {
    console.error(err);
  });
};

const opts = {
  alias: {
    gridSize: ["gridsize", "g"],
    source: ["s"],
    output: ["o"]
  }
};
var argv = require("minimist")(process.argv.slice(2), opts);

cli(argv);
