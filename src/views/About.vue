<template>
  <section class="about">
    <h2 class="mainTitle"><span class="purpleText">Кто мы</span> такие?</h2>

    <div class="aboutInfo">
      <p>
        IT CHERT сегодня – это более <span class="purpleText">80</span> авторских курсов для IT-специалистов из разных <span class="purpleText">направлений</span> таких как программирование, тестирование, <span class="purpleText">инфраструктура,</span> информационная безопасность, управление и Data Science. И что важно, у нас есть программы для разных уровней подготовки от новичков до профессионалов, которые хотят освоить продвинутые навыки.<br>
        Наша миссия — делать обучение осмысленным, реализуя взаимосвязь между ожиданиями <span class="purpleText">работодателей,</span> компетенциями <span class="purpleText">специалистов</span> и возможностями преподавателей. 
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  watch:{
    // currentPages(val){
    //   console.log( val )
    //   if(val == 1){
    //     console.log( 'active' )
    //     console.log( val )
    //   }
    // }
  },

  props: { 
    currentPages:{
      type: Number
    }
  }
}
</script>

<style scoped>
section.about{
  width: 100%; height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

section.about h2.mainTitle{
  align-self: flex-start;
  margin-left: 16%;
  font-size: 48px;
}

section.about .aboutInfo{
  width: 70%; height: 70%;
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1rem;
}

section.about .aboutInfo > p{
  width: 700px; height: max-content;
  font-size: 18px;
  font-weight: 700;
  text-align: start;
}

.purpleText{
  color: rgba(90, 0, 157, 0.5);
}
</style>
