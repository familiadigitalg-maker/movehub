if (!sessionStorage.getItem('reloaded')) {
  sessionStorage.setItem('reloaded', 'true');
  window.location.reload();
} else {
  sessionStorage.removeItem('reloaded');
}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [423], {
    8172: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 1167))
    },
    1167: function (e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: function () {
          return O
        }
      });
      var o = a(7437),
        r = a(7648),
        s = a(3145),
        i = a(398),
        n = a(2834),
        l = a(8377),
        d = a(5830),
        c = a(3247),
        u = a(2489),
        m = a(284),
        p = a(8124),
        x = a(3245),
        f = a(1817),
        h = a(5330),
        g = a(1217),
        A = a(7580),
        b = a(407),
        N = a(8867),
        y = a(2934),
        S = a(2023),
        v = a(2265),
        w = a(3448),
        j = a(279),
        k = a(2381),
        C = a(9174),
        P = a(8536),
        B = a(9371),
        E = a(8614),
        R = a(9820),
        F = a(4291),
        D = a(8619);
      let T = v.forwardRef((e, t) => {
        let {
          className: a,
          children: r,
          ...s
        } = e;
        return (0, o.jsxs)(D.fC, {
          ref: t,
          className: (0, w.cn)("relative overflow-hidden", a),
          ...s,
          children: [(0, o.jsx)(D.l_, {
            className: "h-full w-full rounded-[inherit]",
            children: r
          }), (0, o.jsx)(I, {}), (0, o.jsx)(D.Ns, {})]
        })
      });
      T.displayName = D.fC.displayName;
      let I = v.forwardRef((e, t) => {
        let {
          className: a,
          orientation: r = "vertical",
          ...s
        } = e;
        return (0, o.jsx)(D.gb, {
          ref: t,
          orientation: r,
          className: (0, w.cn)("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2.5 flex-col border-t border-t-transparent p-[1px]", a),
          ...s,
          children: (0, o.jsx)(D.q4, {
            className: "relative flex-1 rounded-full bg-border"
          })
        })
      });
      I.displayName = D.gb.displayName;
      var M = a(1593),
        H = a(1488),
        W = a(5937);
      let G = [{
          id: "",
          name: "Beyond Volleyball League",
          image: "https://i.imgur.com/xuBERNM.png "  
        }, {
          id: "",
          name: "Volleyball 4.2",
          image: "https://i.imgur.com/MkdCjHk.png"
        }, {
          id: "",
          name: "Old CVR",
          image: "https://i.imgur.com/CxiiiuX.png"
        }, {
          name: "Type Soul",
          image: "https://i.imgur.com/3IE6FSx.png"
        }, {
          id: "",
          name: "Locked",
          image: "https://i.imgur.com/k9OaFRN.png"
        }, {
          id: "",
          name: "Spiked",
          image: "https://i.imgur.com/fvCtZlC.png"
        }, {
          id: "",
          name: "Untitled Boxing Game",
          image: "https://i.imgur.com/9aF9sbb.png"
        }, {
          id: "",
          name: "The Strongest Battlegrounds",
          image: "https://i.imgur.com/2raimJ8.png"
        }, {
          id: "",
          name: "Volleyball Ascended",
          image: "https://i.imgur.com/Vcowly1.png"
        }, {
          id: "",
          name: "Karate",
          image: "https://i.imgur.com/ShZLhcK.png"
        }];

      function O() {
        let [e, t] = (0, v.useState)(!1), [a, D] = (0, v.useState)({}), [I, O] = (0, v.useState)(""), [V, z] = (0, v.useState)(G), [J, L] = (0, v.useState)(null), [K, U] = (0, v.useState)(null), [_, Y] = (0, v.useState)(null), [q, Q] = (0, v.useState)({}), [X, $] = (0, v.useState)(!1);
        (0, v.useEffect)(() => {
          t(!0);
          let e = () => {
            $(window.innerWidth < 768)
          };
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [I]);
        let ee = e => {
            D(t => ({
              ...t,
              [e]: !0
            })), Q(t => ({
              ...t,
              [e]: !1
            }))
          },
          et = e => {
            Q(t => ({
              ...t,
              [e]: !1
            }))
          },
          ea = e => "universal" === e.id ? "/assets/images/universal.png" : "/assets/images/".concat(e.id, ".png"),
          eo = e => {
            navigator.clipboard.writeText(e), Y(e), (0, P.Am)({
              title: "Copied!",
              description: '"'.concat(e, '" copied to clipboard')
            }), setTimeout(() => Y(null), 2e3)
          },
          er = e => {
          };
        return (0, o.jsx)(H.pn, {
          children: (0, o.jsxs)("div", {
            className: "min-h-screen flex flex-col ".concat(e ? "opacity-100" : "opacity-0", " transition-opacity duration-500"),
            children: [(0, o.jsx)(d.k, {}), !X && (0, o.jsx)(l.v, {}), (0, o.jsx)(i.w, {}), (0, o.jsxs)("main", {
              className: "flex-1",
              children: [(0, o.jsx)("section", {
                className: "relative overflow-hidden",
                children: (0, o.jsx)("div", {
                  className: "container relative pt-20 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6",
                  children: (0, o.jsxs)(B.E.div, {
                    initial: {
                      opacity: 0,
                      y: 20
                    },
                    animate: {
                      opacity: 1,
                      y: 0
                    },
                    className: "max-w-5xl mx-auto text-center space-y-6 md:space-y-8",
                    children: [(0, o.jsx)("h1", {
                      className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight",
                      children: (0, o.jsx)("span", {
                        className: "",
                        children: "Supported Games"
                      })
                    })]
                  })
                })
              }), (0, o.jsxs)("section", {
                className: "container py-8 sm:py-12 md:py-16 px-4 sm:px-6",
                children: [(0, o.jsx)(B.E.div, {
                  initial: {
                    opacity: 0,
                    y: 10
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                }), (0, o.jsxs)("div", {
                }), (0, o.jsx)("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5",
                  children: (0, o.jsx)(E.M, {
                    mode: "popLayout",
                    children: V.map((e, t) => (0, o.jsx)(B.E.div, {
                      layout: !0,
                      initial: {
                        opacity: 0,
                        y: 0
                      },
                      animate: {
                        opacity: 1,
                        y: 0
                      },
                      exit: {
                        opacity: 0,
                        scale: .95
                      },
                      transition: {
                        duration: .3,
                        delay: Math.min(.03 * t, .15)
                      },
                      children: (0, o.jsx)(R.Zb, {
                        className: "group relative h-full border bg-background overflow-hidden cursor-pointer",
                        onClick: () => L(e),
                        onMouseEnter: () => !X && U(e.id),
                        onMouseLeave: () => !X && U(null),
                        children: (0, o.jsxs)("div", {
                          children: [q[e.id] && (0, o.jsx)("div", {
                            children: (0, o.jsx)(f.Z, {
                            })
                          }), a[e.id] ? (0, o.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent",
                            children: (0, o.jsx)("div", {
                              className: "p-3 sm:p-4 rounded-2xl bg-primary/10",
                              children: (0, o.jsx)(m.Z, {
                                className: "h-12 sm:h-16 w-12 sm:w-16 text-primary/30"
                              })
                            })
}) : (0, o.jsx)("img", {
  src: e.image,
  alt: e.name,
  className: (0, w.cn)(
    "object-cover transition-all duration-700",
    K === e.id ? "scale-125 brightness-125" : "scale-115 brightness-90"
  )
}),
                        (0, o.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                          }), (0, o.jsxs)("div", {
                            className: "absolute bottom-0 left-0 right-0 p-4 sm:p-5",
                            children: [(0, o.jsx)("h3", {
                              className: "text-white font-semibold text-base sm:text-lg mb-1 truncate",
                              children: e.name
                            }), (0, o.jsxs)("div", {
                              className: "text-white font-semibold text-base sm:text-lg mb-1 truncat",

                            })]
                          })]
                        })
                      })
                    }, e.id))
                  })
                }), 0 === V.length && (0, o.jsx)(B.E.div, {
                })]
              })]
            }), (0, o.jsx)(n.$, {})]
          })
        })
      }
    },
    5937: function (e, t, a) {
      "use strict";
      a.d(t, {
        Cd: function () {
          return d
        },
        X: function () {
          return c
        },
        bZ: function () {
          return l
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(535),
        i = a(3448);
      let n = (0, s.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
          variants: {
            variant: {
              default: "bg-background text-foreground",
              destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
              success: "border-green-500/50 text-green-500 dark:border-green-500 [&>svg]:text-green-500 bg-green-500/10",
              warning: "border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500 bg-amber-500/10",
              info: "border-blue-500/50 text-blue-500 dark:border-blue-500 [&>svg]:text-blue-500 bg-blue-500/10"
            }
          },
          defaultVariants: {
            variant: "default"
          }
        }),
        l = r.forwardRef((e, t) => {
          let {
            className: a,
            variant: r,
            ...s
          } = e;
          return (0, o.jsx)("div", {
            ref: t,
            role: "alert",
            className: (0, i.cn)(n({
              variant: r
            }), a),
            ...s
          })
        });
      l.displayName = "Alert";
      let d = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("h5", {
          ref: t,
          className: (0, i.cn)("mb-1 font-medium leading-none tracking-tight", a),
          ...r
        })
      });
      d.displayName = "AlertTitle";
      let c = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("div", {
        })
      });
      c.displayName = "AlertDescription"
    },
    9174: function (e, t, a) {
      "use strict";
      a.d(t, {
        C: function () {
          return n
        }
      });
      var o = a(7437);
      a(2265);
      var r = a(535),
        s = a(3448);
      let i = (0, r.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
          variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500/10 text-green-500 border border-green-500/20 hover:bg-green-500/20",
            warning: "border-transparent bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 hover:bg-yellow-500/20",
            info: "border-transparent bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      });

      function n(e) {
        let {
          className: t,
          variant: a,
          ...r
        } = e;
        return (0, o.jsx)("div", {
          className: (0, s.cn)(i({
            variant: a
          }), t),
          ...r
        })
      }
    },
    9820: function (e, t, a) {
      "use strict";
      a.d(t, {
        Ol: function () {
          return n
        },
        SZ: function () {
          return d
        },
        Zb: function () {
          return i
        },
        aY: function () {
          return c
        },
        eW: function () {
          return u
        },
        ll: function () {
          return l
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(3448);
      let i = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("div", {
          ref: t,
          className: (0, s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", a),
          ...r
        })
      });
      i.displayName = "Card";
      let n = r.forwardRef((e, t) => {
        let {
        } = e;
      });
      n.displayName = "CardHeader";
      let l = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("h3", {
          ref: t,
          className: (0, s.cn)("text-2xl font-semibold leading-none tracking-tight", a),
          ...r
        })
      });
      l.displayName = "CardTitle";
      let d = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("p", {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", a),
          ...r
        })
      });
      d.displayName = "CardDescription";
      let c = r.forwardRef((e, t) => {
        let {
        } = e;
      });
      c.displayName = "CardContent";
      let u = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex items-center p-1 pt-0", a),
          ...r
        })
      });
    },
    4291: function (e, t, a) {
      "use strict";
      a.d(t, {
        $N: function () {
          return f
        },
        Be: function () {
          return h
        },
        GG: function () {
          return c
        },
        Vq: function () {
          return l
        },
        cN: function () {
          return x
        },
        cZ: function () {
          return m
        },
        fK: function () {
          return p
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(714),
        i = a(2489),
        n = a(3448);
      let l = s.fC;
      s.xz;
      let d = s.h_,
        c = s.x8,
        u = r.forwardRef((e, t) => {
          let {
            className: a,
            ...r
          } = e;
          return (0, o.jsx)(s.aV, {
            ref: t,
            className: (0, n.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
            ...r
          })
        });
      u.displayName = s.aV.displayName;
      let m = r.forwardRef((e, t) => {
        let {
          className: a,
          children: r,
          ...l
        } = e;
        return (0, o.jsxs)(d, {
          children: [(0, o.jsx)(u, {}), (0, o.jsxs)(s.VY, {
            ref: t,
            className: (0, n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
            ...l,
            children: [r, (0, o.jsxs)(s.x8, {
              className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: [(0, o.jsx)(i.Z, {
                className: "h-4 w-4"
              }), (0, o.jsx)("span", {
                className: "sr-only",
                children: "Close"
              })]
            })]
          })]
        })
      });
      m.displayName = s.VY.displayName;
      let p = e => {
        let {
          className: t,
          ...a
        } = e;
        return (0, o.jsx)("div", {
          className: (0, n.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
          ...a
        })
      };
      p.displayName = "DialogHeader";
      let x = e => {
        let {
          className: t,
          ...a
        } = e;
        return (0, o.jsx)("div", {
          className: (0, n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
          ...a
        })
      };
      x.displayName = "DialogFooter";
      let f = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)(s.Dx, {
          ref: t,
          className: (0, n.cn)("text-lg font-semibold leading-none tracking-tight", a),
          ...r
        })
      });
      f.displayName = s.Dx.displayName;
      let h = r.forwardRef((e, t) => {
        let {
          className: a,
          ...r
        } = e;
        return (0, o.jsx)(s.dk, {
          ref: t,
          className: (0, n.cn)("text-sm text-muted-foreground", a),
          ...r
        })
      });
      h.displayName = s.dk.displayName
    },
    279: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return i
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(3448);
      let i = r.forwardRef((e, t) => {
        let {
          className: a,
          type: r,
          ...i
        } = e;
        return (0, o.jsx)("input", {
          type: r,
          ref: t,
          ...i
        })
      });
    },
    1593: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(7910),
        i = a(3448);
      let n = r.forwardRef((e, t) => {
        let {
          className: a,
          orientation: r = "horizontal",
          decorative: n = !0,
          children: l,
          ...d
        } = e;
        return l ? (0, o.jsxs)("div", {
          className: "flex items-center w-full",
          children: [(0, o.jsx)(s.f, {
            ref: t,
            decorative: n,
            orientation: r,
            className: (0, i.cn)("shrink-0 bg-border", "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]", a),
            ...d
          }), l, (0, o.jsx)(s.f, {
            decorative: n,
            orientation: r,
            className: (0, i.cn)("shrink-0 bg-border", "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]", a)
          })]
        }) : (0, o.jsx)(s.f, {
          ref: t,
          decorative: n,
          orientation: r,
          className: (0, i.cn)("shrink-0 bg-border", "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]", a),
          ...d
        })
      });
      n.displayName = s.f.displayName
    },
    1488: function (e, t, a) {
      "use strict";
      a.d(t, {
        _v: function () {
          return c
        },
        aJ: function () {
          return d
        },
        pn: function () {
          return n
        },
        u: function () {
          return l
        }
      });
      var o = a(7437),
        r = a(2265),
        s = a(2570),
        i = a(3448);
      let n = s.zt,
        l = s.fC,
        d = s.xz,
        c = r.forwardRef((e, t) => {
          let {
            className: a,
            sideOffset: r = 4,
            ...n
          } = e;
          return (0, o.jsx)(s.VY, {
            ref: t,
            sideOffset: r,
            className: (0, i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95", a),
            ...n
          })
        });
      c.displayName = s.VY.displayName
    },
    8536: function (e, t, a) {
      "use strict";
      a.d(t, {
        Am: function () {
          return u
        },
        pm: function () {
          return m
        }
      });
      var o = a(2265);
      let r = 0,
        s = new Map,
        i = e => {
          if (s.has(e)) return;
          let t = setTimeout(() => {
            s.delete(e), c({
              type: "REMOVE_TOAST",
              toastId: e
            })
          }, 5e3);
          s.set(e, t)
        },
        n = (e, t) => {
          switch (t.type) {
          case "ADD_TOAST":
            return {
              ...e, toasts: [t.toast, ...e.toasts].slice(0, 1)
            };
          case "UPDATE_TOAST":
            return {
              ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {
                ...e,
                ...t.toast
              } : e)
            };
          case "DISMISS_TOAST": {
            let {
              toastId: a
            } = t;
            return a ? i(a) : e.toasts.forEach(e => {
              i(e.id)
            }), {
              ...e,
              toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                ...e,
                open: !1
              } : e)
            }
          }
          case "REMOVE_TOAST":
            if (void 0 === t.toastId) return {
              ...e,
              toasts: []
            };
            return {
              ...e, toasts: e.toasts.filter(e => e.id !== t.toastId)
            }
          }
        },
        l = [],
        d = {
          toasts: []
        };

      function c(e) {
        d = n(d, e), l.forEach(e => {
          e(d)
        })
      }

      function u(e) {
        let {
          ...t
        } = e, a = (r = (r + 1) % Number.MAX_VALUE).toString(), o = () => c({
          type: "DISMISS_TOAST",
          toastId: a
        });
        return c({
          type: "ADD_TOAST",
          toast: {
            ...t,
            id: a,
            open: !0,
            onOpenChange: e => {
              e || o()
            }
          }
        }), {
          id: a,
          dismiss: o,
          update: e => c({
            type: "UPDATE_TOAST",
            toast: {
              ...e,
              id: a
            }
          })
        }
      }

      function m() {
        let [e, t] = o.useState(d);
        return o.useEffect(() => (l.push(t), () => {
          let e = l.indexOf(t);
          e > -1 && l.splice(e, 1)
        }), [e]), {
          ...e,
          toast: u,
          dismiss: e => c({
            type: "DISMISS_TOAST",
            toastId: e
          })
        }
      }
    }
  },
  function (e) {
    e.O(0, [63, 163, 714, 145, 261, 21, 664, 971, 117, 744], function () {
      return e(e.s = 8172)
    }), _N_E = e.O()
  }

]);

