import { ComparisonItem, ChecklistItem, DecisionNode, WatchkeeperPlan } from '../types';

export const COMPARISON_TABLE: ComparisonItem[] = [
  {
    dimension: '訊息接收態度',
    traditional: '被動等待消息',
    modern: '主動監控異常狀況',
    insight: '傳統模式下留守人僅在接獲電話時被動接收；現代留守人則在約定時間未獲報時，主動依時序啟動確認機制。'
  },
  {
    dimension: '資料掌握深度',
    traditional: '留下基本聯絡資料即可',
    modern: '掌握完整行程與風險資訊',
    insight: '留守人須熟稔詳細航跡（GPX）、宿營點、每日時程、撤退點及全隊成員個別體能狀況與用藥病史。'
  },
  {
    dimension: '應變啟動時機',
    traditional: '事故發生才開始聯絡',
    modern: '事前建立應變共識與流程',
    insight: '上山前即白紙黑字簽訂回報時間點、失聯幾小時列入警戒、何時聯絡家屬、何時報案119，免除猶豫延誤。'
  },
  {
    dimension: '留守核心定位',
    traditional: '單純的通訊中繼站',
    modern: '山下的資訊整合與資源協調者',
    insight: '留守人是搜救單位制定搜救計畫唯一的「高質量情資中心」，同時擔綱過濾流言、安撫家屬的理性守門人。'
  }
];

export const PRETRIP_CHECKLIST: ChecklistItem[] = [
  {
    id: 'team-1',
    category: 'team',
    categoryLabel: '了解隊伍狀況',
    label: '名冊與特殊健康史掌握',
    description: '掌握隊伍總人數、全體成員姓名、身分證字號、緊急聯絡人電話、過敏史及慢性病用藥紀錄。'
  },
  {
    id: 'team-2',
    category: 'team',
    categoryLabel: '了解隊伍狀況',
    label: '領隊與隊員通訊配備明細',
    description: '確認領隊、嚮導及隊員隨身攜帶之行動電話、無線電頻道、衛星通訊器材（inReach/ZOLEO/衛星電話）之號碼或帳號。'
  },
  {
    id: 'itin-1',
    category: 'itinerary',
    categoryLabel: '熟悉行程內容',
    label: '每日節點抵達時間軸（Timeline）',
    description: '標記登山口進出時間、主要山屋/營地預計抵達時間、各山頭或重要岔路之通過時限（Cut-off time）。'
  },
  {
    id: 'itin-2',
    category: 'itinerary',
    categoryLabel: '熟悉行程內容',
    label: '行程 GPX 航跡圖與數位地圖備份',
    description: '留守人電腦與手機端已載入隊伍預定行進 GPX 軌跡，並熟悉沿線等高線地勢與水源分布。'
  },
  {
    id: 'risk-1',
    category: 'risk',
    categoryLabel: '了解風險因素',
    label: '高風險地形與天候環境評估',
    description: '標註路線中之斷崖、崩塌、溪谷過溪點、岩稜或雪季結冰路段，並核對中央氣象署高山逐時預報。'
  },
  {
    id: 'risk-2',
    category: 'risk',
    categoryLabel: '了解風險因素',
    label: '各節點之撤退路線（B/C Plan）',
    description: '明確知悉各天行程中若遭遇傷病、壞天氣或路況阻斷時，最近的折返點、避難山屋與替代下撤路徑。'
  },
  {
    id: 'cons-1',
    category: 'consensus',
    categoryLabel: '建立應變共識',
    label: '定時安全回報約定（Check-in Time）',
    description: '明確約定每日固定回報時間（例：每日抵達山屋後 18:00 前發送「全員平安」簡訊或衛星訊息）。'
  },
  {
    id: 'cons-2',
    category: 'consensus',
    categoryLabel: '建立應變共識',
    label: '逾時關注與報案分級觸發點',
    description: '明訂延誤多長時間列為「自主觀察」、逾時幾小時啟動「家屬與山莊聯繫」、逾時多久正式通報 119/搜救單位。'
  }
];

export const DECISION_SCENARIOS: DecisionNode[] = [
  {
    id: 'scenario-normal-delay',
    situation: '情境 A：隊伍逾約定抵達時間 1.5 小時，天候良好，白晝尚有日照',
    classification: 'normal',
    levelLabel: '第一階段 · 正常觀察期',
    timeWindow: '逾時 0 ~ 2 小時以內',
    watchkeeperAction: '保持靜默觀察，不驚擾搜救體系，不引起家屬恐慌。',
    recommendedStep: [
      '檢查該路段一般隊伍常見行進腳程與坡度，山屋晚到 1~2 小時多屬隊伍腳程調整或拍照休憩之正常範圍。',
      '查詢該山域即時天候，確認無暴雨、強風或突發警報。',
      '留守人手機保持暢通，等待隊伍進入有通訊覆蓋之稜線或山屋後發送訊號。'
    ],
    communicationProtocol: '對家屬：暫無須主動聯絡引起憂慮；對隊伍：留守端持續待機。'
  },
  {
    id: 'scenario-caution-overdue',
    situation: '情境 B：超過約定回報時間達 3 小時，夜幕已降臨，全隊音訊全無',
    classification: 'caution',
    levelLabel: '第二階段 · 主動確認期',
    timeWindow: '逾時 2 ~ 4 小時',
    watchkeeperAction: '主動交叉求證，查訪周邊山屋管理員或鄰近山友。',
    recommendedStep: [
      '主動發送確認簡訊/衛星訊息：「留守人確認中，請收到於安全處回報位置與全體狀況」。',
      '致電該路線前後段之山屋管理員、國家公園協作或林道檢查哨，詢問今日是否有見到該隊伍通過。',
      '調閱林保署/國家公園山屋即時簽到名冊或山友社群回報動態。'
    ],
    communicationProtocol: '若家屬來電詢問，平穩告知：「目前已過約定回報時間，正依既定流程向山屋管理員查證，請耐心等候查核結果」。'
  },
  {
    id: 'scenario-alert-stationary',
    situation: '情境 C：衛星追蹤點（inReach/GPS）長時間停滯在非預定營地，且位處險峻邊坡',
    classification: 'alert',
    levelLabel: '第三階段 · 資源預備期',
    timeWindow: '逾時 4 ~ 6 小時或軌跡異常',
    watchkeeperAction: '整理整編檔案資料，通報幹部備戰，鎖定最後已知經緯度（LKP）。',
    recommendedStep: [
      '核對停留點之等高線地貌，確認是否為斷崖、乾溪溝、易迷途崩塌區或迫降地形。',
      '備妥「登山留守資料卡」，包含全隊完整個資、保險、入山證號、最後已知座標及通訊器材清單。',
      '聯絡山岳協會後勤諮詢組，進行搜救前置航跡判讀，並準備隨時向消防局救災救護指揮中心提供情報。'
    ],
    communicationProtocol: '通報核心聯絡幹部進入待命，提醒家屬保持電話通暢，但嚴格管制網路社群避免未證實揣測。'
  },
  {
    id: 'scenario-emergency-rescue',
    situation: '情境 D：接收到 SOS 求救訊號，或超過極限逾時時間（如 6~8 小時）且確認未抵山莊',
    classification: 'emergency',
    levelLabel: '第四階段 · 搜救啟動期',
    timeWindow: '接獲 SOS 或觸發極限逾時協議',
    watchkeeperAction: '立即致電當地消防局 119 與國家公園，單一窗口遞交完整搜救情報卡。',
    recommendedStep: [
      '撥打該轄區縣市消防局救災指揮中心（或 119），清楚表明：「我是隊伍正式登記留守人，依事前安全協議通報山難/失聯」。',
      '即時傳送 GPX 軌跡檔、最後回傳之經緯度座標（WGS84 / TWD97）、通訊時間、全隊體能與裝備狀況（是否有帳棚、爐具、糧食存量天數）。',
      '成為搜救指揮官的單一情報聯絡窗口，協調搜救直升機進場天氣窗口或地面搜救隊入山集結點。',
      '嚴密保護隊員隱私，防止錯誤訊息擴散干擾搜救決策。'
    ],
    communicationProtocol: '統一由留守人對接消防搜救指揮中心與家屬代表，一切搜救進度以官方指揮所簡報為準。'
  }
];

export const SAMPLE_PLANS: Record<string, Partial<WatchkeeperPlan>> = {
  nanhu: {
    tripName: '南湖大山四天三夜北一段精華',
    mountainRange: '太魯閣國家公園 / 中央山脈北一段',
    startDate: '2026-10-10',
    endDate: '2026-10-13',
    leaderName: '林逸舟（中華民國山岳協會嚮導）',
    leaderPhone: '0912-345-678',
    leaderSatellite: 'Garmin inReach: inreach-team-alpha@garmin.com',
    watchkeeperName: '張雅晴（亞馬遜國家山岳協會留守幹部）',
    watchkeeperPhone: '0988-765-432',
    watchkeeperAlternatePhone: '02-2345-6789 (住家市話)',
    itineraryPlan: 'D1: 勝光登山口 -> 多加屯山 -> 雲稜山屋 (宿)\nD2: 雲稜山屋 -> 審馬陣山 -> 南湖北山 -> 五岩峰 -> 南湖圈谷山屋 (宿)\nD3: 南湖圈谷 -> 南湖主峰 -> 南湖東峰 -> 返回南湖圈谷 (宿)\nD4: 南湖圈谷 -> 五岩峰 -> 雲稜山屋 -> 勝光登山口 (賦歸)',
    campSites: 'D1: 雲稜山屋 (宿營位 #4) / D2: 南湖山屋 (通鋪 #12-15) / D3: 南湖山屋',
    retreatRoutes: 'D1/D2 若過五岩峰遇強風結冰，全隊原路折返雲稜山屋避難。若南湖溪暴漲則於圈谷多留滯待援，備用糧足夠2日。',
    checkInPoints: '每日下午 18:00 前，抵達山屋後以 inReach 發送預設平安訊息；若通訊不良，最晚隔日清晨 07:00 出發前補發。',
    overdueThresholdHours: 3,
    emergencyTriggerThresholdHours: 6,
    insurancePolicy: '富邦產險特定活動登山綜合險 保單號碼：0500-26MAP000128',
    entryPermitNo: '太魯閣入園證：TRK-202610-0988 / 入山許可：警山入字第 11500293 號',
    members: [
      { name: '林逸舟 (領隊)', phone: '0912-345-678', emergencyContact: '林父 (父親)', emergencyPhone: '0911-111-222', notes: '具備 WFR 野外急救證照，攜帶衛星通訊機' },
      { name: '陳建宏 (隊員)', phone: '0922-333-444', emergencyContact: '王淑芬 (配偶)', emergencyPhone: '0922-000-111', notes: '體能良好，過敏史：無' },
      { name: '黃怡君 (隊員)', phone: '0933-555-666', emergencyContact: '黃國榮 (兄長)', emergencyPhone: '0933-999-888', notes: '有輕微氣喘病史，隨身常備吸入劑與丹木斯' }
    ]
  },
  yushan: {
    tripName: '玉山主西北峰三日生態觀察',
    mountainRange: '玉山國家公園 / 玉山山脈',
    startDate: '2026-11-05',
    endDate: '2026-11-07',
    leaderName: '高宏達',
    leaderPhone: '0910-888-999',
    leaderSatellite: 'ZOLEO 衛星通訊帳號 #886910888999',
    watchkeeperName: '李美慧',
    watchkeeperPhone: '0935-123-456',
    watchkeeperAlternatePhone: '07-333-4455',
    itineraryPlan: 'D1: 塔塔加登山口 -> 白木林涼亭 -> 排雲山莊 (宿)\nD2: 排雲山莊 -> 玉山主峰 (看日出) -> 玉山西峰 -> 排雲山莊 (宿)\nD3: 排雲山莊 -> 玉山北峰 (氣象站) -> 排雲山莊整裝 -> 塔塔加登山口 (下山)',
    campSites: '排雲山莊 (已取得宿營位床位號碼 21-24)',
    retreatRoutes: '若排雲以上路段結冰或強風，不強攻主峰與北峰，全隊在排雲山莊整裝或直接下撤塔塔加。',
    checkInPoints: '每日 06:00 出發前簡訊回報；每日 17:30 抵達山莊後電話或簡訊回報。',
    overdueThresholdHours: 2,
    emergencyTriggerThresholdHours: 5,
    insurancePolicy: '新光產險登山綜合險 保單號碼：1300-15AKP00088',
    entryPermitNo: '玉山國家公園入園許可證號：YSNP-202611-0422',
    members: [
      { name: '高宏達 (領隊)', phone: '0910-888-999', emergencyContact: '高母 (母親)', emergencyPhone: '0910-000-888', notes: '資深領隊，攜帶無線電 144.430 與急救藥包' },
      { name: '趙子豪 (隊員)', phone: '0955-444-333', emergencyContact: '趙父', emergencyPhone: '0955-111-222', notes: '初次登玉山，注意高山反應' }
    ]
  }
};
