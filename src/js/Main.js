const PIXI = require('pixi.js');

// entry point for app
class Main {
  run() {
    console.log('Start PIXI.JS!!!!');

    // 1. Stageの生成
    const stage = new PIXI.Stage(0x66FF99);

    // 2. 環境に応じたrendererの生成
    const renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

    // 3．rendererが持つ表示要素をDOMに追加
    let container = document.getElementById('container');
    container.appendChild(renderer.view);

    // 4.後に定義してあるanimａte関数をrequestAnimFrameで実行
    requestAnimationFrame( animate );

    // 5. 画像ファイルを読み込んでTextureを取得
    const texture = PIXI.Texture.fromImage('public/bunny.jpg');

    // 6.取得したTextureを使ってSpriteを生成
    const bunny = new PIXI.Sprite(texture);

    // 7. SpriteでのTextureの位置を調整
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // 8. Spriteを任意の位置に移動
    bunny.position.x = window.innerWidth / 2;
    bunny.position.y = window.innerHeight / 2;

    // clickEvent付ける
    bunny.interactive = true;
    bunny.on('click', () => {
      console.log('click bunny');
    });

    // 9. StageにSpriteを追加
    stage.addChild(bunny);
    window.addEventListener('resize', () => {
      renderer.resize(window.innerWidth, window.innerHeight);
      bunny.position.x = window.innerWidth / 2;
      bunny.position.y = window.innerHeight / 2;
    });
    // 10. 描画時のフレーム毎の処理を記述
    function animate() {

      // 11. 次のrequestAnimFrameでanimateの実行を再度指定
      requestAnimationFrame(animate);

      // 12. stageに配置したSpriteを回転
      bunny.rotation += 0.1;

      // 13. 処理の結果をrendererがStageに描画
      renderer.render(stage);

    }

  }
}

module.exports = Main;
