// components/search/index.js

import {
  KeywordModel
} from '../../models/keyword.js'
const bookModel = new BookModel()
import {
  BookModel
} from '../../models/book.js'
import {
  paginationBev
} from '../behaviors/pagination.js'

const keywordModel = new KeywordModel()


Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
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

  attached() {
    this.setData({
      historyWords: keywordModel.getHistory()
    })


    keywordModel.getHot().then(res => {
      this.setData({
        hotWords: res.hot
      })
    })
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      // this.initialize()
      this.triggerEvent('cancel', {}, {})
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
      const q = event.detail.value || event.detail.text
      this.setData({
        q
      })
      bookModel.search(0, q)
        .then(res => {
          this.setMoreData(res.books)
          this.setTotal(res.total)
          keywordModel.addToHistory(q)
          this._hideLoadingCenter()
        })
    },
    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },
    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    }
  }
})
