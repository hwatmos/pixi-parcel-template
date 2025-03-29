var app;
const isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

async function engine_start() {
    app = new PIXI.Application();
    let [width, height] = get_app_container_size();
    await app.init({ width: width, height: height });
    document.querySelector("#app-container").appendChild(app.canvas);
    window.addEventListener("resize", resize);
    resize();
    return ;
}

function resize() {
    const scale = 1;
    let [width, height] = get_app_container_size();
    app.stage.scale.set(scale);
    app.renderer.resize(width, height);
    return ;
}

function get_app_container_size() {
    let width = document.querySelector("#app-container").clientWidth;
    let height = document.querySelector("#app-container").clientHeight;
    return [width, height];
}

export {app, engine_start, isPhone};