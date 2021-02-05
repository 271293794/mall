define({ "api": [
  {
    "type": "get",
    "url": "/app/couponHistory/usable",
    "title": "获取某用户拥有的(未使用的)优惠券",
    "group": "couponHistory",
    "version": "0.0.0",
    "filename": "api/app/couponHistory.js",
    "groupTitle": "couponHistory",
    "name": "GetAppCouponhistoryUsable",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/app/couponHistory/obtain/:id",
    "title": "领取优惠券",
    "group": "couponHistory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>优惠券id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/app/couponHistory.js",
    "groupTitle": "couponHistory",
    "name": "PostAppCouponhistoryObtainId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/app/memberAddress/defaultAddress",
    "title": "默认地址",
    "group": "memberAddress",
    "version": "0.0.0",
    "filename": "api/app/memberAddress.js",
    "groupTitle": "memberAddress",
    "name": "GetAppMemberaddressDefaultaddress",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/app/memberAddress/list",
    "title": "会员收货地址",
    "group": "memberAddress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "memberId",
            "description": "<p>会员id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/app/memberAddress.js",
    "groupTitle": "memberAddress",
    "name": "GetAppMemberaddressList",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/app/memberAddress/setDefaultAddress/:id",
    "title": "设置默认收货地址",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "group": "memberAddress",
    "version": "0.0.0",
    "filename": "api/app/memberAddress.js",
    "groupTitle": "memberAddress",
    "name": "GetAppMemberaddressSetdefaultaddressId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/app/memberAddress/createOrUpdate",
    "title": "创建或更新一个member地址",
    "group": "memberAddress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "memberId",
            "description": "<p>会员id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>收货人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "defaultStatus",
            "description": "<p>是否为默认</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postCode",
            "description": "<p>邮政编码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省份/直辖市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>详细地址(街道)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/app/memberAddress.js",
    "groupTitle": "memberAddress",
    "name": "PostAppMemberaddressCreateorupdate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/app/memberAddress/delete/:id",
    "title": "删除一个地址",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "group": "memberAddress",
    "version": "0.0.0",
    "filename": "api/app/memberAddress.js",
    "groupTitle": "memberAddress",
    "name": "PostAppMemberaddressDeleteId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/admin/prefrenceArea/listAll",
    "title": "获取优选列表",
    "description": "<p>根据ID获得某个用户</p>",
    "group": "prefrenceArea",
    "version": "1.0.0",
    "filename": "api/admin/prefrenceArea.js",
    "groupTitle": "prefrenceArea",
    "name": "GetAdminPrefrenceareaListall",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6Iuezu-e7n-euoeeQhuWRmCIsImVtYWlsIjoiYWRtaW5AMTYzLmNvbSIsImlwIjoiOjoxIiwiaG9zdG5hbWUiOiJsb2NhbGhvc3QiLCJsb2dpbl90aW1lIjoxNjEwMTg3MTM5NDc5LCJ1c2VyVHlwZSI6ImFkbWluIiwicm9sZXMiOls1XX0.300098802789313ee25102cdef8df470",
            "description": "<p>用户授权token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/app/sku/list/:productId",
    "title": "某产品sku列表",
    "group": "sku",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/app/sku.js",
    "groupTitle": "sku",
    "name": "GetAppSkuListProductid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "defaultValue": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJUeXBlIjoibWVtYmVyIiwibWVtYmVyTGV2ZWxJZCI6NH0.0467ef8ab70eb6b53f2d74db1677ae14",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\" :0\n  \"message\": \"操作成功\"\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
