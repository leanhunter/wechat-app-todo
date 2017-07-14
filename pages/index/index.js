//index.js
//获取应用实例
import { connect } from '../../vendors/weapp-redux.js';
import {modifyItem,addItem} from '../../redux/actions/todos.js';

var app = getApp();
const pageConfig = {
  data: {
    toDoList: [],
    doneList:[],
    input:'',
    date:'',
    showDone:false,
    userInfo:{}
  },
  modify: function( e ) {
    const id = e.target.id ;
    this.modifyItem( id );
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
    if(this.data.input && this.data.date){
      this.add();
    }
    console.log(e.detail.value)
  },
  clearDate:function(e) {
    this.setData({
      date: ''
    })
  },
  add: function( ){
    this.addItem({
      content:this.data.input,
      date:this.data.date
    });
    this.setData({
      input:'',
      date:''
    });
  },
  record:function(e){
    const data = e.detail.value ;
    // console.log(e.detail);
    this.setData({
      input:data
    })
  },
  showDone:function(){
    this.setData({
      showDone:!this.data.showDone
    })
  },
  onLoad: function () {
    console.log('page onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
      console.log('userInfo ==>',userInfo);
    })
  },
  onShow: function () {
    console.log('page onShow',this.data.userInfo);
  }
}

function mapStateToProps(state){
  return {
    toDoList:state.todoReducer.toDoList,
    doneList:state.todoReducer.doneList
  }
};
const mapDispatchToPage = dispatch => ({
  modifyItem: item => dispatch(modifyItem(item)),
  addItem: item => dispatch(addItem(item))

})
const nextPageConfig = connect(mapStateToProps, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);