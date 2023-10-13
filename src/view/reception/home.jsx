
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'


import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import '@/style/reception/home.scss'
import { FloatButton, Image } from 'antd';

const Home = () => {
    let camera, scene, renderer;
    let controls;
    const objects = [];
    const targets = { table: [], sphere: [], helix: [], grid: [] };
    const [dataLoaded, setDataLoaded] = useState(false);
    const [ImgInfo, setImgInfo] = useState([]);

    const fileSrc = (filename) => {
        return `${window.location.origin}/src/assets/photo/${filename}`;
    }

    useEffect(() => {
        init();
        animate();
        if (!dataLoaded) {
            loadImageData();
        }
    }, [dataLoaded]);

    function loadImageData() {
        // 使用fetch获取外部URL中的数据
        fetch('https://raw.githubusercontent.com/KingBoyAndGirl/SheepWall/master/src/assets/photo.json')
                  .then(response => response.json())
                  .then(data => {
                      // 去重处理，使用 Set 数据结构
                      const uniqueData = Array.from(new Set(data.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
                      setImgInfo(uniqueData);
                      setDataLoaded(true);
                  })
                  .catch(error => {
                      console.error('Failed to load image data:', error);
                  });
    }


    function init() {

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 3000;

        scene = new THREE.Scene();

        // table

        for (let i = 0; i < ImgInfo.length; i++) {

            const element = document.createElement('div');
            element.className = 'element';
            element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

            const number = document.createElement('div');
            number.className = 'number';
            number.textContent = (i) + 1;
            element.appendChild(number);


            const img = document.createElement('img');
            img.className = 'img';
            img.src =fileSrc( ImgInfo[i].src);
            element.appendChild(img);



            const objectCSS = new CSS3DObject(element);
            objectCSS.position.x = Math.random() * 4000 - 2000;
            objectCSS.position.y = Math.random() * 4000 - 2000;
            objectCSS.position.z = Math.random() * 4000 - 2000;
            scene.add(objectCSS);

            objects.push(objectCSS);

            //

            const object = new THREE.Object3D();
            object.position.x = (ImgInfo[i].x * 140) - 1330;
            object.position.y = - (ImgInfo[i].y * 180) + 990;

            targets.table.push(object);

        }

        // sphere

        const vector = new THREE.Vector3();

        for (let i = 0, l = objects.length; i < l; i++) {

            const phi = Math.acos(- 1 + (2 * i) / l);
            const theta = Math.sqrt(l * Math.PI) * phi;

            const object = new THREE.Object3D();

            object.position.setFromSphericalCoords(800, phi, theta);

            vector.copy(object.position).multiplyScalar(2);

            object.lookAt(vector);

            targets.sphere.push(object);

        }

        // helix

        for (let i = 0, l = objects.length; i < l; i++) {

            const theta = i * 0.175 + Math.PI;
            const y = - (i * 8) + 450;

            const object = new THREE.Object3D();

            object.position.setFromCylindricalCoords(900, theta, y);

            vector.x = object.position.x * 2;
            vector.y = object.position.y;
            vector.z = object.position.z * 2;

            object.lookAt(vector);

            targets.helix.push(object);

        }

        // grid

        for (let i = 0; i < objects.length; i++) {

            const object = new THREE.Object3D();

            object.position.x = ((i % 5) * 400) - 800;
            object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
            object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

            targets.grid.push(object);

        }

        //

        renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        //

        controls = new TrackballControls(camera, renderer.domElement);
        controls.minDistance = 500;
        controls.maxDistance = 6000;
        controls.addEventListener('change', render);

        const buttonTable = document.getElementById('table');
        buttonTable.addEventListener('click', function () {

            transform(targets.table, 2000);

        });

        const buttonSphere = document.getElementById('sphere');
        buttonSphere.addEventListener('click', function () {

            transform(targets.sphere, 2000);

        });

        const buttonHelix = document.getElementById('helix');
        buttonHelix.addEventListener('click', function () {

            transform(targets.helix, 2000);

        });

        const buttonGrid = document.getElementById('grid');
        buttonGrid.addEventListener('click', function () {

            transform(targets.grid, 2000);

        });

        transform(targets.table, 2000);

        //

        window.addEventListener('resize', onWindowResize);

    }

    function transform(targets, duration) {

        TWEEN.removeAll();

        for (let i = 0; i < objects.length; i++) {

            const object = objects[i];
            const target = targets[i];

            new TWEEN.Tween(object.position)
                      .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
                      .easing(TWEEN.Easing.Exponential.InOut)
                      .start();

            new TWEEN.Tween(object.rotation)
                      .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
                      .easing(TWEEN.Easing.Exponential.InOut)
                      .start();

        }

        new TWEEN.Tween(this)
                  .to({}, duration * 2)
                  .onUpdate(render)
                  .start();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();

    }

    function animate() {

        requestAnimationFrame(animate);

        TWEEN.update();

        controls.update();

    }

    function render() {

        renderer.render(scene, camera);

    }


    return (
              <section className='home'>
                  <div id="container"></div>
                  <FloatButton.Group
                            shape="square"
                            open={false}
                  >
                      <div id="menu">
                          <button id="table">TABLE</button>
                          <button id="sphere">SPHERE</button>
                          <button id="helix">HELIX</button>
                          <button id="grid">GRID</button>
                      </div>
                  </FloatButton.Group>
              </section>
    )
}
export default Home;