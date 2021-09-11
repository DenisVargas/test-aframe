AFRAME.registerComponent('treeman', {
  init: function(){
    let element = this.el;
    console.log(`Element is ${element}`);
    let self = this;
    console.log(`"Self" is ${self}`);
    self.trees = [];
    
    //This is wrong >:c
    // element.addEventListener("model-loaded", e =>{
    //   let tree3D = element.getObject3D('mesh');
    //   if (!tree3D) return;
    //   console.log('tree3D', tree3D);
    //   tree3D.traverse(function(node){
    //     if (node.isMesh){   
    //       console.log(node);
    //       self.trees.push(node);
              
    //       if(node.name == "Vase_01"){
    //         self.treeMat = node.material;
    //         console.log('nodemat', node.material);
    //       }
          
    //       console.log('nodematpre', node.material.map);
    //       node.material.map = null;
    //       console.log('nodemat null', node.material.map);
    //     }
    //   });
    // });

    // element.addEventListener('changecolor', (e) =>{
    //   //Donde está definido color?
    //   let colorp = color;
    //   console.log("colorp",colorp);
    //   let colorHex =  Number(colorp.replace('#', '0x'));
    //   let color3D = new THREE.Color(colorHex);
    //   //self no esta disponible en este scope.
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

function color1(){
  let el = this.el;
  console.log(`The element is ${el}`);
  // if(el != null){
  //   // Call the Octahedron and trigger it's scalewave animation
  //   let tree = document.querySelector('#tree');
  //   let colorRGB = button1.style.backgroundColor; //Esto no está definido.
  //   console.log('get color', colorRGB);
    
  //   color = rgbToHex(colorRGB);
  //   tree.emit('changecolor', color);
  //   console.log("rgbtohex", color);
  // }
  // console.log(el); 
}
function color2(){
  let el = this.el;
  console.log(el.name);
  // Call the Octahedron and trigger it's scalewave animation
  let tree = document.querySelector('#tree');
  let colorRGB = button2.style.backgroundColor; 
  console.log('get color', colorRGB);  
  color = rgbToHex(colorRGB)
  tree.emit('changecolor', color);
  console.log("rgbtohex", color);           
}
function color3(){
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