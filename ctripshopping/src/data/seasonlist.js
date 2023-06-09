const seasonlist = [
  {
    id: 1,
    label: "1月",
    url: "./travel/month/Jan",
    location: [
      {
        id: 1,
        name: "香港",
        kind: 1,
        url: "https://p1-q.mafengwo.net/s16/M00/CB/99/CoUBUl_ayEyAHMFvAACmSXBwtEo25.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
        spot: [
          {
            id: 1,
            name: "香港海洋公园",
            url: "https://p1-q.mafengwo.net/s12/M00/10/DD/wKgED1wltkyACBIyABMKdxG_pmY06.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "集海陆动物展览、机动游戏和大型表演于一身",
            location: "香港香港岛南区黄竹坑道180号",
            time: "10:00-18:00",
            phone: "+852-39232323",
            score: "4.3",
            collect: "6",
            price: "399",
          },
          {
            id: 2,
            name: "香港迪士尼乐园",
            url: "https://p1-q.mafengwo.net/s12/M00/28/10/wKgED1v1jXWAOD2NAF7RWRA0N6s10.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "全情投入不一样的Duffy Fanstasy体验",
            location: "香港大屿山香港迪士尼乐园度假区",
            time: "9:00-17:00",
            phone: "+852-35503388",
            score: "4.7",
            collect: "10",
            price: "513",
          },
          {
            id: 3,
            name: "香港天迹100观景台",
            url: "https://p1-q.mafengwo.net/s11/M00/02/AB/wKgBEFti2OuAPN_oACVbkzGtxVk38.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "来自故宫博物馆的九百件珍贵文物",
            location: "香港九龙西九文化区博物馆道8号",
            time: "10:00-18:00",
            phone: "+852-22000217",
            score: "4.4",
            collect: "6",
            price: "46",
          },
          {
            id: 4,
            name: "山顶缆车",
            url: "https://p1-q.mafengwo.net/s11/M00/AA/D1/wKgBEFqVaXCANqGoADKzGKyLj2o59.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "与世界各地动物亲密接触",
            location: "香港中环花园道山顶缆车站",
            time: "7:00-22:00",
            phone: "+852-25220922",
            collect: "4.5",
            price: "86",
          },
          {
            id: 5,
            name: "香港杜莎夫人蜡像馆",
            url: "https://p1-q.mafengwo.net/s14/M00/F7/0C/wKgE2l1I89OAexogAEakwL19k_g800.JPG?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "寓教于乐的必游之地",
            location: "香港山顶道128号凌霄阁P101号铺",
            time: "9:00-17:00",
            phone: "+852 28496966",
            score: "4.8",
            collect: "10",
            price: "30",
          },
          {
            id: 6,
            name: "香港太空馆",
            url: "https://p1-q.mafengwo.net/s13/M00/38/07/wKgEaVyV--aAMrFGADCesjsHw6k71.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100",
            description: "塑造完整宇宙观",
            location: "香港九龙尖沙咀梳士巴利道10号",
            time: "9:00-17:00",
            phone: "+852 21437300",
            score: "4.2",
            collect: "5",
            price: "300",
          },
        ],
      },
      {
        id: 2,
        kind: 1,
        name: "三亚",
        url: "https://p1-q.mafengwo.net/s18/M00/17/D1/CoUBYGBe4pGAauatAAdyMP34lvA132.png?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 1,
        name: "广州",
        url: "https://p1-q.mafengwo.net/s16/M00/CB/76/CoUBUl_ayBqAZGeXAADD9U_uTc433.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 1,
        name: "昆明",
        url: "https://p1-q.mafengwo.net/s16/M00/FE/41/CoUBUl6Fh-yABK-hAIN0dTCvojQ716.jpg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 1,
        name: "黑龙江",
        url: "https://p1-q.mafengwo.net/s16/M00/31/DC/CoUBUl_pqZGAMdEiAAFOItWjgyI73.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 1,
        name: "深圳",
        url: "https://p1-q.mafengwo.net/s16/M00/06/9E/CoUBUl_tpHGAcjIeAAIw1jfrsmI99.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 2,
    label: "2月",
    url: "./travel/month/Feb",
    location: [
      {
        id: 1,
        kind: 2,
        name: "南京",
        url: "https://p1-q.mafengwo.net/s17/M00/E4/2A/CoUBXl_ca8CAUCc3AAEOMFXN07s50.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 2,
        name: "布吉岛",
        url: "https://p1-q.mafengwo.net/s16/M00/F6/14/CoUBUl_rB0aAcu2rAAH0oaDx5_g07.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 2,
        name: "新加坡",
        url: "https://p1-q.mafengwo.net/s17/M00/EA/F7/CoUBXl_to2-AEQJZAANTEe9TifE96.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 2,
        name: "清迈",
        url: "https://p1-q.mafengwo.net/s17/M00/D0/BA/CoUBXl_rB1iAQWeOAADIZjOiJUg60.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 2,
        name: "新西兰",
        url: "https://p1-q.mafengwo.net/s9/M00/D6/48/wKgBs1fHmDOAFuPuABgy_gdW4GA40.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 2,
        name: "菲律宾",
        url: "https://p1-q.mafengwo.net/s16/M00/03/64/CoUBUl_tnfOAUm36AAGoLe9F5k020.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 3,
    label: "3月",
    url: "./travel/month/Mar",
    location: [
      {
        id: 1,
        kind: 3,
        name: "日本",
        url: "https://p1-q.mafengwo.net/s17/M00/D0/D1/CoUBXl_rB26ATff_AAD09ufK4TQ70.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 3,
        name: "杭州",
        url: "https://p1-q.mafengwo.net/s17/M00/57/E1/CoUBXl_ayHmAapI5AADH79lEr5M84.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 3,
        name: "重庆",
        url: "https://p1-q.mafengwo.net/s16/M00/A5/B9/CoUBUl_gP7qAMYAEAAGyvYH2gfA38.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 3,
        name: "西安",
        url: "https://p1-q.mafengwo.net/s17/M00/57/99/CoUBXl_ax_SAaHchAAEZHKIS6Hw82.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 3,
        name: "贵州",
        url: "https://p1-q.mafengwo.net/s16/M00/AC/9F/CoUBUl_lmyCAdujaAACl-pGLdlw69.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 3,
        name: "苏州",
        url: "https://p1-q.mafengwo.net/s12/M00/98/12/wKgED1wcigqAB3u6AAV6THabrYM48.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 4,
    label: "4月",
    url: "./travel/month/Apr",
    location: [
      {
        id: 1,
        kind: 4,
        name: "云南",
        url: "https://p1-q.mafengwo.net/s17/M00/A5/BD/CoUBXl_bQOCAJvEmAAI_-Pgysd855.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 4,
        name: "上海",
        url: "https://p1-q.mafengwo.net/s16/M00/CB/89/CoUBUl_ayDWAcjF_AABwiqBmVqw57.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
        spot: [
          {
            id: 7,
            name: "上海迪士尼",
            url: "https://i.postimg.cc/qq0b6bP9/image.png",
            description: "充满欢乐童真的梦幻乐园",
            location: "上海市浦东新区川沙新镇黄赵路310号",
            time: "9:00-17:00",
            phone: "4001800000",
            score: "4.7",
            collect: "6",
            price: "399",
          },
          {
            id: 8,
            name: "上海海昌海洋公园",
            url: "https://i.postimg.cc/T3ZcWNmC/image.png",
            description: "看珍稀海洋生物玩刺激项目",
            location: "上海市浦东新区南汇新城镇银飞路166号",
            time: "9:00-17:00",
            phone: "021-50606666",
            score: "4.6",
            collect: "3",
            price: "130",
          },
          {
            id: 9,
            name: "上海东方明珠",
            url: "https://i.postimg.cc/bJPHmGmn/image.png",
            description: "东方明珠与外滩隔江相望",
            location: "上海市浦东新区陆家嘴世纪大道1号",
            time: "9:00-17:00",
            phone: "021-58792888",
            score: "4.7",
            collect: "6",
            price: "20",
          },
          {
            id: 10,
            name: "上海野生动物园",
            url: "https://i.postimg.cc/4d1vqJ0S/image.png",
            description: "与世界各地动物亲密接触",
            location: "上海市浦东新区南六公路178号",
            time: "9:00-17:00",
            phone: "021-58036000",
            score: "4.8",
            collect: "8",
            price: "100",
          },
          {
            id: 11,
            name: "上海科技馆",
            url: "https://i.postimg.cc/x1kR8VkX/image.png",
            description: "寓教于乐的必游之地",
            location: "上海市浦东新区世纪大道2000号",
            time: "9:00-17:00",
            phone: "021-68622000",
            score: "4.7",
            collect: "10",
            price: "30",
          },
          {
            id: 12,
            name: "上海天文馆",
            url: "https://i.postimg.cc/c4khdLJq/image.png",
            description: "塑造完整宇宙观",
            location: "上海市浦东新区南汇新城镇临港大道380",
            time: "9:00-17:00",
            phone: "021-50908563",
            score: "4.5",
            collect: "5",
            price: "40",
          },
        ],
      },
      {
        id: 3,
        kind: 4,
        name: "新疆",
        url: "https://p1-q.mafengwo.net/s17/M00/E3/9F/CoUBXl_cax-AWUHlAAF5oxRpFUA05.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 4,
        name: "曼谷",
        url: "https://p1-q.mafengwo.net/s17/M00/D0/57/CoUBXl_rBsGAUGjrAAFXbVkld-879.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 4,
        name: "大理",
        url: "https://p1-q.mafengwo.net/s16/M00/CA/06/CoUBUl_axb-AFC85AADQG91AkNs36.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 4,
        name: "东京",
        url: "https://p1-q.mafengwo.net/s16/M00/F5/40/CoUBUl_rBkuAAWvGAAFRCNL8l7E20.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 5,
    label: "5月",
    url: "./travel/month/May",
    location: [
      {
        id: 1,
        kind: 5,
        name: "厦门",
        url: "https://p1-q.mafengwo.net/s16/M00/9A/C2/CoUBUl_cbH-AJjSoAAJyjvVAl2I08.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 5,
        name: "美国",
        url: "https://p1-q.mafengwo.net/s6/M00/66/AE/wKgB4lNYlNGAAVk9AAEXV8mB1dQ40.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 5,
        name: "青岛",
        url: "https://p1-q.mafengwo.net/s16/M00/79/04/CoUBUl_hnDaAb8vsAAEeWevbnhw68.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 5,
        name: "拉萨",
        url: "https://p1-q.mafengwo.net/s17/M00/4C/79/CoUBXl_hm_6AQZ-BAAF1ITk-UVY46.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 5,
        name: "乌镇",
        url: "https://p1-q.mafengwo.net/s7/M00/66/10/wKgB6lShHfCAWj_dAAa6oPinOSo468.png?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 5,
        name: "北海",
        url: "https://p1-q.mafengwo.net/s2/M00/59/D0/wKgBpU5GJAb-RlP8AAU0TPfy3EE79.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 6,
    label: "6月",
    url: "./travel/month/Jun",
    location: [
      {
        id: 1,
        kind: 6,
        name: "台湾",
        url: "https://p1-q.mafengwo.net/s17/M00/4B/A0/CoUBXl_gPp6AeK1oAADjGNUo-Cs66.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 6,
        name: "青海",
        url: "https://p1-q.mafengwo.net/s16/M00/79/36/CoUBUl_hnFuAcXLDAADGFU0Z01w19.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 6,
        name: "呼伦贝尔",
        url: "https://p1-q.mafengwo.net/s16/M00/CB/38/CoUBUl_ax2iAJDppAAFeX7CeYNQ76.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 6,
        name: "青海湖",
        url: "https://p1-q.mafengwo.net/s16/M00/79/5E/CoUBUl_hnH2AfVBWAAE8qlHPx3s21.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 6,
        name: "吉隆坡",
        url: "https://p1-q.mafengwo.net/s16/M00/F5/4F/CoUBUl_rBluAVQfmAAJZAW7agzI39.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 6,
        name: "大连",
        url: "https://p1-q.mafengwo.net/s10/M00/19/4B/wKgBZ1oKib6AAo31AA-I-8Jp9-A49.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 7,
    label: "7月",
    url: "./travel/month/Jul",
    location: [
      {
        id: 1,
        kind: 7,
        name: "内蒙古",
        url: "https://p1-q.mafengwo.net/s17/M00/A5/E4/CoUBXl_bQSKAUeU3AAGAxgrRgeU73.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 7,
        name: "西藏",
        url: "https://p1-q.mafengwo.net/s17/M00/4C/51/CoUBXl_gP8-AUlxCAAEhsF_KAx846.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 7,
        name: "海拉尔",
        url: "https://p1-q.mafengwo.net/s7/M00/8B/D7/wKgB6lRNsaOAe-H2AA8cTw4eWNI51.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 7,
        name: "沙巴",
        url: "https://p1-q.mafengwo.net/s6/M00/38/DD/wKgB4lMNbkWAKYVIAAS7PpYjpiE27.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 7,
        name: "贵阳",
        url: "https://p1-q.mafengwo.net/s16/M00/AC/50/CoUBUl_lmwSAWDFxAAFVaWfgJMI42.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 7,
        name: "英国",
        url: "https://p1-q.mafengwo.net/s7/M00/CF/A6/wKgB6lSXwvOAd8tYAAK5s2vu96w57.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 8,
    label: "8月",
    url: "./travel/month/Aug",
    location: [
      {
        id: 1,
        kind: 8,
        name: "黄山",
        url: "https://p1-q.mafengwo.net/s16/M00/A5/82/CoUBUl_gP26AeZI9AAGS2kSvCPc02.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 8,
        name: "九寨沟",
        url: "https://p1-q.mafengwo.net/s7/M00/D2/DC/wKgB6lSiDL2AYHqQAAn1eisORm8596.png?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 8,
        name: "舟山",
        url: "https://p1-q.mafengwo.net/s12/M00/89/54/wKgED1ulroqAFFBcAAd2OJ5Kx-A79.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 8,
        name: "敦煌",
        url: "https://p1-q.mafengwo.net/s17/M00/37/74/CoUBXl_iwoKAINc5AAE3cs_sdHU10.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 8,
        name: "俄罗斯",
        url: "https://p1-q.mafengwo.net/s10/M00/34/30/wKgBZ1jJXc6ASFxpAAhjrYZ3UWg15.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 8,
        name: "长白山",
        url: "https://p1-q.mafengwo.net/s16/M00/35/1D/CoUBUl_prxiAPjU9AAFdJUQ9mCs91.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 9,
    label: "9月",
    url: "./travel/month/Sep",
    location: [
      {
        id: 1,
        kind: 9,
        name: "桂林",
        url: "https://p1-q.mafengwo.net/s16/M00/62/EC/CoUBUl_iwsuATu-fAAHGQTrv6x406.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 9,
        name: "长沙",
        url: "https://p1-q.mafengwo.net/s18/M00/13/D6/CoUBYGBe3eCAVwO2ABw7LYApxPI162.png?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 9,
        name: "阳朔",
        url: "https://p1-q.mafengwo.net/s16/M00/64/C2/CoUBUl_ixF-AUKiBAAKLGrKluZ038.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 9,
        name: "稻城",
        url: "https://p1-q.mafengwo.net/s5/M00/EB/6C/wKgB3FEKKFOAB8vHAA48C0nVPeQ38.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 9,
        name: "土耳其",
        url: "https://p1-q.mafengwo.net/s17/M00/F2/93/CoUBXl_tuZSAa5EZAAEXTIM_JZc39.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 9,
        name: "济南",
        url: "https://p1-q.mafengwo.net/s16/M00/78/E9/CoUBUl_hm9mAVNp7AAHUpKlh9jo71.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 10,
    label: "10月",
    url: "./travel/month/Oct",
    location: [
      {
        id: 1,
        kind: 10,
        name: "澳门",
        url: "https://p1-q.mafengwo.net/s16/M00/A5/A8/CoUBUl_gP5GAfBmPAAE0eIK35wU80.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 10,
        name: "澳大利亚",
        url: "https://p1-q.mafengwo.net/s17/M00/02/C1/CoUBXl-05yiAWXOzABwMAi2j2KY39.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 10,
        name: "珠海",
        url: "https://p1-q.mafengwo.net/s17/M00/E4/09/CoUBXl_ca6uAG1S9AABwZQOSis855.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 10,
        name: "香格里拉",
        url: "https://p1-q.mafengwo.net/s7/M00/0F/11/wKgB6lR4dK6Af8mlAA9malsMm9E45.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 10,
        name: "西宁",
        url: "https://p1-q.mafengwo.net/s16/M00/79/CE/CoUBUl_hnROAaKBiAAEet9RXnSM95.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 10,
        name: "西班牙",
        url: "https://p1-q.mafengwo.net/s10/M00/D2/5A/wKgBZ1jI2D2AU61xAB1-CObMaPQ06.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 11,
    label: "11月",
    url: "./travel/month/Nov",
    location: [
      {
        id: 1,
        kind: 11,
        name: "北京",
        url: "https://p1-q.mafengwo.net/s16/M00/05/86/CoUBUl_ZydWAFJLPAAVNFTCqozw74.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 11,
        name: "柬埔寨",
        url: "https://p1-q.mafengwo.net/s16/M00/04/13/CoUBUl_tnyyAfCmjAAGnJm37cTU86.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 11,
        name: "海口",
        url: "https://p1-q.mafengwo.net/s17/M00/37/D9/CoUBXl_iwvqAFjRmAAG9NJesMPw56.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 11,
        name: "长滩岛",
        url: "https://p1-q.mafengwo.net/s7/M00/5B/77/wKgB6lTJmE2AIfzOAAM8n2V8rps79.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 11,
        name: "福州",
        url: "https://p1-q.mafengwo.net/s17/M00/E4/C4/CoUBXl_cbJyAYPhpAAGwtFKj-Vs65.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 11,
        name: "甲米",
        url: "https://p1-q.mafengwo.net/s6/M00/F1/F1/wKgB4lKn7rWAAtCgAAMg7OwKFzk77.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 12,
    label: "12月",
    url: "./travel/month/Dec",
    location: [
      {
        id: 1,
        kind: 12,
        name: "哈尔滨",
        url: "https://p1-q.mafengwo.net/s17/M00/06/74/CoUBXl_pqRiAAe7gAAC6432e42w38.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 2,
        kind: 12,
        name: "苏梅岛",
        url: "https://p1-q.mafengwo.net/s5/M00/6E/09/wKgB3FHwv9yAVya2AAgSiVaWYLs82.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 3,
        kind: 12,
        name: "芽庄",
        url: "https://p1-q.mafengwo.net/s16/M00/06/44/CoUBUl_to52ADtkJAAFH6GH3GK464.jpeg?imageMogr2%2Fthumbnail%2F%21646x440r%2Fgravity%2FCenter%2Fcrop%2F%21646x440%2Fquality%2F100",
      },
      {
        id: 4,
        kind: 12,
        name: "迪拜",
        url: "https://p1-q.mafengwo.net/s16/M00/03/54/CoUBUl_tndWAE386AABg8S1_n7U84.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 5,
        kind: 12,
        name: "毛里求斯",
        url: "https://p1-q.mafengwo.net/s10/M00/BF/7B/wKgBZ1ly1EyAAmYJABhb3ePxKhk68.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        kind: 12,
        name: "悉尼",
        url: "https://p1-q.mafengwo.net/s7/M00/22/A2/wKgB6lP0VUSAcZqIAAHzueSS3cI29.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
];

export default seasonlist;
