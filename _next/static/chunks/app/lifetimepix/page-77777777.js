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
    className: "py-16 md:py-20 lg:py-24", // reduzido para subir o conteúdo
    children: (0, s.jsx)("div", {
      className: "container max-w-6xl mx-auto px-4 md:px-6 -mt-8", // margem negativa para subir ainda mais
      children: (0, s.jsxs)("div", {
        className: "flex flex-col items-center gap-2 text-center",
        children: [
          (0, s.jsx)("h1", {
            className: "animate-fade-in font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            children: "Pix Lifetime"
          }),
        ]
      })
    })
  })
}


      function q() {
const modal = document.createElement("div");
modal.className = "fixed inset-0 bg-black/40 flex items-center justify-center z-40";
modal.innerHTML = `
  <div class="bg-white p-6 rounded-lg flex flex-col items-center gap-4">
    <p class="font-bold text-lg">QR CODE</p>
    <img src="https://i.imgur.com/YkgnpOx.png" class="w-48 h-48" alt="QR CODE">
          <p class="font-bold text-sm">Pix Copia e Cola</p>
    <div class="flex items-center gap-2">
<input type="text" readonly value="00020126470014BR.GOV.BCB.PIX0125bernardopbbueno@gmail.com520400005303986540517.005802BR5901N6001C62110507MoveHub63043BD6" class="border p-1 rounded bg-black text-white"/>
      <button id="copyPix" class="bg-blue-500 text-white px-3 py-1 rounded">Copiar</button>
    </div>
  </div>
`;

document.body.appendChild(modal);

// Botão de copiar Pix
document.getElementById("copyPix").onclick = () => {
  const input = modal.querySelector("input");
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value)
    .then(() => alert("Chave Pix copiada!"))
    .catch(() => alert("Falha ao copiar!"));
};


      }

      function N() {
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
            children: [(0, s.jsx),(0, s.jsx)(k, {}), (0, s.jsx)(N, {}), , (0, s.jsx)(Z, {}), (0, s.jsx)(q, {})]
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