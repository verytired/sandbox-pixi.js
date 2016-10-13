const PIXI = require('pixi.js');

class ShaderTest {
  run() {
    console.log('ShaderTest with PIXI.JS');

    const renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    let container = document.getElementById('container');
    container.appendChild(renderer.view);

    let stage = new PIXI.Container();
    let logo = PIXI.Sprite.fromImage('http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png');
    logo.x = window.innerWidth / 2;
    logo.y = window.innerHeight / 2;
    logo.anchor.set(0.5);
    stage.addChild(logo);

    let shaderCode = document.getElementById('shader').innerHTML;
    // Create our Pixi filter using our custom shader code
    let simpleShader = new PIXI.AbstractFilter('', shaderCode);
    // Apply it to our object
    logo.filters = [simpleShader];

    function animate() {
      // start the timer for the next animation loop
      requestAnimationFrame(animate);
      // this is the main render call that makes pixi draw your container and its children.
      renderer.render(stage);
    }
    animate();
  }
}

module.exports = ShaderTest;
