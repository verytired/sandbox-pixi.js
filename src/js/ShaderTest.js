const PIXI = require('pixi.js');

class ShaderTest {
  run() {
    console.log('ShaderTest with PIXI.JS');

    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = PIXI.autoDetectRenderer(width, height);
    let container = document.getElementById('container');
    container.appendChild(renderer.view);

    let stage = new PIXI.Container();

    const bg = PIXI.Sprite.fromImage('http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png');
    bg.width = width;
    bg.height = height;
    stage.addChild(bg);

    let uniforms = {};
    uniforms.resolution = { type : '2f', value : [width, height] };
    uniforms.alpha = { type : '1f', value : 2.0 };
    uniforms.shift = { type : '1f', value : 1.6 };
    uniforms.time = { type : '1f', value : 0 };
    uniforms.speed = { type : '2f', value : [0.7, 0.4] };

    const shaderCode = document.getElementById('fragShader').textContent;
    const smokeShader = new PIXI.Filter(null, shaderCode, uniforms);
    bg.filters = [smokeShader];

    let logo = PIXI.Sprite.fromImage('http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png');
    logo.x = width / 2;
    logo.y = height / 2;
    logo.anchor.set(0.5);
    logo.blendMode = PIXI.BLEND_MODES.ADD;
    stage.addChild(logo);

    function animate() {
      smokeShader.uniforms.time+=0.01;
      renderer.render(stage);
      requestAnimationFrame(animate);
    }
    animate();
  }
}

module.exports = ShaderTest;
