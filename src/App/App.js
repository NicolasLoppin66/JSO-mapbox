import Config from '../../app.config.json';

class App {

    start() {
        console.log('App démarrer ...');
        console.log('Votre clé API mapbox : ', Config.api.mapbox_gl.Api_Key);
    }
}

const app = new App();

export default app;