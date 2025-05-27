document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    legality: {
      title: "這間房屋是合法安全的嗎？",
      steps: [
        {
          q: "是否為有門牌的合法建築？",
          y: "房屋可能未經合法申請或無使用執照，承租後無法主張完整租賃權益，建議避免承租。依據《建築法》第84條，未取得使用執照之建築物不得使用。",
          n: 1
        },
        {
          q: "是否有鐵皮加蓋、夾層、暗房等違建？",
          y: "該建物結構安全性不足，且可能隨時面臨拆除風險。依據《建築法》第92條，違章建築應限期拆除。",
          n: 2
        },
        {
          q: "是否具備對外窗、逃生門、滅火器等基本逃生設施？",
          y: "代表該處難以符合最基本的居住安全條件，應立即排除考慮。依據《消防法》第13條，居住空間須設置消防安全設備。",
          n: 3
        },
        {
          q: "屋內電線是否明顯老舊、裸露或私拉電線？",
          y: "潛在火災風險高，建議要求房東修繕後再承租。依據《消防法》第6條，用電設備應符合安全規範。",
          n: 4
        },
        {
          q: "是否為隔間套房或多人共用空間？",
          y: "需確認是否違法分間，且應具備逃生設施。依據《住宅法》第19條，出租空間應符合法規，不得以危險建築出租。",
          n: "safe"
        }
      ]
    },
    contract: {
      title: "租賃契約有保障嗎？",
      steps: [
        {
          q: "是否簽訂書面租賃契約？",
          y: "缺乏法律依據，租賃關係難以舉證保障，建議拒絕口頭承租。依據《民法》第449條，租賃契約應以書面為之。",
          n: 1
        },
        {
          q: "契約是否清楚記載租金、押金與租期？",
          y: "將影響後續糾紛處理與權益主張。依據《住宅租賃定型化契約範本》第2點，應載明租賃金額、押金數額與租賃期間。",
          n: 2
        },
        {
          q: "押金是否超過兩個月租金？",
          y: "屬不合理要求，建議依據契約範本主張限縮。依《住宅租賃定型化契約範本》第5點，押金以不超過兩個月為原則。",
          n: 3
        },
        {
          q: "契約中是否說明押金退還條件與時間？",
          y: "容易產生退租爭議，建議與房東協議補充。依據《住宅租賃定型化契約範本》第11點，應明載退還押金之方式與時程。",
          n: 4
        },
        {
          q: "房東是否報稅或提供繳費憑證？",
          y: "可能屬未依法出租，難以保障合法身份。依據《所得稅法》第14條，房屋租賃所得應依法申報。",
          n: "safe"
        }
      ]
    },
    rent: {
      title: "租金與費用清楚合理嗎？",
      steps: [
        {
          q: "是否明確約定租金金額？",
          y: "表示房東有臨時變更租金之空間，建議拒絕不清楚條件的承租。依據《消費者保護法》第7條，契約條款應清楚明確，不得造成消費者不利益。",
          n: 1
        },
        {
          q: "水電費是否依實際使用計價？",
          y: "應確認其收費標準，防止高於公定費率的不當收費。依據《住宅租賃定型化契約範本》第7點，水電費應依實際使用金額計算。",
          n: 2
        },
        {
          q: "是否收取額外管理費或其他雜費？",
          y: "應在契約中明確列出名稱與金額，否則可視為不當收費。依據《住宅租賃定型化契約範本》第8點，所有附加費用應具明確依據。",
          n: 3
        },
        {
          q: "是否提供收據或轉帳證明？",
          y: "將無繳費證據，建議要求每次付款皆具紀錄。依《稅捐稽徵法》第21條，應提供統一發票或收據。",
          n: 4
        },
        {
          q: "房東是否任意要求臨時加價？",
          y: "屬違約行為，承租人可依契約原內容主張權益。依據《民法》第224條，當事人不得片面變更契約內容。",
          n: "safe"
        }
      ]
    },
    environment: {
      title: "生活機能與環境是否合適？",
      steps: [
        {
          q: "周邊是否有基本生活機能如超商、交通？",
          y: "長期生活便利性不足，應納入綜合考量。雖無法律強制規定，但屬居住品質基本要求。",
          n: 1
        },
        {
          q: "巷弄夜間是否有照明與監視器？",
          y: "夜歸安全風險高，建議親自夜訪確認。根據《性別平等工作法》第12條精神，居住者有權要求安全空間。",
          n: 2
        },
        {
          q: "公共空間是否堆積雜物或垃圾？",
          y: "易形成火災與害蟲孳生風險。依據《消防法》第17條，避難通道不得堆放障礙物。",
          n: 3
        },
        {
          q: "周邊是否為工地、夜市等高噪音場所？",
          y: "建議實際聽音環境再做決定。依據《噪音管制法》第8條，住宅區內不得持續製造擾人噪音。",
          n: 4
        },
        {
          q: "社區是否定期清潔並有人員管理？",
          y: "居住舒適度與衛生可能受影響。雖非法律強制，但可於契約中約定維護頻率。",
          n: "safe"
        }
      ]
    },
    landlord: {
      title: "房東與租屋規則是否合理？",
      steps: [
        {
          q: "房東是否會未經同意進入房間？",
          y: "構成重大隱私侵犯，應即終止租約。依據《民法》第440條，出租人不得擅自進入租賃標的。",
          n: 1
        },
        {
          q: "是否可更換房門鎖、安裝設備？",
          y: "限制租客基本權利，建議於契約中協商並明定。依據《住宅租賃定型化契約範本》第14點，房東不得無理限制生活所需之設備。",
          n: 2
        },
        {
          q: "是否訂有訪客、寵物、抽菸等生活規則？",
          y: "建議雙方在契約中明定，以避免後續爭議。依據《住宅租賃定型化契約範本》第10點，雙方應約定使用限制與責任。",
          n: 3
        },
        {
          q: "房東是否與租客同住？",
          y: "應事先溝通生活習慣與空間範圍，並約定互不干涉。此屬租賃實務常見，建議以契約明訂為主。",
          n: 4
        },
        {
          q: "是否曾有前租客反映房東行為問題？",
          y: "應透過租屋網站或社群查證評價紀錄。雖無法條明文，但可援用《消費者保護法》第5條保障資訊知情權。",
          n: "safe"
        }
      ]
    }
  };

  const menu = document.getElementById("menu");
  const questionArea = document.getElementById("question-area");
  const resultArea = document.getElementById("result-area");
  const topicTitle = document.getElementById("topic-title");
  const questionText = document.getElementById("question-text");
  const resultText = document.getElementById("result-text");

  let currentTopic = null;
  let stepIndex = 0;

  window.startTopic = function (key) {
    currentTopic = topics[key];
    stepIndex = 0;

    menu.style.display = "none";
    resultArea.style.display = "none";
    questionArea.style.display = "block";

    topicTitle.textContent = currentTopic.title;
    showQuestion();
  };

  function showQuestion() {
    const step = currentTopic.steps[stepIndex];
    questionText.textContent = step.q;
  }

  window.answer = function (isYes) {
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
  };

  function showResult(text) {
    questionArea.style.display = "none";
    resultArea.style.display = "block";
    resultText.textContent = text;
  }

  window.goHome = function () {
    questionArea.style.display = "none";
    resultArea.style.display = "none";
    menu.style.display = "block";
  };
});
