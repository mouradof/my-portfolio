import * as Three from 'three';

class ThreeScene {
    constructor() {
        this.scene = new Three.Scene();

        const geometry = new Three.BoxGeometry();
        const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Three.Mesh(geometry, material);

        this.scene.add(cube);
    }

    getScene() {
        return this.scene;
    }
}

export default ThreeScene;