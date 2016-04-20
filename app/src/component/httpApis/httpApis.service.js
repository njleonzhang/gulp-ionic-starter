/**
 * Created by leon on 16/4/19.
 */


'use strict';

/**
 * @ngdoc service
 * @name ZrsmWorker.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /config/apiEndpoint.js
 *
 * Usage example: $http({
 *                      url: ApiService.getEndPoint() + '/things',
 *                      method: 'GET'
 *                 })
 *
 */
angular.module('ZrsmWorker')
  .factory('ApiService', function($window, $http, API_ENDPOINT) {

    var _api = API_ENDPOINT;
    var endpoint = _api.port ? (_api.host + ':' + _api.port + _api.path) : (_api.host + _api.path);

    // activate for basic auth
    if (_api.needsAuth) {
      $http.defaults.headers.common.Authorization = 'Basic ' + $window.btoa(_api.username + ':' + _api.password);
    }

    // public api
    return {
      getEndpoint: function() { return endpoint; }
    };

  })
  .provider('myData', function() {
    // 订单管理数据提供
    var orders =  [
      { style: '清洁保养1', name: '中式油烟机', type:'1', worker:'张三', distance: '31', date: '2016年3月20日', adress:'南京市建邺区兴隆大街街道苍山路28号1单元908'},
      { style: '便民服务1', name: '清洗油烟机', type:'2',worker:'李四', distance: '22', date: '2016年2月22日', adress:'南京市建邺区兴隆大街街道苍山路28号2单元908'},
      { style: '清洁保养2', name: '中式油烟机', type:'1', worker:'张三', distance: '31', date: '2016年3月20日', adress:'南京市建邺区兴隆大街街道苍山路28号1单元908'},
      { style: '便民服务2', name: '清洗油烟机', type:'2',worker:'李四', distance: '22', date: '2016年2月22日', adress:'南京市建邺区兴隆大街街道苍山路28号2单元908'},
      { style: '清洁保养3', name: '中式油烟机', type:'1', worker:'张三', distance: '31', date: '2016年3月20日', adress:'南京市建邺区兴隆大街街道苍山路28号1单元908'},
      { style: '便民服务3', name: '清洗油烟机', type:'2',worker:'李四', distance: '22', date: '2016年2月22日', adress:'南京市建邺区兴隆大街街道苍山路28号2单元908'},
      { style: '送货到家1', name: '送水果', type:'0',worker:'王二', distance: '23', date: '2016年1月10日', adress:'南京市建邺区兴隆大街街道苍山路28号3单元908'},
      { style: '送货到家2', name: '送水果', type:'0',worker:'王二', distance: '23', date: '2016年1月10日', adress:'南京市建邺区兴隆大街街道苍山路28号3单元908'},
      { style: '送货到家3', name: '送水果', type:'0',worker:'王二', distance: '23', date: '2016年1月10日', adress:'南京市建邺区兴隆大街街道苍山路28号3单元908'}
    ];
    // 用户数据
    var users = [{phone: '15205165561', password: '123456'},{phone: '15205165566', password: '123123'}];

    // 首页数据
    var homeData = {
      "total_income": 1440.00,                        // 总收益
      "has_msg": true,                                // 是否有新消息
      "ready_for_work": false,                         // 是否上班
      "job_list": [                                   // 工作列表返回数组，返回每一条具体的工作
        {
          "id": "11601022222",                        // 订单号
          "service_class": "家电安装",                // 服务类型
          "service_class_code": "ha_install",         // 服务类型代码
          "distance": 3.1,                            // 距离
          "appointed_date": "2016-03-20",             // 预约时间
          "address_display": "南京市建邺区兴隆街道苍山路50号奥体新城5栋1单元602",    // 地址
          "contact_name": "林早上",                    // 联系人
          "contact_phone": "13999999999",             // 联系电话
          "item_list": [                              // 服务项目列表
            {
              "display": "空调"                          // 项目名称
            }
          ]
        },
        {
          "id": "1160102223",                         // 订单号
          "service_class": "家电维修",                // 服务类型
          "service_class_code": "ha_repair",          // 服务类型代码
          "distance": 2.1,                            // 距离
          "appointed_date": "2016-03-20",             // 预约时间
          "address_display": "南京市建邺区兴隆街道苍山路50号奥体新城5栋1单元602",    // 地址
          "contact_name": "卫斯理",                   // 联系人
          "contact_phone": "13999999999",             // 联系电话
          "item_list": [                              // 服务项目列表
            {
              "display": "空调"                       // 项目名称
            }
          ]
        },
        {
          "id": "1160102224",                         // 订单号
          "service_class": "清洗保养",                // 服务类型
          "service_class_code": "ha_maintain",        // 服务类型代码
          "distance": 2.1,                            // 距离
          "appointed_date": "2016-03-20",             // 预约时间
          "address_display": "南京市建邺区兴隆街道苍山路50号奥体新城5栋1单元602",    // 地址
          "contact_name": "卫斯理",                   // 联系人
          "contact_phone": "13999999999",             // 联系电话
          "item_list": [                              // 服务项目列表
            {
              "display": "柜式空调"                   // 项目名称
            },
            {
              "display": "油烟机"                     // 项目名称
            },
            {
              "display": "洗衣机"                     // 项目名称
            }
          ]
        },
        {
          "id": "1160102225",                         // 订单号
          "service_class": "便民服务",                // 服务类型
          "service_class_code": "ha_maintain",        // 服务类型代码
          "distance": 2.1,                            // 距离
          "appointed_date": "2016-03-20",             // 预约时间
          "address_display": "南京市建邺区兴隆街道苍山路50号奥体新城5栋1单元602",    // 地址
          "contact_name": "卫斯理",                    // 联系人
          "contact_phone": "13999999999",             // 联系电话
          "item_list": [                              // 服务项目列表
            {
              "display": "开锁"                       // 项目名称
            }
          ]
        }
      ]
    };

    var incomeData = [
      {
        "time": "2016-02-01 10:22",         // 时间
        "pay_method": "cash",               // 支付方式，"cash" 或 "wechat"
        "order_id": "332222",              // 订单号
        "amount": "180.00"                  // 金额
      },
      {
        "time": "2016-02-01 8:22",         // 时间
        "pay_method": "cash",               // 支付方式，"cash" 或 "wechat"
        "order_id": "1112222",              // 订单号
        "amount": "180.00"                  // 金额
      },
      {
        "time": "2016-01-10 11:22",         // 时间
        "pay_method": "cash",               // 支付方式
        "order_id": "2222222",              // 订单号
        "amount": "180.00"                  // 金额
      }
    ];

    var msgData = [
      {
        "id": 1,
        "publish_time": "2016-01-01 11:22",       // 发布时间
        "title": "好消息！",                      // 标题
        "has_read": false,                        // 是否已读
        "summary": "找人上门是覆盖高淳区各项服务"      // 摘要
      },
      {
        "id": 2,
        "publish_time": "2016-01-01 11:22",
        "title": "好消息！",
        "has_read": false,
        "summary": "找人上门是覆盖高淳区各项服务"
      }
    ];
    var msgDetail = {
      "id": 1,
      "publish_time": "2016-01-01 11:22",       // 发布时间
      "title": "好消息！",                       //标题
      "summary": "找人上门是覆盖高淳区各项服务",      // 摘要
      "content": "找人上门是覆盖高淳区各项服务,找人上门是覆盖高淳区各项服务,找人上门是覆盖高淳区各项服务,"   // 内容
    };


    this.$get = function() {
      return {orders: orders, users: users, homeData: homeData, incomeData: incomeData,
        msgData: msgData, msgDetail:msgDetail};
    };
  })
  .factory('OrderService', function (myData) {
    return {
      // 跟据订单类型查询订单列表
      findOrdersByType: function(type) {
        var results = myData.orders.filter(function(element) {
          return type == element.type;
        });
        return results;
      }
    }
  })
  .factory('UserService', function (myData) {
    return {
      // 校验登录是否正确合法
      validateLogin: function(phone, password) {
        var params = {
          phone: phone,
          password: password
        };
        var results = myData.users.filter(function(element) {
          return (params.phone == element.phone && params.password == element.password);
        });
        return results.length>0?"OK":"用户名或密码不正确！";
      }
    }
  })
  .factory('HomeService', function (myData) {
    return {
      // 获取全部首页数据
      getHomeData: function() {
        return myData.homeData;
      }
    }
  })
  .factory('IncomeService', function (myData) {
    return {
      // 获取全部首页数据
      getIncomeData: function() {
        return myData.incomeData;
      }
    }
  })
  .factory('MsgService', function (myData) {
    return {
      // 获取全部首页数据
      getMsgData: function() {
        return myData.msgData;
      },
      getMsgDetail: function(id){
        // var results = myData.msgDetail.filter(function(element) {
        //       return id == element.id;
        //   });
        return myData.msgDetail;
      }
    }
  });

