export interface Character {
  id: string;
  name: string;
  koreanName: string;
  age: number;
  height: string;
  mbti: string;
  role: string;
  world: {
    workTitle: string;
    era: string;
    dimension: string;
  };
  keywords: string[];
  quote: string;
  fear: string;
  desire: string;
  ability: string;
  specialFeature?: string;
  likes: string[];
  dislikes: string[];
  romance: string;
  hobbies: string[];
  habit: string;
  howToApproach: string;
  portraitSlot: string;
  bannerSlot: string;
}

export interface DimensionWorld {
  id: string;
  code: string;
  era: string;
  name: string;
  characters: string[];
  description: string;
}

export interface IslandZone {
  id: string;
  num: string;
  code: string;
  koreanName: string;
  emoji: string;
  difficulty: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME';
  fragmentCount: number;
  summary: string;
  resources: string[];
  fragments: {
    name: string;
    koreanName: string;
  }[];
  isDepths?: boolean;
}

export interface BaseLocation {
  id: string;
  num: string;
  name: string;
  koreanName: string;
  emoji: string;
  location: string;
  atmosphere: string;
  structure: string[];
  features: string;
  role: string;
  imageSlot: string;
}

export interface HostileEntity {
  id: string;
  num: string;
  name: string;
  koreanName: string;
  description: string;
  activityCondition: string;
  contactEffect: string;
  dangerNote?: string;
  weakness: string;
  imageSlot: string;
}

export interface FragmentItem {
  id: string;
  num: string;
  name: string;
  koreanName: string;
  location: string;
  powers: string[];
  sideEffect?: string;
}

export interface SurvivalRule {
  num: string;
  title: string;
  body: string;
}

export const CANONICAL_CHARACTERS: Character[] = [
  {
    id: 'lucian',
    name: 'LUCIAN VON ASTER',
    koreanName: '루시안 폰 아스테르',
    age: 26,
    height: '187cm',
    mbti: 'INFJ / 1w9',
    role: '황태자',
    world: {
      workTitle: '《새벽이 오기 전까지》',
      era: '서기 457년',
      dimension: '아스테르 제국'
    },
    keywords: ['다정', '절제', '헌신'],
    quote: '괜찮으십니까? …제게도 당신을 걱정할 기회 정도는 주셨으면 합니다.',
    fear: '자신의 선택이 타인을 파멸시키는 것.',
    desire: '모든 존재가 제자리에 있는 세계.',
    ability: '정석 검술 / 약간의 성력',
    likes: ['질서', '새벽 공기', '약자 보호'],
    dislikes: ['무고한 희생', '혼란', '거짓 명분'],
    romance: '상대를 최우선으로 두며 천천히 신뢰한다. 기념일과 약속을 소중하게 여긴다.',
    hobbies: ['새벽 산책', '압화', '고전 악보 필사'],
    habit: '생각에 잠기면 엄지로 반대쪽 손가락 마디를 천천히 쓸어내린다.',
    howToApproach: '사소한 약속도 기억하고 먼저 진심을 보여줄 것.',
    portraitSlot: 'lucian-portrait',
    bannerSlot: 'lucian-banner'
  },
  {
    id: 'karcel',
    name: 'KARCEL DE WINTERFELL',
    koreanName: '카르셀 드 윈터펠',
    age: 27,
    height: '192cm',
    mbti: 'ESTJ / 8w7',
    role: '북부 대공',
    world: {
      workTitle: '《새벽이 오기 전까지》',
      era: '서기 457년',
      dimension: '아스테르 제국'
    },
    keywords: ['냉철', '지배적', '과묵'],
    quote: '혼자 해결하겠다고? 웃기지 마. …내가 같이 간다.',
    fear: '지켜야 할 것을 끝내 지키지 못하는 것.',
    desire: '자신의 방식으로 세계를 통제하는 것.',
    ability: '마검사',
    likes: ['효율', '강함', '침묵'],
    dislikes: ['변명', '나약함', '감정적인 판단'],
    romance: '말보다 행동. 보호 본능이 강하며 묵묵히 곁을 지킨다.',
    hobbies: ['검 단련', '지도 제작', '야영'],
    habit: '불쾌하거나 신경 쓰이는 일이 생기면 무의식적으로 턱을 한 번 굳게 다문다.',
    howToApproach: '말보다 행동으로 신뢰를 쌓고, 간섭보다 존중을 보여줄 것.',
    portraitSlot: 'karcel-portrait',
    bannerSlot: 'karcel-banner'
  },
  {
    id: 'leon',
    name: 'LEON CROW',
    koreanName: '레온 크로우',
    age: 29,
    height: '189cm',
    mbti: 'INTP / 5w6',
    role: '특수부대 대위',
    world: {
      workTitle: '《PROJECT:NEXUS》',
      era: '22세기 태양계',
      dimension: '타이탄 자치령'
    },
    keywords: ['이성적', '무심', '집요'],
    quote: '무리했군. 앉아. 설명은 나중에 듣지.',
    fear: '통제할 수 없는 상황으로 판단이 흐려지는 것.',
    desire: '완전한 정보와 논리로 세계를 이해하는 것.',
    ability: '체술 / 근접전 / 쌍권총',
    specialFeature: '첨단 전술 장비에는 익숙하지만 초자연적 현상에는 익숙하지 않다.',
    likes: ['정확한 정보', '침묵', '효율'],
    dislikes: ['감정적인 결정', '불필요한 소음', '원칙 위반'],
    romance: '감정 표현은 서툴지만 행동으로 표현한다. 한 사람을 오래 바라보는 타입.',
    hobbies: ['분해와 조립', '데이터 분석', '심야 러닝'],
    habit: '집중하면 미간이 아주 미세하게 좁아지고 시선이 한곳에 오래 머문다.',
    howToApproach: '억지로 감정을 캐묻지 말고 꾸준히 곁에 있을 것.',
    portraitSlot: 'leon-portrait',
    bannerSlot: 'leon-banner'
  },
  {
    id: 'yujin',
    name: 'CHA YUJIN',
    koreanName: '차유진',
    age: 25,
    height: '183cm',
    mbti: 'ENTP / 7w8',
    role: 'S급 헌터',
    world: {
      workTitle: '《오늘도 S급 헌터입니다》',
      era: '신력 83년',
      dimension: '아르카 연방 제7차원 수도권 제3구역'
    },
    keywords: ['능글', '쾌활', '대담'],
    quote: '와, 나한테 이렇게까지 무심하기야? 나 꽤 상처받았는데~ …진짜로.',
    fear: '자신 때문에 다른 사람이 위험해지는 것.',
    desire: '모두가 살아남는 결말.',
    ability: '불 능력 / 이중 각성',
    likes: ['맛있는 것', '웃긴 상황', '강한 상대'],
    dislikes: ['쓸데없는 희생', '비겁함', '무거운 분위기'],
    romance: '적극적이고 장난스럽다. 질투를 숨기지 않는다.',
    hobbies: ['놀이공원', '맛집', '사진'],
    habit: '장난스럽게 웃을 때 오른쪽 입꼬리가 먼저 올라간다.',
    howToApproach: '장난은 받아주되, 진지한 순간에는 눈을 피하지 않을 것.',
    portraitSlot: 'yujin-portrait',
    bannerSlot: 'yujin-banner'
  },
  {
    id: 'taeha',
    name: 'KWON TAEHA',
    koreanName: '권태하',
    age: 37,
    height: '190cm',
    mbti: 'INTJ / 1w9',
    role: '전 조직 회장',
    world: {
      workTitle: '《언더킹》',
      era: '1870년대',
      dimension: '6차원 지구 / 대한민국'
    },
    keywords: ['냉담', '위압적', '계산적'],
    quote: '어디 갔었지. …다음부턴 내게 먼저 보고해.',
    fear: '자신이 세운 질서가 무너지는 것.',
    desire: '어떤 상황에서도 주도권을 유지하는 것.',
    ability: '칼 / 총 / 근접전 / 높은 맷집',
    specialFeature: '초자연적 현상을 경험한 적이 없으며, 극한 상황에서 강한 생존 본능을 보인다.',
    likes: ['질서', '침묵', '계획대로 움직이는 것'],
    dislikes: ['예측 불가능한 변수', '감정적인 행동', '불필요한 말'],
    romance: '쉽게 마음을 열지 않는다. 하지만 한 번 사랑하면 오래 가며 보호 성향이 강하다.',
    hobbies: ['위스키', '클래식', '드라이브', '심야 산책'],
    habit: '생각이 많아지면 손목시계의 위치를 무의식적으로 바로잡는다.',
    howToApproach: '독립적인 모습을 보여 신뢰를 얻을 것. 계산 없이 순수하게 엉뚱한 모습에는 의외로 관심을 보인다.',
    portraitSlot: 'taeha-portrait',
    bannerSlot: 'taeha-banner'
  },
  {
    id: 'sion',
    name: 'BAEK SION',
    koreanName: '백시온',
    age: 22,
    height: '181cm',
    mbti: 'ESFP / 2w3',
    role: '국가대표 양궁 금메달리스트',
    world: {
      workTitle: '《골드라인》',
      era: '2037년',
      dimension: '5차원 지구 / 대한민국'
    },
    keywords: ['다정', '활발', '애교'],
    quote: '와 대박. 그거 어떻게 해? 훈련으로 되는 거야?',
    fear: '자신 때문에 소중한 사람이 다치는 것.',
    desire: '함께하는 모두가 웃는 것.',
    ability: '높은 신체 능력 / 활쏘기',
    likes: ['맑은 날씨', '팀워크', '맛있는 밥'],
    dislikes: ['혼자 짐을 지는 것', '포기', '어두운 분위기'],
    romance: '표현이 많고 칭찬을 자주 한다. 이벤트를 좋아한다.',
    hobbies: ['운동 데이트', '바다', '사진', '음식 나눔'],
    habit: '기분이 좋으면 웃기 직전 코끝이 살짝 찡긋거린다.',
    howToApproach: '칭찬과 애정을 아끼지 말고, 시온에게도 기대어 줄 것.',
    portraitSlot: 'sion-portrait',
    bannerSlot: 'sion-banner'
  }
];

export const DIMENSION_WORLDS: DimensionWorld[] = [
  {
    id: 'aster',
    code: '457 — ASTER EMPIRE',
    era: '서기 457년',
    name: '《새벽이 오기 전까지》',
    characters: ['루시안 폰 아스테르', '카르셀 드 윈터펠'],
    description: '황실의 혈통과 북부의 검이 마주하던 제국. 성력과 마검의 질서 속에서 피어난 충성과 비극의 서사.'
  },
  {
    id: 'titan',
    code: '22ND CENTURY — TITAN AUTONOMY',
    era: '22세기 태양계',
    name: '《PROJECT:NEXUS》',
    characters: ['레온 크로우'],
    description: '데이터와 전술, 궤도 연합의 엄격한 규율 아래에서 살아 숨 쉬던 차가운 우주 식민 자치령.'
  },
  {
    id: 'arca',
    code: 'DIVINE YEAR 83 — ARCA FEDERATION',
    era: '신력 83년',
    name: '《오늘도 S급 헌터입니다》',
    characters: ['차유진'],
    description: '균열에서 쏟아지는 마수와 이능력 각성자들의 전장. 화려한 스포트라이트 뒤에 가려진 소모품의 운명.'
  },
  {
    id: 'underking',
    code: '6TH DIMENSION EARTH — KOREA',
    era: '1870년대',
    name: '《언더킹》',
    characters: ['권태하'],
    description: '격변의 조선 말기와 어둠의 조직 세계. 피와 계약, 절대적인 지배력만으로 세운 냉혹한 질서.'
  },
  {
    id: 'goldline',
    code: '5TH DIMENSION EARTH — 2037',
    era: '2037년',
    name: '《골드라인》',
    characters: ['백시온'],
    description: '영광의 올림픽 시상대와 환호. 시위 끝에 모든 것을 걸어야 했던 천재 사수의 고독한 궤적.'
  },
  {
    id: 'unknown',
    code: 'UNKNOWN WORLD',
    era: '현재',
    name: '독자 / 관측자',
    characters: ['당신 (YOU)'],
    description: '그 모든 허구의 이야기를 활자로 읽었던 유일한 존재. 그리고 신이 섬으로 끌어들인 진짜 이유.'
  }
];

export const ISLAND_ZONES: IslandZone[] = [
  {
    id: 'coast',
    num: '01',
    code: 'COAST',
    koreanName: '해안',
    emoji: '🌊',
    difficulty: 'LOW',
    fragmentCount: 1,
    summary: '초기 캠프에 적합한 지역. 잔영의 밀도가 비교적 낮다.',
    resources: ['해산물', '유목', '육류'],
    fragments: [{ name: 'FLOW', koreanName: '흐름' }]
  },
  {
    id: 'jungle',
    num: '02',
    code: 'JUNGLE',
    koreanName: '밀림',
    emoji: '🌿',
    difficulty: 'MEDIUM',
    fragmentCount: 1,
    summary: '채집 자원이 풍부하지만 밤이 되면 위험도가 급격히 증가한다.',
    resources: ['열매', '약초', '목재', '육류'],
    fragments: [{ name: 'INSTINCT', koreanName: '본능' }]
  },
  {
    id: 'cave',
    num: '03',
    code: 'CAVE',
    koreanName: '동굴',
    emoji: '🕳️',
    difficulty: 'HIGH',
    fragmentCount: 2,
    summary: '빛이 닿지 않는 좁은 공간. 광원이 없으면 탐색 자체가 위험하다.',
    resources: ['광석', '지하수'],
    fragments: [
      { name: 'MEMORY', koreanName: '기억' },
      { name: 'SILENCE', koreanName: '침묵' }
    ]
  },
  {
    id: 'ruins',
    num: '04',
    code: 'RUINS',
    koreanName: '폐허',
    emoji: '🏚️',
    difficulty: 'MEDIUM',
    fragmentCount: 1,
    summary: '이전 소환자들의 흔적이 남아 있다. 곳곳에 함정과 과거의 게임 기록이 존재한다.',
    resources: ['과거의 기록물', '철제 자재', '낡은 상자'],
    fragments: [{ name: 'OBSESSION', koreanName: '집착' }]
  },
  {
    id: 'depths',
    num: '05',
    code: 'DEPTHS',
    koreanName: '심층부',
    emoji: '🌑',
    difficulty: 'EXTREME',
    fragmentCount: 2,
    summary: '중앙 제단이 존재하는 섬의 가장 깊은 장소. 포식자가 상주하며, 볼로스가 직접 개입할 수 있는 영역. 1~4구역의 파편을 확보하기 전에는 진입할 수 없다.',
    resources: ['미지의 정수', '심연의 핵'],
    fragments: [
      { name: 'EXISTENCE', koreanName: '존재' },
      { name: 'VOID', koreanName: '공허' }
    ],
    isDepths: true
  }
];

export const SAFE_BASES: BaseLocation[] = [
  {
    id: 'camp',
    num: '01',
    name: 'CAMP',
    koreanName: '야영지',
    emoji: '🏕️',
    location: '해안선 근처',
    atmosphere: '파도 소리와 염분 냄새. 밤이면 거센 바람이 텐트를 흔든다.',
    structure: ['텐트 여러 개', '중앙 모닥불', '간이 조리 공간', '보급 상자'],
    features: '개방적인 만큼 외부에 노출되지만 잔영의 출몰 빈도가 낮고 시야 확보가 쉽다.',
    role: '초반 거점 / 정보 공유 / 귀환 지점',
    imageSlot: 'camp-image'
  },
  {
    id: 'cabin',
    num: '02',
    name: 'CABIN',
    koreanName: '오두막',
    emoji: '🛖',
    location: '밀림 안쪽',
    atmosphere: '습기와 이끼 냄새가 밴 오래된 목조 건물. 낡은 목재, 삐걱거리는 바닥, 일부 깨진 창문.',
    structure: [
      '방 3개 (더블베드 침실 2개, 싱글베드 침실 1개)',
      '거실 (2인용 소파, 1인용 소파, 책장)',
      '부엌 (4인용 식탁)',
      '외부 화장실 1개'
    ],
    features: '외부 노출이 적고 잔영의 접근이 드물다. 그러나 건물 곳곳에는 과거 누군가가 머물렀던 흔적이 남아 있다.',
    role: '중반 이후 메인 거점 / 보관 / 회의 / 휴식',
    imageSlot: 'cabin-image'
  }
];

export const HOSTILE_ENTITIES: HostileEntity[] = [
  {
    id: 'afterimage',
    num: '01',
    name: 'AFTERIMAGE',
    koreanName: '잔영',
    description: '검은 안개 속에 떠오르는 희미한 인간의 실루엣. 밤과 안개 속에서 활동성이 증가한다. 단독보다는 무리로 움직이며 소음과 진동을 따라온다.',
    activityCondition: '밤과 짙은 안개, 소음과 진동 발생 지역',
    contactEffect: 'MEMORY LOSS — 직접 접촉하면 기억 일부가 사라진다. 기억 소멸이 누적될수록 인격 붕괴가 빨라진다.',
    dangerNote: '3회 이상 접촉 누적 시 : WARNING — MUTATION SYMPTOMS DETECTED',
    weakness: '불 / 빛 / 강한 마력의 집중 조사',
    imageSlot: 'afterimage-image'
  },
  {
    id: 'mutated',
    num: '02',
    name: 'MUTATED',
    koreanName: '변이체',
    description: '욕망과 공포에 장기간 잠식된 인간 또는 소환자의 잔재. 괴물이 되었음에도 인간의 언어와 기억 일부가 남아 있다. 그 모습 어딘가에는 변이 이전 인간의 흔적이 존재한다.',
    activityCondition: '밀림 심층 및 폐허의 오염된 구역',
    contactEffect: '극심한 정신적 오염 및 물리적 파괴 충동',
    dangerNote: '초기 변이 단계에서는 직접적인 개입을 통해 회복시킬 가능성이 존재한다.',
    weakness: '핵심 결정을 파괴할 것. 변이 이전의 자신이 했던 "원래의 선택"을 다시 재현시키면 붕괴한다.',
    imageSlot: 'mutated-image'
  },
  {
    id: 'predator',
    num: '03',
    name: 'PREDATOR',
    koreanName: '포식자',
    description: '각 구역을 지키는 고유 수호 존재. 구역마다 외형과 능력이 완전히 다르다. 심층부의 포식자는 볼로스에게 직접 속한 존재다. 극히 드물게 대화 또는 협상이 가능하다.',
    activityCondition: '구역 내 최심부 및 파편 안치소',
    contactEffect: '즉각적인 치명상 및 차원 압축 충격',
    dangerNote: 'COMBAT IS NOT RECOMMENDED. 도주 경로를 확보할 수 있다면 싸우지 않는 것이 최선이다. 혼자 조우할 경우 : EXTREME RISK',
    weakness: '처치 성공 시 해당 구역의 파편 획득 가능성이 크게 상승한다.',
    imageSlot: 'predator-image'
  }
];

export const SEVEN_FRAGMENTS: FragmentItem[] = [
  {
    id: 'flow',
    num: '01',
    name: 'FLOW',
    koreanName: '흐름',
    location: 'COAST (해안)',
    powers: ['순응', '수중 내성', '잔영 감지 증가']
  },
  {
    id: 'instinct',
    num: '02',
    name: 'INSTINCT',
    koreanName: '본능',
    location: 'JUNGLE (밀림)',
    powers: ['야간 시야', '독 내성', '감각 예민화']
  },
  {
    id: 'memory',
    num: '03',
    name: 'MEMORY',
    koreanName: '기억',
    location: 'CAVE (동굴)',
    powers: ['과거의 잔상을 열람할 수 있다.']
  },
  {
    id: 'silence',
    num: '04',
    name: 'SILENCE',
    koreanName: '침묵',
    location: 'CAVE (동굴)',
    powers: ['주변 소음을 차단한다.', '잔영의 소음 유인을 무효화한다.']
  },
  {
    id: 'obsession',
    num: '05',
    name: 'OBSESSION',
    koreanName: '집착',
    location: 'RUINS (폐허)',
    powers: ['함정 감지', '과거 정보 독해'],
    sideEffect: 'HALLUCINATION (환각 유발)'
  },
  {
    id: 'existence',
    num: '06',
    name: 'EXISTENCE',
    koreanName: '존재',
    location: 'DEPTHS (심층부)',
    powers: ['볼로스의 시험을 통과해야 획득 가능.']
  },
  {
    id: 'void',
    num: '07',
    name: 'VOID',
    koreanName: '공허',
    location: 'DEPTHS (심층부)',
    powers: [
      '자신의 의지를 증명한 뒤 해방된다.',
      '포식자를 일시적으로 억제할 수 있다.'
    ]
  }
];

export const SURVIVAL_RULES: SurvivalRule[] = [
  {
    num: '01',
    title: '낮의 활동',
    body: '낮에는 탐색, 채집, 건설, 정보 수집이 가능하다.'
  },
  {
    num: '02',
    title: '밤의 위협',
    body: '밤에는 괴물이 출몰한다. 빛과 불을 유지해야 한다.'
  },
  {
    num: '03',
    title: '새벽의 유예',
    body: '새벽 4시가 되면 대부분의 야간 존재가 사라진다.'
  },
  {
    num: '04',
    title: '상흔의 영속',
    body: '부상은 실제로 남는다. 자연 회복에는 시간이 필요하다.'
  },
  {
    num: '05',
    title: '행동의 인과',
    body: '위험한 행동은 성공 / 부분 성공 / 실패로 나뉜다.'
  },
  {
    num: '06',
    title: '정보의 직접 전달',
    body: '정보는 직접 전달해야 공유된다. 텔레파시는 존재하지 않는다.'
  },
  {
    num: '07',
    title: '심연의 심도',
    body: '섬을 깊이 탐색할수록 위험도는 증가한다.'
  },
  {
    num: '08',
    title: '괴물의 강화',
    body: '괴물은 밤이 반복될수록 강해진다.'
  },
  {
    num: '09',
    title: '파편의 위치',
    body: '파편은 각 구역의 가장 깊은 장소에 존재한다.'
  },
  {
    num: '10',
    title: '진짜 마지막 조건',
    body: '일곱 파편은 탈출의 필요조건일 뿐이다. 진짜 마지막 조건은 : PROVE WHY YOU SHOULD EXIST.'
  }
];

// All explicit image slots requested by the user in [19. IMAGE PLACEHOLDERS]
export const IMAGE_SLOT_REGISTRY = [
  { id: 'hero-volos', label: 'HERO / 베일을 쓴 신과 일곱 인형', aspect: '16/9' },
  { id: 'lucian-portrait', label: '루시안 초상화 (Lucian von Aster)', aspect: '3/4' },
  { id: 'karcel-portrait', label: '카르셀 초상화 (Karcel de Winterfell)', aspect: '3/4' },
  { id: 'leon-portrait', label: '레온 초상화 (Leon Crow)', aspect: '3/4' },
  { id: 'yujin-portrait', label: '차유진 초상화 (Cha Yujin)', aspect: '3/4' },
  { id: 'taeha-portrait', label: '권태하 초상화 (Kwon Taeha)', aspect: '3/4' },
  { id: 'sion-portrait', label: '백시온 초상화 (Baek Sion)', aspect: '3/4' },
  { id: 'coast-image', label: '01 COAST / 해안 풍경', aspect: '16/9' },
  { id: 'jungle-image', label: '02 JUNGLE / 밀림 풍경', aspect: '16/9' },
  { id: 'cave-image', label: '03 CAVE / 동굴 풍경', aspect: '16/9' },
  { id: 'ruins-image', label: '04 RUINS / 폐허 풍경', aspect: '16/9' },
  { id: 'depths-image', label: '05 DEPTHS / 심층부 풍경', aspect: '16/9' },
  { id: 'camp-image', label: '01 CAMP / 해안선 야영지', aspect: '16/9' },
  { id: 'cabin-image', label: '02 CABIN / 밀림 오두막', aspect: '16/9' },
  { id: 'afterimage-image', label: '괴물 01 / AFTERIMAGE (잔영)', aspect: '4/3' },
  { id: 'mutated-image', label: '괴물 02 / MUTATED (변이체)', aspect: '4/3' },
  { id: 'predator-image', label: '괴물 03 / PREDATOR (포식자)', aspect: '4/3' },
  { id: 'volos-image', label: 'VOLOS / 신의 베일과 손', aspect: '16/9' },
  { id: 'altar-image', label: 'ALTAR OF OBLIVION / 망각의 제단', aspect: '21/9' },
];
