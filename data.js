// 49个代表性赏樱城市数据
// 花期数据基于：南京林业大学《中国樱花预报2024》、各地历史气象数据及物候学模型
// 已根据 2026年3月31日 最新天气预报（Open-Meteo）自动订正：每日 8:00 更新
// 坐标：[纬度, 经度]
// 日期格式：月/日

const CHERRY_CITIES = [
  {
    "id": 1,
    "city": "大理",
    "province": "云南",
    "region": "southwest",
    "location": "大理古城、苍山洱海",
    "coords": [
      25.6065,
      100.2679
    ],
    "variety": "高盆樱桃（冬樱）",
    "firstBloom": {
      "month": 12,
      "day": 1
    },
    "peakBloom": {
      "month": 12,
      "day": 15
    },
    "endBloom": {
      "month": 1,
      "day": 10
    },
    "durationDays": 40,
    "note": "中国最早开放的樱花，冬季即可赏樱"
  },
  {
    "id": 2,
    "city": "昆明",
    "province": "云南",
    "region": "southwest",
    "location": "圆通山樱花园、云南大学",
    "coords": [
      25.0389,
      102.7183
    ],
    "variety": "钟花樱桃、云南樱花",
    "firstBloom": {
      "month": 1,
      "day": 20
    },
    "peakBloom": {
      "month": 2,
      "day": 5
    },
    "endBloom": {
      "month": 2,
      "day": 28
    },
    "durationDays": 38,
    "note": "云南省会，赏樱历史悠久"
  },
  {
    "id": 3,
    "city": "丽江",
    "province": "云南",
    "region": "southwest",
    "location": "束河古镇、玉龙雪山脚下",
    "coords": [
      26.8721,
      100.2299
    ],
    "variety": "高盆樱桃、钟花樱桃",
    "firstBloom": {
      "month": 2,
      "day": 1
    },
    "peakBloom": {
      "month": 2,
      "day": 15
    },
    "endBloom": {
      "month": 3,
      "day": 5
    },
    "durationDays": 32,
    "note": "雪山背景下的樱花美景"
  },
  {
    "id": 4,
    "city": "成都",
    "province": "四川",
    "region": "southwest",
    "location": "人民公园、天府芙蓉园",
    "coords": [
      30.5728,
      104.0668
    ],
    "variety": "染井吉野、河津樱",
    "firstBloom": {
      "month": 3,
      "day": 5
    },
    "peakBloom": {
      "month": 3,
      "day": 15
    },
    "endBloom": {
      "month": 3,
      "day": 30
    },
    "durationDays": 25,
    "note": "天府之国，赏樱氛围浓厚"
  },
  {
    "id": 5,
    "city": "重庆",
    "province": "重庆",
    "region": "southwest",
    "location": "南山植物园、磁器口",
    "coords": [
      29.563,
      106.5516
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 3,
      "day": 8
    },
    "peakBloom": {
      "month": 3,
      "day": 18
    },
    "endBloom": {
      "month": 4,
      "day": 2
    },
    "durationDays": 25,
    "note": "山城樱花，别具风情"
  },
  {
    "id": 6,
    "city": "贵阳",
    "province": "贵州",
    "region": "southwest",
    "location": "黔灵山公园、花溪公园",
    "coords": [
      26.647,
      106.6302
    ],
    "variety": "染井吉野、贵州樱",
    "firstBloom": {
      "month": 3,
      "day": 10
    },
    "peakBloom": {
      "month": 3,
      "day": 20
    },
    "endBloom": {
      "month": 4,
      "day": 5
    },
    "durationDays": 26,
    "note": "高原城市，花期稍晚"
  },
  {
    "id": 7,
    "city": "广州",
    "province": "广东",
    "region": "south",
    "location": "华南植物园、越秀公园",
    "coords": [
      23.1291,
      113.2644
    ],
    "variety": "河津樱、钟花樱桃",
    "firstBloom": {
      "month": 2,
      "day": 10
    },
    "peakBloom": {
      "month": 2,
      "day": 25
    },
    "endBloom": {
      "month": 3,
      "day": 15
    },
    "durationDays": 33,
    "note": "华南地区花期最早之一"
  },
  {
    "id": 8,
    "city": "深圳",
    "province": "广东",
    "region": "south",
    "location": "仙湖植物园、莲花山公园",
    "coords": [
      22.5431,
      114.0579
    ],
    "variety": "河津樱、钟花樱桃",
    "firstBloom": {
      "month": 2,
      "day": 15
    },
    "peakBloom": {
      "month": 3,
      "day": 1
    },
    "endBloom": {
      "month": 3,
      "day": 20
    },
    "durationDays": 33,
    "note": "南方都市赏樱胜地"
  },
  {
    "id": 9,
    "city": "福州",
    "province": "福建",
    "region": "south",
    "location": "福州植物园、西湖公园",
    "coords": [
      26.0745,
      119.2965
    ],
    "variety": "染井吉野、河津樱",
    "firstBloom": {
      "month": 2,
      "day": 20
    },
    "peakBloom": {
      "month": 3,
      "day": 5
    },
    "endBloom": {
      "month": 3,
      "day": 20
    },
    "durationDays": 28,
    "note": "闽都赏樱，早春先开"
  },
  {
    "id": 10,
    "city": "厦门",
    "province": "福建",
    "region": "south",
    "location": "厦门植物园、中山公园",
    "coords": [
      24.4798,
      118.0894
    ],
    "variety": "染井吉野、钟花樱桃",
    "firstBloom": {
      "month": 2,
      "day": 25
    },
    "peakBloom": {
      "month": 3,
      "day": 8
    },
    "endBloom": {
      "month": 3,
      "day": 22
    },
    "durationDays": 25,
    "note": "海滨城市，花期温暖"
  },
  {
    "id": 11,
    "city": "武汉",
    "province": "湖北",
    "region": "central",
    "location": "武汉大学、东湖樱花园",
    "coords": [
      30.5928,
      114.3055
    ],
    "variety": "日本樱花（小日樱花）",
    "firstBloom": {
      "month": 2,
      "day": 20
    },
    "peakBloom": {
      "month": 2,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 1
    },
    "durationDays": 18,
    "note": "世界三大樱花之都之一，40年花期观测数据"
  },
  {
    "id": 12,
    "city": "长沙",
    "province": "湖南",
    "region": "central",
    "location": "湖南大学、岳麓山",
    "coords": [
      28.2278,
      112.9388
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 2,
      "day": 19
    },
    "peakBloom": {
      "month": 2,
      "day": 27
    },
    "endBloom": {
      "month": 4,
      "day": 3
    },
    "durationDays": 22,
    "note": "岳麓山下，百年名校赏樱"
  },
  {
    "id": 13,
    "city": "南昌",
    "province": "江西",
    "region": "central",
    "location": "南昌植物园、青山湖公园",
    "coords": [
      28.682,
      115.8579
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 2,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 2
    },
    "endBloom": {
      "month": 4,
      "day": 5
    },
    "durationDays": 21,
    "note": "赣鄱大地，春色宜人"
  },
  {
    "id": 14,
    "city": "合肥",
    "province": "安徽",
    "region": "central",
    "location": "逍遥津公园、植物园",
    "coords": [
      31.8206,
      117.2272
    ],
    "variety": "染井吉野、垂枝樱",
    "firstBloom": {
      "month": 2,
      "day": 25
    },
    "peakBloom": {
      "month": 3,
      "day": 5
    },
    "endBloom": {
      "month": 4,
      "day": 8
    },
    "durationDays": 21,
    "note": "皖省会城市赏樱"
  },
  {
    "id": 15,
    "city": "南京",
    "province": "江苏",
    "region": "east",
    "location": "鸡鸣寺、玄武湖、南京林业大学",
    "coords": [
      32.0603,
      118.7969
    ],
    "variety": "染井吉野、关山樱",
    "firstBloom": {
      "month": 3,
      "day": 18
    },
    "peakBloom": {
      "month": 3,
      "day": 26
    },
    "endBloom": {
      "month": 4,
      "day": 8
    },
    "durationDays": 21,
    "note": "全国最佳赏樱路线之一，植樱传统始于明代"
  },
  {
    "id": 16,
    "city": "上海",
    "province": "上海",
    "region": "east",
    "location": "辰山植物园、顾村公园",
    "coords": [
      31.2304,
      121.4737
    ],
    "variety": "染井吉野、晚樱",
    "firstBloom": {
      "month": 3,
      "day": 20
    },
    "peakBloom": {
      "month": 3,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 10
    },
    "durationDays": 21,
    "note": "辰山植物园晚樱盛名，4月上旬为盛花期"
  },
  {
    "id": 17,
    "city": "杭州",
    "province": "浙江",
    "region": "east",
    "location": "太子湾公园、花港观鱼",
    "coords": [
      30.2741,
      120.1551
    ],
    "variety": "染井吉野、垂枝樱",
    "firstBloom": {
      "month": 3,
      "day": 20
    },
    "peakBloom": {
      "month": 3,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 10
    },
    "durationDays": 21,
    "note": "西湖边的樱花，如诗如画"
  },
  {
    "id": 18,
    "city": "无锡",
    "province": "江苏",
    "region": "east",
    "location": "鼋头渚、太湖花朝节",
    "coords": [
      31.4912,
      120.3119
    ],
    "variety": "染井吉野、关山樱",
    "firstBloom": {
      "month": 3,
      "day": 20
    },
    "peakBloom": {
      "month": 3,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 10
    },
    "durationDays": 21,
    "note": "鼋头渚樱花甲天下"
  },
  {
    "id": 19,
    "city": "苏州",
    "province": "江苏",
    "region": "east",
    "location": "上方山国家森林公园、苏州植物园",
    "coords": [
      31.2989,
      120.5853
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 3,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 30
    },
    "endBloom": {
      "month": 4,
      "day": 12
    },
    "durationDays": 21,
    "note": "姑苏城外，樱花烂漫"
  },
  {
    "id": 20,
    "city": "宁波",
    "province": "浙江",
    "region": "east",
    "location": "东钱湖、植物园",
    "coords": [
      29.8683,
      121.544
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 3,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 30
    },
    "endBloom": {
      "month": 4,
      "day": 12
    },
    "durationDays": 21,
    "note": "东钱湖畔赏樱"
  },
  {
    "id": 21,
    "city": "温州",
    "province": "浙江",
    "region": "east",
    "location": "温州植物园、江心屿",
    "coords": [
      28.0005,
      120.672
    ],
    "variety": "染井吉野、河津樱",
    "firstBloom": {
      "month": 3,
      "day": 15
    },
    "peakBloom": {
      "month": 3,
      "day": 23
    },
    "endBloom": {
      "month": 4,
      "day": 5
    },
    "durationDays": 21,
    "note": "温州早春，气候温暖"
  },
  {
    "id": 22,
    "city": "扬州",
    "province": "江苏",
    "region": "east",
    "location": "瘦西湖、扬州植物园",
    "coords": [
      32.3942,
      119.4127
    ],
    "variety": "染井吉野、垂枝樱",
    "firstBloom": {
      "month": 3,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 30
    },
    "endBloom": {
      "month": 4,
      "day": 12
    },
    "durationDays": 21,
    "note": "烟花三月下扬州，樱花相伴"
  },
  {
    "id": 23,
    "city": "南通",
    "province": "江苏",
    "region": "east",
    "location": "濠河风景区、植物园",
    "coords": [
      31.9801,
      120.8945
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 3,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 30
    },
    "endBloom": {
      "month": 4,
      "day": 12
    },
    "durationDays": 21,
    "note": "江海交汇处赏樱"
  },
  {
    "id": 24,
    "city": "北京",
    "province": "北京",
    "region": "north",
    "location": "玉渊潭公园、北京植物园",
    "coords": [
      39.9042,
      116.4074
    ],
    "variety": "早樱、染井吉野",
    "firstBloom": {
      "month": 3,
      "day": 26
    },
    "peakBloom": {
      "month": 4,
      "day": 4
    },
    "endBloom": {
      "month": 4,
      "day": 18
    },
    "durationDays": 24,
    "note": "玉渊潭樱花节，北方赏樱胜地"
  },
  {
    "id": 25,
    "city": "天津",
    "province": "天津",
    "region": "north",
    "location": "水上公园、天津植物园",
    "coords": [
      39.0842,
      117.201
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 3,
      "day": 28
    },
    "peakBloom": {
      "month": 4,
      "day": 6
    },
    "endBloom": {
      "month": 4,
      "day": 20
    },
    "durationDays": 23,
    "note": "津门赏樱，春意盎然"
  },
  {
    "id": 26,
    "city": "石家庄",
    "province": "河北",
    "region": "north",
    "location": "植物园、人民公园",
    "coords": [
      38.0428,
      114.5149
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 3,
      "day": 28
    },
    "peakBloom": {
      "month": 4,
      "day": 6
    },
    "endBloom": {
      "month": 4,
      "day": 20
    },
    "durationDays": 23,
    "note": "冀省会城市赏樱"
  },
  {
    "id": 27,
    "city": "郑州",
    "province": "河南",
    "region": "north",
    "location": "郑州植物园、碧沙岗公园",
    "coords": [
      34.7466,
      113.6253
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 3,
      "day": 22
    },
    "peakBloom": {
      "month": 3,
      "day": 30
    },
    "endBloom": {
      "month": 4,
      "day": 12
    },
    "durationDays": 21,
    "note": "中原大地，春暖花开"
  },
  {
    "id": 28,
    "city": "济南",
    "province": "山东",
    "region": "north",
    "location": "植物园、趵突泉公园",
    "coords": [
      36.6512,
      117.1201
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 3,
      "day": 25
    },
    "peakBloom": {
      "month": 4,
      "day": 3
    },
    "endBloom": {
      "month": 4,
      "day": 16
    },
    "durationDays": 22,
    "note": "泉城赏樱，别有风味"
  },
  {
    "id": 29,
    "city": "青岛",
    "province": "山东",
    "region": "north",
    "location": "中山公园、青岛植物园",
    "coords": [
      36.0671,
      120.3826
    ],
    "variety": "染井吉野、关山樱",
    "firstBloom": {
      "month": 4,
      "day": 1
    },
    "peakBloom": {
      "month": 4,
      "day": 10
    },
    "endBloom": {
      "month": 4,
      "day": 25
    },
    "durationDays": 24,
    "note": "海滨城市，樱花与大海相映"
  },
  {
    "id": 30,
    "city": "西安",
    "province": "陕西",
    "region": "north",
    "location": "植物园、兴庆宫公园",
    "coords": [
      34.3416,
      108.9398
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 3,
      "day": 25
    },
    "peakBloom": {
      "month": 4,
      "day": 3
    },
    "endBloom": {
      "month": 4,
      "day": 18
    },
    "durationDays": 24,
    "note": "古都西安，樱花与历史交融"
  },
  {
    "id": 31,
    "city": "太原",
    "province": "山西",
    "region": "north",
    "location": "植物园、汾河公园",
    "coords": [
      37.8706,
      112.5489
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 5
    },
    "peakBloom": {
      "month": 4,
      "day": 13
    },
    "endBloom": {
      "month": 4,
      "day": 26
    },
    "durationDays": 21,
    "note": "晋省会，春迟花晚"
  },
  {
    "id": 32,
    "city": "大连",
    "province": "辽宁",
    "region": "northeast",
    "location": "旅顺樱花园、大连植物园",
    "coords": [
      38.914,
      121.6147
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 4,
      "day": 15
    },
    "peakBloom": {
      "month": 4,
      "day": 22
    },
    "endBloom": {
      "month": 5,
      "day": 5
    },
    "durationDays": 20,
    "note": "北方赏樱名城，旅顺樱花甲天下"
  },
  {
    "id": 33,
    "city": "沈阳",
    "province": "辽宁",
    "region": "northeast",
    "location": "植物园、沈阳故宫",
    "coords": [
      41.8057,
      123.4315
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 20
    },
    "peakBloom": {
      "month": 4,
      "day": 28
    },
    "endBloom": {
      "month": 5,
      "day": 10
    },
    "durationDays": 20,
    "note": "盛京赏樱，北国春迟"
  },
  {
    "id": 34,
    "city": "长春",
    "province": "吉林",
    "region": "northeast",
    "location": "净月潭国家森林公园、植物园",
    "coords": [
      43.8171,
      125.3235
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 28
    },
    "peakBloom": {
      "month": 5,
      "day": 5
    },
    "endBloom": {
      "month": 5,
      "day": 18
    },
    "durationDays": 20,
    "note": "净月潭樱花，北国春色"
  },
  {
    "id": 35,
    "city": "哈尔滨",
    "province": "黑龙江",
    "region": "northeast",
    "location": "太阳岛、植物园",
    "coords": [
      45.8038,
      126.5349
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 5,
      "day": 5
    },
    "peakBloom": {
      "month": 5,
      "day": 12
    },
    "endBloom": {
      "month": 5,
      "day": 25
    },
    "durationDays": 20,
    "note": "冰城赏樱，五月春光"
  },
  {
    "id": 36,
    "city": "兰州",
    "province": "甘肃",
    "region": "northwest",
    "location": "植物园、白塔山公园",
    "coords": [
      36.0611,
      103.8343
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 10
    },
    "peakBloom": {
      "month": 4,
      "day": 18
    },
    "endBloom": {
      "month": 5,
      "day": 1
    },
    "durationDays": 21,
    "note": "黄河之滨，春来迟"
  },
  {
    "id": 37,
    "city": "西宁",
    "province": "青海",
    "region": "northwest",
    "location": "植物园、人民公园",
    "coords": [
      36.6171,
      101.7782
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 20
    },
    "peakBloom": {
      "month": 4,
      "day": 28
    },
    "endBloom": {
      "month": 5,
      "day": 10
    },
    "durationDays": 20,
    "note": "高原城市，花期较晚"
  },
  {
    "id": 38,
    "city": "银川",
    "province": "宁夏",
    "region": "northwest",
    "location": "植物园、阅海湿地公园",
    "coords": [
      38.4872,
      106.2309
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 15
    },
    "peakBloom": {
      "month": 4,
      "day": 23
    },
    "endBloom": {
      "month": 5,
      "day": 5
    },
    "durationDays": 20,
    "note": "塞上江南，春来迟"
  },
  {
    "id": 39,
    "city": "乌鲁木齐",
    "province": "新疆",
    "region": "northwest",
    "location": "植物园、人民公园",
    "coords": [
      43.8256,
      87.6168
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 4,
      "day": 25
    },
    "peakBloom": {
      "month": 5,
      "day": 3
    },
    "endBloom": {
      "month": 5,
      "day": 16
    },
    "durationDays": 21,
    "note": "西域赏樱，别具风情"
  },
  {
    "id": 40,
    "city": "武汉黄陂",
    "province": "湖北",
    "region": "central",
    "location": "清凉寨景区",
    "coords": [
      31.0167,
      114.3333
    ],
    "variety": "山樱花、染井吉野",
    "firstBloom": {
      "month": 2,
      "day": 17
    },
    "peakBloom": {
      "month": 2,
      "day": 25
    },
    "endBloom": {
      "month": 3,
      "day": 30
    },
    "durationDays": 20,
    "note": "11万株樱花，中国最大樱花观赏地之一"
  },
  {
    "id": 41,
    "city": "宜昌",
    "province": "湖北",
    "region": "central",
    "location": "三峡植物园、宜昌植物园",
    "coords": [
      30.692,
      111.2864
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 2,
      "day": 19
    },
    "peakBloom": {
      "month": 2,
      "day": 27
    },
    "endBloom": {
      "month": 4,
      "day": 2
    },
    "durationDays": 21,
    "note": "三峡之滨，春早花开"
  },
  {
    "id": 42,
    "city": "南宁",
    "province": "广西",
    "region": "south",
    "location": "南宁植物园、青秀山",
    "coords": [
      22.817,
      108.3665
    ],
    "variety": "钟花樱桃、河津樱",
    "firstBloom": {
      "month": 2,
      "day": 5
    },
    "peakBloom": {
      "month": 2,
      "day": 20
    },
    "endBloom": {
      "month": 3,
      "day": 10
    },
    "durationDays": 33,
    "note": "绿城南宁，早春赏樱"
  },
  {
    "id": 43,
    "city": "桂林",
    "province": "广西",
    "region": "south",
    "location": "植物园、漓江边",
    "coords": [
      25.2736,
      110.2907
    ],
    "variety": "染井吉野",
    "firstBloom": {
      "month": 2,
      "day": 25
    },
    "peakBloom": {
      "month": 3,
      "day": 8
    },
    "endBloom": {
      "month": 3,
      "day": 22
    },
    "durationDays": 25,
    "note": "山水甲天下，樱花添春色"
  },
  {
    "id": 44,
    "city": "南平",
    "province": "福建",
    "region": "south",
    "location": "武夷山景区",
    "coords": [
      26.643,
      118.178
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 3,
      "day": 5
    },
    "peakBloom": {
      "month": 3,
      "day": 15
    },
    "endBloom": {
      "month": 3,
      "day": 28
    },
    "durationDays": 23,
    "note": "武夷山野生山樱花"
  },
  {
    "id": 45,
    "city": "拉萨",
    "province": "西藏",
    "region": "northwest",
    "location": "罗布林卡、植物园",
    "coords": [
      29.652,
      91.1721
    ],
    "variety": "高盆樱桃",
    "firstBloom": {
      "month": 4,
      "day": 25
    },
    "peakBloom": {
      "month": 5,
      "day": 5
    },
    "endBloom": {
      "month": 5,
      "day": 20
    },
    "durationDays": 25,
    "note": "高原圣城，樱花盛开别有韵味"
  },
  {
    "id": 46,
    "city": "武汉东湖",
    "province": "湖北",
    "region": "central",
    "location": "东湖樱花园（磨山景区）",
    "coords": [
      30.55,
      114.38
    ],
    "variety": "日本樱花、垂枝樱",
    "firstBloom": {
      "month": 2,
      "day": 20
    },
    "peakBloom": {
      "month": 2,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 5
    },
    "durationDays": 22,
    "note": "东湖樱花园，世界三大樱花之都"
  },
  {
    "id": 47,
    "city": "泸州",
    "province": "四川",
    "region": "southwest",
    "location": "方山景区",
    "coords": [
      28.8717,
      105.4425
    ],
    "variety": "山樱花",
    "firstBloom": {
      "month": 3,
      "day": 1
    },
    "peakBloom": {
      "month": 3,
      "day": 10
    },
    "endBloom": {
      "month": 3,
      "day": 25
    },
    "durationDays": 24,
    "note": "方山樱花节，川南赏樱"
  },
  {
    "id": 48,
    "city": "烟台",
    "province": "山东",
    "region": "north",
    "location": "植物园、滨海公园",
    "coords": [
      37.5365,
      121.3913
    ],
    "variety": "染井吉野、山樱花",
    "firstBloom": {
      "month": 4,
      "day": 5
    },
    "peakBloom": {
      "month": 4,
      "day": 13
    },
    "endBloom": {
      "month": 4,
      "day": 26
    },
    "durationDays": 21,
    "note": "胶东半岛，海滨赏樱"
  },
  {
    "id": 49,
    "city": "武汉珞珈山",
    "province": "湖北",
    "region": "central",
    "location": "武汉大学珞珈山樱花大道",
    "coords": [
      30.54,
      114.36
    ],
    "variety": "日本樱花（小日樱花）",
    "firstBloom": {
      "month": 2,
      "day": 20
    },
    "peakBloom": {
      "month": 2,
      "day": 28
    },
    "endBloom": {
      "month": 4,
      "day": 1
    },
    "durationDays": 18,
    "note": "中国最著名的赏樱地之一，72年连续观测记录"
  }
];

// 区域名称映射
const REGION_NAMES = {
  southwest: "西南地区",
  south: "华南地区",
  central: "长江中下游",
  east: "华东地区",
  north: "华北地区",
  northeast: "东北地区",
  northwest: "西北地区"
};

// 今天的日期（用于计算花况）- 使用访问当日，与最新天气预报同步
const TODAY = new Date();

// 将月/日转换为Date对象（年份随TODAY）
function toDate(monthDay, year) {
  if (!monthDay) return null;
  let m = monthDay.month;
  let d = monthDay.day;
  const y = year != null ? year : (m === 12 || m === 11 ? TODAY.getFullYear() - 1 : TODAY.getFullYear());
  return new Date(y, m - 1, d);
}

// 计算花况状态
function getStatus(city) {
  const firstDate = toDate(city.firstBloom);
  const peakDate = toDate(city.peakBloom);
  const endDate = toDate(city.endBloom);

  if (TODAY < firstDate) {
    const daysUntil = Math.ceil((firstDate - TODAY) / (1000 * 60 * 60 * 24));
    if (daysUntil <= 7) return { status: "imminent", label: "即将初绽", color: "#f9a8d4", daysUntil };
    if (daysUntil <= 21) return { status: "upcoming", label: "即将开放", color: "#fde68a", daysUntil };
    return { status: "waiting", label: "未开放", color: "#d1d5db", daysUntil };
  } else if (TODAY >= firstDate && TODAY < peakDate) {
    return { status: "blooming", label: "初绽", color: "#fb7185" };
  } else if (TODAY >= peakDate && TODAY < endDate) {
    return { status: "peak", label: "盛开中", color: "#ec4899" };
  } else {
    return { status: "ended", label: "已落花", color: "#9ca3af" };
  }
}

// 格式化日期显示
function formatDate(monthDay) {
  if (!monthDay) return "-";
  return `${monthDay.month}月${monthDay.day}日`;
}
