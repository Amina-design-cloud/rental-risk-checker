document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    legality: {
      title: "房屋是否合法安全？",
      steps: [
        {
          q: "是否為有門牌的合法建築？",
          y: "可能未經合法申請或無使用執照，建議避免承租。依《建築法》第84條。",
          n: 1
        },
        {
          q: "是否有鐵皮加蓋、夾層、暗房等違建？",
          y: "結構安全性不足，且可能隨時被拆除。依《建築法》第92條。",
          n: 2
        },
        {
          q: "是否具備對外窗、逃生門、滅火器等基本逃生設施？",
          y: "不符合居住安全，應排除。依《消防法》第13條。",
          n: 3
        },
        {
          q: "屋內電線是否老舊、裸露或私拉電線？",
          y: "火災風險高，建議修繕後再承租。依《消防法》第6條。",
          n: 4
        },
        {
          q: "是否為隔間套房或多人共用空間？",
          y: "應確認是否違法分間，並具備逃生設施。依《住宅法》第19條。",
          n: "safe"
        }
      ]
    },
    contract: {
      title: "租賃契約保障？",
      steps: [
        {
          q: "是否簽訂書面租賃契約？",
          y: "口頭契約難舉證，建議拒絕。依《民法》第449條。",
          n: 1
        },
        {
          q: "契約是否清楚記載租金、押金與租期？",
          y: "模糊條款將產生爭議。依《定型化契約》第2點。",
          n: 2
        },
        {
          q: "押金是否超過兩個月租金？",
          y: "屬不合理要求，建議拒絕。依《契約》第5點。",
          n: 3
        },
        {
          q: "契約中是否說明押金退還條件與時間？",
          y: "應明訂，以免退租糾紛。依《契約》第11點。",
          n: 4
        },
        {
          q: "房東是否報稅或提供繳費憑證？",
          y: "未報稅風險高，難保障合法身份。依《所得稅法》第14條。",
          n: "safe"
        }
      ]
    },
    rent: {
      title: "租金與費用合理？",
      steps: [
        {
          q: "是否明確約定租金金額？",
          y: "避免房東隨意調漲。依《消保法》第7條。",
          n: 1
        },
        {
          q: "水電費是否依實際使用計價？",
          y: "防止收取超額費用。依《契約》第7點。",
          n: 2
        },
        {
          q: "是否收取額外管理費或雜費？",
          y: "應列出明細。依《契約》第8點。",
          n: 3
        },
        {
          q: "是否提供收據或轉帳紀錄？",
          y: "應保留付款紀錄。依《稅捐稽徵法》第21條。",
          n: 4
        },
        {
          q: "房東是否任意要求臨時加價？",
          y: "屬違約行為。依《民法》第224條。",
          n: "safe"
        }
      ]
    },
    environment: {
      title: "生活機能與環境？",
      steps: [
        {
          q: "周邊是否有生活機能如超商、交通？",
          y: "便利性不足可能影響居住品質。",
          n: 1
        },
        {
          q: "巷弄夜間是否有照明與監視器？",
          y: "夜歸不安全，應實地確認。",
          n: 2
        },
        {
          q: "公共空間是否堆放雜物或垃圾？",
          y: "易引發火災與蟲害。依《消防法》第17條。",
          n: 3
        },
        {
          q: "周邊是否為高噪音區（如工地、夜市）？",
          y: "建議夜間現場聆聽觀察。依《噪音管制法》第8條。",
          n: 4
        },
        {
          q: "社區是否定期清潔並有人員管理？",
          y: "居住舒適度與衛生會受影響。",
          n: "safe"
        }
      ]
    },
    landlord: {
      title: "房東與規則合理？",
      steps: [
        {
          q: "房東是否會未經同意進入房間？",
          y: "屬重大隱私侵犯。依《民法》第440條。",
          n: 1
        },
        {
          q: "是否可更換房門鎖、安裝設備？",
          y: "限制租客權益，應約定在契約中。依《契約》第14點。",
          n: 2
        },
        {
          q: "是否訂有訪客、寵物、抽菸等規則？",
          y: "建議明訂於契約中。依《契約》第10點。",
          n: 3
        },
        {
          q: "房東是否與租客同住？",
          y: "應溝通並書面確認空間使用。",
          n: 4
        },
        {
          q: "是否曾有前租客反映房東行為問題？",
          y: "應查詢社群評價。依《消保法》第5條。",
          n: "safe"
        }
      ]
    }
  };

  const home = document.getElementById("home");
  const questions = document.getElementById("questions");
  const result = document.getElementById("result");

  document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      const topic = button.getAttribute("data-topic");
      if (!topics[topic]) return;

      let stepIndex = 0;
      home.style.display = "none";
      result.innerHTML = "";

      const renderStep = (index) => {
        const step = topics[topic].steps[index];
        questions.innerHTML = `
          <div class="question">
            <p><strong>${topics[topic].title}</strong></p>
            <p>${step.q}</p>
            <button onclick="nextStep(true)">是</button>
            <button onclick="nextStep(false)">否</button>
            <div style="margin-top:20px;">
              <button onclick="goHome()">回首頁</button>
            </div>
          </div>
        `;
      };

      window.nextStep = (isYes) => {
        const step = topics[topic].steps[stepIndex];
        if (isYes) {
          questions.innerHTML = "";
          result.innerHTML = `${step.y}<br><br><button onclick="goHome()">回首頁</button>`;
        } else {
          if (step.n === "safe") {
            questions.innerHTML = "";
            result.innerHTML = `此情況基本無明顯風險，但仍建議多方確認。<br><br><button onclick="goHome()">回首頁</button>`;
          } else {
            stepIndex = step.n;
            renderStep(stepIndex);
          }
        }
      };

      window.goHome = () => {
        questions.innerHTML = "";
        result.innerHTML = "";
        home.style.display = "block";
      };

      questions.style.display = "block";
      renderStep(stepIndex);
    });
  });
});

