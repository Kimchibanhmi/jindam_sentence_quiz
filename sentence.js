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
        stageTranslation: '어제의 경기, 너는 봤니?',
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
];
