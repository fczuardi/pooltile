var Pixi = require("pixi.js");
var { Application, Texture, extras } = Pixi;
var { TilingSprite } = extras;

var targetTileSize = 50;
var spriteWidth = 1000;
var spriteHeight = 1000;

var imagePath = "./assets/warby.jpg";
var imageWidth = 1880;
var imageHeight = 3012;
var tileSize = 373;
var scale = targetTileSize / tileSize;
// var scale = 0.1;
var inverseScale = 1 / scale;

var warbyTexture = Texture.fromImage(imagePath);

var warbySprite = new TilingSprite(
  warbyTexture,
  spriteWidth * inverseScale,
  spriteHeight * inverseScale
);
warbySprite.scale.set(scale, scale);

var { stage, renderer, view } = new Application();

stage.addChild(warbySprite);

renderer.autoResize = true;

renderer.resize(window.screen.width, window.screen.height);
document.body.appendChild(view);

warbyTexture.addListener("update", event => {
  console.log({ event });
  console.log(warbyTexture.width, warbyTexture.height);
});
