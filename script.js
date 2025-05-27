document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    legality: {
      title: "房屋是否合法安全？",
      steps: [
        {
          q: "是否為有門牌的合法建築？",
          y: "房屋可能未經合法申請或無使用執照，承租後無法主張完整租賃權益，建議避免承租。依《建築法》第84條。",
          n: 1
        },
        {
          q: "是否有鐵皮加蓋、夾層、暗房等違建？",
          y: "結構安全性不足，且可能面臨拆除。依《建築法》第92條。",
          n: 2
        },
        {
          q: "是否具備對外窗、逃生門、滅火器等基本逃生設施？",
          y: "居住安全不足，應立即排除考慮。依《消防法》第13條。",
          n: 3
        },
        {
          q: "屋內電線是否老舊、裸露或私拉電線？",
          y: "潛在火災風險高，應要求修繕。依《消防法》第6條。",
          n: 4
        },
        {
          q: "是否為隔間套房或多人共用空間？",
          y: "應確認合法性與逃生設施。依《住宅法》第19條。",
          n: "safe"
        }
      ]
    },
    contract: {
      title: "租賃契約保障？",
      steps: [
        {
          q: "是否簽訂書面租賃契約？",
          y: "口頭承租缺乏保障，應拒絕。依《民法》第449條。",
          n: 1
        },
        {
          q: "契約是否清楚記載租金、押金與租期？",
          y: "條件不清將增加糾紛。依《契約範本》第2點。",
          n: 2
        },
        {
          q: "押金是否超過兩個月租金？",
          y: "屬不合理要求。依《契約範本》第5點。",
          n: 3
        },
        {
          q: "契約中是否說明押金退還條件與時間？",
          y: "應補充條文避免爭議。依《契約範本》第11點。",
          n: 4
        },
        {
          q: "房東是否報稅或提供繳費憑證？",
          y: "未報稅風險高，建議留證。依《所得稅法》第14條。",
          n: "safe"
        }
      ]
    },
    rent: {
      title: "租金與費用合理？",
      steps: [
        {
          q: "是否明確約定租金金額？",
          y: "避免房東隨意變更租金。依《消保法》第7條。",
          n: 1
        },
        {
          q: "水電費是否依實際使用計價？",
          y: "防止高於公定價格。依《契約範本》第7點。",
          n: 2
        },
        {
          q: "是否收取額外管理費或雜費？",
          y: "應列明項目與金額。依《契約範本》第8點。",
          n: 3
        },
        {
          q: "是否提供收據或轉帳證明？",
          y: "無紀錄將影響日後主張。依《稅捐稽徵法》第21條。",
          n: 4
        },
        {
          q: "房東是否任意要求加價？",
          y: "屬違約行為，可拒絕。依《民法》第224條。",
          n: "safe"
        }
      ]
    },
    environment: {
      title: "生活機能與環境？",
      steps: [
        {
          q: "周邊是否有便利商店、交通等設施？",
          y: "影響生活便利性。",
          n: 1
        },
        {
          q: "巷弄夜間是否有照明與監視器？",
          y: "影響夜歸安全。依《性別平等工作法》第12條精神。",
          n: 2
        },
        {
          q: "公共空間是否堆積雜物或垃圾？",
          y: "易引起火災與病蟲害。依《消防法》第17條。",
          n: 3
        },
        {
          q: "周邊是否為工地、夜市等高噪音區？",
          y: "可能影響睡眠與生活品質。依《噪音管制法》第8條。",
          n: 4
        },
        {
          q: "社區是否定期清潔並有人員管理？",
          y: "影響居住衛生與舒適度。",
          n: "safe"
        }
      ]
    },
    landlord: {
      title: "房東與規則合理？",
      steps: [
        {
          q: "房東是否會未經同意進入房間？",
          y: "屬重大隱私侵犯，應終止租約。依《民法》第440條。",
          n: 1
        },
        {
          q: "是否可更換房門鎖、安裝設備？",
          y: "應於契約中明定使用權。依《契約範本》第14點。",
          n: 2
        },
        {
          q: "是否訂有訪客、寵物、抽菸等規則？",
          y: "建議契約明列雙方責任。依《契約範本》第10點。",
          n: 3
        },
        {
          q: "房東是否與租客同住？",
          y: "應溝通生活界線並書面約定。",
          n: 4
        },
        {
          q: "是否曾有前租客反映房東問題？",
          y: "應查評價紀錄，保留證據。依《消保法》第5條。",
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
