// BSC Configuration
const BSC_MAINNET_CHAIN_ID = '0x38'; // 56 in decimal
const BSC_TESTNET_CHAIN_ID = '0x61'; // 97 in decimal

// Contract Configuration for BSC
const CONTRACT_ADDRESS = '0xaDb78631123CD4B4686365423B80C344E438b7d6';

// USDT on BSC (BEP-20)
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

// Enhanced Contract ABI
const CONTRACT_ABI = [
    {
        "inputs": [{"internalType": "address", "name": "_usdtToken", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "planId", "type": "uint256"},
            {"indexed": false, "internalType": "address", "name": "upline", "type": "address"}
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "fee", "type": "uint256"}
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
            {"indexed": true, "internalType": "address", "name": "referral", "type": "address"},
            {"indexed": false, "internalType": "uint256", "name": "level", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "ReferralBonus",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "MIN_DEPOSIT",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MIN_WITHDRAWAL",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "OWNER_FEE_PERCENT",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WITHDRAWAL_FEE_PERCENT",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
        "name": "calculateAvailableEarnings",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "_amount", "type": "uint256"}, {"internalType": "uint256", "name": "_planId", "type": "uint256"}, {"internalType": "address", "name": "_upline", "type": "address"}],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
        "name": "getActiveInvestmentStatus",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractStats",
        "outputs": [
            {"internalType": "uint256", "name": "totalExpiredBonuses", "type": "uint256"},
            {"internalType": "uint256", "name": "totalWithdrawalFeesCollected", "type": "uint256"},
            {"internalType": "uint256", "name": "totalReferralBonusesPaid", "type": "uint256"},
            {"internalType": "uint256", "name": "currentContractBalance", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlansCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
        "name": "getUserInfo",
        "outputs": [
            {"internalType": "uint256", "name": "totalDeposits", "type": "uint256"},
            {"internalType": "uint256", "name": "totalWithdrawn", "type": "uint256"},
            {"internalType": "uint256", "name": "directReferrals", "type": "uint256"},
            {"internalType": "uint256", "name": "referralBonus", "type": "uint256"},
            {"internalType": "uint256", "name": "availableEarnings", "type": "uint256"},
            {"internalType": "address", "name": "upline", "type": "address"},
            {"internalType": "bool", "name": "hasActiveInvestment", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
        "name": "getUserInvestments",
        "outputs": [
            {
                "components": [
                    {"internalType": "uint256", "name": "amount", "type": "uint256"},
                    {"internalType": "uint256", "name": "planId", "type": "uint256"},
                    {"internalType": "uint256", "name": "startTime", "type": "uint256"},
                    {"internalType": "uint256", "name": "lastWithdrawalTime", "type": "uint256"},
                    {"internalType": "uint256", "name": "totalWithdrawn", "type": "uint256"},
                    {"internalType": "bool", "name": "active", "type": "bool"}
                ],
                "internalType": "struct Aurion.UserInvestment[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "investmentPlans",
        "outputs": [
            {"internalType": "uint256", "name": "minAmount", "type": "uint256"},
            {"internalType": "uint256", "name": "maxAmount", "type": "uint256"},
            {"internalType": "uint256", "name": "dailyROI", "type": "uint256"},
            {"internalType": "uint256", "name": "duration", "type": "uint256"},
            {"internalType": "uint256", "name": "totalROI", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "referralLevels",
        "outputs": [
            {"internalType": "uint256", "name": "percentage", "type": "uint256"},
            {"internalType": "uint256", "name": "minDirectReferrals", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalExpiredReferralBonuses",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalReferralBonuses",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalWithdrawalFees",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usdtToken",
        "outputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "users",
        "outputs": [
            {"internalType": "address", "name": "upline", "type": "address"},
            {"internalType": "uint256", "name": "totalDeposits", "type": "uint256"},
            {"internalType": "uint256", "name": "totalWithdrawn", "type": "uint256"},
            {"internalType": "uint256", "name": "directReferrals", "type": "uint256"},
            {"internalType": "uint256", "name": "referralBonus", "type": "uint256"},
            {"internalType": "uint256", "name": "lastWithdrawal", "type": "uint256"},
            {"internalType": "bool", "name": "exists", "type": "bool"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawExpiredBonuses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// USDT ABI for approval
const USDT_ABI = [
    {
        "constant": false,
        "inputs": [
            {"name": "_spender", "type": "address"},
            {"name": "_value", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {"name": "_owner", "type": "address"},
            {"name": "_spender", "type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
    }
];

// Enhanced Global Variables
let web3;
let contract;
let usdtContract;
let userAccount;
let selectedPlan = null;
let referralAddress = null;
let isInitialized = false;
let selectedGasOption = 'standard';
let isUSDTApproved = false;
let currentNetwork = null;

// DOM Elements
const preloader = document.querySelector('.preloader');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const connectWalletBtn = document.getElementById('connectWallet');
const notification = document.getElementById('notification');
const networkIndicator = document.getElementById('networkIndicator');

// Section Elements
const sections = {
    home: document.getElementById('home'),
    dashboard: document.getElementById('dashboard'),
    invest: document.getElementById('invest'),
    referral: document.getElementById('referral')
};

// Enhanced Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    generateInvestmentPlans();
    checkPreloader();
    checkURLForReferral();
    setupScrollEffects();
    setupGasOptions();
});

// Enhanced Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Setup Gas Options
function setupGasOptions() {
    const gasOptions = document.querySelectorAll('.gas-option');
    gasOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            gasOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            selectedGasOption = this.getAttribute('data-gas');
        });
    });
}

// Enhanced URL Referral Check
function checkURLForReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const refAddress = urlParams.get('ref');
    
    if (refAddress && web3 && web3.utils.isAddress(refAddress)) {
        referralAddress = refAddress;
        const referrerInput = document.getElementById('referrerAddress');
        if (referrerInput) {
            referrerInput.value = refAddress;
        }
        showNotification('Referral address detected from URL!', 'success');
    }
}

// Enhanced Web3 and Contract Initialization
async function initializeApp() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            web3 = new Web3(window.ethereum);
            
            // Check network first
            await checkNetwork();
            
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
            
            console.log('Web3 and contracts initialized successfully');
            isInitialized = true;

            // Check if wallet is already connected
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                userAccount = accounts[0];
                updateWalletUI();
                await loadContractData();
                await checkUSDTApproval();
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
            showNotification('Error connecting to blockchain. Please refresh the page.', 'error');
        }
    } else {
        showNotification('Please install MetaMask to use this dApp', 'error');
        // Disable wallet-related functionality
        connectWalletBtn.disabled = true;
        connectWalletBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Install MetaMask';
    }
}

// Check Network
async function checkNetwork() {
    if (!web3) return;

    try {
        const chainId = await web3.eth.getChainId();
        currentNetwork = chainId;
        
        // BSC Mainnet = 56
        if (chainId == 56) {
            networkIndicator.textContent = 'BSC Mainnet';
            networkIndicator.className = 'network-indicator';
            networkIndicator.style.display = 'inline-flex';
        } 
        // BSC Testnet = 97
        else if (chainId == 97) {
            networkIndicator.textContent = 'BSC Testnet';
            networkIndicator.className = 'network-indicator';
            networkIndicator.style.display = 'inline-flex';
        }
        else {
            networkIndicator.textContent = 'Wrong Network';
            networkIndicator.className = 'network-indicator wrong-network';
            networkIndicator.style.display = 'inline-flex';
            showNotification('Please switch to BSC Network', 'error');
        }
    } catch (error) {
        console.error('Error checking network:', error);
    }
}

// Switch to BSC Network
async function switchToBSC() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: BSC_MAINNET_CHAIN_ID }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: BSC_MAINNET_CHAIN_ID,
                            chainName: 'Binance Smart Chain Mainnet',
                            rpcUrls: ['https://bsc-dataseed.binance.org/'],
                            blockExplorerUrls: ['https://bscscan.com/'],
                            nativeCurrency: {
                                name: 'BNB',
                                symbol: 'BNB',
                                decimals: 18
                            },
                        },
                    ],
                });
            } catch (addError) {
                console.error('Error adding BSC network:', addError);
                showNotification('Error adding BSC network to MetaMask', 'error');
            }
        } else {
            console.error('Error switching to BSC:', switchError);
            showNotification('Error switching to BSC network', 'error');
        }
    }
}

// Check USDT Approval
async function checkUSDTApproval() {
    if (!usdtContract || !userAccount) return;

    try {
        const allowance = await usdtContract.methods.allowance(userAccount, CONTRACT_ADDRESS).call();
        const allowanceAmount = web3.utils.fromWei(allowance, 'ether');
        isUSDTApproved = parseFloat(allowanceAmount) > 0;
        
        // Show/hide approval section
        const approvalSection = document.getElementById('usdtApprovalSection');
        if (approvalSection) {
            if (isUSDTApproved) {
                approvalSection.style.display = 'none';
            } else {
                approvalSection.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Error checking USDT approval:', error);
    }
}

// Enhanced Event Listeners
function setupEventListeners() {
    // Navigation
    navToggle.addEventListener('click', toggleNavMenu);
    
    // Navigation links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            showSection(section);
            navMenu.classList.remove('active');
        });
    });

    // Footer links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    // Buttons with data-section
    document.querySelectorAll('[data-section]').forEach(button => {
        if (button.classList.contains('nav__link')) return;
        button.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    // Wallet connection
    connectWalletBtn.addEventListener('click', connectWallet);

    // USDT Approval
    document.getElementById('approveUSDT').addEventListener('click', approveUSDT);

    // Investment related
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    document.getElementById('newInvestment').addEventListener('click', showPlans);
    document.getElementById('investmentAmount').addEventListener('input', updateInvestmentSummary);

    // Withdraw earnings
    document.getElementById('withdrawEarnings').addEventListener('click', withdrawEarnings);

    // Referral related
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    document.getElementById('shareTelegram').addEventListener('click', () => shareOnSocial('telegram'));
    document.getElementById('shareTwitter').addEventListener('click', () => shareOnSocial('twitter'));
    document.getElementById('shareWhatsapp').addEventListener('click', () => shareOnSocial('whatsapp'));
    document.getElementById('claimBonus').addEventListener('click', claimReferralBonus);

    // Wallet account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', async (accounts) => {
            if (accounts.length === 0) {
                userAccount = null;
                updateWalletUI();
                showWalletAlerts();
                showNotification('Wallet disconnected', 'error');
            } else {
                userAccount = accounts[0];
                updateWalletUI();
                await loadContractData();
                await checkUSDTApproval();
                showNotification('Wallet account changed', 'success');
            }
        });

        window.ethereum.on('chainChanged', async (chainId) => {
            currentNetwork = parseInt(chainId);
            await checkNetwork();
            if (currentNetwork === 56 || currentNetwork === 97) {
                // Reinitialize contracts if on correct network
                contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
                usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
                await loadContractData();
                await checkUSDTApproval();
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}

// Enhanced Navigation Functions
function toggleNavMenu() {
    navMenu.classList.toggle('active');
}

function showSection(sectionName) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        if (section) {
            section.style.display = 'none';
        }
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    if (sections[sectionName]) {
        sections[sectionName].style.display = 'block';
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`.nav__link[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Load section-specific data
        if (sectionName === 'dashboard') {
            loadDashboardData();
        } else if (sectionName === 'referral') {
            loadReferralData();
        } else if (sectionName === 'invest') {
            loadInvestData();
        }

        // Scroll to top of section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Enhanced Wallet Functions
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showNotification('Please install MetaMask!', 'error');
        window.open('https://metamask.io/download.html', '_blank');
        return;
    }

    try {
        // Check network first
        await checkNetwork();
        if (currentNetwork !== 56 && currentNetwork !== 97) {
            const shouldSwitch = confirm('This dApp works on BSC Mainnet. Would you like to switch to BSC Mainnet?');
            if (shouldSwitch) {
                await switchToBSC();
                return;
            }
        }

        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        if (accounts.length > 0) {
            userAccount = accounts[0];
            updateWalletUI();
            await loadContractData();
            await checkUSDTApproval();
            showNotification('Wallet connected successfully!', 'success');
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        if (error.code === 4001) {
            showNotification('Wallet connection rejected by user', 'error');
        } else {
            showNotification('Failed to connect wallet', 'error');
        }
    }
}

function updateWalletUI() {
    if (userAccount) {
        connectWalletBtn.innerHTML = `
            <i class="fas fa-wallet"></i>
            ${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}
        `;
        hideWalletAlerts();
    } else {
        connectWalletBtn.innerHTML = `
            <i class="fas fa-wallet"></i>
            Connect Wallet
        `;
        showWalletAlerts();
    }
}

function showWalletAlerts() {
    const alerts = [
        'dashboardWalletAlert',
        'investWalletAlert',
        'referralWalletAlert'
    ];
    
    const elementsToHide = [
        'quickStats',
        'actionButtons',
        'investmentsSection',
        'referralStats',
        'referralLinkSection',
        'bonusClaimSection',
        'usdtApprovalSection',
        'transactionHistory'
    ];

    alerts.forEach(alertId => {
        const element = document.getElementById(alertId);
        if (element) element.style.display = 'flex';
    });

    elementsToHide.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) element.style.display = 'none';
    });
}

function hideWalletAlerts() {
    const alerts = [
        'dashboardWalletAlert',
        'investWalletAlert',
        'referralWalletAlert'
    ];
    
    const elementsToShow = [
        'quickStats',
        'actionButtons',
        'referralStats',
        'referralLinkSection',
        'bonusClaimSection'
    ];

    alerts.forEach(alertId => {
        const element = document.getElementById(alertId);
        if (element) element.style.display = 'none';
    });

    elementsToShow.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) element.style.display = elementId === 'quickStats' || elementId === 'referralStats' ? 'grid' : 'flex';
    });
}

// Enhanced Contract Data Functions
async function loadContractData() {
    if (!contract || !isInitialized) return;

    try {
        showLoadingState(true);
        
        // Load contract stats
        const contractBalance = await contract.methods.getContractBalance().call();
        const contractStats = await contract.methods.getContractStats().call();
        
        // Update home stats
        updateElementText('contractBalance', `${(parseFloat(web3.utils.fromWei(contractBalance, 'ether'))).toFixed(2)} USDT`);
        updateElementText('totalTVL', `$${(parseFloat(web3.utils.fromWei(contractBalance, 'ether'))).toLocaleString()}`);
        updateElementText('totalPaid', `$${(parseFloat(web3.utils.fromWei(contractStats.totalWithdrawalFeesCollected, 'ether'))).toLocaleString()}`);

        // Load user-specific data if wallet is connected
        if (userAccount) {
            await loadUserData();
        }

    } catch (error) {
        console.error('Error loading contract data:', error);
        showNotification('Error loading contract data', 'error');
    } finally {
        showLoadingState(false);
    }
}

async function loadUserData() {
    if (!contract || !userAccount) return;

    try {
        const userInfo = await contract.methods.getUserInfo(userAccount).call();
        const availableEarnings = await contract.methods.calculateAvailableEarnings(userAccount).call();

        // Update dashboard
        updateElementText('totalDeposits', `${(parseFloat(web3.utils.fromWei(userInfo.totalDeposits, 'ether'))).toFixed(2)} USDT`);
        updateElementText('availableEarnings', `${(parseFloat(web3.utils.fromWei(availableEarnings, 'ether'))).toFixed(2)} USDT`);
        updateElementText('referralBonus', `${(parseFloat(web3.utils.fromWei(userInfo.referralBonus, 'ether'))).toFixed(2)} USDT`);
        updateElementText('directReferrals', userInfo.directReferrals);

        // Update referral section
        updateElementText('totalTeam', userInfo.directReferrals);
        updateElementText('referralDirectReferrals', userInfo.directReferrals);
        updateElementText('availableBonus', `${(parseFloat(web3.utils.fromWei(userInfo.referralBonus, 'ether'))).toFixed(2)} USDT`);
        updateElementText('claimableBonus', `${(parseFloat(web3.utils.fromWei(userInfo.referralBonus, 'ether'))).toFixed(2)} USDT`);

        // Update level counts
        updateLevelCounts(userInfo.directReferrals);

        // Load investments
        await loadUserInvestments();

        // Generate referral link
        generateReferralLink();

        // Show transaction history if user has activity
        if (parseFloat(userInfo.totalDeposits) > 0 || parseFloat(userInfo.totalWithdrawn) > 0) {
            showTransactionHistory(userInfo);
        }

    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

async function loadUserInvestments() {
    if (!contract || !userAccount) return;

    try {
        const investments = await contract.methods.getUserInvestments(userAccount).call();
        displayInvestments(investments);
    } catch (error) {
        console.error('Error loading investments:', error);
    }
}

function displayInvestments(investments) {
    const tableBody = document.getElementById('investmentsTableBody');
    const investmentsSection = document.getElementById('investmentsSection');
    const noInvestmentsMessage = document.getElementById('noInvestmentsMessage');

    if (!tableBody) return;

    // Filter active investments
    const activeInvestments = investments.filter(inv => inv.active);

    if (activeInvestments.length === 0) {
        if (investmentsSection) investmentsSection.style.display = 'none';
        if (noInvestmentsMessage) noInvestmentsMessage.style.display = 'block';
        return;
    }

    if (investmentsSection) investmentsSection.style.display = 'block';
    if (noInvestmentsMessage) noInvestmentsMessage.style.display = 'none';

    tableBody.innerHTML = activeInvestments.map(investment => {
        const planId = parseInt(investment.planId);
        const dailyROI = [1.00, 1.20, 1.50, 1.80, 2.00][planId] || 1.00;
        
        return `
            <tr class="fade-in">
                <td>Plan ${planId + 1}</td>
                <td><strong>${(parseFloat(web3.utils.fromWei(investment.amount, 'ether'))).toFixed(2)} USDT</strong></td>
                <td>${new Date(parseInt(investment.startTime) * 1000).toLocaleDateString()}</td>
                <td>${dailyROI}% Daily</td>
                <td>${(parseFloat(web3.utils.fromWei(investment.totalWithdrawn, 'ether'))).toFixed(2)} USDT</td>
                <td><span class="status-badge status-active">Active</span></td>
            </tr>
        `;
    }).join('');
}

function showTransactionHistory(userInfo) {
    const transactionHistory = document.getElementById('transactionHistory');
    const transactionHistoryBody = document.getElementById('transactionHistoryBody');
    
    if (!transactionHistory || !transactionHistoryBody) return;

    transactionHistory.style.display = 'block';
    
    let transactions = [];
    
    // Add deposit transaction if exists
    if (parseFloat(userInfo.totalDeposits) > 0) {
        transactions.push({
            type: 'deposit',
            amount: userInfo.totalDeposits,
            date: new Date().toLocaleDateString(),
            status: 'Completed'
        });
    }
    
    // Add withdrawal transaction if exists
    if (parseFloat(userInfo.totalWithdrawn) > 0) {
        transactions.push({
            type: 'withdraw',
            amount: userInfo.totalWithdrawn,
            date: new Date().toLocaleDateString(),
            status: 'Completed'
        });
    }
    
    // Add referral bonus transaction if exists
    if (parseFloat(userInfo.referralBonus) > 0) {
        transactions.push({
            type: 'bonus',
            amount: userInfo.referralBonus,
            date: new Date().toLocaleDateString(),
            status: 'Available'
        });
    }

    if (transactions.length === 0) {
        transactionHistory.style.display = 'none';
        return;
    }

    transactionHistoryBody.innerHTML = transactions.map(transaction => {
        const typeClass = `type-${transaction.type}`;
        const typeIcon = transaction.type === 'deposit' ? 'fa-arrow-down' : 
                       transaction.type === 'withdraw' ? 'fa-arrow-up' : 'fa-gift';
        const typeText = transaction.type === 'deposit' ? 'Deposit' : 
                       transaction.type === 'withdraw' ? 'Withdrawal' : 'Referral Bonus';
        
        return `
            <tr>
                <td>
                    <span class="transaction-type ${typeClass}">
                        <i class="fas ${typeIcon}"></i>
                        ${typeText}
                    </span>
                </td>
                <td>${(parseFloat(web3.utils.fromWei(transaction.amount, 'ether'))).toFixed(2)} USDT</td>
                <td>${transaction.date}</td>
                <td>${transaction.status}</td>
            </tr>
        `;
    }).join('');
}

function updateLevelCounts(directReferrals) {
    updateElementText('level1Count', directReferrals);
    updateElementText('level2Count', Math.max(0, directReferrals));
    updateElementText('level3Count', Math.max(0, directReferrals));
    updateElementText('level4Count', Math.max(0, directReferrals));
}

function generateReferralLink() {
    const referralLink = document.getElementById('referralLink');
    if (referralLink && userAccount) {
        const baseUrl = window.location.origin + window.location.pathname;
        const link = `${baseUrl}?ref=${userAccount}`;
        referralLink.value = link;
    }
}

// Enhanced Investment Functions
function generateInvestmentPlans() {
    const plansContainer = document.getElementById('investmentPlans');
    if (!plansContainer) return;

    const plans = [
        {
            id: 0,
            name: 'Starter Plan',
            roi: '1% Daily',
            dailyROI: 1.00,
            range: '20 - 499 USDT',
            minAmount: 20,
            maxAmount: 499,
            duration: '150 Days',
            total: '150% Total ROI',
            features: [
                '1% Daily ROI',
                '150 Days Duration',
                '150% Total Returns',
                '4-Level Referral'
            ],
            featured: false
        },
        {
            id: 1,
            name: 'Advanced Plan',
            roi: '1.2% Daily',
            dailyROI: 1.20,
            range: '500 - 1,999 USDT',
            minAmount: 500,
            maxAmount: 1999,
            duration: '150 Days',
            total: '180% Total ROI',
            features: [
                '1.2% Daily ROI',
                '150 Days Duration',
                '180% Total Returns',
                '4-Level Referral'
            ],
            featured: false
        },
        {
            id: 2,
            name: 'Professional Plan',
            roi: '1.5% Daily',
            dailyROI: 1.50,
            range: '2,000 - 4,999 USDT',
            minAmount: 2000,
            maxAmount: 4999,
            duration: '150 Days',
            total: '225% Total ROI',
            features: [
                '1.5% Daily ROI',
                '150 Days Duration',
                '225% Total Returns',
                '4-Level Referral'
            ],
            featured: true
        },
        {
            id: 3,
            name: 'Premium Plan',
            roi: '1.8% Daily',
            dailyROI: 1.80,
            range: '5,000 - 9,999 USDT',
            minAmount: 5000,
            maxAmount: 9999,
            duration: '150 Days',
            total: '270% Total ROI',
            features: [
                '1.8% Daily ROI',
                '150 Days Duration',
                '270% Total Returns',
                '4-Level Referral'
            ],
            featured: false
        },
        {
            id: 4,
            name: 'VIP Plan',
            roi: '2% Daily',
            dailyROI: 2.00,
            range: '10,000+ USDT',
            minAmount: 10000,
            maxAmount: 999999,
            duration: '150 Days',
            total: '300% Total ROI',
            features: [
                '2% Daily ROI',
                '150 Days Duration',
                '300% Total Returns',
                '4-Level Referral'
            ],
            featured: false
        }
    ];

    plansContainer.innerHTML = plans.map(plan => `
        <div class="plan-card ${plan.featured ? 'featured' : ''}" onclick="selectPlan(${plan.id})">
            ${plan.featured ? '<div class="plan-badge">Popular</div>' : ''}
            <div class="plan-name">${plan.name}</div>
            <div class="plan-roi">${plan.roi}</div>
            <div class="plan-range">${plan.range}</div>
            <div class="plan-duration">${plan.duration}</div>
            <div class="plan-total">${plan.total}</div>
            <ul class="plan-features">
                ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <button class="btn btn--primary" style="margin-top: auto;">
                <i class="fas fa-arrow-right"></i>
                Select Plan
            </button>
        </div>
    `).join('');
}

function selectPlan(planId) {
    if (!userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    if (currentNetwork !== 56 && currentNetwork !== 97) {
        showNotification('Please switch to BSC Network', 'error');
        return;
    }

    if (!isUSDTApproved) {
        showNotification('Please approve USDT first', 'error');
        return;
    }

    const plans = [
        { id: 0, name: 'Starter Plan', roi: '1% Daily', dailyROI: 1.00, minAmount: 20, maxAmount: 499, totalROI: 150 },
        { id: 1, name: 'Advanced Plan', roi: '1.2% Daily', dailyROI: 1.20, minAmount: 500, maxAmount: 1999, totalROI: 180 },
        { id: 2, name: 'Professional Plan', roi: '1.5% Daily', dailyROI: 1.50, minAmount: 2000, maxAmount: 4999, totalROI: 225 },
        { id: 3, name: 'Premium Plan', roi: '1.8% Daily', dailyROI: 1.80, minAmount: 5000, maxAmount: 9999, totalROI: 270 },
        { id: 4, name: 'VIP Plan', roi: '2% Daily', dailyROI: 2.00, minAmount: 10000, maxAmount: 999999, totalROI: 300 }
    ];

    selectedPlan = plans.find(plan => plan.id === planId);
    
    if (selectedPlan) {
        showInvestmentForm();
        updatePlanSummary();
        updateAmountRange();
        updateInvestmentSummary();
    }
}

function showInvestmentForm() {
    const plansElement = document.getElementById('investmentPlans');
    const formElement = document.getElementById('investmentForm');
    const alertElement = document.getElementById('investWalletAlert');
    const approvalSection = document.getElementById('usdtApprovalSection');

    if (plansElement) plansElement.style.display = 'none';
    if (formElement) formElement.classList.add('active');
    if (alertElement) alertElement.style.display = 'none';
    if (approvalSection) approvalSection.style.display = 'none';
}

function showPlans() {
    const plansElement = document.getElementById('investmentPlans');
    const formElement = document.getElementById('investmentForm');
    const successElement = document.getElementById('investmentSuccess');
    const approvalSection = document.getElementById('usdtApprovalSection');

    if (plansElement) plansElement.style.display = 'grid';
    if (formElement) formElement.classList.remove('active');
    if (successElement) successElement.classList.remove('active');
    if (approvalSection && !isUSDTApproved) {
        approvalSection.style.display = 'block';
    }
    selectedPlan = null;
}

function showSuccess() {
    const plansElement = document.getElementById('investmentPlans');
    const formElement = document.getElementById('investmentForm');
    const successElement = document.getElementById('investmentSuccess');

    if (plansElement) plansElement.style.display = 'none';
    if (formElement) formElement.classList.remove('active');
    if (successElement) successElement.classList.add('active');
}

function updatePlanSummary() {
    const summaryElement = document.getElementById('selectedPlanSummary');
    if (!summaryElement || !selectedPlan) return;

    summaryElement.innerHTML = `
        <div class="plan-name">${selectedPlan.name}</div>
        <div class="plan-roi">${selectedPlan.roi}</div>
        <div class="plan-range">${selectedPlan.minAmount} - ${selectedPlan.maxAmount === 999999 ? 'Unlimited' : selectedPlan.maxAmount} USDT</div>
    `;
}

function updateAmountRange() {
    const rangeElement = document.getElementById('amountRange');
    const amountInput = document.getElementById('investmentAmount');

    if (!rangeElement || !amountInput || !selectedPlan) return;

    rangeElement.textContent = `Minimum: ${selectedPlan.minAmount} USDT, Maximum: ${selectedPlan.maxAmount === 999999 ? 'Unlimited' : selectedPlan.maxAmount} USDT`;
    
    amountInput.min = selectedPlan.minAmount;
    amountInput.max = selectedPlan.maxAmount === 999999 ? '' : selectedPlan.maxAmount;
    amountInput.placeholder = `Enter amount between ${selectedPlan.minAmount} and ${selectedPlan.maxAmount === 999999 ? 'Unlimited' : selectedPlan.maxAmount} USDT`;
    amountInput.value = selectedPlan.minAmount;
}

function updateInvestmentSummary() {
    const amountInput = document.getElementById('investmentAmount');
    if (!amountInput || !selectedPlan) return;

    const amount = parseFloat(amountInput.value) || 0;
    const platformFee = amount * 0.10; // 10% platform fee
    const totalToPay = amount; // User pays the full amount, fee is deducted from it

    updateElementText('summaryAmount', `${amount.toFixed(2)} USDT`);
    updateElementText('summaryFee', `${platformFee.toFixed(2)} USDT`);
    updateElementText('summaryTotal', `${totalToPay.toFixed(2)} USDT`);
}

// USDT Approval Function
async function approveUSDT() {
    if (!usdtContract || !userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    if (currentNetwork !== 56 && currentNetwork !== 97) {
        showNotification('Please switch to BSC Network', 'error');
        return;
    }

    try {
        const approveBtn = document.getElementById('approveUSDT');
        const originalText = approveBtn.innerHTML;
        const statusElement = document.getElementById('approvalStatus');

        // Show loading state
        approveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Approving...';
        approveBtn.disabled = true;
        showLoadingState(true);

        if (statusElement) {
            statusElement.style.display = 'block';
            statusElement.className = 'transaction-status status-pending';
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Waiting for approval confirmation...';
        }

        // Approve a large amount for multiple investments
        const approveAmount = web3.utils.toWei('1000000', 'ether'); // 1,000,000 USDT

        const receipt = await usdtContract.methods.approve(CONTRACT_ADDRESS, approveAmount).send({
            from: userAccount,
            gas: 100000
        });

        isUSDTApproved = true;
        
        if (statusElement) {
            statusElement.className = 'transaction-status status-success';
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> USDT approved successfully!';
        }

        showNotification('USDT approved successfully!', 'success');
        
        // Hide approval section
        const approvalSection = document.getElementById('usdtApprovalSection');
        if (approvalSection) {
            approvalSection.style.display = 'none';
        }

    } catch (error) {
        console.error('Error approving USDT:', error);
        
        const statusElement = document.getElementById('approvalStatus');
        if (statusElement) {
            statusElement.className = 'transaction-status status-error';
            statusElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Approval failed. Please try again.';
        }

        let errorMessage = 'USDT approval failed';
        if (error.code === 4001) {
            errorMessage = 'Approval rejected by user';
        } else if (error.message) {
            errorMessage = error.message;
        }

        showNotification(errorMessage, 'error');
    } finally {
        // Reset button state
        const approveBtn = document.getElementById('approveUSDT');
        approveBtn.innerHTML = '<i class="fas fa-check-circle"></i> Approve USDT';
        approveBtn.disabled = false;
        showLoadingState(false);
    }
}

async function confirmInvestment() {
    if (!contract || !userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    if (currentNetwork !== 56 && currentNetwork !== 97) {
        showNotification('Please switch to BSC Network', 'error');
        return;
    }

    if (!isUSDTApproved) {
        showNotification('Please approve USDT first', 'error');
        return;
    }

    if (!selectedPlan) {
        showNotification('Please select an investment plan', 'error');
        return;
    }

    const amountInput = document.getElementById('investmentAmount');
    const amount = parseFloat(amountInput.value) || 0;

    // Validation
    if (amount < selectedPlan.minAmount) {
        showNotification(`Minimum investment for this plan is ${selectedPlan.minAmount} USDT`, 'error');
        return;
    }

    if (selectedPlan.maxAmount !== 999999 && amount > selectedPlan.maxAmount) {
        showNotification(`Maximum investment for this plan is ${selectedPlan.maxAmount} USDT`, 'error');
        return;
    }

    // Check USDT balance
    try {
        const balance = await usdtContract.methods.balanceOf(userAccount).call();
        const balanceAmount = parseFloat(web3.utils.fromWei(balance, 'ether'));
        
        if (balanceAmount < amount) {
            showNotification(`Insufficient USDT balance. You have ${balanceAmount.toFixed(2)} USDT`, 'error');
            return;
        }
    } catch (error) {
        console.error('Error checking balance:', error);
        showNotification('Error checking USDT balance', 'error');
        return;
    }

    // Get referrer address from input or use the one from URL
    let referrerAddress = document.getElementById('referrerAddress').value;
    if (!referrerAddress || referrerAddress === '') {
        referrerAddress = referralAddress || '0x0000000000000000000000000000000000000000';
    }

    // Validate referrer address
    if (referrerAddress !== '0x0000000000000000000000000000000000000000' && !web3.utils.isAddress(referrerAddress)) {
        showNotification('Invalid referrer address', 'error');
        return;
    }

    try {
        const confirmBtn = document.getElementById('confirmInvestment');
        const originalText = confirmBtn.innerHTML;
        const statusElement = document.getElementById('transactionStatus');

        // Show loading state
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        confirmBtn.disabled = true;
        showLoadingState(true);

        if (statusElement) {
            statusElement.style.display = 'block';
            statusElement.className = 'transaction-status status-pending';
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Waiting for transaction confirmation...';
        }

        // Convert amount to wei
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');

        // Set gas parameters based on selection
        let gasMultiplier = 1;
        switch (selectedGasOption) {
            case 'fast':
                gasMultiplier = 1.2;
                break;
            case 'rapid':
                gasMultiplier = 1.5;
                break;
            default:
                gasMultiplier = 1;
        }

        // Execute the investment with enhanced gas settings
        const receipt = await contract.methods.deposit(amountWei, selectedPlan.id, referrerAddress).send({
            from: userAccount,
            gas: Math.floor(300000 * gasMultiplier),
            gasPrice: await getAdjustedGasPrice()
        });

        if (statusElement) {
            statusElement.className = 'transaction-status status-success';
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Investment successful!';
        }

        showNotification('Investment successful!', 'success');
        showSuccess();
        
        // Reload user data
        await loadUserData();

    } catch (error) {
        console.error('Error making investment:', error);
        
        const statusElement = document.getElementById('transactionStatus');
        if (statusElement) {
            statusElement.className = 'transaction-status status-error';
            statusElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Investment failed. Please try again.';
        }

        let errorMessage = 'Investment failed';
        if (error.code === 4001) {
            errorMessage = 'Transaction rejected by user';
        } else if (error.message.includes('insufficient funds')) {
            errorMessage = 'Insufficient BNB for gas fees';
        } else if (error.message.includes('transfer failed')) {
            errorMessage = 'Token transfer failed. Please check your USDT balance and approval.';
        } else if (error.message.includes('Deposit below minimum')) {
            errorMessage = `Minimum deposit is 20 USDT`;
        } else if (error.message.includes('execution reverted')) {
            // Try to extract the revert reason
            try {
                const revertReason = error.message.match(/reverted with reason string '(.+)'/);
                errorMessage = revertReason ? revertReason[1] : 'Smart contract execution failed';
            } catch {
                errorMessage = 'Smart contract execution failed';
            }
        } else if (error.message) {
            errorMessage = error.message;
        }

        showNotification(errorMessage, 'error');
    } finally {
        // Reset button state
        const confirmBtn = document.getElementById('confirmInvestment');
        confirmBtn.innerHTML = '<i class="fas fa-check-circle"></i> Confirm Investment';
        confirmBtn.disabled = false;
        showLoadingState(false);
    }
}

// Helper function to get adjusted gas price
async function getAdjustedGasPrice() {
    try {
        const currentGasPrice = await web3.eth.getGasPrice();
        let multiplier = 1;
        
        switch (selectedGasOption) {
            case 'fast':
                multiplier = 1.2;
                break;
            case 'rapid':
                multiplier = 1.5;
                break;
            default:
                multiplier = 1;
        }
        
        return Math.floor(parseInt(currentGasPrice) * multiplier).toString();
    } catch (error) {
        console.error('Error getting gas price:', error);
        return undefined; // Let MetaMask handle it
    }
}

async function withdrawEarnings() {
    if (!contract || !userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    if (currentNetwork !== 56 && currentNetwork !== 97) {
        showNotification('Please switch to BSC Network', 'error');
        return;
    }

    try {
        const withdrawBtn = document.getElementById('withdrawEarnings');
        const originalText = withdrawBtn.innerHTML;

        // Show loading state
        withdrawBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        withdrawBtn.disabled = true;
        showLoadingState(true);

        await contract.methods.withdraw().send({
            from: userAccount,
            gas: 300000
        });

        showNotification('Earnings withdrawn successfully!', 'success');
        
        // Reload user data
        await loadUserData();

    } catch (error) {
        console.error('Error withdrawing earnings:', error);
        
        let errorMessage = 'Withdrawal failed';
        if (error.code === 4001) {
            errorMessage = 'Transaction rejected by user';
        } else if (error.message.includes('Below minimum withdrawal')) {
            errorMessage = 'Available earnings below minimum withdrawal amount';
        } else if (error.message.includes('Withdrawal too soon')) {
            errorMessage = 'You can only withdraw once per day';
        } else if (error.message.includes('execution reverted')) {
            try {
                const revertReason = error.message.match(/reverted with reason string '(.+)'/);
                errorMessage = revertReason ? revertReason[1] : 'Smart contract execution failed';
            } catch {
                errorMessage = 'Smart contract execution failed';
            }
        } else if (error.message) {
            errorMessage = error.message;
        }

        showNotification(errorMessage, 'error');
    } finally {
        // Reset button state
        const withdrawBtn = document.getElementById('withdrawEarnings');
        withdrawBtn.innerHTML = '<i class="fas fa-download"></i> Withdraw Earnings';
        withdrawBtn.disabled = false;
        showLoadingState(false);
    }
}

async function claimReferralBonus() {
    if (!contract || !userAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    if (currentNetwork !== 56 && currentNetwork !== 97) {
        showNotification('Please switch to BSC Network', 'error');
        return;
    }

    try {
        const claimBtn = document.getElementById('claimBonus');
        const originalText = claimBtn.innerHTML;

        // Show loading state
        claimBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        claimBtn.disabled = true;
        showLoadingState(true);

        // Referral bonuses are automatically included in available earnings
        await contract.methods.withdraw().send({
            from: userAccount,
            gas: 300000
        });

        showNotification('Bonus claimed successfully!', 'success');
        
        // Reload user data
        await loadUserData();

    } catch (error) {
        console.error('Error claiming bonus:', error);
        
        let errorMessage = 'Failed to claim bonus';
        if (error.code === 4001) {
            errorMessage = 'Transaction rejected by user';
        } else if (error.message.includes('Below minimum withdrawal')) {
            errorMessage = 'Available bonus below minimum withdrawal amount';
        } else if (error.message.includes('execution reverted')) {
            try {
                const revertReason = error.message.match(/reverted with reason string '(.+)'/);
                errorMessage = revertReason ? revertReason[1] : 'Smart contract execution failed';
            } catch {
                errorMessage = 'Smart contract execution failed';
            }
        } else if (error.message) {
            errorMessage = error.message;
        }

        showNotification(errorMessage, 'error');
    } finally {
        // Reset button state
        const claimBtn = document.getElementById('claimBonus');
        claimBtn.innerHTML = '<i class="fas fa-gift"></i> Claim Bonus';
        claimBtn.disabled = false;
        showLoadingState(false);
    }
}

// Enhanced Referral Functions
function copyReferralLink() {
    const referralLink = document.getElementById('referralLink');
    if (referralLink) {
        referralLink.select();
        referralLink.setSelectionRange(0, 99999);
        
        // Use modern clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(referralLink.value)
                .then(() => showNotification('Referral link copied to clipboard!', 'success'))
                .catch(() => fallbackCopy());
        } else {
            fallbackCopy();
        }
    }

    function fallbackCopy() {
        document.execCommand('copy');
        showNotification('Referral link copied to clipboard!', 'success');
    }
}

function shareOnSocial(platform) {
    const referralLink = document.getElementById('referralLink');
    if (!referralLink) return;

    const link = referralLink.value;
    const text = 'Join Aurion Finance and start earning daily returns with secure USDT investments on BSC! Use my referral link to get started.';
    
    let url = '';
    
    switch (platform) {
        case 'telegram':
            url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + link)}`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + link)}`;
            break;
    }

    if (url) {
        window.open(url, '_blank', 'width=600,height=400');
    }
}

// Enhanced Section Data Loading
function loadDashboardData() {
    if (userAccount) {
        loadUserData();
    }
}

function loadReferralData() {
    if (userAccount) {
        loadUserData();
    }
}

function loadInvestData() {
    if (userAccount) {
        checkUSDTApproval();
    }
}

// Enhanced Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    if (!notification) return;

    const icon = type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

function showLoadingState(show) {
    if (show) {
        document.body.classList.add('loading');
    } else {
        document.body.classList.remove('loading');
    }
}

function updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

function checkPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }
        }, 1000);
    });

    // Fallback in case load event doesn't fire
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }
    }, 3000);
}

// Make functions available globally for onclick events
window.selectPlan = selectPlan;
window.showSection = showSection;
