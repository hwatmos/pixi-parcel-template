import {app} from "./engine.mjs";

async function hello_world() {
    await PIXI.Assets.load('../../static/test_image.png');
    let sprite = PIXI.Sprite.from('../../static/test_image.png');
    app.stage.addChild(sprite);

    console.log("hello!");
}

function main_loop() {
    let elapsed=0;
    app.ticker.add((delta_obj) => {
        delta = delta_obj.deltaTime;
        elapsed += delta;
        
    })
}

export {hello_world, main_loop};