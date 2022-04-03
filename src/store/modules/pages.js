export default {
  actions: {

  },

  mutations: {
    
  },

  state: {
    pages: [{
      active: false,
      title: 'Home',
      path: '/'
    },{
      active: false,
      title: 'About',
      path: '/about'
    }]
  },
  
  getters:{
    allPages(state){
      return state.pages
    }
  }
}