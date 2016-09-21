/**
 * Created by zncy on 2016/9/21.
 */
class MainScene{

    constructor(){

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60,1,1,10000);
        this.camera.position.z = 1000;
        this.camera.lookAt(this.scene.position);
        this.render = new THREE.WebGLRenderer();
        this.render.setSize(window.innerWidth,window.innerHeight);

        this.box = new THREE.BoxGeometry(100,100,100);
        this.material = new THREE.MeshBasicMaterial({
            color:0xffffff
        });
        this.mesh = new THREE.Mesh(this.box,this.material);
        this.scene.add(this.mesh);

        document.body.appendChild(this.render.domElement);
    }

    draw(){
        var self = this;
        function r(){
            requestAnimationFrame(r);
            self.render.render(self.scene,self.camera);
        }
        r();
    }

}

export default MainScene;