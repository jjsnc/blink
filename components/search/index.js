// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    searching: false,
    q: '',
    loading: false,
    loadingCenter: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      console.log(event, 'onCancel')
      // this.initialize()
      // this.triggerEvent('cancel', {}, {})
    },
    onDelete(event) {
      // this.initialize()
      // this._closeResult()
      console.log(event, 'onDelete')
    },
    onConfirm(event) {
      console.log(event, 'event')
      // this._showResult()
      // this._showLoadingCenter()
      // // this.initialize() 
      // const q = event.detail.value || event.detail.text
      // this.setData({
      //   q
      // })
      // bookModel.search(0, q)
      //   .then(res => {
      //     this.setMoreData(res.books)
      //     this.setTotal(res.total)
      //     keywordModel.addToHistory(q)
      //     this._hideLoadingCenter()
      //   })
    }

  }
})
