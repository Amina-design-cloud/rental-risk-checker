const topics = {
  legality: {
    title: "房屋是否合法安全？",
    steps: [
      {
        q: "是否為有門牌的合法建築？",
        y: "房屋可能未經合法申請或無使用執照，建議避免承租。依《建築法》第84條。",
        n: 1
      },
      {
        q: "是否有違建（鐵皮、夾層、暗房）？",
        y: "屬於違建，安全風險高。依《建築法》第92條。",
        n: 2
      },
      {
        q: "是否具備基本逃生設施？",
        y: "不符合安全，應避免承租。依《消防法》第13條。",
        n: "safe"
      }
    ]
  },
  contract: {
    title: "租賃契約有保障嗎？",
    steps: [
      {
        q: "是否簽訂書面契約？",
        y: "缺乏書面契約恐難保障權益。依《民法》第449條。",
        n: 1
      },
      {
        q: "契約中是否有押金條件與退還方式？",
        y: "應明確記載。依《定型化契約》第5與第11條。",
        n: "safe"
      }
    ]
  },
  rent: {
    title: "租金與費用清楚合理嗎？",
    steps: [
      {
        q: "水電費是否依實際使用計算？",
        y: "不合理收費應避免。依《契約》第7點。",
        n: "safe"
      }
    ]
  },
  environment: {
    title: "生活機能與環境是否合適？",
    steps: [
      {
        q: "周邊生活機能是否便利？",
        y: "影響長期居住品質。",
        n: "safe"
      }
    ]
  },
  landlord: {
    title: "房東與租屋規則是否合理？",
    steps: [
      {
        q: "房東是否會未經同意進入房間？",
        y: "嚴重違反隱私。依《民法》第440條。",
        n: "safe"
      }
    ]
  }
};

let currentTopic = null;
let stepIndex = 0;

function startTopic(key) {
  currentTopic = topics[key];
  stepIndex = 0;

  document.getElementById("menu").style.display = "none";
  document.getElementById("result-area").style.display = "none";
  document.getElementById("question-area").style.display = "block";

  document.getElementById("topic-title").textContent = currentTopic.title;
  showQuestion();
}

function showQuestion() {
  const step = currentTopic.steps[stepIndex];
  document.getElementById("question-text").textContent = step.q;
}

function answer(isYes) {
  const step = currentTopic.steps[stepIndex];
  if (isYes) {
    showResult(step.y);
  } else {
    if (step.n === "safe") {
      showResult("目前看起來沒有明顯風險，建議仍多加留意。");
    } else {
      stepIndex = step.n;
      showQuestion();
    }
  }
}

function showResult(text) {
  document.getElementById("question-area").style.display = "none";
  document.getElementById("result-area").style.display = "block";
  document.getElementById("result-text").textContent = text;
}

function goHome() {
  document.getElementById("question-area").style.display = "none";
  document.getElementById("result-area").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
