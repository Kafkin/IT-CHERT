<template>
  <section class="home">
    <div class="mainTitle">
      <h1>Cоздай <span class="purpleText">свой</span> первый <span class="purpleText">сайт</span> прямо <span class="purpleText">сейчас</span></h1>
      <h3><span class="purpleText">Курсы</span> по созданию сайтов</h3>
    </div>

    <canvas class="cnvHome"></canvas>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  mounted(){
    // canvas
    (() => {
      const cnv = document.querySelector('.cnvHome')
      const ctx = cnv.getContext('2d')

      let cw, ch
      function reSize(){
        cw = cnv.width = window.innerWidth
        ch = cnv.height = window.innerHeight
      }
      reSize()
      window.addEventListener('resize', () => {
        reSize()
        clearDot()
        pushDot(countDot)
      })

      // cfg
      let arrayDot = []
      const countDot = 39
      const maxLength = 190

      class Dot{
        constructor(){
          this.x = Math.random() * cw
          this.y = Math.random() * ch
          this.r = 3
          // this.strokeColor = 'none'
          this.color = 'rgba(90, 0, 157, 1)'
          this.speedX = this.random(-0.5, 0.5)
          this.speedY = this.random(-0.5, 0.5)
        }
        random(min, max){
          return Math.random() * (max - min) + min
        }

        drawDot(){
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
          ctx.fillStyle = this.color
          ctx.fill()
          // ctx.strokeStyle = this.strokeColor
          // ctx.stroke()
        }

        moveDot(){
          this.x + this.speedX > cw || this.x + this.speedX < 0 ? this.speedX*=-1 : this.speedX 
          this.y + this.speedY > ch || this.y + this.speedY < 0 ? this.speedY*=-1 : this.speedY

          this.x += this.speedX
          this.y += this.speedY
        }
      }

      function clearDot(){
        arrayDot = []
      }

      function pushDot(count){
        for(let i = 0; i < count; i++){
          arrayDot.push(new Dot())
        }
      }
      pushDot(countDot)

      function lineDot(){
        let x1, y1, x2, y2, length, opacity
        for(let i in arrayDot){
          for(let j in arrayDot){
            x1 = arrayDot[i].x
            y1 = arrayDot[i].y
            x2 = arrayDot[j].x
            y2 = arrayDot[j].y
            length = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
            if(length < maxLength){
              opacity = 1 - length/maxLength
              ctx.lineWidth = '1'
              ctx.strokeStyle = `rgba(90, 0, 157, ${opacity})`
              ctx.beginPath()
              ctx.moveTo(x1, y1)
              ctx.lineTo(x2, y2)
              ctx.closePath()
              ctx.stroke()
            }
          }
        }
      }

      function loop(){
        ctx.clearRect(0, 0, cw, ch)
        arrayDot.forEach((dot, index) => {
          if(index == 0){
            dot.drawDot()
            return
          }
          dot.drawDot()
          dot.moveDot()
        })
        lineDot()
        requestAnimationFrame(loop)
      }
      loop()

      // test

      cnv.onmousemove = (event) => {
        // console.log('clientX: ', event.clientX, 'clientY: ', event.clientY )
        // arrayDot[0].x = event.clientX
        // arrayDot[0].y = event.clientY
        // arrayDot[0].color = 'rgba(0, 0, 0, 0.1)'
        // arrayDot[0].strokeColor = '#222'
        // arrayDot[0].r = 20

        // arrayDot[1].x = event.clientX
        // arrayDot[1].y = event.clientY
        // arrayDot[1].color = '#222'
        // arrayDot[1].r = 3


        arrayDot[0].x = event.clientX
        arrayDot[0].y = event.clientY
        arrayDot[0].r = 0
      }

    })();
  }
}
</script>

<style scoped>
canvas{
  position: absolute;
  top: 0;
  left: 0;
}

.mainTitle{
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mainTitle h1{
  /* white-space: nowrap; */
  text-transform: uppercase;
  line-height: 1.5;
  font-size: 54px;
  color: #333;
  font-weight: 800;
  margin-bottom: 20px;
  /* font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
}

.mainTitle h3{
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 22px;
  color: #555;
  font-weight: 800;
  margin-bottom: 20px;
  /* font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
}

.purpleText{
  color: rgba(90, 0, 157, 0.5);
}
</style>
