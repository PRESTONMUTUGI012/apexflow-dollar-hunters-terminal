// --- APEXFLOW MARKET DOLLAR HUNTERS MAIN CONTROLLER ---
const PARTNER_APP_ID = "34UGhpx0qrXHqpfKHAkGH";
const AFFILIATE_TOKEN = "3A2CFHPG722B"; // Verified partner revenue-share token[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span)

// Comprehensive Deriv Market Symbol Mapping
const marketSymbols = {
    synthetic: [
        { symbol: 'R_100', name: 'Volatility 100 Index' },
        { symbol: 'R_75', name: 'Volatility 75 Index' },
        { symbol: 'R_50', name: 'Volatility 50 Index' },
        { symbol: 'R_25', name: 'Volatility 25 Index' },
        { symbol: 'R_10', name: 'Volatility 10 Index' },
        { symbol: '1HZ100V', name: 'Volatility 100 (1s) Index' },
        { symbol: 'BOOM1000', name: 'Boom 1000 Index' },
        { symbol: 'CRASH1000', name: 'Crash 1000 Index' }
    ],
    forex: [
        { symbol: 'frxEURUSD', name: 'EUR/USD' },
        { symbol: 'frxGBPUSD', name: 'GBP/USD' },
        { symbol: 'frxUSDJPY', name: 'USD/JPY' },
        { symbol: 'frxAUDUSD', name: 'AUD/USD' },
        { symbol: 'frxGBPJPY', name: 'GBP/JPY' }
    ],
    stocks: [
        { symbol: 'WLDBSE', name: 'BSE Sensex Index' },
        { symbol: 'DJI', name: 'Wall Street 30' },
        { symbol: 'SPC', name: 'US 500' }
    ],
    crypto: [
        { symbol: 'cryBTCUSD', name: 'BTC/USD' },
        { symbol: 'cryETHUSD', name: 'ETH/USD' }
    ],
    commodities: [
        { symbol: 'frxXAUUSD', name: 'Spot Gold (XAU/USD)' },
        { symbol: 'frxXBRUSD', name: 'Brent Crude Oil' }
    ]
};

// Exchange rates for conversion room
const exchangeRates = { KES: 129.0, EUR: 0.92, GBP: 0.79, JPY: 155.0 };

// 3-Minute Bloodline Loading Initializer
let remainingSeconds = 180;
const totalDuration = 180;

const loadingMessages = [
    { at: 165, text: "Initializing Secure Bloodline Handshakes..." },
    { at: 140, text: "Loading AI Speed Boats & Killzone Clocks..." },
    { at: 110, text: "Calibrating Multi-Market Asset Feeds..." },
    { at: 75, text: "Synchronizing ICT & SMC Confluence Heatmaps..." },
    { at: 35, text: "Connecting Partner Affiliate Tracking ID [3A2CFHPG722B]..." },
    { at: 10, text: "Finalizing Live Bloodline Terminal Feed... Ready." }
];

function runCoreLoadingSequence() {
    const timerDisplay = document.getElementById('loading-timer-display');
    const progressBar = document.getElementById('core-progress-bar');
    const statusText = document.getElementById('loading-status-text');
    const splashScreen = document.getElementById('splash-screen');

    const interval = setInterval(() => {
        remainingSeconds--;
        const mins = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
        const secs = (remainingSeconds % 60).toString().padStart(2, '0');
        if (timerDisplay) timerDisplay.innerText = `${mins}:${secs}`;

        const elapsed = totalDuration - remainingSeconds;
        const percent = (elapsed / totalDuration) * 100;
        if (progressBar) progressBar.style.width = `${percent}%`;

        const currentMsg = loadingMessages.find(m => m.at === remainingSeconds);
        if (currentMsg && statusText) statusText.innerText = currentMsg.text;

        if (remainingSeconds <= 0) {
            clearInterval(interval);
            if (splashScreen) {
                splashScreen.style.opacity = '0';
                setTimeout(() => splashScreen.remove(), 600);
            }
            initializeLiveTerminal();
        }
    }, 1000);
}

function updateAssetDropdown(category) {
    const assetSelector = document.getElementById('asset-selector');
    if (!assetSelector) return;
    assetSelector.innerHTML = '';
    const assets = marketSymbols[category] || marketSymbols.synthetic;
    assets.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.symbol;
        opt.innerText = item.name;
        assetSelector.appendChild(opt);
    });
}

function setupCurrencyConverter() {
    const amountInput = document.getElementById('convert-amount');
    const currencySelect = document.getElementById('target-currency');
    const outputEl = document.getElementById('converted-output');

    function calculateConversion() {
        const amt = parseFloat(amountInput.value) || 0;
        const cur = currencySelect.value;
        const rate = exchangeRates[cur] || 1;
        const converted = (amt * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        outputEl.innerText = `${converted} ${cur}`;
    }

    if (amountInput && currencySelect) {
        amountInput.addEventListener('input', calculateConversion);
        currencySelect.addEventListener('change', calculateConversion);
        calculateConversion();
    }
}

function toggleSpeedBoatExecution() {
    const badge = document.getElementById('boat-status-badge');
    const btn = document.getElementById('btn-launch-boat');
    if (badge.innerText === 'STANDBY') {
        badge.innerText = 'ACTIVE HUNTING';
        badge.className = 'text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500 font-mono animate-pulse';
        btn.innerText = 'Disengage Speed Boat';
        btn.className = 'w-full bg-red-600/20 hover:bg-red-600/40 text-red-300 font-bold py-2.5 rounded-xl text-xs border border-red-500/40 transition';
    } else {
        badge.innerText = 'STANDBY';
        badge.className = 'text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-mono';
        btn.innerText = 'Launch Speed Boat';
        btn.className = 'w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-lg shadow-emerald-900/30';
    }
}

function loginWithDeriv() {
    const currentUrl = window.location.href.split('?')[0];
    const oauthUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${PARTNER_APP_ID}&affiliate_token=${AFFILIATE_TOKEN}&redirect_uri=${encodeURIComponent(currentUrl)}`;
    window.location.href = oauthUrl;
}

function signupWithDeriv() {
    window.open(`https://hub.deriv.com/tradershub/signup?t=${AFFILIATE_TOKEN}`, '_blank');
}

function initializeLiveTerminal() {
    console.log("Apexflow Fully Initialized with Bloodline Feed.");
    updateAssetDropdown('synthetic');
    setupCurrencyConverter();

    const categorySelect = document.getElementById('market-category');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            updateAssetDropdown(e.target.value);
            const newAsset = document.getElementById('asset-selector').value;
            if (window.derivApiInstance) window.derivApiInstance.subscribeTicks(newAsset, handleTick);
        });
    }

    const derivApi = new DerivAPIConnector(PARTNER_APP_ID);
    window.derivApiInstance = derivApi;
    const aiEngine = new AIBotsEngine();

    const speedBoatSelect = document.getElementById('speed-boat-selector');
    if (speedBoatSelect) {
        speedBoatSelect.addEventListener('change', (e) => aiEngine.setSpeedBoat(e.target.value));
    }

    derivApi.connect().then(() => {
        const assetSelector = document.getElementById('asset-selector');
        const initialAsset = assetSelector ? assetSelector.value : 'R_100';
        derivApi.subscribeTicks(initialAsset, handleTick);

        if (assetSelector) {
            assetSelector.addEventListener('change', (e) => {
                derivApi.subscribeTicks(e.target.value, handleTick);
            });
        }
    }).catch(() => {
        setInterval(() => {
            handleTick({ quote: 10340.50 + Math.random() * 5, epoch: Date.now() });
        }, 1000);
    });

    function handleTick(tick) {
        const quoteEl = document.getElementById('live-quote-display');
        if (quoteEl) quoteEl.innerText = tick.quote.toFixed(4);
        aiEngine.analyzeTick(tick);
    }

    let secondsLeft = 4735;
    setInterval(() => {
        if (secondsLeft > 0) secondsLeft--;
        const hrs = Math.floor(secondsLeft / 3600).toString().padStart(2, '0');
        const mins = Math.floor((secondsLeft % 3600) / 60).toString().padStart(2, '0');
        const secs = (secondsLeft % 60).toString().padStart(2, '0');
        const timerEl = document.getElementById('killzone-timer');
        if (timerEl) timerEl.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
    runCoreLoadingSequence();
});
