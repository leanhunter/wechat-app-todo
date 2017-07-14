//index.js
//获取应用实例
const {connect} = require( '../../libs/wechat-redux.js' )
import {modifyItem,addItem} from '../../actions/todos.js';

var app = getApp();
const pageConfig = {
  data: {
    toDoList: [],
    doneList:[],
    input:'',
    showDone:false,
    userInfo:{}
  },
  modify: function( e ) {
    const id = e.target.id ;
    this.modifyItem( id );
  },
  add: function( e ){
    this.addItem( {content:this.data.input} );
    this.setData({
      input:''
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