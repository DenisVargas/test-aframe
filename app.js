
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
                let colorp = e.detail.color;
                console.log("colorp",colorp);
               // let colorHex = Number(colorp.replace('#', '0x'));
                let colorHex = '#ff6387';             
                let color3D = new THREE.Color(colorHex);           
                self.treeMat.color = color3D;                
              });
            }
          
        });
         AFRAME.registerComponent('click-listener', {
            init: function () {
              // Listen for click event
              let self = this;
              let el = this.el;
              console.log(el);
              this.el.addEventListener('click', function (evt) {   
                // Call the Octahedron and trigger it's scalewave animation
                let tree = document.querySelector('#tree');
                
                let color = el.getAttribute('material', 'color');
                
               tree.emit('changecolor', color);
               
              });        
            }
           
          });

        /*   document.getElementById("button").addEventListener('click', function (evt) {   
            // Call the Octahedron and trigger it's scalewave animation
            let tree = document.querySelector('#tree');
            let color = el.getAttribute('material', 'color');
            console.log(color);
           tree.emit('changecolor', color);
          }); */
  
    /*       var el = document.getElementById('button');
            if(el){
            el.addEventListener('click', function (evt) {   
                // Call the Octahedron and trigger it's scalewave animation
                let tree = document.querySelector('#tree');
                let color = "#0000FF"
               tree.emit('changecolor', color);
            console.log(color);
            
            });
           
        
        } */

        function color(){
            let tree = document.querySelector('#tree');      
            
            let color = "#c9002f"
            console.log(color);
            tree.emit('changecolor', color);
                      
        }