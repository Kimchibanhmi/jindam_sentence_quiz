// 문장 데이터
export const sentenceData = [
  {
    translation: '너는 무슨 계획이 있어?',
    stages: [
      {
        stageTranslation: '계획',
        cards: ['安排/ānpái'],
        answer: ['安排/ānpái'],
      },
      {
        stageTranslation: '있다',
        cards: ['有/yǒu'],
        answer: ['有/yǒu'],
      },
      {
        stageTranslation: '계획이 있다',
        cards: ['有/yǒu', '安排/ānpái'],
        answer: ['有/yǒu', '安排/ānpái'],
      },
      {
        stageTranslation: '무슨 계획',
        cards: ['什么/shénme', '安排/ānpái'],
        answer: ['什么/shénme', '安排/ānpái'],
      },
      {
        stageTranslation: '너는 무슨 계획이 있어?',
        cards: ['你/nǐ', '有/yǒu', '什么/shénme', '安排/ānpái'],
        answer: ['你/nǐ', '有/yǒu', '什么/shénme', '安排/ānpái'],
      },
    ],
  },
  {
    translation: '너는 주말에 무슨 계획이 있어?',
    stages: [
      {
        stageTranslation: '주말',
        cards: ['周末/zhōumò'],
        answer: ['周末/zhōumò'],
      },
      {
        stageTranslation: '너는 주말에 무슨 계획이 있어?',
        cards: ['你/nǐ', '周末/zhōumò', '有/yǒu', '什么/shénme', '安排/ānpái'],
        answer: ['你/nǐ', '周末/zhōumò', '有/yǒu', '什么/shénme', '安排/ānpái'],
      },
    ],
  },
  {
    translation: '나는 필요해.',
    stages: [
      {
        stageTranslation: '필요하다',
        cards: ['需要/xūyào'],
        answer: ['需要/xūyào'],
      },
      {
        stageTranslation: '나는 필요해',
        cards: ['我/wǒ', '需要/xūyào'],
        answer: ['我/wǒ', '需要/xūyào'],
      },
    ],
  },
  {
    translation: '너는 도움이 필요하니?',
    stages: [
      {
        stageTranslation: '도움',
        cards: ['帮助/bāngzhù'],
        answer: ['帮助/bāngzhù'],
      },
      {
        stageTranslation: '도움이 필요하다',
        cards: ['需要/xūyào', '帮助/bāngzhù'],
        answer: ['需要/xūyào', '帮助/bāngzhù'],
      },
      {
        stageTranslation: '나는 도움이 필요해',
        cards: ['我/wǒ', '需要/xūyào', '帮助/bāngzhù'],
        answer: ['我/wǒ', '需要/xūyào', '帮助/bāngzhù'],
      },
      {
        stageTranslation: '너는 도움이 필요하니?',
        cards: ['你/nǐ', '需要/xūyào', '帮助/bāngzhù', '吗/ma', '我/wǒ'],
        answer: ['你/nǐ', '需要/xūyào', '帮助/bāngzhù', '吗/ma'],
      },
    ],
  },
  {
    translation: '어느 것이 더 좋아?',
    stages: [
      {
        stageTranslation: '비교하다',
        cards: ['比较/bǐjiào'],
        answer: ['比较/bǐjiào'],
      },
      {
        stageTranslation: '더 좋다',
        cards: ['比较/bǐjiào', '好/hǎo'],
        answer: ['比较/bǐjiào', '好/hǎo'],
      },
      {
        stageTranslation: '어느 것',
        cards: ['哪个/nǎge'],
        answer: ['哪个/nǎge'],
      },
      {
        stageTranslation: '어느 것이 더 좋아?',
        cards: ['哪个/nǎge', '比较/bǐjiào', '好/hǎo'],
        answer: ['哪个/nǎge', '比较/bǐjiào', '好/hǎo'],
      },
    ],
  },
  {
    translation: '네가 생각하기에 이 두 개의 휴대폰 중 어느 것이 더 좋아?',
    stages: [
      {
        stageTranslation: '이 두 개의 휴대폰',
        cards: ['这/zhè', '两个/liǎng gè', '手机/shǒujī'],
        answer: ['这/zhè', '两个/liǎng gè', '手机/shǒujī'],
      },
      {
        stageTranslation: '이 두 개의 휴대폰 중 어느 것이 더 좋아?',
        cards: [
          '这/zhè',
          '两个/liǎng gè',
          '手机/shǒujī',
          '哪个/nǎge',
          '比较/bǐjiào',
          '好/hǎo',
        ],
        answer: [
          '这/zhè',
          '两个/liǎng gè',
          '手机/shǒujī',
          '哪个/nǎge',
          '比较/bǐjiào',
          '好/hǎo',
        ],
      },
      {
        stageTranslation: '네가 생각하기에',
        cards: ['你/nǐ', '觉得/juéde'],
        answer: ['你/nǐ', '觉得/juéde'],
      },
      {
        stageTranslation:
          '네가 생각하기에 이 두 개의 휴대폰 중 어느 것이 더 좋아?',
        cards: [
          '你/nǐ',
          '觉得/juéde',
          '这/zhè',
          '两个/liǎng gè',
          '手机/shǒujī',
          '哪个/nǎge',
          '比较/bǐjiào',
          '好/hǎo',
        ],
        answer: [
          '你/nǐ',
          '觉得/juéde',
          '这/zhè',
          '两个/liǎng gè',
          '手机/shǒujī',
          '哪个/nǎge',
          '比较/bǐjiào',
          '好/hǎo',
        ],
      },
    ],
  },
  {
    translation: '봤니?',
    stages: [
      {
        stageTranslation: '경기',
        cards: ['比赛/bǐsài'],
        answer: ['比赛/bǐsài'],
      },
      {
        stageTranslation: '보다',
        cards: ['看/kàn'],
        answer: ['看/kàn'],
      },
      {
        stageTranslation: '봤어',
        cards: ['看/kàn', '了/le'],
        answer: ['看/kàn', '了/le'],
      },
      {
        stageTranslation: '안 봤어',
        cards: ['没/méi', '看/kàn'],
        answer: ['没/méi', '看/kàn'],
      },
      {
        stageTranslation: '봤니?',
        cards: ['看/kàn', '了/le', '吗/ma'],
        answer: ['看/kàn', '了/le', '吗/ma'],
      },
      {
        stageTranslation: '안 봤니?',
        cards: ['没/méi', '看/kàn', '吗/ma', '比赛/bǐsài', '了/le'],
        answer: ['没/méi', '看/kàn', '吗/ma'],
      },
    ],
  },
  {
    translation: '어제의 경기, 너는 봤니?(어제의 경기를 강조하는 상황)',
    stages: [
      {
        stageTranslation: '어제의 경기',
        cards: ['昨天/zuótiān', '的/de', '比赛/bǐsài'],
        answer: ['昨天/zuótiān', '的/de', '比赛/bǐsài'],
      },
      {
        stageTranslation: '어제의 경기를 봤어',
        cards: ['看/kàn', '了/le', '昨天/zuótiān', '的/de', '比赛/bǐsài'],
        answer: ['看/kàn', '了/le', '昨天/zuótiān', '的/de', '比赛/bǐsài'],
      },
      {
        stageTranslation: '너는 어제의 경기를 봤니?',
        cards: [
          '你/nǐ',
          '看/kàn',
          '了/le',
          '昨天/zuótiān',
          '的/de',
          '比赛/bǐsài',
          '吗/ma',
        ],
        answer: [
          '你/nǐ',
          '看/kàn',
          '了/le',
          '昨天/zuótiān',
          '的/de',
          '比赛/bǐsài',
          '吗/ma',
        ],
      },
      {
        stageTranslation:
          '어제의 경기, 너는 봤니?(어제의 경기를 강조하는 상황)',
        cards: [
          '昨天/zuótiān',
          '的/de',
          '比赛/bǐsài',
          '，/',
          '你/nǐ',
          '看/kàn',
          '了/le',
          '吗/ma',
        ],
        answer: [
          '昨天/zuótiān',
          '的/de',
          '比赛/bǐsài',
          '，/',
          '你/nǐ',
          '看/kàn',
          '了/le',
          '吗/ma',
        ],
      },
    ],
  },
  {
    translation: '어디에서 살까?',
    stages: [
      {
        stageTranslation: '노트북',
        cards: ['笔记本/bǐjìběn'],
        answer: ['笔记本/bǐjìběn'],
      },
      {
        stageTranslation: '어디',
        cards: ['哪里/nǎlǐ'],
        answer: ['哪里/nǎlǐ'],
      },
      {
        stageTranslation: '어디에서',
        cards: ['在/zài', '哪里/nǎlǐ'],
        answer: ['在/zài', '哪里/nǎlǐ'],
      },
      {
        stageTranslation: '사다',
        cards: ['买/mǎi'],
        answer: ['买/mǎi'],
      },
      {
        stageTranslation: '어디에서 살까?',
        cards: ['在/zài', '哪里/nǎlǐ', '买/mǎi', '笔记本/bǐjìběn'],
        answer: ['在/zài', '哪里/nǎlǐ', '买/mǎi'],
      },
    ],
  },
  {
    translation: '너의 노트북은 어디에서 산 거야?',
    stages: [
      {
        stageTranslation:
          '이미 지나간 상황에 언제, 어디서, 누구랑, 어떻게를 강조해주는 장치!',
        cards: ['是/shì', '~~', '的/de'],
        answer: ['是/shì', '~~', '的/de'],
      },
      {
        stageTranslation: '어디에서 산 거야?',
        cards: ['是/shì', '在/zài', '哪里/nǎlǐ', '买/mǎi', '的/de'],
        answer: ['是/shì', '在/zài', '哪里/nǎlǐ', '买/mǎi', '的/de'],
      },
      {
        stageTranslation: '노트북',
        cards: ['笔记本/bǐjìběn'],
        answer: ['笔记本/bǐjìběn'],
      },
      {
        stageTranslation: '너의 노트북',
        cards: ['你/nǐ', '的/de', '笔记本/bǐjìběn'],
        answer: ['你/nǐ', '的/de', '笔记本/bǐjìběn'],
      },
      {
        stageTranslation: '너의 노트북은 어디에서 산 거야?',
        cards: [
          '你/nǐ',
          '的/de',
          '笔记本/bǐjìběn',
          '是/shì',
          '在/zài',
          '哪里/nǎlǐ',
          '买/mǎi',
          '的/de',
          '~~',
        ],
        answer: [
          '你/nǐ',
          '的/de',
          '笔记本/bǐjìběn',
          '是/shì',
          '在/zài',
          '哪里/nǎlǐ',
          '买/mǎi',
          '的/de',
        ],
      },
    ],
  },
  // Day 2 문장들 (11-20)
  {
    translation: '우유를 아직 가지고 있어(우유는 아직 있어)',
    stages: [
      {
        stageTranslation: '냉장고',
        cards: ['冰箱/bīngxiāng'],
        answer: ['冰箱/bīngxiāng'],
      },
      {
        stageTranslation: '우유',
        cards: ['牛奶/niúnǎi'],
        answer: ['牛奶/niúnǎi'],
      },
      {
        stageTranslation: '우유가 있다',
        cards: ['有/yǒu', '牛奶/niúnǎi'],
        answer: ['有/yǒu', '牛奶/niúnǎi'],
      },
      {
        stageTranslation: '아직',
        cards: ['还/hái'],
        answer: ['还/hái'],
      },
      {
        stageTranslation: '아직 있다',
        cards: ['还/hái', '有/yǒu'],
        answer: ['还/hái', '有/yǒu'],
      },
      {
        stageTranslation: '우유를 아직 가지고 있어(우유는 아직 있어)',
        cards: ['还/hái', '有/yǒu', '牛奶/niúnǎi', '冰箱/bīngxiāng'],
        answer: ['还/hái', '有/yǒu', '牛奶/niúnǎi'],
      },
    ],
  },
  {
    translation: '냉장고에 우유가 있습니까?',
    stages: [
      {
        stageTranslation: '냉장고 안에',
        cards: ['冰箱/bīngxiāng', '里/lǐ'],
        answer: ['冰箱/bīngxiāng', '里/lǐ'],
      },
      {
        stageTranslation: '냉장고 안에 우유가 있다',
        cards: ['冰箱/bīngxiāng', '里/lǐ', '有/yǒu', '牛奶/niúnǎi'],
        answer: ['冰箱/bīngxiāng', '里/lǐ', '有/yǒu', '牛奶/niúnǎi'],
      },
      {
        stageTranslation: '냉장고 안에 우유가 있습니까?',
        cards: ['冰箱/bīngxiāng', '里/lǐ', '有/yǒu', '牛奶/niúnǎi', '吗/ma'],
        answer: ['冰箱/bīngxiāng', '里/lǐ', '有/yǒu', '牛奶/niúnǎi', '吗/ma'],
      },
      {
        stageTranslation: '냉장고 안에 아직 우유가 있습니까?',
        cards: [
          '冰箱/bīngxiāng',
          '里/lǐ',
          '还/hái',
          '有/yǒu',
          '牛奶/niúnǎi',
          '吗/ma',
        ],
        answer: [
          '冰箱/bīngxiāng',
          '里/lǐ',
          '还/hái',
          '有/yǒu',
          '牛奶/niúnǎi',
          '吗/ma',
        ],
      },
    ],
  },
  {
    translation: '그는 중국어를 할 수 있다.',
    stages: [
      {
        stageTranslation: '중국어',
        cards: ['汉语/hànyǔ'],
        answer: ['汉语/hànyǔ'],
      },
      {
        stageTranslation: '중국어를 말하다',
        cards: ['说/shuō', '汉语/hànyǔ'],
        answer: ['说/shuō', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '할 수 있다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '중국어를 할 수 있다',
        cards: ['会/huì', '说/shuō', '汉语/hànyǔ'],
        answer: ['会/huì', '说/shuō', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '그는 중국어를 할 수 있다',
        cards: ['他/tā', '会/huì', '说/shuō', '汉语/hànyǔ'],
        answer: ['他/tā', '会/huì', '说/shuō', '汉语/hànyǔ'],
      },
    ],
  },
  {
    translation: '그는 중국어뿐만 아니라, 일본어도 말할 줄 안다.',
    stages: [
      {
        stageTranslation: '~뿐만 아니라, ....',
        cards: ['不但/bùdàn', '……'],
        answer: ['不但/bùdàn', '……'],
      },
      {
        stageTranslation: '중국어를 말할 수 있을 뿐만 아니라',
        cards: ['不但/bùdàn', '会/huì', '说/shuō', '汉语/hànyǔ'],
        answer: ['不但/bùdàn', '会/huì', '说/shuō', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '그는 중국어를 말할 수 있을 뿐만 아니라',
        cards: ['他/tā', '不但/bùdàn', '会/huì', '说/shuō', '汉语/hànyǔ'],
        answer: ['他/tā', '不但/bùdàn', '会/huì', '说/shuō', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '일본어를 말하다',
        cards: ['说/shuō', '日语/rìyǔ'],
        answer: ['说/shuō', '日语/rìyǔ'],
      },
      {
        stageTranslation: '일본어를 말할 줄 안다',
        cards: ['会/huì', '说/shuō', '日语/rìyǔ'],
        answer: ['会/huì', '说/shuō', '日语/rìyǔ'],
      },
      {
        stageTranslation: '~뿐만 아니라, ~도',
        cards: ['不但/bùdàn', '……', '，/', '还/hái', '……'],
        answer: ['不但/bùdàn', '……', '，/', '还/hái', '……'],
      },
      {
        stageTranslation: '~뿐만 아니라, 일본어도 말할 줄 안다',
        cards: [
          '不但/bùdàn',
          '……',
          '，/',
          '还/hái',
          '会/huì',
          '说/shuō',
          '日语/rìyǔ',
          '……',
        ],
        answer: [
          '不但/bùdàn',
          '……',
          '，/',
          '还/hái',
          '会/huì',
          '说/shuō',
          '日语/rìyǔ',
        ],
      },
      {
        stageTranslation: '그는 중국어뿐만 아니라, 일본어도 말할 줄 안다',
        cards: [
          '他/tā',
          '不但/bùdàn',
          '会/huì',
          '说/shuō',
          '汉语/hànyǔ',
          '，/',
          '还/hái',
          '会/huì',
          '说/shuō',
          '日语/rìyǔ',
          '……',
          '……',
        ],
        answer: [
          '他/tā',
          '不但/bùdàn',
          '会/huì',
          '说/shuō',
          '汉语/hànyǔ',
          '，/',
          '还/hái',
          '会/huì',
          '说/shuō',
          '日语/rìyǔ',
          '……',
        ],
      },
    ],
  },
  {
    translation: '메뉴를 한 번(좀) 보자.',
    stages: [
      {
        stageTranslation: '메뉴',
        cards: ['菜单/càidān'],
        answer: ['菜单/càidān'],
      },
      {
        stageTranslation: '보다',
        cards: ['看/kàn'],
        answer: ['看/kàn'],
      },
      {
        stageTranslation: '한 번(좀) ~하다',
        cards: ['一下/yíxià'],
        answer: ['一下/yíxià'],
      },
      {
        stageTranslation: '한 번(좀) 보다',
        cards: ['看/kàn', '一下/yíxià'],
        answer: ['看/kàn', '一下/yíxià'],
      },
      {
        stageTranslation: '메뉴를 한 번(좀) 보다',
        cards: ['看/kàn', '一下/yíxià', '菜单/càidān'],
        answer: ['看/kàn', '一下/yíxià', '菜单/càidān'],
      },
      {
        stageTranslation: '메뉴를 한 번(좀) 보자',
        cards: ['来/lái', '看/kàn', '一下/yíxià', '菜单/càidān'],
        answer: ['来/lái', '看/kàn', '一下/yíxià', '菜单/càidān'],
      },
    ],
  },
  {
    translation:
      '메뉴에 있는 음식을 한번 보세요, 어떤 요리(들)를 먹고 싶으세요?',
    stages: [
      {
        stageTranslation: '먹다',
        cards: ['吃/chī'],
        answer: ['吃/chī'],
      },
      {
        stageTranslation: '~하고 싶다',
        cards: ['想/xiǎng'],
        answer: ['想/xiǎng'],
      },
      {
        stageTranslation: '먹고 싶다',
        cards: ['想/xiǎng', '吃/chī'],
        answer: ['想/xiǎng', '吃/chī'],
      },
      {
        stageTranslation: '요리를 먹고 싶다',
        cards: ['想/xiǎng', '吃/chī', '菜/cài'],
        answer: ['想/xiǎng', '吃/chī', '菜/cài'],
      },
      {
        stageTranslation: '어떤',
        cards: ['哪/nǎ'],
        answer: ['哪/nǎ'],
      },
      {
        stageTranslation: '어떤 것들',
        cards: ['哪些/nǎxiē'],
        answer: ['哪些/nǎxiē'],
      },
      {
        stageTranslation: '어떤 요리들',
        cards: ['哪些/nǎxiē', '菜/cài'],
        answer: ['哪些/nǎxiē', '菜/cài'],
      },
      {
        stageTranslation: '어떤 요리를 먹고 싶습니까?',
        cards: ['想/xiǎng', '吃/chī', '哪些/nǎxiē', '菜/cài'],
        answer: ['想/xiǎng', '吃/chī', '哪些/nǎxiē', '菜/cài'],
      },
      {
        stageTranslation: '당신은 어떤 요리를 먹고 싶습니까?',
        cards: ['你/nǐ', '想/xiǎng', '吃/chī', '哪些/nǎxiē', '菜/cài'],
        answer: ['你/nǐ', '想/xiǎng', '吃/chī', '哪些/nǎxiē', '菜/cài'],
      },
      {
        stageTranslation:
          '메뉴에 있는 음식을 한번 보세요, 어떤 요리(들)를 먹고 싶으세요?',
        cards: [
          '来/lái',
          '看/kàn',
          '一下/yíxià',
          '菜单/càidān',
          '，/',
          '你/nǐ',
          '想/xiǎng',
          '吃/chī',
          '哪些/nǎxiē',
          '菜/cài',
          ,
        ],
        answer: [
          '来/lái',
          '看/kàn',
          '一下/yíxià',
          '菜单/càidān',
          '，/',
          '你/nǐ',
          '想/xiǎng',
          '吃/chī',
          '哪些/nǎxiē',
          '菜/cài',
        ],
      },
    ],
  },
  {
    translation: '너는 참가할 거니?',
    stages: [
      {
        stageTranslation: '참가하다',
        cards: ['参加/cānjiā'],
        answer: ['参加/cānjiā'],
      },
      {
        stageTranslation: '너는 참가할 거니?',
        cards: ['你/nǐ', '参加/cānjiā', '吗/ma'],
        answer: ['你/nǐ', '参加/cānjiā', '吗/ma'],
      },
    ],
  },
  {
    translation: '내일의 활동(강조), 너는 참가할 거니?',
    stages: [
      {
        stageTranslation: '활동',
        cards: ['活动/huódòng'],
        answer: ['活动/huódòng'],
      },
      {
        stageTranslation: '내일의',
        cards: ['明天/míngtiān', '的/de'],
        answer: ['明天/míngtiān', '的/de'],
      },
      {
        stageTranslation: '내일의 활동',
        cards: ['明天/míngtiān', '的/de', '活动/huódòng'],
        answer: ['明天/míngtiān', '的/de', '活动/huódòng'],
      },
      {
        stageTranslation: '내일의 활동에 참가하다',
        cards: ['参加/cānjiā', '明天/míngtiān', '的/de', '活动/huódòng'],
        answer: ['参加/cānjiā', '明天/míngtiān', '的/de', '活动/huódòng'],
      },
      {
        stageTranslation: '내일의 활동에 참가할 거니?',
        cards: [
          '参加/cānjiā',
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '吗/ma',
        ],
        answer: [
          '参加/cānjiā',
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '吗/ma',
        ],
      },
      {
        stageTranslation: '너는 내일의 활동에 참가할 거니?',
        cards: [
          '你/nǐ',
          '参加/cānjiā',
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '吗/ma',
        ],
        answer: [
          '你/nǐ',
          '参加/cānjiā',
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '吗/ma',
        ],
      },
      {
        stageTranslation: '내일의 활동(강조), 너는 참가할 거니?',
        cards: [
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '，/',
          '你/nǐ',
          '参加/cānjiā',
          '吗/ma',
        ],
        answer: [
          '明天/míngtiān',
          '的/de',
          '活动/huódòng',
          '，/',
          '你/nǐ',
          '参加/cānjiā',
          '吗/ma',
        ],
      },
    ],
  },
  {
    translation: '정말 똑똑하다!',
    stages: [
      {
        stageTranslation: '똑똑하다',
        cards: ['聪明/cōngmíng'],
        answer: ['聪明/cōngmíng'],
      },
      {
        stageTranslation: '정말',
        cards: ['真/zhēn'],
        answer: ['真/zhēn'],
      },
      {
        stageTranslation: '정말 똑똑하다!',
        cards: ['真/zhēn', '聪明/cōngmíng'],
        answer: ['真/zhēn', '聪明/cōngmíng'],
      },
    ],
  },
  {
    translation: '너의 아이는 정말 똑똑하다!',
    stages: [
      {
        stageTranslation: '아이',
        cards: ['孩子/háizi'],
        answer: ['孩子/háizi'],
      },
      {
        stageTranslation: '너의 아이',
        cards: ['你/nǐ', '的/de', '孩子/háizi'],
        answer: ['你/nǐ', '的/de', '孩子/háizi'],
      },
      {
        stageTranslation: '너의 아이는 정말 똑똑하다!',
        cards: ['你/nǐ', '的/de', '孩子/háizi', '真/zhēn', '聪明/cōngmíng'],
        answer: ['你/nǐ', '的/de', '孩子/háizi', '真/zhēn', '聪明/cōngmíng'],
      },
    ],
  },
  // Day 3 문장들 (21-30)
  {
    translation: '방을 청소하다',
    stages: [
      {
        stageTranslation: '청소하다',
        cards: ['打扫/dǎsǎo'],
        answer: ['打扫/dǎsǎo'],
      },
      {
        stageTranslation: '방',
        cards: ['房间/fángjiān'],
        answer: ['房间/fángjiān'],
      },
      {
        stageTranslation: '청소하다',
        cards: ['打扫/dǎsǎo'],
        answer: ['打扫/dǎsǎo'],
      },
      {
        stageTranslation: '방을 청소하다',
        cards: ['打扫/dǎsǎo', '房间/fángjiān'],
        answer: ['打扫/dǎsǎo', '房间/fángjiān'],
      },
    ],
  },
  {
    translation: '오늘 방을 청소했니?',
    stages: [
      {
        stageTranslation: '오늘',
        cards: ['今天/jīntiān'],
        answer: ['今天/jīntiān'],
      },
      {
        stageTranslation: '오늘 방을 청소하다',
        cards: ['今天/jīntiān', '打扫/dǎsǎo', '房间/fángjiān'],
        answer: ['今天/jīntiān', '打扫/dǎsǎo', '房间/fángjiān'],
      },
      {
        stageTranslation: '오늘 방을 청소했다',
        cards: ['今天/jīntiān', '打扫/dǎsǎo', '房间/fángjiān', '了/le'],
        answer: ['今天/jīntiān', '打扫/dǎsǎo', '房间/fángjiān', '了/le'],
      },
      {
        stageTranslation: '오늘 방을 청소했니?',
        cards: [
          '你/nǐ',
          '今天/jīntiān',
          '打扫/dǎsǎo',
          '房间/fángjiān',
          '了/le',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '今天/jīntiān',
          '打扫/dǎsǎo',
          '房间/fángjiān',
          '了/le',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '무엇을 할 계획이니?',
    stages: [
      {
        stageTranslation: '계획하다',
        cards: ['打算/dǎsuàn'],
        answer: ['打算/dǎsuàn'],
      },
      {
        stageTranslation: '하다',
        cards: ['做/zuò'],
        answer: ['做/zuò'],
      },
      {
        stageTranslation: '무엇을 하다?',
        cards: ['做/zuò', '什么/shénme', '？/'],
        answer: ['做/zuò', '什么/shénme', '？/'],
      },
    ],
  },
  {
    translation: '여름방학에 무엇을 할 계획이니?',
    stages: [
      {
        stageTranslation: '계획하다',
        cards: ['打算/dǎsuàn'],
        answer: ['打算/dǎsuàn'],
      },
      {
        stageTranslation: '무엇을 할 계획이니?',
        cards: ['打算/dǎsuàn', '做/zuò', '什么/shénme', '？/'],
        answer: ['打算/dǎsuàn', '做/zuò', '什么/shénme', '？/'],
      },
      {
        stageTranslation: '여름방학',
        cards: ['暑假/shǔjià'],
        answer: ['暑假/shǔjià'],
      },
      {
        stageTranslation: '여름방학에 무엇을 할 계획이니?',
        cards: [
          '你/nǐ',
          '暑假/shǔjià',
          '打算/dǎsuàn',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '暑假/shǔjià',
          '打算/dǎsuàn',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '지하철 타니?',
    stages: [
      {
        stageTranslation: '지하철',
        cards: ['地铁/dìtiě'],
        answer: ['地铁/dìtiě'],
      },
      {
        stageTranslation: '지하철 타다',
        cards: ['坐/zuò', '地铁/dìtiě'],
        answer: ['坐/zuò', '地铁/dìtiě'],
      },
      {
        stageTranslation: '지하철 타니?',
        cards: ['坐/zuò', '地铁/dìtiě', '吗/ma', '？/'],
        answer: ['坐/zuò', '地铁/dìtiě', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '매일 어떻게 출근하니? 지하철 타니?',
    stages: [
      {
        stageTranslation: '출근하다',
        cards: ['上班/shàngbān'],
        answer: ['上班/shàngbān'],
      },
      {
        stageTranslation: '출근하러 가다',
        cards: ['去/qù', '上班/shàngbān'],
        answer: ['去/qù', '上班/shàngbān'],
      },
      {
        stageTranslation: '어떻게',
        cards: ['怎么/zěnme'],
        answer: ['怎么/zěnme'],
      },
      {
        stageTranslation: '어떻게 출근하니?',
        cards: ['怎么/zěnme', '去/qù', '上班/shàngbān', '？/'],
        answer: ['怎么/zěnme', '去/qù', '上班/shàngbān', '？/'],
      },
      {
        stageTranslation: '매일',
        cards: ['每天/měitiān'],
        answer: ['每天/měitiān'],
      },
      {
        stageTranslation: '매일 어떻게 출근하니?',
        cards: [
          '你/nǐ',
          '每天/měitiān',
          '怎么/zěnme',
          '去/qù',
          '上班/shàngbān',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '每天/měitiān',
          '怎么/zěnme',
          '去/qù',
          '上班/shàngbān',
          '？/',
        ],
      },
      {
        stageTranslation: '매일 어떻게 출근하니? 지하철 타니?',
        cards: [
          '你/nǐ',
          '每天/měitiān',
          '怎么/zěnme',
          '去/qù',
          '上班/shàngbān',
          '？/',
          '坐/zuò',
          '地铁/dìtiě',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '每天/měitiān',
          '怎么/zěnme',
          '去/qù',
          '上班/shàngbān',
          '？/',
          '坐/zuò',
          '地铁/dìtiě',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '메일 받았니?',
    stages: [
      {
        stageTranslation: '이메일',
        cards: ['电子邮件/diànzǐ yóujiàn'],
        answer: ['电子邮件/diànzǐ yóujiàn'],
      },
      {
        stageTranslation: '받다',
        cards: ['收到/shōudào'],
        answer: ['收到/shōudào'],
      },
      {
        stageTranslation: '이메일',
        cards: ['电子邮件/diànzǐ yóujiàn'],
        answer: ['电子邮件/diànzǐ yóujiàn'],
      },
      {
        stageTranslation: '이메일 받다',
        cards: ['收到/shōudào', '电子邮件/diànzǐ yóujiàn'],
        answer: ['收到/shōudào', '电子邮件/diànzǐ yóujiàn'],
      },
      {
        stageTranslation: '이메일 받았다',
        cards: ['收到/shōudào', '电子邮件/diànzǐ yóujiàn', '了/le'],
        answer: ['收到/shōudào', '电子邮件/diànzǐ yóujiàn', '了/le'],
      },
      {
        stageTranslation: '받지 못했다',
        cards: ['没/méi', '收到/shōudào'],
        answer: ['没/méi', '收到/shōudào'],
      },
      {
        stageTranslation: '이메일 받지 못했다',
        cards: ['没/méi', '收到/shōudào', '电子邮件/diànzǐ yóujiàn'],
        answer: ['没/méi', '收到/shōudào', '电子邮件/diànzǐ yóujiàn'],
      },
    ],
  },
  {
    translation: '내 이메일 받았니?',
    stages: [
      {
        stageTranslation: '나의 이메일',
        cards: ['我/wǒ', '的/de', '电子邮件/diànzǐ yóujiàn'],
        answer: ['我/wǒ', '的/de', '电子邮件/diànzǐ yóujiàn'],
      },
      {
        stageTranslation: '내 이메일 받았니?',
        cards: [
          '你/nǐ',
          '收到/shōudào',
          '我/wǒ',
          '的/de',
          '电子邮件/diànzǐ yóujiàn',
          '了/le',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '收到/shōudào',
          '我/wǒ',
          '的/de',
          '电子邮件/diànzǐ yóujiàn',
          '了/le',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '동물원에 가자!',
    stages: [
      {
        stageTranslation: '동물원',
        cards: ['动物园/dòngwùyuán'],
        answer: ['动物园/dòngwùyuán'],
      },
      {
        stageTranslation: '동물원에 가다',
        cards: ['去/qù', '动物园/dòngwùyuán'],
        answer: ['去/qù', '动物园/dòngwùyuán'],
      },
      {
        stageTranslation: '~하자',
        cards: ['吧/ba'],
        answer: ['吧/ba'],
      },
      {
        stageTranslation: '동물원에 가자!',
        cards: ['去/qù', '动物园/dòngwùyuán', '吧/ba', '！/'],
        answer: ['去/qù', '动物园/dòngwùyuán', '吧/ba', '！/'],
      },
    ],
  },
  {
    translation: '주말에 우리 동물원에 가자!',
    stages: [
      {
        stageTranslation: '주말',
        cards: ['周末/zhōumò'],
        answer: ['周末/zhōumò'],
      },
      {
        stageTranslation: '우리',
        cards: ['我们/wǒmen'],
        answer: ['我们/wǒmen'],
      },
      {
        stageTranslation: '주말에 우리 동물원에 가자!',
        cards: [
          '周末/zhōumò',
          '我们/wǒmen',
          '去/qù',
          '动物园/dòngwùyuán',
          '吧/ba',
          '！/',
        ],
        answer: [
          '周末/zhōumò',
          '我们/wǒmen',
          '去/qù',
          '动物园/dòngwùyuán',
          '吧/ba',
          '！/',
        ],
      },
    ],
  },
  // Day 4 문장들 (31-40)
  {
    translation: '운동하다',
    stages: [
      {
        stageTranslation: '운동하다',
        cards: ['锻炼/duànliàn'],
        answer: ['锻炼/duànliàn'],
      },
      {
        stageTranslation: '운동 좀 하다(가볍게)',
        cards: ['锻炼/duànliàn', '锻炼/duànliàn'],
        answer: ['锻炼/duànliàn', '锻炼/duànliàn'],
      },
    ],
  },
  {
    translation: '매일 운동하니?',
    stages: [
      {
        stageTranslation: '매일',
        cards: ['每天/měitiān'],
        answer: ['每天/měitiān'],
      },
      {
        stageTranslation: '매일 운동하다',
        cards: ['每天/měitiān', '锻炼/duànliàn'],
        answer: ['每天/měitiān', '锻炼/duànliàn'],
      },
      {
        stageTranslation: '매일 운동하니?',
        cards: ['你/nǐ', '每天/měitiān', '锻炼/duànliàn', '吗/ma', '？/'],
        answer: ['你/nǐ', '每天/měitiān', '锻炼/duànliàn', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '교통이 편리하다',
    stages: [
      {
        stageTranslation: '편리하다',
        cards: ['方便/fāngbiàn'],
        answer: ['方便/fāngbiàn'],
      },
      {
        stageTranslation: '교통',
        cards: ['交通/jiāotōng'],
        answer: ['交通/jiāotōng'],
      },
      {
        stageTranslation: '편리하다',
        cards: ['方便/fāngbiàn'],
        answer: ['方便/fāngbiàn'],
      },
      {
        stageTranslation: '교통이 편리하다',
        cards: ['交通/jiāotōng', '很/hěn', '方便/fāngbiàn'],
        answer: ['交通/jiāotōng', '很/hěn', '方便/fāngbiàn'],
      },
    ],
  },
  {
    translation: '이곳은 교통이 편리한가요?',
    stages: [
      {
        stageTranslation: '이곳',
        cards: ['这里/zhèlǐ'],
        answer: ['这里/zhèlǐ'],
      },
      {
        stageTranslation: '이곳은 교통이 편리한가요?',
        cards: ['这里/zhèlǐ', '交通/jiāotōng', '方便/fāngbiàn', '吗/ma', '？/'],
        answer: [
          '这里/zhèlǐ',
          '交通/jiāotōng',
          '方便/fāngbiàn',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '주변에 슈퍼마켓이 있나요?',
    stages: [
      {
        stageTranslation: '주변에',
        cards: ['附近/fùjìn'],
        answer: ['附近/fùjìn'],
      },
      {
        stageTranslation: '있다',
        cards: ['有/yǒu'],
        answer: ['有/yǒu'],
      },
      {
        stageTranslation: '슈퍼마켓',
        cards: ['超市/chāoshì'],
        answer: ['超市/chāoshì'],
      },
      {
        stageTranslation: '슈퍼마켓이 있다',
        cards: ['有/yǒu', '超市/chāoshì'],
        answer: ['有/yǒu', '超市/chāoshì'],
      },
    ],
  },
  {
    translation: '이 주변에 슈퍼마켓이 있나요?',
    stages: [
      {
        stageTranslation: '주변',
        cards: ['附近/fùjìn'],
        answer: ['附近/fùjìn'],
      },
      {
        stageTranslation: '이 주변',
        cards: ['这/zhè', '附近/fùjìn'],
        answer: ['这/zhè', '附近/fùjìn'],
      },
      {
        stageTranslation: '이 주변에 슈퍼마켓이 있나요?',
        cards: [
          '这/zhè',
          '附近/fùjìn',
          '有/yǒu',
          '超市/chāoshì',
          '吗/ma',
          '？/',
        ],
        answer: [
          '这/zhè',
          '附近/fùjìn',
          '有/yǒu',
          '超市/chāoshì',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '무슨 일이야?',
    stages: [
      {
        stageTranslation: '감기에 걸리다',
        cards: ['感冒/gǎnmào'],
        answer: ['感冒/gǎnmào'],
      },
      {
        stageTranslation: '무슨 일이야?',
        cards: ['怎么了/zěnme le', '？/'],
        answer: ['怎么了/zěnme le', '？/'],
      },
      {
        stageTranslation: '너 무슨 일이야?',
        cards: ['你/nǐ', '怎么了/zěnme le', '？/'],
        answer: ['你/nǐ', '怎么了/zěnme le', '？/'],
      },
    ],
  },
  {
    translation: '무슨 일이야? 감기 걸렸어?',
    stages: [
      {
        stageTranslation: '감기',
        cards: ['感冒/gǎnmào'],
        answer: ['感冒/gǎnmào'],
      },
      {
        stageTranslation: '감기에 걸렸니?',
        cards: ['感冒/gǎnmào', '了/le', '吗/ma', '？/'],
        answer: ['感冒/gǎnmào', '了/le', '吗/ma', '？/'],
      },
      {
        stageTranslation: '무슨 일이야? 감기 걸렸어?',
        cards: [
          '你/nǐ',
          '怎么了/zěnme le',
          '？/',
          '感冒/gǎnmào',
          '了/le',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '怎么了/zěnme le',
          '？/',
          '感冒/gǎnmào',
          '了/le',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '공원에 가자!',
    stages: [
      {
        stageTranslation: '공원',
        cards: ['公园/gōngyuán'],
        answer: ['公园/gōngyuán'],
      },
      {
        stageTranslation: '공원에 가다',
        cards: ['去/qù', '公园/gōngyuán'],
        answer: ['去/qù', '公园/gōngyuán'],
      },
      {
        stageTranslation: '~하자',
        cards: ['吧/ba'],
        answer: ['吧/ba'],
      },
      {
        stageTranslation: '공원에 가자!',
        cards: ['去/qù', '公园/gōngyuán', '吧/ba', '！/'],
        answer: ['去/qù', '公园/gōngyuán', '吧/ba', '！/'],
      },
    ],
  },
  {
    translation: '공원에 산책하러 가자!',
    stages: [
      {
        stageTranslation: '산책하다',
        cards: ['散步/sànbù'],
        answer: ['散步/sànbù'],
      },
      {
        stageTranslation: '산책하러 가다',
        cards: ['去/qù', '散步/sànbù'],
        answer: ['去/qù', '散步/sànbù'],
      },
      {
        stageTranslation: '공원에 산책하다',
        cards: ['去/qù', '公园/gōngyuán', '散步/sànbù'],
        answer: ['去/qù', '公园/gōngyuán', '散步/sànbù'],
      },
      {
        stageTranslation: '공원에 산책하러 가자!',
        cards: ['去/qù', '公园/gōngyuán', '散步/sànbù', '吧/ba', '！/'],
        answer: ['去/qù', '公园/gōngyuán', '散步/sànbù', '吧/ba', '！/'],
      },
      {
        stageTranslation: '우리 공원에 산책하러 가자!',
        cards: [
          '我们/wǒmen',
          '去/qù',
          '公园/gōngyuán',
          '散步/sànbù',
          '吧/ba',
          '！/',
        ],
        answer: [
          '我们/wǒmen',
          '去/qù',
          '公园/gōngyuán',
          '散步/sànbù',
          '吧/ba',
          '！/',
        ],
      },
    ],
  },
  // Day 5 문장들 (41-50)
  {
    translation: '선생님은 늘 나를 챙겨주신다.',
    stages: [
      {
        stageTranslation: '관심을 가지다',
        cards: ['关心/guānxīn'],
        answer: ['关心/guānxīn'],
      },
      {
        stageTranslation: '나를 관심을 가지다',
        cards: ['关心/guānxīn', '我/wǒ'],
        answer: ['关心/guānxīn', '我/wǒ'],
      },
      {
        stageTranslation: '나를 많이 챙겨주다',
        cards: ['很/hěn', '关心/guānxīn', '我/wǒ'],
        answer: ['很/hěn', '关心/guānxīn', '我/wǒ'],
      },
      {
        stageTranslation: '항상',
        cards: ['总是/zǒngshì'],
        answer: ['总是/zǒngshì'],
      },
      {
        stageTranslation: '항상 나를 많이 챙겨주다',
        cards: ['总是/zǒngshì', '很/hěn', '关心/guānxīn', '我/wǒ'],
        answer: ['总是/zǒngshì', '很/hěn', '关心/guānxīn', '我/wǒ'],
      },
      {
        stageTranslation: '리 선생님',
        cards: ['李/lǐ', '老师/lǎoshī'],
        answer: ['李/lǐ', '老师/lǎoshī'],
      },
      {
        stageTranslation: '리 선생님은 늘 나를 챙겨주신다',
        cards: [
          '李/lǐ',
          '老师/lǎoshī',
          '总是/zǒngshì',
          '很/hěn',
          '关心/guānxīn',
          '我/wǒ',
          '。/',
        ],
        answer: [
          '李/lǐ',
          '老师/lǎoshī',
          '总是/zǒngshì',
          '很/hěn',
          '关心/guānxīn',
          '我/wǒ',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '혼자 집에 있는 것이 무섭니?',
    stages: [
      {
        stageTranslation: '무서워하다',
        cards: ['害怕/hàipà'],
        answer: ['害怕/hàipà'],
      },
      {
        stageTranslation: '~에',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '집에',
        cards: ['在/zài', '家/jiā'],
        answer: ['在/zài', '家/jiā'],
      },
      {
        stageTranslation: '한 사람',
        cards: ['一个/yí gè', '人/rén'],
        answer: ['一个/yí gè', '人/rén'],
      },
      {
        stageTranslation: '혼자 집에 있다',
        cards: ['一个/yí gè', '人/rén', '在/zài', '家/jiā'],
        answer: ['一个/yí gè', '人/rén', '在/zài', '家/jiā'],
      },
      {
        stageTranslation: '혼자 집에 있는 것이 무섭니?',
        cards: [
          '你/nǐ',
          '害怕/hàipà',
          '一个/yí gè',
          '人/rén',
          '在/zài',
          '家/jiā',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '害怕/hàipà',
          '一个/yí gè',
          '人/rén',
          '在/zài',
          '家/jiā',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이 일을 선택한 것을 후회하니?',
    stages: [
      {
        stageTranslation: '후회하다',
        cards: ['后悔/hòuhuǐ'],
        answer: ['后悔/hòuhuǐ'],
      },
      {
        stageTranslation: '선택하다',
        cards: ['选择/xuǎnzé'],
        answer: ['选择/xuǎnzé'],
      },
      {
        stageTranslation: '일',
        cards: ['工作/gōngzuò'],
        answer: ['工作/gōngzuò'],
      },
      {
        stageTranslation: '일을 선택하다',
        cards: ['选择/xuǎnzé', '工作/gōngzuò'],
        answer: ['选择/xuǎnzé', '工作/gōngzuò'],
      },
      {
        stageTranslation: '이 일',
        cards: ['这个/zhè ge', '工作/gōngzuò'],
        answer: ['这个/zhè ge', '工作/gōngzuò'],
      },
      {
        stageTranslation: '이 일을 선택하다',
        cards: ['选择/xuǎnzé', '这个/zhè ge', '工作/gōngzuò'],
        answer: ['选择/xuǎnzé', '这个/zhè ge', '工作/gōngzuò'],
      },
      {
        stageTranslation: '이 일을 선택한 것을 후회하니?',
        cards: [
          '你/nǐ',
          '后悔/hòuhuǐ',
          '选择/xuǎnzé',
          '这个/zhè ge',
          '工作/gōngzuò',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '后悔/hòuhuǐ',
          '选择/xuǎnzé',
          '这个/zhè ge',
          '工作/gōngzuò',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이곳의 환경이 좋다',
    stages: [
      {
        stageTranslation: '환경',
        cards: ['环境/huánjìng'],
        answer: ['环境/huánjìng'],
      },
      {
        stageTranslation: '이곳',
        cards: ['这里/zhèlǐ'],
        answer: ['这里/zhèlǐ'],
      },
      {
        stageTranslation: '이곳의 환경',
        cards: ['这里/zhèlǐ', '的/de', '环境/huánjìng'],
        answer: ['这里/zhèlǐ', '的/de', '环境/huánjìng'],
      },
      {
        stageTranslation: '좋다',
        cards: ['不错/búcuò'],
        answer: ['不错/búcuò'],
      },
      {
        stageTranslation: '이곳의 환경이 좋다',
        cards: ['这里/zhèlǐ', '的/de', '环境/huánjìng', '不错/búcuò'],
        answer: ['这里/zhèlǐ', '的/de', '环境/huánjìng', '不错/búcuò'],
      },
    ],
  },
  {
    translation: '이곳의 환경이 정말 좋다',
    stages: [
      {
        stageTranslation: '정말',
        cards: ['真/zhēn'],
        answer: ['真/zhēn'],
      },
      {
        stageTranslation: '정말 좋다',
        cards: ['真/zhēn', '不错/búcuò'],
        answer: ['真/zhēn', '不错/búcuò'],
      },
      {
        stageTranslation: '이곳의 환경이 정말 좋다',
        cards: [
          '这里/zhèlǐ',
          '的/de',
          '环境/huánjìng',
          '真/zhēn',
          '不错/búcuò',
          '。/',
        ],
        answer: [
          '这里/zhèlǐ',
          '的/de',
          '环境/huánjìng',
          '真/zhēn',
          '不错/búcuò',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '운동 좀 하자',
    stages: [
      {
        stageTranslation: '활동하다',
        cards: ['活动/huódòng'],
        answer: ['活动/huódòng'],
      },
      {
        stageTranslation: '활동 좀 하다',
        cards: ['活动/huódòng', '活动/huódòng'],
        answer: ['活动/huódòng', '活动/huódòng'],
      },
      {
        stageTranslation: '일어나다',
        cards: ['起来/qǐlai'],
        answer: ['起来/qǐlai'],
      },
      {
        stageTranslation: '일어나서 활동하다',
        cards: ['起来/qǐlai', '活动/huódòng', '活动/huódòng'],
        answer: ['起来/qǐlai', '活动/huódòng', '活动/huódòng'],
      },
    ],
  },
  {
    translation: '이 요리는 간단하다',
    stages: [
      {
        stageTranslation: '간단하다',
        cards: ['简单/jiǎndān'],
        answer: ['简单/jiǎndān'],
      },
      {
        stageTranslation: '이것은 매우 간단하다',
        cards: ['这个/zhège', '很/hěn', '简单/jiǎndān'],
        answer: ['这个/zhège', '很/hěn', '简单/jiǎndān'],
      },
      {
        stageTranslation: '요리',
        cards: ['菜/cài'],
        answer: ['菜/cài'],
      },
      {
        stageTranslation: '한 접시의 요리',
        cards: ['这/zhè', '道/dào', '菜/cài'],
        answer: ['这/zhè', '道/dào', '菜/cài'],
      },
      {
        stageTranslation: '이 요리는 간단하다',
        cards: ['这/zhè', '道/dào', '菜/cài', '很/hěn', '简单/jiǎndān', '。/'],
        answer: ['这/zhè', '道/dào', '菜/cài', '很/hěn', '简单/jiǎndān', '。/'],
      },
    ],
  },
  {
    translation: '숙제 다 점검했니?',
    stages: [
      {
        stageTranslation: '점검하다',
        cards: ['检查/jiǎnchá'],
        answer: ['检查/jiǎnchá'],
      },
      {
        stageTranslation: '숙제',
        cards: ['作业/zuòyè'],
        answer: ['作业/zuòyè'],
      },
      {
        stageTranslation: '숙제를 점검하다',
        cards: ['检查/jiǎnchá', '作业/zuòyè'],
        answer: ['检查/jiǎnchá', '作业/zuòyè'],
      },
      {
        stageTranslation: '다 점검했다',
        cards: ['检查/jiǎnchá', '完/wán'],
        answer: ['检查/jiǎnchá', '完/wán'],
      },
      {
        stageTranslation: '숙제 다 점검했다',
        cards: ['检查/jiǎnchá', '完/wán', '作业/zuòyè', '了/le'],
        answer: ['检查/jiǎnchá', '完/wán', '作业/zuòyè', '了/le'],
      },
      {
        stageTranslation: '숙제 다 점검했니?',
        cards: [
          '你/nǐ',
          '检查/jiǎnchá',
          '完/wán',
          '作业/zuòyè',
          '了/le',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '检查/jiǎnchá',
          '完/wán',
          '作业/zuòyè',
          '了/le',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '건강이 가장 중요하다',
    stages: [
      {
        stageTranslation: '건강',
        cards: ['健康/jiànkāng'],
        answer: ['健康/jiànkāng'],
      },
      {
        stageTranslation: '중요하다',
        cards: ['重要/zhòngyào'],
        answer: ['重要/zhòngyào'],
      },
      {
        stageTranslation: '매우 중요하다',
        cards: ['很/hěn', '重要/zhòngyào'],
        answer: ['很/hěn', '重要/zhòngyào'],
      },
      {
        stageTranslation: '가장',
        cards: ['最/zuì'],
        answer: ['最/zuì'],
      },
      {
        stageTranslation: '가장 중요하다',
        cards: ['最/zuì', '重要/zhòngyào'],
        answer: ['最/zuì', '重要/zhòngyào'],
      },
      {
        stageTranslation: '건강이 가장 중요하다',
        cards: ['健康/jiànkāng', '最/zuì', '重要/zhòngyào', '。/'],
        answer: ['健康/jiànkāng', '最/zuì', '重要/zhòngyào', '。/'],
      },
    ],
  },
  {
    translation: '시험 전에 긴장되니?',
    stages: [
      {
        stageTranslation: '긴장하다',
        cards: ['紧张/jǐnzhāng'],
        answer: ['紧张/jǐnzhāng'],
      },
      {
        stageTranslation: '~할 것이다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '긴장될 것이다',
        cards: ['会/huì', '紧张/jǐnzhāng', '吗/ma'],
        answer: ['会/huì', '紧张/jǐnzhāng', '吗/ma'],
      },
      {
        stageTranslation: '시험',
        cards: ['考试/kǎoshì'],
        answer: ['考试/kǎoshì'],
      },
      {
        stageTranslation: '~전에',
        cards: ['前/qián'],
        answer: ['前/qián'],
      },
      {
        stageTranslation: '시험 전에',
        cards: ['考试/kǎoshì', '前/qián'],
        answer: ['考试/kǎoshì', '前/qián'],
      },
      {
        stageTranslation: '시험 전에 긴장되니?',
        cards: [
          '你/nǐ',
          '考试/kǎoshì',
          '前/qián',
          '会/huì',
          '紧张/jǐnzhāng',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '考试/kǎoshì',
          '前/qián',
          '会/huì',
          '紧张/jǐnzhāng',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  // Day 6 문장들 (51-60)
  {
    translation: '어떤 음악을 좋아하니?',
    stages: [
      {
        stageTranslation: '음악',
        cards: ['音乐/yīnyuè'],
        answer: ['音乐/yīnyuè'],
      },
      {
        stageTranslation: '좋아하다',
        cards: ['喜欢/xǐhuan'],
        answer: ['喜欢/xǐhuan'],
      },
      {
        stageTranslation: '음악을 좋아하다',
        cards: ['喜欢/xǐhuan', '音乐/yīnyuè'],
        answer: ['喜欢/xǐhuan', '音乐/yīnyuè'],
      },
      {
        stageTranslation: '어떤',
        cards: ['什么/shénme'],
        answer: ['什么/shénme'],
      },
      {
        stageTranslation: '어떤 음악',
        cards: ['什么/shénme', '音乐/yīnyuè'],
        answer: ['什么/shénme', '音乐/yīnyuè'],
      },
      {
        stageTranslation: '어떤 음악을 좋아하니?',
        cards: ['你/nǐ', '喜欢/xǐhuan', '什么/shénme', '音乐/yīnyuè', '？/'],
        answer: ['你/nǐ', '喜欢/xǐhuan', '什么/shénme', '音乐/yīnyuè', '？/'],
      },
    ],
  },
  {
    translation: '나는 중국 전통 음악을 좋아한다',
    stages: [
      {
        stageTranslation: '중국',
        cards: ['中国/zhōngguó'],
        answer: ['中国/zhōngguó'],
      },
      {
        stageTranslation: '전통의',
        cards: ['传统/chuántǒng', '的/de'],
        answer: ['传统/chuántǒng', '的/de'],
      },
      {
        stageTranslation: '중국 전통 음악',
        cards: ['中国/zhōngguó', '传统/chuántǒng', '的/de', '音乐/yīnyuè'],
        answer: ['中国/zhōngguó', '传统/chuántǒng', '的/de', '音乐/yīnyuè'],
      },
      {
        stageTranslation: '나는 중국 전통 음악을 좋아한다',
        cards: [
          '我/wǒ',
          '喜欢/xǐhuan',
          '中国/zhōngguó',
          '传统/chuántǒng',
          '的/de',
          '音乐/yīnyuè',
          '。/',
        ],
        answer: [
          '我/wǒ',
          '喜欢/xǐhuan',
          '中国/zhōngguó',
          '传统/chuántǒng',
          '的/de',
          '音乐/yīnyuè',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '나의 취미는 여행이다',
    stages: [
      {
        stageTranslation: '취미',
        cards: ['爱好/àihào'],
        answer: ['爱好/àihào'],
      },
      {
        stageTranslation: '나의 취미',
        cards: ['我/wǒ', '的/de', '爱好/àihào'],
        answer: ['我/wǒ', '的/de', '爱好/àihào'],
      },
      {
        stageTranslation: '~이다',
        cards: ['是/shì'],
        answer: ['是/shì'],
      },
      {
        stageTranslation: '여행',
        cards: ['旅游/lǚyóu'],
        answer: ['旅游/lǚyóu'],
      },
      {
        stageTranslation: '나의 취미는 여행이다',
        cards: ['我/wǒ', '的/de', '爱好/àihào', '是/shì', '旅游/lǚyóu', '。/'],
        answer: ['我/wǒ', '的/de', '爱好/àihào', '是/shì', '旅游/lǚyóu', '。/'],
      },
    ],
  },
  {
    translation: '무슨 요일에 시간이 있니?',
    stages: [
      {
        stageTranslation: '요일',
        cards: ['星期/xīngqī'],
        answer: ['星期/xīngqī'],
      },
      {
        stageTranslation: '무슨',
        cards: ['哪/nǎ', '个/gè'],
        answer: ['哪/nǎ', '个/gè'],
      },
      {
        stageTranslation: '무슨 요일',
        cards: ['哪/nǎ', '个/gè', '星期/xīngqī'],
        answer: ['哪/nǎ', '个/gè', '星期/xīngqī'],
      },
      {
        stageTranslation: '시간이 있다',
        cards: ['有/yǒu', '时间/shíjiān'],
        answer: ['有/yǒu', '时间/shíjiān'],
      },
      {
        stageTranslation: '무슨 요일에 시간이 있니?',
        cards: [
          '你/nǐ',
          '哪/nǎ',
          '个/gè',
          '星期/xīngqī',
          '有/yǒu',
          '时间/shíjiān',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '哪/nǎ',
          '个/gè',
          '星期/xīngqī',
          '有/yǒu',
          '时间/shíjiān',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이번 주말에 뭐 할 거야?',
    stages: [
      {
        stageTranslation: '주말',
        cards: ['周末/zhōumò'],
        answer: ['周末/zhōumò'],
      },
      {
        stageTranslation: '이번',
        cards: ['这个/zhè gè'],
        answer: ['这个/zhè gè'],
      },
      {
        stageTranslation: '이번 주말',
        cards: ['这个/zhè gè', '周末/zhōumò'],
        answer: ['这个/zhè gè', '周末/zhōumò'],
      },
      {
        stageTranslation: '~할 것이다',
        cards: ['要/yào'],
        answer: ['要/yào'],
      },
      {
        stageTranslation: '하다',
        cards: ['做/zuò'],
        answer: ['做/zuò'],
      },
      {
        stageTranslation: '~을 할 것이다',
        cards: ['要/yào', '做/zuò'],
        answer: ['要/yào', '做/zuò'],
      },
      {
        stageTranslation: '무엇을',
        cards: ['什么/shénme'],
        answer: ['什么/shénme'],
      },
      {
        stageTranslation: '이번 주말에 뭐 할 거야?',
        cards: [
          '这个/zhè gè',
          '周末/zhōumò',
          '你/nǐ',
          '要/yào',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
        answer: [
          '这个/zhè gè',
          '周末/zhōumò',
          '你/nǐ',
          '要/yào',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '내일 비가 올 것 같니?',
    stages: [
      {
        stageTranslation: '내일',
        cards: ['明天/míngtiān'],
        answer: ['明天/míngtiān'],
      },
      {
        stageTranslation: '비',
        cards: ['雨/yǔ'],
        answer: ['雨/yǔ'],
      },
      {
        stageTranslation: '내리다',
        cards: ['下/xià'],
        answer: ['下/xià'],
      },
      {
        stageTranslation: '비가 내리다',
        cards: ['下/xià', '雨/yǔ'],
        answer: ['下/xià', '雨/yǔ'],
      },
      {
        stageTranslation: '~같다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '내일 비가 올 것 같니?',
        cards: ['明天/míngtiān', '会/huì', '下/xià', '雨/yǔ', '吗/ma', '？/'],
        answer: ['明天/míngtiān', '会/huì', '下/xià', '雨/yǔ', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '이것을 네가 할 수 있니?',
    stages: [
      {
        stageTranslation: '이것',
        cards: ['这个/zhège'],
        answer: ['这个/zhège'],
      },
      {
        stageTranslation: '할 수 있다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '하다',
        cards: ['做/zuò'],
        answer: ['做/zuò'],
      },
      {
        stageTranslation: '할 수 있다',
        cards: ['会/huì', '做/zuò'],
        answer: ['会/huì', '做/zuò'],
      },
      {
        stageTranslation: '이것을 할 수 있다',
        cards: ['会/huì', '做/zuò', '这个/zhège'],
        answer: ['会/huì', '做/zuò', '这个/zhège'],
      },
      {
        stageTranslation: '이것을 네가 할 수 있니?',
        cards: ['你/nǐ', '会/huì', '做/zuò', '这个/zhège', '吗/ma', '？/'],
        answer: ['你/nǐ', '会/huì', '做/zuò', '这个/zhège', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '영화 티켓 두 장이요',
    stages: [
      {
        stageTranslation: '영화',
        cards: ['电影/diànyǐng'],
        answer: ['电影/diànyǐng'],
      },
      {
        stageTranslation: '티켓',
        cards: ['票/piào'],
        answer: ['票/piào'],
      },
      {
        stageTranslation: '영화 티켓',
        cards: ['电影/diànyǐng', '票/piào'],
        answer: ['电影/diànyǐng', '票/piào'],
      },
      {
        stageTranslation: '두',
        cards: ['两/liǎng'],
        answer: ['两/liǎng'],
      },
      {
        stageTranslation: '장',
        cards: ['张/zhāng'],
        answer: ['张/zhāng'],
      },
      {
        stageTranslation: '두 장',
        cards: ['两/liǎng', '张/zhāng'],
        answer: ['两/liǎng', '张/zhāng'],
      },
      {
        stageTranslation: '영화 티켓 두 장이요',
        cards: [
          '请/qǐng',
          '给/gěi',
          '我/wǒ',
          '两/liǎng',
          '张/zhāng',
          '电影/diànyǐng',
          '票/piào',
          '。/',
        ],
        answer: [
          '请/qǐng',
          '给/gěi',
          '我/wǒ',
          '两/liǎng',
          '张/zhāng',
          '电影/diànyǐng',
          '票/piào',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '이 책이 누구의 것인가요?',
    stages: [
      {
        stageTranslation: '책',
        cards: ['书/shū'],
        answer: ['书/shū'],
      },
      {
        stageTranslation: '이 책',
        cards: ['这/zhè', '本/běn', '书/shū'],
        answer: ['这/zhè', '本/běn', '书/shū'],
      },
      {
        stageTranslation: '~의 것이다',
        cards: ['是/shì', '的/de'],
        answer: ['是/shì', '的/de'],
      },
      {
        stageTranslation: '누구',
        cards: ['谁/shuí'],
        answer: ['谁/shuí'],
      },
      {
        stageTranslation: '누구의 것이다',
        cards: ['是/shì', '谁/shuí', '的/de'],
        answer: ['是/shì', '谁/shuí', '的/de'],
      },
      {
        stageTranslation: '이 책이 누구의 것인가요?',
        cards: [
          '这/zhè',
          '本/běn',
          '书/shū',
          '是/shì',
          '谁/shuí',
          '的/de',
          '？/',
        ],
        answer: [
          '这/zhè',
          '本/běn',
          '书/shū',
          '是/shì',
          '谁/shuí',
          '的/de',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이 식당은 손님이 너무 많다',
    stages: [
      {
        stageTranslation: '식당',
        cards: ['饭馆/fànguǎn'],
        answer: ['饭馆/fànguǎn'],
      },
      {
        stageTranslation: '이 식당',
        cards: ['这个/zhège', '饭馆/fànguǎn'],
        answer: ['这个/zhège', '饭馆/fànguǎn'],
      },
      {
        stageTranslation: '손님',
        cards: ['客人/kèrén'],
        answer: ['客人/kèrén'],
      },
      {
        stageTranslation: '너무 많다',
        cards: ['太/tài', '多/duō', '了/le'],
        answer: ['太/tài', '多/duō', '了/le'],
      },
      {
        stageTranslation: '손님이 너무 많다',
        cards: ['客人/kèrén', '太/tài', '多/duō', '了/le'],
        answer: ['客人/kèrén', '太/tài', '多/duō', '了/le'],
      },
      {
        stageTranslation: '이 식당은 손님이 너무 많다',
        cards: [
          '这个/zhège',
          '饭馆/fànguǎn',
          '客人/kèrén',
          '太/tài',
          '多/duō',
          '了/le',
          '。/',
        ],
        answer: [
          '这个/zhège',
          '饭馆/fànguǎn',
          '客人/kèrén',
          '太/tài',
          '多/duō',
          '了/le',
          '。/',
        ],
      },
    ],
  },
  // Day 7 문장들 (61-70)
  {
    translation: '왜 중국어를 배우기 시작했니?',
    stages: [
      {
        stageTranslation: '왜',
        cards: ['为什么/wèishénme'],
        answer: ['为什么/wèishénme'],
      },
      {
        stageTranslation: '배우다',
        cards: ['学习/xuéxí'],
        answer: ['学习/xuéxí'],
      },
      {
        stageTranslation: '중국어',
        cards: ['汉语/hànyǔ'],
        answer: ['汉语/hànyǔ'],
      },
      {
        stageTranslation: '중국어를 배우다',
        cards: ['学习/xuéxí', '汉语/hànyǔ'],
        answer: ['学习/xuéxí', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '시작하다',
        cards: ['开始/kāishǐ'],
        answer: ['开始/kāishǐ'],
      },
      {
        stageTranslation: '왜 중국어를 배우기 시작했니?',
        cards: [
          '你/nǐ',
          '为什么/wèishénme',
          '开始/kāishǐ',
          '学习/xuéxí',
          '汉语/hànyǔ',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '为什么/wèishénme',
          '开始/kāishǐ',
          '学习/xuéxí',
          '汉语/hànyǔ',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '나는 중국 영화를 좋아해서 중국어를 배우기 시작했다',
    stages: [
      {
        stageTranslation: '중국',
        cards: ['中国/zhōngguó'],
        answer: ['中国/zhōngguó'],
      },
      {
        stageTranslation: '영화',
        cards: ['电影/diànyǐng'],
        answer: ['电影/diànyǐng'],
      },
      {
        stageTranslation: '중국 영화',
        cards: ['中国/zhōngguó', '电影/diànyǐng'],
        answer: ['中国/zhōngguó', '电影/diànyǐng'],
      },
      {
        stageTranslation: '좋아하다',
        cards: ['喜欢/xǐhuan'],
        answer: ['喜欢/xǐhuan'],
      },
      {
        stageTranslation: '중국 영화를 좋아하다',
        cards: ['喜欢/xǐhuan', '中国/zhōngguó', '电影/diànyǐng'],
        answer: ['喜欢/xǐhuan', '中国/zhōngguó', '电影/diànyǐng'],
      },
      {
        stageTranslation: '~해서',
        cards: ['因为/yīnwèi'],
        answer: ['因为/yīnwèi'],
      },
      {
        stageTranslation: '중국 영화를 좋아해서',
        cards: ['因为/yīnwèi', '喜欢/xǐhuan', '中国/zhōngguó', '电影/diànyǐng'],
        answer: [
          '因为/yīnwèi',
          '喜欢/xǐhuan',
          '中国/zhōngguó',
          '电影/diànyǐng',
        ],
      },
      {
        stageTranslation: '나는 중국 영화를 좋아해서 중국어를 배우기 시작했다',
        cards: [
          '我/wǒ',
          '因为/yīnwèi',
          '喜欢/xǐhuan',
          '中国/zhōngguó',
          '电影/diànyǐng',
          '，/',
          '所以/suǒyǐ',
          '开始/kāishǐ',
          '学习/xuéxí',
          '汉语/hànyǔ',
          '。/',
        ],
        answer: [
          '我/wǒ',
          '因为/yīnwèi',
          '喜欢/xǐhuan',
          '中国/zhōngguó',
          '电影/diànyǐng',
          '，/',
          '所以/suǒyǐ',
          '开始/kāishǐ',
          '学习/xuéxí',
          '汉语/hànyǔ',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '북경의 겨울은 춥다',
    stages: [
      {
        stageTranslation: '북경',
        cards: ['北京/běijīng'],
        answer: ['北京/běijīng'],
      },
      {
        stageTranslation: '북경의',
        cards: ['北京/běijīng', '的/de'],
        answer: ['北京/běijīng', '的/de'],
      },
      {
        stageTranslation: '겨울',
        cards: ['冬天/dōngtiān'],
        answer: ['冬天/dōngtiān'],
      },
      {
        stageTranslation: '북경의 겨울',
        cards: ['北京/běijīng', '的/de', '冬天/dōngtiān'],
        answer: ['北京/běijīng', '的/de', '冬天/dōngtiān'],
      },
      {
        stageTranslation: '춥다',
        cards: ['冷/lěng'],
        answer: ['冷/lěng'],
      },
      {
        stageTranslation: '북경의 겨울은 춥다',
        cards: [
          '北京/běijīng',
          '的/de',
          '冬天/dōngtiān',
          '很/hěn',
          '冷/lěng',
          '。/',
        ],
        answer: [
          '北京/běijīng',
          '的/de',
          '冬天/dōngtiān',
          '很/hěn',
          '冷/lěng',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '이 가게의 물건들은 싸다',
    stages: [
      {
        stageTranslation: '이',
        cards: ['这/zhè'],
        answer: ['这/zhè'],
      },
      {
        stageTranslation: '가게',
        cards: ['家/jiā', '商店/shāngdiàn'],
        answer: ['家/jiā', '商店/shāngdiàn'],
      },
      {
        stageTranslation: '이 가게',
        cards: ['这/zhè', '家/jiā', '商店/shāngdiàn'],
        answer: ['这/zhè', '家/jiā', '商店/shāngdiàn'],
      },
      {
        stageTranslation: '물건',
        cards: ['东西/dōngxi'],
        answer: ['东西/dōngxi'],
      },
      {
        stageTranslation: '이 가게의 물건들',
        cards: ['这/zhè', '家/jiā', '商店/shāngdiàn', '的/de', '东西/dōngxi'],
        answer: ['这/zhè', '家/jiā', '商店/shāngdiàn', '的/de', '东西/dōngxi'],
      },
      {
        stageTranslation: '싸다',
        cards: ['便宜/piányi'],
        answer: ['便宜/piányi'],
      },
      {
        stageTranslation: '이 가게의 물건들은 싸다',
        cards: [
          '这/zhè',
          '家/jiā',
          '商店/shāngdiàn',
          '的/de',
          '东西/dōngxi',
          '很/hěn',
          '便宜/piányi',
          '。/',
        ],
        answer: [
          '这/zhè',
          '家/jiā',
          '商店/shāngdiàn',
          '的/de',
          '东西/dōngxi',
          '很/hěn',
          '便宜/piányi',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '서둘러! 늦겠다',
    stages: [
      {
        stageTranslation: '서둘러',
        cards: ['快/kuài', '点儿/diǎnr'],
        answer: ['快/kuài', '点儿/diǎnr'],
      },
      {
        stageTranslation: '늦다',
        cards: ['迟到/chídào'],
        answer: ['迟到/chídào'],
      },
      {
        stageTranslation: '~겠다',
        cards: ['要/yào'],
        answer: ['要/yào'],
      },
      {
        stageTranslation: '늦겠다',
        cards: ['要/yào', '迟到/chídào', '了/le'],
        answer: ['要/yào', '迟到/chídào', '了/le'],
      },
      {
        stageTranslation: '서둘러! 늦겠다',
        cards: [
          '快/kuài',
          '点儿/diǎnr',
          '！/',
          '要/yào',
          '迟到/chídào',
          '了/le',
          '！/',
        ],
        answer: [
          '快/kuài',
          '点儿/diǎnr',
          '！/',
          '要/yào',
          '迟到/chídào',
          '了/le',
          '！/',
        ],
      },
    ],
  },
  {
    translation: '이 문장이 무슨 뜻이니?',
    stages: [
      {
        stageTranslation: '문장',
        cards: ['句子/jùzi'],
        answer: ['句子/jùzi'],
      },
      {
        stageTranslation: '이 문장',
        cards: ['这个/zhège', '句子/jùzi'],
        answer: ['这个/zhège', '句子/jùzi'],
      },
      {
        stageTranslation: '무슨 뜻',
        cards: ['什么/shénme', '意思/yìsi'],
        answer: ['什么/shénme', '意思/yìsi'],
      },
      {
        stageTranslation: '이 문장이 무슨 뜻이니?',
        cards: [
          '这个/zhège',
          '句子/jùzi',
          '是/shì',
          '什么/shénme',
          '意思/yìsi',
          '？/',
        ],
        answer: [
          '这个/zhège',
          '句子/jùzi',
          '是/shì',
          '什么/shénme',
          '意思/yìsi',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '그녀는 한국어를 할 수 있다',
    stages: [
      {
        stageTranslation: '그녀',
        cards: ['她/tā'],
        answer: ['她/tā'],
      },
      {
        stageTranslation: '할 줄 알다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '한국어',
        cards: ['韩语/hányǔ'],
        answer: ['韩语/hányǔ'],
      },
      {
        stageTranslation: '한국어를 할 줄 알다',
        cards: ['会/huì', '韩语/hányǔ'],
        answer: ['会/huì', '韩语/hányǔ'],
      },
      {
        stageTranslation: '그녀는 한국어를 할 수 있다',
        cards: ['她/tā', '会/huì', '韩语/hányǔ', '。/'],
        answer: ['她/tā', '会/huì', '韩语/hányǔ', '。/'],
      },
    ],
  },
  {
    translation: '그녀는 한국어뿐만 아니라 일본어도 할 수 있다',
    stages: [
      {
        stageTranslation: '뿐만 아니라 ~도',
        cards: ['不但/bùdàn', '而且/érqiě'],
        answer: ['不但/bùdàn', '而且/érqiě'],
      },
      {
        stageTranslation: '일본어',
        cards: ['日语/rìyǔ'],
        answer: ['日语/rìyǔ'],
      },
      {
        stageTranslation: '일본어를 할 줄 알다',
        cards: ['会/huì', '日语/rìyǔ'],
        answer: ['会/huì', '日语/rìyǔ'],
      },
      {
        stageTranslation: '한국어뿐만 아니라 일본어도 할 줄 알다',
        cards: [
          '不但/bùdàn',
          '会/huì',
          '韩语/hányǔ',
          '，/',
          '而且/érqiě',
          '会/huì',
          '日语/rìyǔ',
        ],
        answer: [
          '不但/bùdàn',
          '会/huì',
          '韩语/hányǔ',
          '，/',
          '而且/érqiě',
          '会/huì',
          '日语/rìyǔ',
        ],
      },
      {
        stageTranslation: '그녀는 한국어뿐만 아니라 일본어도 할 수 있다',
        cards: [
          '她/tā',
          '不但/bùdàn',
          '会/huì',
          '韩语/hányǔ',
          '，/',
          '而且/érqiě',
          '会/huì',
          '日语/rìyǔ',
          '。/',
        ],
        answer: [
          '她/tā',
          '不但/bùdàn',
          '会/huì',
          '韩语/hányǔ',
          '，/',
          '而且/érqiě',
          '会/huì',
          '日语/rìyǔ',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '이 소포는 누구한테 보내는 거예요?',
    stages: [
      {
        stageTranslation: '소포',
        cards: ['包裹/bāoguǒ'],
        answer: ['包裹/bāoguǒ'],
      },
      {
        stageTranslation: '이 소포',
        cards: ['这个/zhège', '包裹/bāoguǒ'],
        answer: ['这个/zhège', '包裹/bāoguǒ'],
      },
      {
        stageTranslation: '누구',
        cards: ['谁/shuí'],
        answer: ['谁/shuí'],
      },
      {
        stageTranslation: '~에게/한테',
        cards: ['给/gěi'],
        answer: ['给/gěi'],
      },
      {
        stageTranslation: '누구한테',
        cards: ['给/gěi', '谁/shuí'],
        answer: ['给/gěi', '谁/shuí'],
      },
      {
        stageTranslation: '보내다',
        cards: ['寄/jì'],
        answer: ['寄/jì'],
      },
      {
        stageTranslation: '~할 것이다',
        cards: ['要/yào'],
        answer: ['要/yào'],
      },
      {
        stageTranslation: '보낼 것이다',
        cards: ['要/yào', '寄/jì'],
        answer: ['要/yào', '寄/jì'],
      },
      {
        stageTranslation: '이 소포는 누구한테 보내는 거예요?',
        cards: [
          '这个/zhège',
          '包裹/bāoguǒ',
          '要/yào',
          '寄/jì',
          '给/gěi',
          '谁/shuí',
          '？/',
        ],
        answer: [
          '这个/zhège',
          '包裹/bāoguǒ',
          '要/yào',
          '寄/jì',
          '给/gěi',
          '谁/shuí',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '중국어 공부하기가 어렵니?',
    stages: [
      {
        stageTranslation: '중국어',
        cards: ['汉语/hànyǔ'],
        answer: ['汉语/hànyǔ'],
      },
      {
        stageTranslation: '공부하다',
        cards: ['学习/xuéxí'],
        answer: ['学习/xuéxí'],
      },
      {
        stageTranslation: '중국어 공부하다',
        cards: ['学习/xuéxí', '汉语/hànyǔ'],
        answer: ['学习/xuéxí', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '어렵다',
        cards: ['难/nán'],
        answer: ['难/nán'],
      },
      {
        stageTranslation: '중국어 공부하기가 어렵니?',
        cards: ['学习/xuéxí', '汉语/hànyǔ', '难/nán', '吗/ma', '？/'],
        answer: ['学习/xuéxí', '汉语/hànyǔ', '难/nán', '吗/ma', '？/'],
      },
    ],
  },
  // Day 8 문장들 (71-80)
  {
    translation: '오랜만이다! 잘 지냈니?',
    stages: [
      {
        stageTranslation: '오랜만이다',
        cards: ['好久不见/hǎojiǔbújiàn'],
        answer: ['好久不见/hǎojiǔbújiàn'],
      },
      {
        stageTranslation: '잘 지내다',
        cards: ['过得/guò de', '好/hǎo'],
        answer: ['过得/guò de', '好/hǎo'],
      },
      {
        stageTranslation: '잘 지냈니?',
        cards: ['过得/guò de', '好/hǎo', '吗/ma'],
        answer: ['过得/guò de', '好/hǎo', '吗/ma'],
      },
      {
        stageTranslation: '오랜만이다! 잘 지냈니?',
        cards: [
          '好久不见/hǎojiǔbújiàn',
          '！/',
          '你/nǐ',
          '过得/guò de',
          '好/hǎo',
          '吗/ma',
          '？/',
        ],
        answer: [
          '好久不见/hǎojiǔbújiàn',
          '！/',
          '你/nǐ',
          '过得/guò de',
          '好/hǎo',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '나는 이번 토요일에 결혼해',
    stages: [
      {
        stageTranslation: '결혼하다',
        cards: ['结婚/jiéhūn'],
        answer: ['结婚/jiéhūn'],
      },
      {
        stageTranslation: '이번',
        cards: ['这个/zhège'],
        answer: ['这个/zhège'],
      },
      {
        stageTranslation: '토요일',
        cards: ['星期六/xīngqīliù'],
        answer: ['星期六/xīngqīliù'],
      },
      {
        stageTranslation: '이번 토요일',
        cards: ['这个/zhège', '星期六/xīngqīliù'],
        answer: ['这个/zhège', '星期六/xīngqīliù'],
      },
      {
        stageTranslation: '~에',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '이번 토요일에',
        cards: ['在/zài', '这个/zhège', '星期六/xīngqīliù'],
        answer: ['在/zài', '这个/zhège', '星期六/xīngqīliù'],
      },
      {
        stageTranslation: '나는 이번 토요일에 결혼해',
        cards: [
          '我/wǒ',
          '在/zài',
          '这个/zhège',
          '星期六/xīngqīliù',
          '结婚/jiéhūn',
          '。/',
        ],
        answer: [
          '我/wǒ',
          '在/zài',
          '这个/zhège',
          '星期六/xīngqīliù',
          '结婚/jiéhūn',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '축하해! 너의 결혼을 축하해!',
    stages: [
      {
        stageTranslation: '축하하다',
        cards: ['祝贺/zhùhè'],
        answer: ['祝贺/zhùhè'],
      },
      {
        stageTranslation: '너를 축하하다',
        cards: ['祝贺/zhùhè', '你/nǐ'],
        answer: ['祝贺/zhùhè', '你/nǐ'],
      },
      {
        stageTranslation: '결혼',
        cards: ['结婚/jiéhūn'],
        answer: ['结婚/jiéhūn'],
      },
      {
        stageTranslation: '너의 결혼',
        cards: ['你/nǐ', '的/de', '结婚/jiéhūn'],
        answer: ['你/nǐ', '的/de', '结婚/jiéhūn'],
      },
      {
        stageTranslation: '너의 결혼을 축하하다',
        cards: ['祝贺/zhùhè', '你/nǐ', '的/de', '结婚/jiéhūn'],
        answer: ['祝贺/zhùhè', '你/nǐ', '的/de', '结婚/jiéhūn'],
      },
      {
        stageTranslation: '축하해! 너의 결혼을 축하해!',
        cards: [
          '恭喜/gōngxǐ',
          '！/',
          '祝贺/zhùhè',
          '你/nǐ',
          '的/de',
          '结婚/jiéhūn',
          '！/',
        ],
        answer: [
          '恭喜/gōngxǐ',
          '！/',
          '祝贺/zhùhè',
          '你/nǐ',
          '的/de',
          '结婚/jiéhūn',
          '！/',
        ],
      },
    ],
  },
  {
    translation: '나는 그를 도와주고 싶다',
    stages: [
      {
        stageTranslation: '돕다',
        cards: ['帮助/bāngzhù'],
        answer: ['帮助/bāngzhù'],
      },
      {
        stageTranslation: '그를 돕다',
        cards: ['帮助/bāngzhù', '他/tā'],
        answer: ['帮助/bāngzhù', '他/tā'],
      },
      {
        stageTranslation: '~하고 싶다',
        cards: ['想/xiǎng'],
        answer: ['想/xiǎng'],
      },
      {
        stageTranslation: '그를 돕고 싶다',
        cards: ['想/xiǎng', '帮助/bāngzhù', '他/tā'],
        answer: ['想/xiǎng', '帮助/bāngzhù', '他/tā'],
      },
      {
        stageTranslation: '나는 그를 도와주고 싶다',
        cards: ['我/wǒ', '想/xiǎng', '帮助/bāngzhù', '他/tā', '。/'],
        answer: ['我/wǒ', '想/xiǎng', '帮助/bāngzhù', '他/tā', '。/'],
      },
    ],
  },
  {
    translation: '비가 내리고 있으니 우산을 가져가',
    stages: [
      {
        stageTranslation: '비',
        cards: ['雨/yǔ'],
        answer: ['雨/yǔ'],
      },
      {
        stageTranslation: '내리다',
        cards: ['下/xià'],
        answer: ['下/xià'],
      },
      {
        stageTranslation: '비가 내리다',
        cards: ['下/xià', '雨/yǔ'],
        answer: ['下/xià', '雨/yǔ'],
      },
      {
        stageTranslation: '~하고 있다',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '비가 내리고 있다',
        cards: ['在/zài', '下/xià', '雨/yǔ'],
        answer: ['在/zài', '下/xià', '雨/yǔ'],
      },
      {
        stageTranslation: '우산',
        cards: ['雨伞/yǔsǎn'],
        answer: ['雨伞/yǔsǎn'],
      },
      {
        stageTranslation: '가져가다',
        cards: ['带/dài'],
        answer: ['带/dài'],
      },
      {
        stageTranslation: '우산을 가져가다',
        cards: ['带/dài', '雨伞/yǔsǎn'],
        answer: ['带/dài', '雨伞/yǔsǎn'],
      },
      {
        stageTranslation: '비가 내리고 있으니 우산을 가져가',
        cards: [
          '在/zài',
          '下/xià',
          '雨/yǔ',
          '，/',
          '请/qǐng',
          '带/dài',
          '雨伞/yǔsǎn',
          '。/',
        ],
        answer: [
          '在/zài',
          '下/xià',
          '雨/yǔ',
          '，/',
          '请/qǐng',
          '带/dài',
          '雨伞/yǔsǎn',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '오늘 오후에 뭐 해?',
    stages: [
      {
        stageTranslation: '오늘',
        cards: ['今天/jīntiān'],
        answer: ['今天/jīntiān'],
      },
      {
        stageTranslation: '오후',
        cards: ['下午/xiàwǔ'],
        answer: ['下午/xiàwǔ'],
      },
      {
        stageTranslation: '오늘 오후',
        cards: ['今天/jīntiān', '下午/xiàwǔ'],
        answer: ['今天/jīntiān', '下午/xiàwǔ'],
      },
      {
        stageTranslation: '하다',
        cards: ['做/zuò'],
        answer: ['做/zuò'],
      },
      {
        stageTranslation: '무엇을',
        cards: ['什么/shénme'],
        answer: ['什么/shénme'],
      },
      {
        stageTranslation: '무엇을 하다',
        cards: ['做/zuò', '什么/shénme'],
        answer: ['做/zuò', '什么/shénme'],
      },
      {
        stageTranslation: '오늘 오후에 뭐 해?',
        cards: [
          '今天/jīntiān',
          '下午/xiàwǔ',
          '你/nǐ',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
        answer: [
          '今天/jīntiān',
          '下午/xiàwǔ',
          '你/nǐ',
          '做/zuò',
          '什么/shénme',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이 옷이 너무 비싸다',
    stages: [
      {
        stageTranslation: '옷',
        cards: ['衣服/yīfu'],
        answer: ['衣服/yīfu'],
      },
      {
        stageTranslation: '이 옷',
        cards: ['这/zhè', '件/jiàn', '衣服/yīfu'],
        answer: ['这/zhè', '件/jiàn', '衣服/yīfu'],
      },
      {
        stageTranslation: '너무',
        cards: ['太/tài'],
        answer: ['太/tài'],
      },
      {
        stageTranslation: '비싸다',
        cards: ['贵/guì'],
        answer: ['贵/guì'],
      },
      {
        stageTranslation: '너무 비싸다',
        cards: ['太/tài', '贵/guì', '了/le'],
        answer: ['太/tài', '贵/guì', '了/le'],
      },
      {
        stageTranslation: '이 옷이 너무 비싸다',
        cards: [
          '这/zhè',
          '件/jiàn',
          '衣服/yīfu',
          '太/tài',
          '贵/guì',
          '了/le',
          '。/',
        ],
        answer: [
          '这/zhè',
          '件/jiàn',
          '衣服/yīfu',
          '太/tài',
          '贵/guì',
          '了/le',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '몇 살이에요?',
    stages: [
      {
        stageTranslation: '몇',
        cards: ['几/jǐ'],
        answer: ['几/jǐ'],
      },
      {
        stageTranslation: '살',
        cards: ['岁/suì'],
        answer: ['岁/suì'],
      },
      {
        stageTranslation: '몇 살',
        cards: ['几/jǐ', '岁/suì'],
        answer: ['几/jǐ', '岁/suì'],
      },
      {
        stageTranslation: '몇 살이에요?',
        cards: ['你/nǐ', '几/jǐ', '岁/suì', '？/'],
        answer: ['你/nǐ', '几/jǐ', '岁/suì', '？/'],
      },
    ],
  },
  {
    translation: '나는 스물한 살이야',
    stages: [
      {
        stageTranslation: '스물하나',
        cards: ['二十一/èrshíyī'],
        answer: ['二十一/èrshíyī'],
      },
      {
        stageTranslation: '스물한 살',
        cards: ['二十一/èrshíyī', '岁/suì'],
        answer: ['二十一/èrshíyī', '岁/suì'],
      },
      {
        stageTranslation: '나는 스물한 살이야',
        cards: ['我/wǒ', '二十一/èrshíyī', '岁/suì', '。/'],
        answer: ['我/wǒ', '二十一/èrshíyī', '岁/suì', '。/'],
      },
    ],
  },
  {
    translation: '어디에서 살아요?',
    stages: [
      {
        stageTranslation: '어디',
        cards: ['哪儿/nǎr'],
        answer: ['哪儿/nǎr'],
      },
      {
        stageTranslation: '~에서',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '어디에서',
        cards: ['在/zài', '哪儿/nǎr'],
        answer: ['在/zài', '哪儿/nǎr'],
      },
      {
        stageTranslation: '살다',
        cards: ['住/zhù'],
        answer: ['住/zhù'],
      },
      {
        stageTranslation: '어디에서 살아요?',
        cards: ['你/nǐ', '在/zài', '哪儿/nǎr', '住/zhù', '？/'],
        answer: ['你/nǐ', '在/zài', '哪儿/nǎr', '住/zhù', '？/'],
      },
    ],
  },
  // Day 9 문장들 (81-90)
  {
    translation: '서울은 대한민국의 수도이다',
    stages: [
      {
        stageTranslation: '서울',
        cards: ['首尔/shǒuěr'],
        answer: ['首尔/shǒuěr'],
      },
      {
        stageTranslation: '~이다',
        cards: ['是/shì'],
        answer: ['是/shì'],
      },
      {
        stageTranslation: '대한민국',
        cards: ['韩国/hánguó'],
        answer: ['韩国/hánguó'],
      },
      {
        stageTranslation: '대한민국의',
        cards: ['韩国/hánguó', '的/de'],
        answer: ['韩国/hánguó', '的/de'],
      },
      {
        stageTranslation: '수도',
        cards: ['首都/shǒudū'],
        answer: ['首都/shǒudū'],
      },
      {
        stageTranslation: '서울은 대한민국의 수도이다',
        cards: [
          '首尔/shǒuěr',
          '是/shì',
          '韩国/hánguó',
          '的/de',
          '首都/shǒudū',
          '。/',
        ],
        answer: [
          '首尔/shǒuěr',
          '是/shì',
          '韩国/hánguó',
          '的/de',
          '首都/shǒudū',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '그녀의 가방은 어디에 있니?',
    stages: [
      {
        stageTranslation: '그녀',
        cards: ['她/tā'],
        answer: ['她/tā'],
      },
      {
        stageTranslation: '그녀의',
        cards: ['她/tā', '的/de'],
        answer: ['她/tā', '的/de'],
      },
      {
        stageTranslation: '가방',
        cards: ['包/bāo'],
        answer: ['包/bāo'],
      },
      {
        stageTranslation: '그녀의 가방',
        cards: ['她/tā', '的/de', '包/bāo'],
        answer: ['她/tā', '的/de', '包/bāo'],
      },
      {
        stageTranslation: '어디',
        cards: ['哪儿/nǎr'],
        answer: ['哪儿/nǎr'],
      },
      {
        stageTranslation: '~에 있다',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '어디에 있다',
        cards: ['在/zài', '哪儿/nǎr'],
        answer: ['在/zài', '哪儿/nǎr'],
      },
      {
        stageTranslation: '그녀의 가방은 어디에 있니?',
        cards: ['她/tā', '的/de', '包/bāo', '在/zài', '哪儿/nǎr', '？/'],
        answer: ['她/tā', '的/de', '包/bāo', '在/zài', '哪儿/nǎr', '？/'],
      },
    ],
  },
  {
    translation: '그녀의 가방은 의자 위에 있다',
    stages: [
      {
        stageTranslation: '의자',
        cards: ['椅子/yǐzi'],
        answer: ['椅子/yǐzi'],
      },
      {
        stageTranslation: '위에',
        cards: ['上/shàng', '面/miàn'],
        answer: ['上/shàng', '面/miàn'],
      },
      {
        stageTranslation: '의자 위에',
        cards: ['椅子/yǐzi', '上/shàng', '面/miàn'],
        answer: ['椅子/yǐzi', '上/shàng', '面/miàn'],
      },
      {
        stageTranslation: '~에 있다',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '의자 위에 있다',
        cards: ['在/zài', '椅子/yǐzi', '上/shàng', '面/miàn'],
        answer: ['在/zài', '椅子/yǐzi', '上/shàng', '面/miàn'],
      },
      {
        stageTranslation: '그녀의 가방은 의자 위에 있다',
        cards: [
          '她/tā',
          '的/de',
          '包/bāo',
          '在/zài',
          '椅子/yǐzi',
          '上/shàng',
          '面/miàn',
          '。/',
        ],
        answer: [
          '她/tā',
          '的/de',
          '包/bāo',
          '在/zài',
          '椅子/yǐzi',
          '上/shàng',
          '面/miàn',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '몸이 좋지 않아 보인다',
    stages: [
      {
        stageTranslation: '몸',
        cards: ['身体/shēntǐ'],
        answer: ['身体/shēntǐ'],
      },
      {
        stageTranslation: '좋지 않다',
        cards: ['不/bù', '舒服/shūfu'],
        answer: ['不/bù', '舒服/shūfu'],
      },
      {
        stageTranslation: '몸이 좋지 않다',
        cards: ['身体/shēntǐ', '不/bù', '舒服/shūfu'],
        answer: ['身体/shēntǐ', '不/bù', '舒服/shūfu'],
      },
      {
        stageTranslation: '~인 것 같다',
        cards: ['好像/hǎoxiàng'],
        answer: ['好像/hǎoxiàng'],
      },
      {
        stageTranslation: '몸이 좋지 않아 보인다',
        cards: [
          '你/nǐ',
          '的/de',
          '身体/shēntǐ',
          '好像/hǎoxiàng',
          '不/bù',
          '舒服/shūfu',
          '。/',
        ],
        answer: [
          '你/nǐ',
          '的/de',
          '身体/shēntǐ',
          '好像/hǎoxiàng',
          '不/bù',
          '舒服/shūfu',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '왼쪽으로 가세요',
    stages: [
      {
        stageTranslation: '왼쪽',
        cards: ['左/zuǒ', '边/biān'],
        answer: ['左/zuǒ', '边/biān'],
      },
      {
        stageTranslation: '~쪽으로',
        cards: ['往/wǎng'],
        answer: ['往/wǎng'],
      },
      {
        stageTranslation: '왼쪽으로',
        cards: ['往/wǎng', '左/zuǒ', '边/biān'],
        answer: ['往/wǎng', '左/zuǒ', '边/biān'],
      },
      {
        stageTranslation: '가다',
        cards: ['走/zǒu'],
        answer: ['走/zǒu'],
      },
      {
        stageTranslation: '왼쪽으로 가세요',
        cards: ['请/qǐng', '往/wǎng', '左/zuǒ', '边/biān', '走/zǒu', '。/'],
        answer: ['请/qǐng', '往/wǎng', '左/zuǒ', '边/biān', '走/zǒu', '。/'],
      },
    ],
  },
  {
    translation: '오른쪽으로 가세요',
    stages: [
      {
        stageTranslation: '오른쪽',
        cards: ['右/yòu', '边/biān'],
        answer: ['右/yòu', '边/biān'],
      },
      {
        stageTranslation: '오른쪽으로',
        cards: ['往/wǎng', '右/yòu', '边/biān'],
        answer: ['往/wǎng', '右/yòu', '边/biān'],
      },
      {
        stageTranslation: '오른쪽으로 가세요',
        cards: ['请/qǐng', '往/wǎng', '右/yòu', '边/biān', '走/zǒu', '。/'],
        answer: ['请/qǐng', '往/wǎng', '右/yòu', '边/biān', '走/zǒu', '。/'],
      },
    ],
  },
  {
    translation: '직진하세요',
    stages: [
      {
        stageTranslation: '직진하다',
        cards: ['直/zhí', '走/zǒu'],
        answer: ['直/zhí', '走/zǒu'],
      },
      {
        stageTranslation: '직진하세요',
        cards: ['请/qǐng', '直/zhí', '走/zǒu', '。/'],
        answer: ['请/qǐng', '直/zhí', '走/zǒu', '。/'],
      },
    ],
  },
  {
    translation: '이번 주말에 시간이 있어?',
    stages: [
      {
        stageTranslation: '이번',
        cards: ['这个/zhège'],
        answer: ['这个/zhège'],
      },
      {
        stageTranslation: '주말',
        cards: ['周末/zhōumò'],
        answer: ['周末/zhōumò'],
      },
      {
        stageTranslation: '이번 주말',
        cards: ['这个/zhège', '周末/zhōumò'],
        answer: ['这个/zhège', '周末/zhōumò'],
      },
      {
        stageTranslation: '시간',
        cards: ['时间/shíjiān'],
        answer: ['时间/shíjiān'],
      },
      {
        stageTranslation: '시간이 있다',
        cards: ['有/yǒu', '时间/shíjiān'],
        answer: ['有/yǒu', '时间/shíjiān'],
      },
      {
        stageTranslation: '이번 주말에 시간이 있어?',
        cards: [
          '你/nǐ',
          '这个/zhège',
          '周末/zhōumò',
          '有/yǒu',
          '时间/shíjiān',
          '吗/ma',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '这个/zhège',
          '周末/zhōumò',
          '有/yǒu',
          '时间/shíjiān',
          '吗/ma',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이번 주말에 같이 영화 보러 갈래?',
    stages: [
      {
        stageTranslation: '함께',
        cards: ['一起/yìqǐ'],
        answer: ['一起/yìqǐ'],
      },
      {
        stageTranslation: '영화',
        cards: ['电影/diànyǐng'],
        answer: ['电影/diànyǐng'],
      },
      {
        stageTranslation: '보다',
        cards: ['看/kàn'],
        answer: ['看/kàn'],
      },
      {
        stageTranslation: '영화를 보다',
        cards: ['看/kàn', '电影/diànyǐng'],
        answer: ['看/kàn', '电影/diànyǐng'],
      },
      {
        stageTranslation: '~하러 가다',
        cards: ['去/qù'],
        answer: ['去/qù'],
      },
      {
        stageTranslation: '영화 보러 가다',
        cards: ['去/qù', '看/kàn', '电影/diànyǐng'],
        answer: ['去/qù', '看/kàn', '电影/diànyǐng'],
      },
      {
        stageTranslation: '~할래?',
        cards: ['要/yào', '不/bù', '要/yào'],
        answer: ['要/yào', '不/bù', '要/yào'],
      },
      {
        stageTranslation: '이번 주말에 같이 영화 보러 갈래?',
        cards: [
          '这个/zhège',
          '周末/zhōumò',
          '你/nǐ',
          '要/yào',
          '不/bù',
          '要/yào',
          '一起/yìqǐ',
          '去/qù',
          '看/kàn',
          '电影/diànyǐng',
          '？/',
        ],
        answer: [
          '这个/zhège',
          '周末/zhōumò',
          '你/nǐ',
          '要/yào',
          '不/bù',
          '要/yào',
          '一起/yìqǐ',
          '去/qù',
          '看/kàn',
          '电影/diànyǐng',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '집에 몇 시에 도착할 거니?',
    stages: [
      {
        stageTranslation: '집',
        cards: ['家/jiā'],
        answer: ['家/jiā'],
      },
      {
        stageTranslation: '몇 시',
        cards: ['几/jǐ', '点/diǎn'],
        answer: ['几/jǐ', '点/diǎn'],
      },
      {
        stageTranslation: '~에',
        cards: ['在/zài'],
        answer: ['在/zài'],
      },
      {
        stageTranslation: '몇 시에',
        cards: ['几/jǐ', '点/diǎn'],
        answer: ['几/jǐ', '点/diǎn'],
      },
      {
        stageTranslation: '도착하다',
        cards: ['到/dào'],
        answer: ['到/dào'],
      },
      {
        stageTranslation: '집에 도착하다',
        cards: ['到/dào', '家/jiā'],
        answer: ['到/dào', '家/jiā'],
      },
      {
        stageTranslation: '~할 것이다',
        cards: ['会/huì'],
        answer: ['会/huì'],
      },
      {
        stageTranslation: '집에 몇 시에 도착할 거니?',
        cards: [
          '你/nǐ',
          '几/jǐ',
          '点/diǎn',
          '会/huì',
          '到/dào',
          '家/jiā',
          '？/',
        ],
        answer: [
          '你/nǐ',
          '几/jǐ',
          '点/diǎn',
          '会/huì',
          '到/dào',
          '家/jiā',
          '？/',
        ],
      },
    ],
  },
  // Day 10 문장들 (91-100)
  {
    translation: '나는 내일 아침 7시에 일어날 거야',
    stages: [
      {
        stageTranslation: '내일',
        cards: ['明天/míngtiān'],
        answer: ['明天/míngtiān'],
      },
      {
        stageTranslation: '아침',
        cards: ['早上/zǎoshang'],
        answer: ['早上/zǎoshang'],
      },
      {
        stageTranslation: '내일 아침',
        cards: ['明天/míngtiān', '早上/zǎoshang'],
        answer: ['明天/míngtiān', '早上/zǎoshang'],
      },
      {
        stageTranslation: '7시',
        cards: ['七/qī', '点/diǎn'],
        answer: ['七/qī', '点/diǎn'],
      },
      {
        stageTranslation: '내일 아침 7시',
        cards: ['明天/míngtiān', '早上/zǎoshang', '七/qī', '点/diǎn'],
        answer: ['明天/míngtiān', '早上/zǎoshang', '七/qī', '点/diǎn'],
      },
      {
        stageTranslation: '일어나다',
        cards: ['起床/qǐchuáng'],
        answer: ['起床/qǐchuáng'],
      },
      {
        stageTranslation: '~할 것이다',
        cards: ['要/yào'],
        answer: ['要/yào'],
      },
      {
        stageTranslation: '일어날 것이다',
        cards: ['要/yào', '起床/qǐchuáng'],
        answer: ['要/yào', '起床/qǐchuáng'],
      },
      {
        stageTranslation: '나는 내일 아침 7시에 일어날 거야',
        cards: [
          '我/wǒ',
          '明天/míngtiān',
          '早上/zǎoshang',
          '七/qī',
          '点/diǎn',
          '要/yào',
          '起床/qǐchuáng',
          '。/',
        ],
        answer: [
          '我/wǒ',
          '明天/míngtiān',
          '早上/zǎoshang',
          '七/qī',
          '点/diǎn',
          '要/yào',
          '起床/qǐchuáng',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '이 문제를 어떻게 풀어야 할까?',
    stages: [
      {
        stageTranslation: '문제',
        cards: ['问题/wèntí'],
        answer: ['问题/wèntí'],
      },
      {
        stageTranslation: '이 문제',
        cards: ['这个/zhège', '问题/wèntí'],
        answer: ['这个/zhège', '问题/wèntí'],
      },
      {
        stageTranslation: '어떻게',
        cards: ['怎么/zěnme'],
        answer: ['怎么/zěnme'],
      },
      {
        stageTranslation: '풀다',
        cards: ['解决/jiějué'],
        answer: ['解决/jiějué'],
      },
      {
        stageTranslation: '~해야 한다',
        cards: ['应该/yīnggāi'],
        answer: ['应该/yīnggāi'],
      },
      {
        stageTranslation: '이 문제를 어떻게 풀어야 할까?',
        cards: [
          '这个/zhège',
          '问题/wèntí',
          '应该/yīnggāi',
          '怎么/zěnme',
          '解决/jiějué',
          '？/',
        ],
        answer: [
          '这个/zhège',
          '问题/wèntí',
          '应该/yīnggāi',
          '怎么/zěnme',
          '解决/jiějué',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '이 단어는 어떻게 발음하나요?',
    stages: [
      {
        stageTranslation: '단어',
        cards: ['单词/dāncí'],
        answer: ['单词/dāncí'],
      },
      {
        stageTranslation: '이 단어',
        cards: ['这个/zhège', '单词/dāncí'],
        answer: ['这个/zhège', '单词/dāncí'],
      },
      {
        stageTranslation: '어떻게',
        cards: ['怎么/zěnme'],
        answer: ['怎么/zěnme'],
      },
      {
        stageTranslation: '발음하다',
        cards: ['发音/fāyīn'],
        answer: ['发音/fāyīn'],
      },
      {
        stageTranslation: '이 단어는 어떻게 발음하나요?',
        cards: ['这个/zhège', '单词/dāncí', '怎么/zěnme', '发音/fāyīn', '？/'],
        answer: ['这个/zhège', '单词/dāncí', '怎么/zěnme', '发音/fāyīn', '？/'],
      },
    ],
  },
  {
    translation: '이 문장을 중국어로 어떻게 말하나요?',
    stages: [
      {
        stageTranslation: '문장',
        cards: ['句子/jùzi'],
        answer: ['句子/jùzi'],
      },
      {
        stageTranslation: '이 문장',
        cards: ['这个/zhège', '句子/jùzi'],
        answer: ['这个/zhège', '句子/jùzi'],
      },
      {
        stageTranslation: '중국어',
        cards: ['汉语/hànyǔ'],
        answer: ['汉语/hànyǔ'],
      },
      {
        stageTranslation: '~로',
        cards: ['用/yòng'],
        answer: ['用/yòng'],
      },
      {
        stageTranslation: '중국어로',
        cards: ['用/yòng', '汉语/hànyǔ'],
        answer: ['用/yòng', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '어떻게',
        cards: ['怎么/zěnme'],
        answer: ['怎么/zěnme'],
      },
      {
        stageTranslation: '말하다',
        cards: ['说/shuō'],
        answer: ['说/shuō'],
      },
      {
        stageTranslation: '이 문장을 중국어로 어떻게 말하나요?',
        cards: [
          '这个/zhège',
          '句子/jùzi',
          '用/yòng',
          '汉语/hànyǔ',
          '怎么/zěnme',
          '说/shuō',
          '？/',
        ],
        answer: [
          '这个/zhège',
          '句子/jùzi',
          '用/yòng',
          '汉语/hànyǔ',
          '怎么/zěnme',
          '说/shuō',
          '？/',
        ],
      },
    ],
  },
  {
    translation: '중국어 공부하는 것이 재미있니?',
    stages: [
      {
        stageTranslation: '중국어',
        cards: ['汉语/hànyǔ'],
        answer: ['汉语/hànyǔ'],
      },
      {
        stageTranslation: '공부하다',
        cards: ['学习/xuéxí'],
        answer: ['学习/xuéxí'],
      },
      {
        stageTranslation: '중국어 공부하다',
        cards: ['学习/xuéxí', '汉语/hànyǔ'],
        answer: ['学习/xuéxí', '汉语/hànyǔ'],
      },
      {
        stageTranslation: '재미있다',
        cards: ['有意思/yǒuyìsi'],
        answer: ['有意思/yǒuyìsi'],
      },
      {
        stageTranslation: '중국어 공부하는 것이 재미있니?',
        cards: ['学习/xuéxí', '汉语/hànyǔ', '有意思/yǒuyìsi', '吗/ma', '？/'],
        answer: ['学习/xuéxí', '汉语/hànyǔ', '有意思/yǒuyìsi', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '중국어 공부하는 것이 매우 재미있어',
    stages: [
      {
        stageTranslation: '매우',
        cards: ['很/hěn'],
        answer: ['很/hěn'],
      },
      {
        stageTranslation: '매우 재미있다',
        cards: ['很/hěn', '有意思/yǒuyìsi'],
        answer: ['很/hěn', '有意思/yǒuyìsi'],
      },
      {
        stageTranslation: '중국어 공부하는 것이 매우 재미있어',
        cards: ['学习/xuéxí', '汉语/hànyǔ', '很/hěn', '有意思/yǒuyìsi', '。/'],
        answer: ['学习/xuéxí', '汉语/hànyǔ', '很/hěn', '有意思/yǒuyìsi', '。/'],
      },
    ],
  },
  {
    translation: '중국어 공부하는 것이 어렵지만 재미있어',
    stages: [
      {
        stageTranslation: '어렵다',
        cards: ['难/nán'],
        answer: ['难/nán'],
      },
      {
        stageTranslation: '~지만',
        cards: ['但是/dànshì'],
        answer: ['但是/dànshì'],
      },
      {
        stageTranslation: '어렵지만 재미있다',
        cards: ['难/nán', '，/', '但是/dànshì', '有意思/yǒuyìsi'],
        answer: ['难/nán', '，/', '但是/dànshì', '有意思/yǒuyìsi'],
      },
      {
        stageTranslation: '중국어 공부하는 것이 어렵지만 재미있어',
        cards: [
          '学习/xuéxí',
          '汉语/hànyǔ',
          '难/nán',
          '，/',
          '但是/dànshì',
          '有意思/yǒuyìsi',
          '。/',
        ],
        answer: [
          '学习/xuéxí',
          '汉语/hànyǔ',
          '难/nán',
          '，/',
          '但是/dànshì',
          '有意思/yǒuyìsi',
          '。/',
        ],
      },
    ],
  },
  {
    translation: '중국에 가 본 적이 있니?',
    stages: [
      {
        stageTranslation: '중국',
        cards: ['中国/zhōngguó'],
        answer: ['中国/zhōngguó'],
      },
      {
        stageTranslation: '가다',
        cards: ['去/qù'],
        answer: ['去/qù'],
      },
      {
        stageTranslation: '중국에 가다',
        cards: ['去/qù', '中国/zhōngguó'],
        answer: ['去/qù', '中国/zhōngguó'],
      },
      {
        stageTranslation: '~해 본 적이 있다',
        cards: ['过/guò'],
        answer: ['过/guò'],
      },
      {
        stageTranslation: '중국에 가 본 적이 있다',
        cards: ['去/qù', '过/guò', '中国/zhōngguó'],
        answer: ['去/qù', '过/guò', '中国/zhōngguó'],
      },
      {
        stageTranslation: '중국에 가 본 적이 있니?',
        cards: ['你/nǐ', '去/qù', '过/guò', '中国/zhōngguó', '吗/ma', '？/'],
        answer: ['你/nǐ', '去/qù', '过/guò', '中国/zhōngguó', '吗/ma', '？/'],
      },
    ],
  },
  {
    translation: '나는 중국에 가 본 적이 없어',
    stages: [
      {
        stageTranslation: '~해 본 적이 없다',
        cards: ['没/méi', '去/qù', '过/guò'],
        answer: ['没/méi', '去/qù', '过/guò'],
      },
      {
        stageTranslation: '중국에 가 본 적이 없다',
        cards: ['没/méi', '去/qù', '过/guò', '中国/zhōngguó'],
        answer: ['没/méi', '去/qù', '过/guò', '中国/zhōngguó'],
      },
      {
        stageTranslation: '나는 중국에 가 본 적이 없어',
        cards: ['我/wǒ', '没/méi', '去/qù', '过/guò', '中国/zhōngguó', '。/'],
        answer: ['我/wǒ', '没/méi', '去/qù', '过/guò', '中国/zhōngguó', '。/'],
      },
    ],
  },
  {
    translation: '나는 언젠가 중국에 가고 싶어',
    stages: [
      {
        stageTranslation: '언젠가',
        cards: ['有/yǒu', '一/yì', '天/tiān'],
        answer: ['有/yǒu', '一/yì', '天/tiān'],
      },
      {
        stageTranslation: '~하고 싶다',
        cards: ['想/xiǎng'],
        answer: ['想/xiǎng'],
      },
      {
        stageTranslation: '중국에 가고 싶다',
        cards: ['想/xiǎng', '去/qù', '中国/zhōngguó'],
        answer: ['想/xiǎng', '去/qù', '中国/zhōngguó'],
      },
      {
        stageTranslation: '나는 언젠가 중국에 가고 싶어',
        cards: [
          '我/wǒ',
          '有/yǒu',
          '一/yì',
          '天/tiān',
          '想/xiǎng',
          '去/qù',
          '中国/zhōngguó',
          '。/',
        ],
        answer: [
          '我/wǒ',
          '有/yǒu',
          '一/yì',
          '天/tiān',
          '想/xiǎng',
          '去/qù',
          '中国/zhōngguó',
          '。/',
        ],
      },
    ],
  },
];
