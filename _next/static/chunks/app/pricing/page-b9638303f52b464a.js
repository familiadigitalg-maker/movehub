// Substitua a função 'g' no seu código original por esta versão atualizada:

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
      .coupon-section {
        background: rgba(255, 255, 255, 0.05);
        border: 1px dashed rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 16px;
      }
      .coupon-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 8px 12px;
        color: white;
        font-size: 14px;
        transition: all 0.3s ease;
      }
      .coupon-input:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      }
      .coupon-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    `;
    document.head.appendChild(style);
  }

  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
  
  // Adiciona seção de cupom APENAS para lifetime
  const couponSection = planType === "lifetime" ? `
    <div class="coupon-section">
      <label class="block text-sm font-medium mb-2">🎟️ Tem um cupom de desconto?</label>
      <input 
        type="text" 
        id="couponInput" 
        class="coupon-input" 
        placeholder="Digite seu código de cupom"
      />
    </div>
  ` : '';

  modal.innerHTML = `
    <div class="modal-content bg-background border border-border/50 rounded-xl p-8 w-[400px] max-w-[95vw]">
      <h2 class="text-xl font-bold mb-4 text-center">Choose Payment Method</h2>
      <p class="mb-4 text-sm text-center">Select how you would like to pay ${planType}</p>

      ${couponSection}

      <div class="space-y-4 mb-6">
        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="PayPal">
          <span class="glow"></span>
          PayPal <span>${
            planType === "weekly" ? "$1,50" :
            planType === "monthly" ? "$3,00" :
            planType === "lifetime" ? "$6,00" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="Robux">
          <span class="glow"></span>
          Robux <span>${
            planType === "weekly" ? "100" :
            planType === "monthly" ? "250" :
            planType === "lifetime" ? "600" : ""
          }</span>
        </div>

        <div class="payment-option flex items-center justify-between p-4 border border-border rounded cursor-pointer text-base transition-all duration-400" data-method="Pix">
          <span class="glow"></span>
          Pix <span>${
            planType === "weekly" ? "R$ 3,00" :
            planType === "monthly" ? "R$ 5,50" :
            planType === "lifetime" ? "R$ 10,00" : ""
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
    
    // Lista de cupons válidos (adicione seus cupons aqui)
    const validCoupons = [
      "#GBXIT"
    ];
    
    // Verifica se há cupom preenchido e se é válido (apenas para lifetime)
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
        // Para lifetime com Pix, verifica se tem cupom VÁLIDO
        if (couponCode !== "" && !hasValidCoupon) {
          alert("❌ Cupom inválido! Verifique o código e tente novamente.");
          return;
        }
        url = hasValidCoupon ? "/lifetimepixcupom" : "/lifetimepix";
      }
    }

    if (url) window.open(url, "_blank");
  });
};
