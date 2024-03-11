document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById('ellipseCanvas')
    let ctx = canvas.getContext('2d')

    canvas.width = 500
    canvas.height = 300
    const width = 440
    const height = 240

    ctx.imageSmoothingEnabled = true

    animateEllipse(ctx, width / 2 - 5, height / 2 + 50, width * 0.5, height * 0.38, 200)

})

function animateEllipse(ctx, centerX, centerY, radiusX, radiusY, steps){
    let step = 0    

    function drawFrame(){
        ctx.clearRect(0, 0, ctx.width, ctx.height)

        ctx.beginPath()
        let startAngle = 0
        let endAngle = (step / steps) * (2 * Math.PI)
        let angle = -15 * Math.PI / 180
        ctx.ellipse(centerX, centerY, radiusX, radiusY, angle, startAngle, endAngle)

        ctx.lineWidth = 1
        ctx.strokeStyle = 'gray'
        ctx.stroke()


        step ++

        if (step <= steps) {
            requestAnimationFrame(drawFrame)
        }
    }
    requestAnimationFrame(drawFrame)        
}

