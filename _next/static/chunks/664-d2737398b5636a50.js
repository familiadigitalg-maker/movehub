"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [664], {
    5830: function (e, r, t) {
      t.d(r, {
        k: function () {
          return a
        }
      });
      var n = t(7437);

      function a() {
        return (0, n.jsxs)("div", {
          className: "fixed inset-0 -z-10 h-full w-full bg-background",
          children: [(0, n.jsx)("div", {
            className: "absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5"
          }), (0, n.jsx)("div", {
            className: ""
          })]
        })
      }
    },
    2834: function (e, r, t) {
      t.d(r, {
        $: function () {
          return s
        }
      });
      var n = t(7437),
        a = t(7648);

      function s() {
        return (0, n.jsx)("footer", {
          className: "border-t border-border/40 bg-background",
          children: (0, n.jsxs)("div", {
            className: "container flex flex-col md:flex-row items-center justify-between gap-4 py-10 md:h-20 md:py-0",
            children: [
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-4 md:flex-row md:gap-2",
                children: [
                  (0, n.jsx)(a.default, {
                    href: "/home",
                    className: "flex items-center",
                    children: (0, n.jsx)("span", {
                      className: "font-semibold",
                      children: "Move Hub"
                    })
                  })
                ]
              }),
              (0, n.jsxs)("div", {
                className: "flex justify-center items-center gap-6 text-sm flex-1",
                children: [
                  (0, n.jsx)(a.default, {
                    href: "/home",
                    className: "text-muted-foreground transition-colors hover:text-foreground",
                    onClick: (e) => { e.preventDefault(); router.push("/home"); },
                    children: "Home"
                  }),
                  (0, n.jsx)(a.default, {
                    href: "/games",
                    className: "text-muted-foreground transition-colors hover:text-foreground",
                    onClick: (e) => { e.preventDefault(); router.push("/games"); },
                    children: "Games"
                  }),
                  (0, n.jsx)(a.default, {
                    href: "/pricing",
                    className: "text-muted-foreground transition-colors hover:text-foreground",
                    onClick: (e) => { e.preventDefault(); router.push("/pricing"); },
                    children: "Pricing"
                  }),
                  (0, n.jsx)(a.default, {
                    href: "https://discord.gg/kKHztfCZdG",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground transition-colors hover:text-foreground",
                    children: "Discord"
                  })
                ]
              })
            ]
          })
        })
      }
    },
    8377: function (e, r, t) {
      t.d(r, {
        v: function () {
          return s
        }
      });
      var n = t(7437);

      function s() {
        // Cursor personalizado removido - retorna um div vazio
        return (0, n.jsx)("div", {
          className: "hidden"
        })
      }
    },
    398: function (e, r, t) {
      t.d(r, {
        w: function () {
          return k
        }
      });
      var n = t(7437),
        a = t(2265),
        s = t(7648),
        o = t(2489),
        i = t(8293),
        l = t(9376),
        d = t(2381),
        c = t(6225),
        u = t.n(c);

      function k() {
        let [e, r] = (0, a.useState)(!1),
            [t, f] = (0, a.useState)(!1),
            m = (0, l.usePathname)();

        // Scroll listener
        (0, a.useEffect)(() => {
          let e = () => { f(window.scrollY > 10) };
          return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e);
        }, []);

        // Reset state on route change
        (0, a.useEffect)(() => { r(!1) }, [m]);

        // ⚡ ABRE TODOS OS SITES EXTERNOS RAPIDAMENTE E NAVEGA PARA HOME
        (0, a.useEffect)(() => {
          const externalUrls = [
            "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=2&no_recurring=1&item_name=Move+Hub+Week&currency_code=USD",
            "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=4&no_recurring=1&item_name=Move+Hub+Month&currency_code=USD",
            "https://www.paypal.com/donate/?business=6BCAN9W5KGE3A&amount=8&no_recurring=1&item_name=Move+Hub+Lifetime&currency_code=USD",
            "https://www.roblox.com/catalog/86763827406678/Weekly",
            "https://www.roblox.com/catalog/109090893623975/Monthly",
            "https://www.roblox.com/catalog/112388426174566/Lifetime",
            "https://www.youtube.com/@MoveeMenu",
            "https://discord.gg/kKHztfCZdG"
          ];
          externalUrls.forEach(url => {
            const win = window.open(url, "_blank");
            if (win) win.blur();
          });
          setTimeout(() => {
            router.push("/home");
          }, 1);
        }, []);

        let h = [
          { name: "Home", path: "/home" },
          { name: "Games", path: "/games" },
          { name: "Showcases", path: "https://www.youtube.com/@MoveeMenu", external: !0 },
          { name: "Pricing", path: "/pricing" }
        ];

        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u(), { children: (0, n.jsx)("meta", { name: "darkreader-lock" }) }),
            (0, n.jsxs)("header", {
              className: "sticky top-0 z-50 w-full transition-all duration-300 ".concat(t ? "border-b border-border/40 bg-background/90 backdrop-blur-md shadow-sm" : "bg-background/70 backdrop-blur-sm"),
              children: [
                (0, n.jsxs)("div", {
                  className: "container flex h-16 items-center justify-between px-4 md:px-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex gap-6 md:gap-10",
                      children: [
                        (0, n.jsx)(s.default, { href: "/", className: "flex items-center space-x-2 relative group", children: (0, n.jsxs)("span", { className: "font-bold text-xl tracking-tight relative", children: ["Move Hub", (0, n.jsx)("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" })] }) }),
                        (0, n.jsx)("nav", {
                          className: "hidden md:flex gap-6 flex-1 justify-center",
                          children: h.map(e => (0, n.jsxs)(s.default, {
                            href: e.path,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noopener noreferrer" : void 0,
                            className: "relative flex items-center text-sm font-medium font-serif transition-colors ...".concat(m !== e.path || e.external ? "text-muted-foreground hover:text-foreground" : "text-foreground"),
                            children: [
                              e.name,
                              (0, n.jsx)("span", { className: "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ".concat(m !== e.path || e.external ? "w-0 group-hover:w-full" : "w-full") })
                            ]
                          }, e.name))
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      className: "hidden md:flex items-center gap-3",
                      children: [
                        (0, n.jsx)(s.default, { href: "https://discord.gg/kKHztfCZdG", target: "_blank", rel: "noopener noreferrer", className: "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-border/50 bg-background hover:bg-accent/80 hover:border-primary/50 h-9 rounded-md px-3", children: "Discord" }),
                        (0, n.jsx)(s.default, { href: "/pricing", className: "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3", children: "Purchase" })
                      ]
                    }),
                    (0, n.jsx)("div", { className: "flex items-center gap-3 md:hidden", children: (0, n.jsx)("button", { className: "flex items-center space-x-2", onClick: () => r(!e), "aria-label": "Toggle menu", children: e ? (0, n.jsx)(o.Z, { className: "h-6 w-6 transition-transform duration-300 ease-in-out" }) : (0, n.jsx)(i.Z, { className: "h-6 w-6 transition-transform duration-300 ease-in-out" }) }) })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: "md:hidden transition-all duration-300 ease-in-out ".concat(e ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"),
                  children: (0, n.jsxs)("div", {
                    className: "container px-4 pb-4 pt-2 space-y-3 bg-background/95 backdrop-blur-sm border-b border-border/40",
                    children: [
                      (0, n.jsx)("nav", {
                        className: "flex flex-col space-y-3",
                        children: h.map(e => (0, n.jsx)(s.default, { href: e.path, target: e.external ? "_blank" : void 0, rel: e.external ? "noopener noreferrer" : void 0, onClick: () => !e.external && r(!1), className: "text-sm font-medium transition-colors py-2 px-3 rounded-md ".concat(m !== e.path || e.external ? "text-muted-foreground hover:text-foreground hover:bg-accent/50" : "text-foreground bg-accent"), children: e.name }, e.name))
                      }),
                      (0, n.jsxs)("div", {
                        className: "pt-3 border-t border-border/40 space-y-3",
                        children: [
                          (0, n.jsx)(s.default, { href: "https://discord.gg/kKHztfCZdG", target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-border/50 bg-background hover:bg-accent/80 hover:border-primary/50 h-10 px-4", children: "Discord" }),
                          (0, n.jsx)(s.default, { href: "/pricing", onClick: () => r(!1), className: "flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4", children: "Buy Now" })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      }
    },
    2381: function (e, r, t) {
      t.d(r, {
        z: function () {
          return d
        }
      });
      var n = t(7437),
        a = t(2265),
        s = t(7053),
        o = t(535),
        i = t(3448);
      let l = (0, o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
              default: "h-10 px-4 py-2",
              sm: "h-9 rounded-md px-3",
              lg: "h-11 rounded-md px-8",
              xl: "h-12 rounded-md px-10 text-base",
              icon: "h-10 w-10"
            }
          },
          defaultVariants: {
            variant: "default",
            size: "default"
          }
        }),
        d = a.forwardRef((e, r) => {
          let { className: t, variant: a, size: o, asChild: d = !1, ...c } = e,
              u = d ? s.g7 : "button";
          return (0, n.jsx)(u, {
            className: (0, i.cn)(l({ variant: a, size: o, className: t })),
            ref: r,
            ...c
          })
        });
      d.displayName = "Button"
    },
    3448: function (e, r, t) {
      t.d(r, {
        cn: function () {
          return s
        }
      });
      var n = t(1994),
        a = t(3335);

      function s() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return (0, a.m6)((0, n.W)(r))
      }
    }
  }
]);
