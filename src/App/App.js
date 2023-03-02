import Config from '../../app.config.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../Assets/style.css';

import mapboxGl from 'mapbox-gl';

class App {

    /**
     * <div> de la map mapbox
     */
    elDivMap;

    /**
     * Instance de la map mapbox
     */
    map;

    start() {
        console.log('App démarrer ...');

        this.initDom();
        this.initMapbox();
    }

    initDom() {
        this.elDivMap = document.createElement('div');
        this.elDivMap.id = 'map';

        document.body.append(this.elDivMap);
    }

    initMapbox() {
        mapboxGl.accessToken = Config.api.mapbox_gl.Api_Key;

        this.map = new mapboxGl.Map({
            container: this.elDivMap,
            style: Config.api.mapbox_gl.Map_Styles.streets,
            center: { lng: 2.213749, lat: 46.227638 },
            zoom: 5.5
        });
    }
}

const app = new App();

export default app;