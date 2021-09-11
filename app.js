AFRAME.registerComponent('treeman', {
  init: function () {
    
    /** @type {HTMLElement} */
    let el = this.el;
    // console.log(`el is ${el.id}`); //HTMLElement - output: el is tree
    // let self = this;
    // //This apunta al objeto "treeman"
    // console.log(`self is ${this}`); //Object
    // self.trees = []; //Esto debería ser su propia variable.

    //https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
    el.addEventListener("model-loaded", (event) => {
      //=================================================================================
      //                               Notas
      //=================================================================================
      
      //En este scope renombre "e" por "Event"
      //Event es un objeto de tipo evento. Hay que tener cuidado porque...
      //En el momento de la ejecución del código aquí podría perderse la referencia a el.
      //TEST: Podríamos recuperar la referencia usando event.target ?
      //INVESTIGAR: Como trabajar con THREE js desde AFrame.
      
      //=================================================================================

      // let tree3D = event.getObject3D('mesh');
      // if (!tree3D) {
      //   console.log("tree is not valid");
      //   return;
      // }

      // console.log('tree3D', tree3D);
      // tree3D.traverse(function (node) {
      //   if (node.isMesh) {
      //     console.log(node);
      //     self.trees.push(node);
      //     if (node.name == "Vase_01") {
      //       self.treeMat = node.material;
      //       console.log('nodemat', node.material);
      //     }
      //     console.log('nodematpre', node.material.map);
      //     node.material.map = null;
      //     console.log('nodemat null', node.material.map);
      //   }
      // });
    });

    // el.addEventListener('changecolor', e => {
    //   let colorp = color;
    //   console.log("colorp", colorp);
    //   // let colorHex = Number(colorp.replace('#', '0x'));
    //   let colorHex = Number(colorp.replace('#', '0x'));
    //   let color3D = new THREE.Color(colorHex);
    //   self.treeMat.color = color3D;
    // });
  }
});
        
function rgbToHex(rgb) {
  var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
  var result, r, g, b, hex = "";
  if ( (result = rgbRegex.exec(rgb)) ) {
      r = componentFromStr(result[1], result[2]);
      g = componentFromStr(result[3], result[4]);
      b = componentFromStr(result[5], result[6]);
  
      hex = "0x" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return hex;
}

function componentFromStr(numStr, percent) {
  var num = Math.max(0, parseInt(numStr, 10));
  return percent ?
    Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function color1(obj) {
  console.log(obj);
  console.log(typeof(obj)); //Object

  /* NOTAS:
    Hay problemas en este bloque, para empezar, button1 no está definido.
    tree hace referencia a un objeto de tipo HTMLElement que es parte del DOM    

  // let el = this.el;
  // console.log(el); //Undefined.

  // Call the Octahedron and trigger it's scalewave animation
  let tree = document.querySelector('#tree');
  let colorRGB = button1.style.backgroundColor;//button1 no está definido.
  console.log('get color', colorRGB);
  color = rgbToHex(colorRGB)
  tree.emit('changecolor', color);
  console.log("rgbtohex", color);
  */
}

function color2() {
  let el = this.el;
  console.log(el);

  // Call the Octahedron and trigger it's scalewave animation
  let tree = document.querySelector('#tree');
  let colorRGB = button2.style.backgroundColor;
  console.log('get color', colorRGB);
  color = rgbToHex(colorRGB)
  tree.emit('changecolor', color);
  console.log("rgbtohex", color);

}

function color3() {
  let el = this.el;
  console.log(el);

  // Call the Octahedron and trigger it's scalewave animation
  let tree = document.querySelector('#tree');
  let colorRGB = button3.style.backgroundColor;
  console.log('get color', colorRGB);
  color = rgbToHex(colorRGB)
  tree.emit('changecolor', color);
  console.log("rgbtohex", color);
}

function superClic(){
  alert('Se ha dado clic al botón!');
}