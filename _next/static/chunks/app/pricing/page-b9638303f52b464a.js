if (!sessionStorage.getItem('reloaded')) {
  sessionStorage.setItem('reloaded', 'true');
  window.location.reload();
} else {
  sessionStorage.removeItem('reloaded');
}

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  
  [931], {
    7374: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 9618))
    },
    8226: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s
        }
      });
      let s = (0, r(9205).Z)("credit-card", [
        ["rect", {
          width: "20",
          height: "14",
          x: "2",
          y: "5",
          rx: "2",
          key: "ynyp8z"
        }],
        ["line", {
          x1: "2",
          x2: "22",
          y1: "10",
          y2: "10",
          key: "1b3vmo"
        }]
      ])
    },
    2735: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s
        }
      });
      let s = (0, r(9205).Z)("download", [
        ["path", {
          d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
          key: "ih7n3h"
        }],
        ["polyline", {
          points: "7 10 12 15 17 10",
          key: "2ggqvy"
        }],
        ["line", {
          x1: "12",
          x2: "12",
          y1: "15",
          y2: "3",
          key: "1vk2je"
        }]
      ])
    },
    4286: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s
        }
      });
      let s = (0, r(9205).Z)("shield-check", [
        ["path", {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }],
        ["path", {
          d: "m9 12 2 2 4-4",
          key: "dzmm74"
        }]
      ])
    },
    221: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s
        }
      });
      let s = (0, r(9205).Z)("terminal", [
        ["polyline", {
          points: "4 17 10 11 4 5",
          key: "akl6gq"
        }],
        ["line", {
          x1: "12",
          x2: "20",
          y1: "19",
          y2: "19",
          key: "q2wloq"
        }]
      ])
    },
    1239: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s
        }
      });
      let s = (0, r(9205).Z)("zap", [
        ["path", {
          d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
          key: "1xq2db"
        }]
      ])
    },
    9618: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: function () {
          return z
        }
      });
      var s = r(7437),
        i = r(398),
        n = r(2834),
        a = r(8377),
        o = r(5830),
        l = r(2265),
        c = r(7648),
        d = r(2381),
        x = r(4286),
        u = r(1239),
        m = r(9205);
      var v = r(3145);



function k() {
  return (0, s.jsx)("section", {
    className: "py-8 md:py-10 lg:py-12",
    children: (0, s.jsx)("div", {
      className: "container max-w-6xl mx-auto px-4 md:px-6",
      children: (0, s.jsxs)("div", {
        className: "flex flex-col items-center gap-4 text-center",
        children: [
          (0, s.jsx)("h1", {
            className: "animate-fade-in font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
            children: "Choose Your Plan"
          }),
          (0, s.jsx)("p", {
            className: "text-lg text-muted-foreground max-w-2xl",
            children: "Unlock premium features with our flexible pricing options"
          })
        ]
      })
    })
  });
}


function N() {
  let [e, t] = (0, l.useState)(!1),
      [r, c] = (0, l.useState)(!1),
      [m, y] = (0, l.useState)(!1),
      [u, p] = (0, l.useState)(""),
      [h, f] = (0, l.useState)({ type: "monthly", price: "5.99" });

  (0, l.useEffect)(() => { t(!0) }, []);

  let A = ["PayPal", "Robux", "Pix"];

["/weekpix", "/monthpix", "/lifetimepix"].forEach(href => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  document.head.appendChild(link);
});

let g = (planType, planPrice) => {
  f({ type: planType, price: planPrice });

  if (!document.getElementById("glow-style")) {
    const style = document.createElement("style");
    style.id = "glow-style";
    style.innerHTML = `
      @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes glowPulse {
        0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
        50% { box-shadow: 0 0 35px rgba(139, 92, 246, 0.7); }
      }

      .payment-option {
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: linear-gradient(135deg, rgba(30, 30, 60, 0.5), rgba(20, 20, 40, 0.7));
      }
      
      .payment-option::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s;
      }

      .payment-option:hover::before {
        opacity: 0.7;
      }

      .payment-option.selected::before {
        opacity: 1;
        animation: glowPulse 2s infinite;
      }

      .payment-option:hover {
        transform: translateY(-3px);
        background: linear-gradient(135deg, rgba(40, 40, 70, 0.7), rgba(30, 30, 50, 0.8));
      }

      .payment-option.selected {
        transform: translateY(-3px);
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
      }

      .modal-backdrop {
        animation: modalFadeIn 0.3s ease-out;
        backdrop-filter: blur(12px);
      }

      .modal-content {
        animation: modalFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6), 0 0 120px rgba(139, 92, 246, 0.25);
      }

      .modal-content.show {
        transform: scale(1);
        opacity: 1;
      }

      .modal-content:hover {
        box-shadow: 0 30px 90px rgba(0, 0, 0, 0.7), 0 0 140px rgba(139, 92, 246, 0.3);
      }

      .coupon-section {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.12));
        border: 2px dashed rgba(139, 92, 246, 0.4);
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 22px;
        transition: all 0.3s;
      }

      .coupon-section:hover {
        border-color: rgba(139, 92, 246, 0.6);
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(236, 72, 153, 0.18));
        transform: translateY(-2px);
      }

      .coupon-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(139, 92, 246, 0.4);
        border-radius: 10px;
        padding: 14px 18px;
        color: white;
        font-size: 15px;
        transition: all 0.3s;
        font-family: 'Courier New', monospace;
        letter-spacing: 1.5px;
        font-weight: 600;
      }

      .coupon-input:focus {
        outline: none;
        border-color: rgba(139, 92, 246, 0.9);
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.4);
        background: rgba(0, 0, 0, 0.7);
      }

      .coupon-input::placeholder {
        color: rgba(255, 255, 255, 0.35);
        letter-spacing: 1px;
      }

      .proceed-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
      }

      .proceed-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
      }

      .proceed-btn:hover::before {
        width: 350px;
        height: 350px;
      }

      .proceed-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5);
      }

      .proceed-btn:active {
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);
  }

  const modal = document.createElement("div");
  modal.className = "modal-backdrop fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4";
  
  const couponSection = planType === "lifetime" ? `
    <div class="coupon-section">
      <label class="block text-sm font-bold mb-3 text-white flex items-center gap-2">
        <span class="text-2xl">🎟️</span>
        <span>Tem um cupom de desconto?</span>
      </label>
      <input 
        type="text" 
        id="couponInput" 
        class="coupon-input" 
        placeholder="DIGITE SEU CÓDIGO"
      />
    </div>
  ` : '';

  modal.innerHTML = `
    <div class="modal-content rounded-2xl p-8 w-[450px] max-w-[95vw] border-2 border-purple-500/40">
      <h2 class="text-3xl font-black mb-2 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Choose Payment Method</h2>
      <p class="mb-6 text-sm text-center text-gray-400">Select how you would like to pay for <span class="font-bold text-purple-400">${planType}</span></p>

      ${couponSection}

      <div class="space-y-4 mb-6">
        <div class="payment-option flex items-center justify-between p-5 rounded-xl cursor-pointer text-base font-semibold border border-transparent" data-method="PayPal">
          <span class="flex items-center gap-3">
            <span class="text-2xl">💳</span>
            <span>PayPal</span>
          </span>
          <span class="text-purple-400 font-bold text-lg">${
            planType === "weekly" ? "$1" :
            planType === "monthly" ? "$2.5" :
            planType === "lifetime" ? "$5" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-5 rounded-xl cursor-pointer text-base font-semibold border border-transparent" data-method="Robux">
          <span class="flex items-center gap-3">
            <span class="text-2xl">🎮</span>
            <span>Robux</span>
          </span>
          <span class="text-purple-400 font-bold text-lg">${
            planType === "weekly" ? "100" :
            planType === "monthly" ? "250" :
            planType === "lifetime" ? "600" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-5 rounded-xl cursor-pointer text-base font-semibold border border-transparent" data-method="Pix">
          <span class="flex items-center gap-3">
            <span class="text-2xl">🇧🇷</span>
            <span>Pix</span>
          </span>
          <span class="text-purple-400 font-bold text-lg">${
            planType === "weekly" ? "R$ 2,50" :
            planType === "monthly" ? "R$ 4,50" :
            planType === "lifetime" ? "R$ 10,00" : ""
          }</span>
        </div>
      </div>

      <button id="proceedPayment" class="proceed-btn w-full text-white font-bold py-4 rounded-xl text-center mb-4 relative text-lg">
        <span class="relative z-10">Proceed to Payment →</span>
      </button>
      <button class="w-full py-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 font-medium" onclick="this.closest('div').parentNode.remove()">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  setTimeout(() => modalContent.classList.add("show"), 10);

  const options = modal.querySelectorAll(".payment-option");
  let selectedMethod = null;

  options.forEach(option => {
    option.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");
      selectedMethod = option.dataset.method;
    });
  });

  modal.querySelector("#proceedPayment").addEventListener("click", () => {
    if (!selectedMethod) {
      alert("⚠️ Por favor, selecione um método de pagamento!");
      return;
    }

    let url = "";
    
    const validCoupons = [
      "#GBXIT"
    ];
    
    const couponInput = modal.querySelector("#couponInput");
    const couponCode = couponInput ? couponInput.value.trim().toUpperCase() : "";
    const hasValidCoupon = couponCode !== "" && validCoupons.includes(couponCode);

    if (selectedMethod === "PayPal") {
      if (planType === "weekly") url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=2.5&no_recurring=1&item_name=Move+Hub+Week&currency_code=USD";
      else if (planType === "monthly") url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=6&no_recurring=1&item_name=Move+Hub+Month&currency_code=USD";
      else url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=10&no_recurring=1&item_name=Move+Hub+Lifetime&currency_code=USD";
    } else if (selectedMethod === "Robux") {
      if (planType === "weekly") url = "https://www.roblox.com/catalog/86763827406678/Weekly";
      else if (planType === "monthly") url = "https://www.roblox.com/catalog/109090893623975/Monthly";
      else url = "https://www.roblox.com/catalog/112388426174566/Lifetime";
    } else if (selectedMethod === "Pix") {
      if (planType === "weekly") url = "/weekpix";
      else if (planType === "monthly") url = "/monthpix";
      else {
        if (couponCode !== "" && !hasValidCoupon) {
          alert("❌ Cupom inválido! Verifique o código e tente novamente.");
          return;
        }
        url = hasValidCoupon ? "/lifetimepixcupom" : "/lifetimepix";
      }
    }

    if (url) window.open(url, "_blank");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
};


  return (0, s.jsxs)("section", {
    className: "container px-4 pb-16",
    children: [
      (0, s.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up",
        children: [
          // === ONE WEEK CARD ===
          (0, s.jsxs)("div", {
            className: "group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20",
            children: [
              (0, s.jsx)("div", { 
                className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              }),
              (0, s.jsx)("div", { 
                className: "relative z-10 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30 mb-6", 
                children: "⚡ ONE WEEK" 
              }),
              (0, s.jsx)("h2", { className: "relative z-10 text-3xl font-black mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent", children: "Weekly Access" }),
              (0, s.jsxs)("div", { className: "relative z-10 mb-6", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-gray-400", children: "Perfect for trying us out!" })] }),
              (0, s.jsxs)("ul", { className: "relative z-10 space-y-4 mb-8", children: [
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("weekly", "7.00"), className: "block w-full bg-white hover:bg-gray-200 text-black font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "mt-6 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-2", children: "Payment Method's" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          }),

          // === ONE MONTH CARD ===
          (0, s.jsxs)("div", {
            className: "group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20",
            children: [
              (0, s.jsx)("div", { 
                className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              }),
              (0, s.jsx)("div", { 
                className: "relative z-10 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30 mb-6", 
                children: "🔥 POPULAR" 
              }),
              (0, s.jsx)("h2", { className: "relative z-10 text-3xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent", children: "Monthly Access" }),
              (0, s.jsxs)("div", { className: "relative z-10 mb-6", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-gray-400", children: "Best value for gamers" })] }),
              (0, s.jsxs)("ul", { className: "relative z-10 space-y-4 mb-8", children: [
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("monthly", "9.90"), className: "block w-full bg-white hover:bg-gray-200 text-black font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "relative z-10 mt-8 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-3 font-semibold", children: "Payment Methods" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          }),

          // === LIFETIME CARD ===
          (0, s.jsxs)("div", {
            className: "group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-yellow-500/50 rounded-2xl p-8 hover:border-yellow-400/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20",
            children: [
              (0, s.jsx)("div", { 
                className: "absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              }),
              (0, s.jsx)("div", { 
                className: "absolute -top-2 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black px-3 py-1 rounded-full text-[11px] shadow-lg z-20", 
                children: "⭐ BEST VALUE" 
              }),
              (0, s.jsx)("div", { 
                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/25 text-primary mb-4", 
                children: "BEST VALUE" 
              }),
              (0, s.jsx)("h2", { className: "relative z-10 text-3xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent", children: "Lifetime Access" }),
              (0, s.jsxs)("div", { className: "relative z-10 mb-6", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-gray-400", children: "Pay once, enjoy forever" })] }),
              (0, s.jsxs)("ul", { className: "relative z-10 space-y-4 mb-8", children: [
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start gap-3", children: [(0, s.jsx)("svg", { className: "h-6 w-6 text-green-400 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { className: "text-gray-200 font-medium", children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("lifetime", "17.00"), className: "block w-full bg-white hover:bg-gray-200 text-black font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "relative z-10 mt-8 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-3 font-semibold", children: "Payment Methods" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          })
        ]
      }),

      (0, s.jsxs)("div", {
        className: "text-center mt-16 space-y-4",
        children: [
          (0, s.jsx)("h2", { className: "text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent", children: "After buying create a ticket on discord" }),
          (0, s.jsx)("p", { className: "text-xl text-gray-400", children: "Made with love by Move Hub Owner ❤️" })
        ]
      })
    ]
  })
}

function q() {

}

function Z() {
  
}

function z() {
  let [e, t] = (0, l.useState)(!1);
  return (0, l.useEffect)(() => {
    t(!0)
  }, []), (0, s.jsxs)("div", {
    className: "min-h-screen flex flex-col ".concat(e ? "opacity-100" : "opacity-0", " transition-opacity duration-500"),
    children: [(0, s.jsx)(o.k, {}), (0, s.jsx)(a.v, {}), (0, s.jsx)(i.w, {}), (0, s.jsxs)("main", {
      className: "flex-1",
      children: [(0, s.jsx)(k, {}), (0, s.jsx)(N, {}), , (0, s.jsx)(Z, {}), (0, s.jsx)(q, {})]
    }), (0, s.jsx)(n.$, {})]
  })
}
    }
  },
  function (e) {
    e.O(0, [63, 163, 145, 664, 971, 117, 744], function () {
      return e(e.s = 7374)
    }), _N_E = e.O()
  }
]);
