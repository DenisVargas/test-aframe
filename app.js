
   function superClic(){
    alert('Se ha dado clic al botón!');
    
}
      
   AFRAME.registerComponent('treeman', {
            init: function(){
                let el = this.el;
                let self = this;
                self.trees = [];              
                el.addEventListener("model-loaded", e =>{
                    let tree3D = el.getObject3D('mesh');
                    if (!tree3D){return;}    
                  console.log('tree3D', tree3D);
                    tree3D.traverse(function(node){
                        if (node.isMesh){   
                          console.log(node);
                            self.trees.push(node);
                          if(node.name == "Vase_01"){
                            self.treeMat = node.material;
                            console.log('nodemat', node.material);
                          }
                          console.log('nodematpre', node.material.map);
                          node.material.map = null;
                          console.log('nodemat null', node.material.map);
                        }
                    });
              });
              el.addEventListener('changecolor', e =>{  
                            
                let colorp = color;
                console.log("colorp",colorp);
               // let colorHex = Number(colorp.replace('#', '0x'));
                let colorHex =  Number(colorp.replace('#', '0x'));            
                let color3D = new THREE.Color(colorHex);           
                self.treeMat.color = color3D;                
              });
            }
          
        });
        

           function color1(){
              let el = this.el;
              console.log(el);
                
                // Call the Octahedron and trigger it's scalewave animation
                let tree = document.querySelector('#tree');
                let colorRGB = button1.style.backgroundColor; 
                console.log('get color', colorRGB);                  
               
                ////////////////rbg to hex /////////////////////////
                function componentFromStr(numStr, percent) {
                  var num = Math.max(0, parseInt(numStr, 10));
                  return percent ?
                      Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
              }
              
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
              color = rgbToHex(colorRGB)
              tree.emit('changecolor', color);
              console.log("rgbtohex", color);    
                          
        }  
        function color2(){
          let el = this.el;
          console.log(el);
            
            // Call the Octahedron and trigger it's scalewave animation
            let tree = document.querySelector('#tree');
            let colorRGB = button2.style.backgroundColor; 
            console.log('get color', colorRGB);                  
           
            ////////////////rbg to hex /////////////////////////
            function componentFromStr(numStr, percent) {
              var num = Math.max(0, parseInt(numStr, 10));
              return percent ?
                  Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
          }
          
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
       
        ////////////////rbg to hex /////////////////////////
        function componentFromStr(numStr, percent) {
          var num = Math.max(0, parseInt(numStr, 10));
          return percent ?
              Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
      }
      
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
      color = rgbToHex(colorRGB)
      tree.emit('changecolor', color);
      console.log("rgbtohex", color);    
                  
}  
      














      /*   function color (button) {
          // Works in all browsers
          console.log('1', button.style.backgroundColor); //use this, it works 

          console.log('3', button.style.getAttribute ("backgroundColor"))

          if (button.style.getPropertyValue) {
            console.log('2', button.style.getPropertyValue ("background-color"));
          } else {
            console.log('3',button.style.getAttribute ("backgroundColor"));
          }
      } */



        /* function color(){
            let tree = document.querySelector('#tree');      
            
            let color = "#c9002f"
            console.log(color);
            tree.emit('changecolor', color);
                      
        } */