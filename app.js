// Contract Configuration - REAL CONTRACT
const CONTRACT_ADDRESS = '0xAD81F7819465e3e4201C587c20C4b8E1Bb9920eb';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

// Stable Public RPC Node for initial loading
const READ_ONLY_RPC = 'https://bsc-dataseed1.binance.org/';

// ABIs remain the same...
const USDT_ABI = [{"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "type": "function"}, {"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "type": "function"}, {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "type": "function"}];
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"planId","type":"uint256"},{"indexed":false,"internalType":"address","name":"upline","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalBalance","type":"uint256"}],"name":"PoolWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"ReferralBonusExpired","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DAILY_WITHDRAWAL_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_ACTIVE_INVESTMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_WITHDRAWAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"calculateAvailableEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_planId","type":"uint256"},{"internalType":"address","name":"_upline","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getActiveInvestmentStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractStats","outputs":[{"internalType":"uint256","name":"totalExpiredBonuses","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawalFeesCollected","type":"uint256"},{"internalType":"uint256","name":"totalReferralBonusesPaid","type":"uint256"},{"internalType":"uint256","name":"currentContractBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlansCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"availableEarnings","type":"uint256"},{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"hasActiveInvestment","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInvestments","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"planId","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastWithdrawalTime","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"internalType":"struct Aurion.UserInvestment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investmentPlans","outputs":[{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"uint256","name":"dailyROI","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"totalROI","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralLevels","outputs":[{"internalType":"uint256","name":"percentage","type":"uint256"},{"internalType":"uint256","name":"minDirectReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalExpiredReferralBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"lastWithdrawal","type":"uint256"},{"internalType":"bool","name":"exists","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawExpiredBonuses","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Global Variables
let web3;
let contract;
let usdtContract;
let userAccount;
let selectedPlan = null;
let referralAddress = null;

// DOM Elements
const preloader = document.querySelector('.preloader');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const connectWalletBtn = document.getElementById('connectWallet');
const notification = document.getElementById('notification');
const investmentSuccessPopup = document.getElementById('investmentSuccessPopup');

// Section Elements
const sections = {
    home: document.getElementById('home'),
    dashboard: document.getElementById('dashboard'),
    invest: document.getElementById('invest'),
    referral: document.getElementById('referral'),
    whitepaper: document.getElementById('whitepaper'),
    audit: document.getElementById('audit'),
    downloads: document.getElementById('downloads'),
    faq: document.getElementById('faq')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    generateInvestmentPlans();
    checkPreloader();
    checkURLForReferral();
    setupFAQ();
});

// Setup FAQ functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

// Check URL for referral parameter
function checkURLForReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const refAddress = urlParams.get('ref');
    if (refAddress) {
        referralAddress = refAddress;
        document.getElementById('referrerAddress').value = refAddress;
        showNotification('Referral address detected from URL!', 'success');
    }
}

// Initialize Web3 and Contract with Fallback
async function initializeApp() {
    // Always start with a read-only provider for reliability
    try {
        web3 = new Web3(new Web3.providers.HttpProvider(READ_ONLY_RPC));
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        console.log('Read-only Web3 initialized successfully');
        loadContractData(); // Load initial data immediately
    } catch (error) {
        console.error('Error initializing read-only Web3:', error);
    }

    // If MetaMask is present, we'll switch to it when user connects
    if (typeof window.ethereum !== 'undefined') {
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
         if (accounts.length > 0) {
             // Auto-connect if already authorized
             connectWallet();
         }
    }
}

// ===================================================================
// MODIFIED SCRIPT: ROBUST DATA LOADING WITH AGGRESSIVE CHUNKING
// ===================================================================
async function loadContractData() {
    if (!contract) return;

    const DEPLOYMENT_BLOCK = 32865660; // Contract creation block

    try {
        // 1. Get TVL (Fast call)
        const balance = await contract.methods.getContractBalance().call();
        const formattedBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById('contractBalance').textContent = `${formattedBalance} USDT`;
        // document.getElementById('totalTVL').textContent = `$${formattedBalance}`; // REMOVED

        // Set loading state for elements that were removed
        // document.getElementById('totalUsers').textContent = 'Calculating...'; // REMOVED
        // document.getElementById('totalPaid').textContent = '$Calculating...'; // REMOVED

        // 2. Robust Chunking for Events
        const latestBlock = await web3.eth.getBlockNumber();
        const CHUNK_SIZE = 3000; // Very safe chunk size for public nodes
        
        let allInvestors = new Set();
        let totalPaidOutWei = new BigNumber(0);

        // Process blocks in chunks
        for (let i = DEPLOYMENT_BLOCK; i <= latestBlock; i += CHUNK_SIZE) {
            const toBlock = Math.min(i + CHUNK_SIZE - 1, Number(latestBlock));
            
            // Fetch both event types in parallel for speed
            try {
                const [chunkDeposits, chunkWithdraws] = await Promise.all([
                    contract.getPastEvents('Deposit', { fromBlock: i, toBlock: toBlock }),
                    contract.getPastEvents('Withdraw', { fromBlock: i, toBlock: toBlock })
                ]);

                // Process this chunk's data immediately
                chunkDeposits.forEach(event => allInvestors.add(event.returnValues.user));
                chunkWithdraws.forEach(event => {
                    totalPaidOutWei = totalPaidOutWei.plus(new BigNumber(event.returnValues.amount));
                });

            } catch (chunkError) {
                console.warn(`Failed to fetch chunk ${i}-${toBlock}, retrying once...`);
                // Simple one-time retry logic for a failed chunk
                try {
                     const [chunkDeposits, chunkWithdraws] = await Promise.all([
                        contract.getPastEvents('Deposit', { fromBlock: i, toBlock: toBlock }),
                        contract.getPastEvents('Withdraw', { fromBlock: i, toBlock: toBlock })
                    ]);
                    chunkDeposits.forEach(event => allInvestors.add(event.returnValues.user));
                    chunkWithdraws.forEach(event => {
                        totalPaidOutWei = totalPaidOutWei.plus(new BigNumber(event.returnValues.amount));
                    });
                } catch (retryError) {
                     console.error(`Retry failed for chunk ${i}-${toBlock}. Data might be slightly incomplete.`);
                }
            }
        }

        // 3. Finalize and Display Data (for elements that were removed)
        // document.getElementById('totalUsers').textContent = allInvestors.size; // REMOVED
        
        const formattedTotalPaidOut = parseFloat(web3.utils.fromWei(totalPaidOutWei.toFixed(), 'ether')).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        // document.getElementById('totalPaid').textContent = `$${formattedTotalPaidOut}`; // REMOVED

    } catch (error) {
        console.error('Critical error loading contract data:', error);
        // document.getElementById('totalUsers').textContent = 'Error'; // REMOVED
        // document.getElementById('totalPaid').textContent = '$Error'; // REMOVED
    }
}

// Wallet Functions
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        return showNotification('Please install MetaMask!', 'error');
    }
    try {
        // Switch to MetaMask provider
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x38') {
             try {
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x38' }] });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [{ chainId: '0x38', chainName: 'Binance Smart Chain', nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 }, rpcUrls: ['https://bsc-dataseed.binance.org/'], blockExplorerUrls: ['https://bscscan.com/'] }] });
                } else { throw switchError; }
            }
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            userAccount = accounts[0];
            updateWalletUI();
            loadUserData();
            // Rerunning loadContractData here ensures we have the absolute latest data
            // but might be redundant if read-only worked. Optional.
            // loadContractData(); 
            showNotification('Wallet connected successfully!', 'success');
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet', 'error');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    navToggle.addEventListener('click', toggleNavMenu);
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    document.querySelectorAll('.nav__link, .footer-link, button[data-section]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = e.target.closest('[data-section]');
            if (targetElement) {
                const section = targetElement.getAttribute('data-section');
                showSection(section);
                navMenu.classList.remove('active');
            }
        });
    });
    connectWalletBtn.addEventListener('click', connectWallet);
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    document.getElementById('newInvestment').addEventListener('click', () => {
        investmentSuccessPopup.classList.remove('active');
        showPlans();
    });
    document.getElementById('investmentAmount').addEventListener('input', updateInvestmentSummary);
    investmentSuccessPopup.addEventListener('click', (e) => {
        if (e.target === investmentSuccessPopup) {
            investmentSuccessPopup.classList.remove('active');
        }
    });
    document.getElementById('withdrawEarnings').addEventListener('click', withdrawEarnings);
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    document.getElementById('shareTelegram').addEventListener('click', () => shareOnSocial('telegram'));
    document.getElementById('shareTwitter').addEventListener('click', () => shareOnSocial('twitter'));
    document.getElementById('shareWhatsapp').addEventListener('click', () => shareOnSocial('whatsapp'));

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            userAccount = accounts.length > 0 ? accounts[0] : null;
            updateWalletUI();
            if(userAccount) loadUserData();
            else showWalletAlerts();
        });
        window.ethereum.on('chainChanged', () => window.location.reload());
    }
}

// Navigation Functions
function toggleNavMenu() {
    navMenu.classList.toggle('active');
}

function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        if (section) section.style.display = 'none';
    });
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
    if (sections[sectionName]) {
        sections[sectionName].style.display = 'flex'; // Use flex for centering
        window.scrollTo(0, 0);
        const navLink = document.querySelector(`.nav__link[data-section="${sectionName}"]`);
        if (navLink) navLink.classList.add('active');
        if ((sectionName === 'dashboard' || sectionName === 'referral') && userAccount) {
            loadUserData();
        }
    }
}

function updateWalletUI() {
    if (userAccount) {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}`;
        hideWalletAlerts();
    } else {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> Connect Wallet`;
        showWalletAlerts();
    }
}

function showWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert'].forEach(id => document.getElementById(id).style.display = 'flex');
    ['quickStats', 'actionButtons', 'noInvestmentsMessage', 'referralStats', 'referralLinkSection'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function hideWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert'].forEach(id => document.getElementById(id).style.display = 'none');
     ['quickStats', 'referralStats'].forEach(id => {
         const el = document.getElementById(id);
        if (el) el.style.display = 'grid';
    });
    document.getElementById('actionButtons').style.display = 'flex';
     document.getElementById('referralLinkSection').style.display = 'block';
}

async function loadUserData() {
    if (!contract || !userAccount) return;
    try {
        // Ensure we are using the connected wallet provider for user-specific data
        if (window.ethereum && web3.currentProvider !== window.ethereum) {
             web3 = new Web3(window.ethereum);
             contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        }

        const userInfo = await contract.methods.getUserInfo(userAccount).call();
        const availableEarnings = await contract.methods.calculateAvailableEarnings(userAccount).call();

        // Dashboard stats
        document.getElementById('totalDeposits').textContent = `${parseFloat(web3.utils.fromWei(userInfo.totalDeposits, 'ether')).toFixed(2)} USDT`;
        document.getElementById('availableEarnings').textContent = `${parseFloat(web3.utils.fromWei(availableEarnings, 'ether')).toFixed(2)} USDT`;
        document.getElementById('totalWithdrawn').textContent = `${parseFloat(web3.utils.fromWei(userInfo.totalWithdrawn, 'ether')).toFixed(2)} USDT`;
        document.getElementById('referralBonus').textContent = `${parseFloat(web3.utils.fromWei(userInfo.referralBonus, 'ether')).toFixed(2)} USDT`;

        // Referral stats
        document.getElementById('totalTeam').textContent = userInfo.directReferrals;
        document.getElementById('referralDirectReferrals').textContent = userInfo.directReferrals;
        document.getElementById('availableBonus').textContent = `${parseFloat(web3.utils.fromWei(userInfo.referralBonus, 'ether')).toFixed(2)} USDT`;
        
        await loadUserInvestments();
        generateReferralLink();
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

async function loadUserInvestments() {
    if (!contract || !userAccount) return;

    const noInvestmentsMessage = document.getElementById('noInvestmentsMessage');
    noInvestmentsMessage.style.display = 'none';

    try {
        const investments = await contract.methods.getUserInvestments(userAccount).call();

        if (investments.length === 0) {
            noInvestmentsMessage.style.display = 'flex';
        } else {
            noInvestmentsMessage.style.display = 'none';
        }

    } catch (error) {
        console.error('Failed to fetch user investments:', error);
        noInvestmentsMessage.style.display = 'flex';
        noInvestmentsMessage.querySelector('h3').textContent = 'Error Loading Data';
        noInvestmentsMessage.querySelector('p').textContent = 'Could not fetch investment data from the blockchain.';
    }
}

function generateReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (linkInput && userAccount) {
        linkInput.value = `${window.location.origin}${window.location.pathname}?ref=${userAccount}`;
    }
}

// Investment Functions
function generateInvestmentPlans() {
    const plansContainer = document.getElementById('investmentPlans');
    if (!plansContainer) return;
    const plans = [
        {id: 0, name: 'Starter Plan', roi: '1% Daily', range: '20 - 499 USDT', duration: '150 Days', total: '150% Total ROI', features: ['1% Daily ROI', '150 Days Duration', '150% Total Returns', '4-Level Referral'], featured: false},
        {id: 1, name: 'Advanced Plan', roi: '1.2% Daily', range: '500 - 1,999 USDT', duration: '150 Days', total: '180% Total ROI', features: ['1.2% Daily ROI', '150 Days Duration', '180% Total Returns', '4-Level Referral'], featured: false},
        {id: 2, name: 'Professional Plan', roi: '1.5% Daily', range: '2,000 - 4,999 USDT', duration: '150 Days', total: '225% Total ROI', features: ['1.5% Daily ROI', '150 Days Duration', '225% Total Returns', '4-Level Referral'], featured: true},
        {id: 3, name: 'Premium Plan', roi: '1.8% Daily', range: '5,000 - 9,999 USDT', duration: '150 Days', total: '270% Total ROI', features: ['1.8% Daily ROI', '150 Days Duration', '270% Total Returns', '4-Level Referral'], featured: false},
        {id: 4, name: 'VIP Plan', roi: '2% Daily', range: '10,000+ USDT', duration: '150 Days', total: '300% Total ROI', features: ['2% Daily ROI', '150 Days Duration', '300% Total Returns', '4-Level Referral'], featured: false}
    ];
    plansContainer.innerHTML = plans.map(plan => `
        <div class="plan-card ${plan.featured ? 'featured' : ''}" data-plan-id="${plan.id}">
            ${plan.featured ? '<div class="plan-badge">Popular</div>' : ''}
            <div class="plan-name">${plan.name}</div>
            <div class="plan-roi">${plan.roi}</div>
            <div class="plan-range">${plan.range}</div>
            <div class="plan-duration">${plan.duration}</div>
            <div class="plan-total">${plan.total}</div>
            <ul class="plan-features">${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
            <button class="btn btn--primary" style="margin-top: auto;"><i class="fas fa-arrow-right"></i> Select Plan</button>
        </div>
    `).join('');
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('click', (e) => selectPlan(parseInt(e.currentTarget.getAttribute('data-plan-id'))));
    });
}

function selectPlan(planId) {
    if (!userAccount) return showNotification('Please connect your wallet first!', 'error');
    const plansData = [
        { id: 0, name: 'Starter Plan', roi: '1% Daily', min: 20, max: 499 },
        { id: 1, name: 'Advanced Plan', roi: '1.2% Daily', min: 500, max: 1999 },
        { id: 2, name: 'Professional Plan', roi: '1.5% Daily', min: 2000, max: 4999 },
        { id: 3, name: 'Premium Plan', roi: '1.8% Daily', min: 5000, max: 9999 },
        { id: 4, name: 'VIP Plan', roi: '2% Daily', min: 10000, max: Infinity }
    ];
    selectedPlan = plansData.find(p => p.id === planId);
    if (selectedPlan) showInvestmentForm();
}

function showInvestmentForm() {
    document.getElementById('investmentPlans').style.display = 'none';
    document.getElementById('investmentForm').classList.add('active');
    document.getElementById('selectedPlanSummary').innerHTML = `<div class="plan-name">${selectedPlan.name}</div><div class="plan-roi">${selectedPlan.roi}</div>`;
    const maxText = selectedPlan.max === Infinity ? 'Unlimited' : selectedPlan.max;
    document.getElementById('amountRange').textContent = `Minimum: ${selectedPlan.min} USDT, Maximum: ${maxText} USDT`;
    const amountInput = document.getElementById('investmentAmount');
    amountInput.min = selectedPlan.min;
    amountInput.max = selectedPlan.max === Infinity ? '' : selectedPlan.max;
    amountInput.value = selectedPlan.min;
    updateInvestmentSummary();
}

function showPlans() {
    document.getElementById('investmentPlans').style.display = 'grid';
    document.getElementById('investmentForm').classList.remove('active');
    selectedPlan = null;
}

function updateInvestmentSummary() {
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    document.getElementById('summaryAmount').textContent = `${amount.toFixed(2)} USDT`;
}

async function confirmInvestment() {
    if (!contract || !userAccount) return showNotification('Please connect wallet', 'error');
    if (!selectedPlan) return showNotification('Please select a plan', 'error');
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    if (amount < selectedPlan.min || (selectedPlan.max !== Infinity && amount > selectedPlan.max)) {
        return showNotification(`Amount must be between ${selectedPlan.min} and ${selectedPlan.max === Infinity ? '∞' : selectedPlan.max} USDT`, 'error');
    }
    let refAddr = document.getElementById('referrerAddress').value.trim() || referralAddress || '0x0000000000000000000000000000000000000000';
    if (!web3.utils.isAddress(refAddr)) return showNotification('Invalid referrer address', 'error');
    
    const confirmBtn = document.getElementById('confirmInvestment');
    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    confirmBtn.disabled = true;

    try {
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        const balance = await usdtContract.methods.balanceOf(userAccount).call();
        if (new BigNumber(balance).isLessThan(new BigNumber(amountWei))) {
            throw new Error(`Insufficient USDT. You have ${web3.utils.fromWei(balance, 'ether')} USDT`);
        }
        const allowance = await usdtContract.methods.allowance(userAccount, CONTRACT_ADDRESS).call();
        if (new BigNumber(allowance).isLessThan(new BigNumber(amountWei))) {
            showNotification('Approving USDT...', 'info');
            await usdtContract.methods.approve(CONTRACT_ADDRESS, '115792089237316195423570985008687907853269984665640564039457584007913129639935').send({ from: userAccount });
            showNotification('Approval successful!', 'success');
        }
        showNotification('Depositing...', 'info');
        await contract.methods.deposit(amountWei, selectedPlan.id, refAddr).send({ from: userAccount });
        showNotification('Investment successful!', 'success');
        investmentSuccessPopup.classList.add('active');
        await loadUserData();
        await loadContractData(); // Refresh global stats after deposit
    } catch (error) {
        console.error('Investment error:', error);
        showNotification(error.message.includes("rejected") ? 'Transaction rejected' : 'Investment failed', 'error');
    } finally {
        confirmBtn.innerHTML = '<i class="fas fa-check-circle"></i> Confirm Investment';
        confirmBtn.disabled = false;
    }
}

async function withdrawEarnings() {
    if (!contract || !userAccount) return showNotification('Please connect wallet', 'error');
    const btn = document.getElementById('withdrawEarnings');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Withdrawing...';
    btn.disabled = true;
    try {
        await contract.methods.withdraw().send({ from: userAccount });
        showNotification('Withdrawal successful!', 'success');
        await loadUserData();
        await loadContractData(); // Refresh global stats after withdrawal
    } catch (error) {
        console.error('Withdrawal error:', error);
        showNotification(error.message.includes("rejected") ? 'Transaction rejected' : 'Withdrawal failed', 'error');
    } finally {
        btn.innerHTML = '<i class="fas fa-download"></i> Withdraw Earnings';
        btn.disabled = false;
    }
}

// Referral & Utility Functions
function copyReferralLink() {
    const linkInput = document.getElementById('referralLink');
    navigator.clipboard.writeText(linkInput.value).then(() => showNotification('Referral link copied!', 'success'));
}

function shareOnSocial(platform) {
    const link = document.getElementById('referralLink').value;
    const text = encodeURIComponent('Experience decentralized wealth creation through verified smart contracts, fixed ROI plans, and tiered referral bonuses — designed to empower investors with security, clarity, and passive income stability!');
    const urls = {
        telegram: `https://t.me/share/url?url=${link}&text=${text}`,
        twitter: `https://twitter.com/intent/tweet?url=${link}&text=${text}`,
        whatsapp: `https://wa.me/?text=${text}%20${link}`
    };
    if (urls[platform]) window.open(urls[platform], '_blank');
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    setTimeout(() => notification.classList.remove('show'), 5000);
}

function checkPreloader() {
    window.addEventListener('load', () => setTimeout(() => preloader.classList.add('fade-out'), 500));
}
