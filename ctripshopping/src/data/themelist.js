const themelist = [
  {
    id: 1,
    label: "节假日",
    url: "./travel/theme/节假日",
    location: [
      {
        id: 1,
        name: "元旦节",
        url: "https://p1-q.mafengwo.net/s9/M00/00/47/wKgBs1fH23mAQShsAAE8BocWkuc52.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 2,
        name: "寒假",
        url: "https://p1-q.mafengwo.net/s9/M00/14/80/wKgBs1fGT1uAYafRAAWB83uVxoo54.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 3,
        name: "春节",
        url: "https://p1-q.mafengwo.net/s9/M00/00/AE/wKgBs1fH2_KAVpc8AADIt3T3fcQ27.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 4,
        name: "劳动节",
        url: "https://p1-q.mafengwo.net/s9/M00/14/48/wKgBs1fGTxiAflPPAARWkMLvoJw70.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
        play: [
          {
            id: 1,
            name: "拍照圣地",
            url: "https://www.mafengwo.cn/mdd/filter-tag-2.html",
            description: "充满欢乐童真的梦幻乐园",
            location: "上海市浦东新区川沙新镇黄赵路310号",
            time: "9:00-17:00",
            phone: "4001800000",
            score: "4.7",
            collect: "6",
            price: "399",
          },
          {
            id: 2,
            name: "购物",
            url: "0c362eabb064fa116d1ab6247167608f_wKgB6lTfYZWAcmhQAAbZQZnW42s99_imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100.jpeg",
            description: "看珍稀海洋生物玩刺激项目",
            location: "上海市浦东新区南汇新城镇银飞路166号",
            time: "9:00-17:00",
            phone: "021-50606666",
            score: "4.6",
            collect: "3",
            price: "130",
          },
          {
            id: 3,
            name: "美食",
            url: "https://p1-q.mafengwo.net/s9/M00/DD/AC/wKgBs1cYZoSAeI0LACl4YWRp7xA25.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
            description: "东方明珠与外滩隔江相望",
            location: "上海市浦东新区陆家嘴世纪大道1号",
            time: "9:00-17:00",
            phone: "021-58792888",
            score: "4.7",
            collect: "6",
            price: "20",
          },
          {
            id: 4,
            name: "人文历史",
            url: "https://p1-q.mafengwo.net/s9/M00/F8/54/wKgBs1fH0J-Ad7PSAAGpIqB38oU56.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
            description: "与世界各地动物亲密接触",
            location: "上海市浦东新区南六公路178号",
            phone: "021-58036000",
            collect: "8",
            price: "100",
          },
        ],
      },

      {
        id: 5,
        name: "端午节",
        url: "https://p1-q.mafengwo.net/s9/M00/C1/4B/wKgBs1fFYk6AfirrAAwNzwWkWQs71.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 6,
        name: "暑假",
        url: "https://p1-q.mafengwo.net/s9/M00/4B/EE/wKgBs1fNSXyAXT7MAAFPGRP-9tU50.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 7,
        name: "中秋节",
        url: "https://p1-q.mafengwo.net/s9/M00/BF/6F/wKgBs1fFXg-ARdy0AAEMttAiAcI30.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 8,
        name: "国庆节",
        url: "https://p1-q.mafengwo.net/s5/M00/28/D6/wKgB3FIIenmADFZMAAumaZeBpYU19.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 2,
    label: "出行方式",
    url: "./travel/theme/出行方式",
    location: [
      {
        id: 1,
        name: "骑行",
        url: "https://p1-q.mafengwo.net/s9/M00/48/18/wKgBs1fGnayAFBpzAADMyWNk4OM00.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 2,
        name: "徒步",
        url: "https://p1-q.mafengwo.net/s9/M00/47/66/wKgBs1fGnSeACEsWAAC8P4vFh7k42.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 3,
        name: "自驾",
        url: "https://p1-q.mafengwo.net/s9/M00/47/A5/wKgBs1fGnWKAI_5oAAD5M1wEfzc26.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 4,
        name: "游轮",
        url: "https://p1-q.mafengwo.net/s9/M00/47/D3/wKgBs1fGnYeAKJfKAADrHiSU1cI60.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
  {
    id: 3,
    label: "季节",
    url: "./travel//theme/季节",
    location: [
      {
        id: 1,
        name: "草原",
        url: "https://p1-q.mafengwo.net/s9/M00/01/6D/wKgBs1fH3M2ACD0jAAEdYs-0KUA83.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 2,
        name: "避暑",
        url: "https://p1-q.mafengwo.net/s9/M00/4B/67/wKgBs1fNSD2APdHDAAJp04WM8VE10.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 3,
        name: "星空",
        url: "https://p1-q.mafengwo.net/s9/M00/A6/68/wKgBs1ddF4-AG791ABqbqM3rH_Q34.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
      {
        id: 4,
        name: "雪景",
        url: " https://p1-q.mafengwo.net/s6/M00/51/75/wKgB4lLWX_iAW88xAAhvbV2aa3Y09.jpeg?imageMogr2%2Fthumbnail%2F%21476x440r%2Fgravity%2FCenter%2Fcrop%2F%21476x440%2Fquality%2F100",
      },
    ],
  },
];

export default themelist;
