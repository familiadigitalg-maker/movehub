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

if (!sessionStorage.getItem('reloaded')) {
  sessionStorage.setItem('reloaded', 'true');
  window.location.reload();
} else {
  sessionStorage.removeItem('reloaded');
}


function k() {
  return (0, s.jsx)("section", {
    className: "py-8 md:py-10 lg:py-12",
    children: (0, s.jsx)("div", {
      className: "container max-w-6xl mx-auto px-4 md:px-6",
      children: (0, s.jsxs)("div", {
        className: "flex flex-col items-center gap- text-center",
        children: [
          (0, s.jsx)("h1", {
            className: "animate-fade-in font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            children: "Choose Ur Plan"
          }),
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

// Pré-carregar os HTMLs para reduzir delay
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
      .payment-option {
        position: relative;
        overflow: visible;
        transition: all 0.3s ease;
      }
      .payment-option .glow {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        box-shadow: 0 0 0 rgba(255,255,255,0);
        transition: box-shadow 0.3s ease;
        z-index: 10;
      }
      .payment-option:hover .glow {
        box-shadow: 0 0 5px 2px rgba(255,255,255,0.3);
      }
      .payment-option.selected .glow {
        box-shadow: 0 0 10px 5px rgba(255,255,255,0.8);
      }
      .modal-content {
        transform: scale(0.8);
        opacity: 0;
        transition: all 0.3s ease, box-shadow 0.3s ease;
      }
      .modal-content.show {
        transform: scale(1);
        opacity: 1;
      }
      .modal-content:hover {
        box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.2);
      }
    `;
    document.head.appendChild(style);
  }

  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
  modal.innerHTML = `
    <div class="modal-content bg-background border border-border/50 rounded-xl p-8 w-[400px] max-w-[95vw]">
      <h2 class="text-xl font-bold mb-4 text-center">Choose Payment Method</h2>
      <p class="mb-4 text-sm text-center">Select how you would like to pay ${planType}</p>

      <div class="space-y-4 mb-6">
        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="PayPal">
          <span class="glow"></span>
          PayPal <span>${
            planType === "weekly" ? "$2" :
            planType === "monthly" ? "$4" :
            planType === "lifetime" ? "$8" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="Robux">
          <span class="glow"></span>
          Robux <span>${
            planType === "weekly" ? "400" :
            planType === "monthly" ? "600" :
            planType === "lifetime" ? "1000" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="Pix">
          <span class="glow"></span>
          Pix <span>${
            planType === "weekly" ? "R$ 7,00" :
            planType === "monthly" ? "R$ 9,90" :
            planType === "lifetime" ? "R$ 17,00" : ""
          }</span>
        </div>
      </div>

      <button id="proceedPayment" class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-lg text-center mb-4">Proceed to Payment</button>
      <button class="w-full py-2 text-muted-foreground" onclick="this.closest('div').parentNode.remove()">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Animação de entrada
  const modalContent = modal.querySelector(".modal-content");
  setTimeout(() => modalContent.classList.add("show"), 10);

  const options = modal.querySelectorAll(".payment-option");
  let selectedMethod = null;

  // Seleção das opções com glow
  options.forEach(option => {
    option.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");
      selectedMethod = option.dataset.method;
    });
  });

  modal.querySelector("#proceedPayment").addEventListener("click", () => {
    if (!selectedMethod) return;

    let url = "";

    if (selectedMethod === "PayPal") {
      if (planType === "weekly") url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=2&no_recurring=1&item_name=Move+Hub+Week&currency_code=USD";
      else if (planType === "monthly") url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=4&no_recurring=1&item_name=Move+Hub+Month&currency_code=USD";
      else url = "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=8&no_recurring=1&item_name=Move+Hub+Lifetime&currency_code=USD";
    } else if (selectedMethod === "Robux") {
      if (planType === "weekly") url = "https://www.roblox.com/catalog/86763827406678/Weekly";
      else if (planType === "monthly") url = "https://www.roblox.com/catalog/109090893623975/Monthly";
      else url = "https://www.roblox.com/catalog/112388426174566/Lifetime";
    } else if (selectedMethod === "Pix") {
      if (planType === "weekly") url = "/weekpix";
      else if (planType === "monthly") url = "/monthpix";
      else url = "/lifetimepix";
    }

    if (url) window.open(url, "_blank");
  });
};



  return (0, s.jsxs)("section", {
    className: "container px-4 pb-16",
    children: [
      (0, s.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up",
        children: [
          // === ONE WEEK CARD ===
          (0, s.jsxs)("div", {
            className: "bg-background/60 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
            children: [
              (0, s.jsx)("div", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/25 text-primary mb-4", children: "ONE WEEK" }),
              (0, s.jsx)("h2", { className: "text-2xl font-bold mb-2", children: "Weekly Access" }),
              (0, s.jsxs)("div", { className: "mb-3", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-muted-foreground", children: "Perfect to trying us out!" })] }),
              (0, s.jsxs)("ul", { className: "space-y-3 mb-6", children: [
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("weekly", "7.00"), className: "block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "mt-6 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-2", children: "Payment Method's" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          }),

          // === ONE MONTH CARD ===
          (0, s.jsxs)("div", {
            className: "bg-background/60 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
            children: [
              (0, s.jsx)("div", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/25 text-primary mb-4", children: "ONE MONTH" }),
              (0, s.jsx)("h2", { className: "text-2xl font-bold mb-2", children: "Month Access" }),
              (0, s.jsxs)("div", { className: "mb-3", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-muted-foreground", children: "Best value for gamers" })] }),
              (0, s.jsxs)("ul", { className: "space-y-3 mb-6", children: [
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("monthly", "9.90"), className: "block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "mt-6 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-2", children: "Payment Method's" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          }),

          // === LIFETIME CARD ===
          (0, s.jsxs)("div", {
            className: "bg-background/60 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
            children: [
              (0, s.jsx)("div", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/25 text-primary mb-4", children: "BEST VALUE" }),
              (0, s.jsx)("h2", { className: "text-2xl font-bold mb-2", children: "Lifetime Access" }),
              (0, s.jsxs)("div", { className: "mb-3", children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", { className: "text-muted-foreground", children: "Pay once, enjoy forever" })] }),
              (0, s.jsxs)("ul", { className: "space-y-3 mb-6", children: [
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Full Access to All Scripts" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Active Support" })] }),
                (0, s.jsxs)("li", { className: "flex items-start", children: [(0, s.jsx)("svg", { className: "h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, s.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), (0, s.jsx)("span", { children: "Regular Updates" })] })
              ] }),
              (0, s.jsx)("button", { onClick: () => g("lifetime", "17.00"), className: "block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg text-center transition-colors mb-3", children: "Purchase Now" }),
              (0, s.jsxs)("div", { className: "mt-6 pt-6 border-t border-border/30", children: [(0, s.jsx)("p", { className: "text-sm text-muted-foreground mb-2", children: "Payment Method's" }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2", children: A.map(e => (0, s.jsx)("div", { className: "px-3 py-1.5 rounded-md text-xs bg-secondary/50 border border-border/50", children: e }, e)) })] })
            ]
          })
        ]
      }),

      // === FINAL TEXT BELOW CARDS ===
(0, s.jsx)("div", {
  className: "text-center mt-12",
  children: [
    (0, s.jsx)("h2", { className: "text-3xl font-bold", children: "After buying create a ticket on discord" }),
    (0, s.jsx)("h2", { className: "text-1.5xl font-semi-bold mt-2", children: "Made with love by CazBest" })
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
