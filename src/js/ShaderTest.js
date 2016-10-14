const PIXI = require('pixi.js');

class ShaderTest {
  run() {
    console.log('ShaderTest with PIXI.JS');

    const renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    let container = document.getElementById('container');
    container.appendChild(renderer.view);

    const width = window.innerWidth;
    const height = window.innerHeight;

    let stage = new PIXI.Container();

    // smoke shader
    let uniforms = {};
    uniforms.resolution = { type : 'v2', value : { x : width, y : height}};
    uniforms.alpha = { type : '1f', value : 1.0};
    uniforms.shift = { type : '1f', value : 1.6};
    uniforms.time = {type : '1f', value : 0};
    uniforms.speed = {type : 'v2', value : {x : 0.7, y : 0.4}};

    let shaderCode = document.getElementById('fragShader').innerHTML;
    let smokeShader = new PIXI.Filter(null, shaderCode, uniforms);

    let bg = PIXI.Sprite.fromImage('http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png');
    bg.width = width;
    bg.height = height;
    bg.filters = [smokeShader];
    stage.addChild(bg);

    let logo = PIXI.Sprite.fromImage('http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png');
    logo.x = width / 2;
    logo.y = height / 2;
    logo.anchor.set(0.5);
    logo.blendMode = PIXI.BLEND_MODES.ADD;
    stage.addChild(logo);

    let count = 0;
    function animate() {
      // start the timer for the next animation loop
      requestAnimationFrame(animate);
      // this is the main render call that makes pixi draw your container and its children.
      count+=0.01;
      smokeShader.uniforms.time = count;
      renderer.render(stage);
    }
    animate();
  }
}

module.exports = ShaderTest;
