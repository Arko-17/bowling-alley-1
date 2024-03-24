AFRAME.registerComponent("ball", {
    init: function () {
        this.throwBall()
    },
    throwBall: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                var balls = document.createElement("a-entity")
                balls.setAttribute("geometry", {
                    primitive:"sphere",
                    radius:0.1
                });
                balls.setAttribute("material", "color", "#000000")
                balls.setAttribute("velocity", {
                    x:0,
                    y:0,
                    z:-1   
                });
                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")
                balls.setAttribute("position", {
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                });
                var camera=document.querySelector("#camera").object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                balls.setAttribute("velocity",direction.multiScalar(-10));
                var sceneEl=document.querySelector("#scene")
                sceneEl.appendChild(balls)
            }
        })
    }
})