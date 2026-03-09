# 🔐 DecentralVault

> AES-256-GCM encrypted file vault · IPFS storage · Blockchain access control · Google Authenticator 2FA

---

## ⚡ Quick Start (VS Code → Local Dev)

### 1. Prerequisites
- [Node.js 20+](https://nodejs.org) — verify with `node --version`
- [VS Code](https://code.visualstudio.com) + recommended extensions:
  - `ES7+ React/Redux/React-Native snippets`
  - `Tailwind CSS IntelliSense`
  - `Prettier`

### 2. Open in VS Code
```bash
# Unzip the project, then:
cd decentralvault
code .                    # opens VS Code
```

### 3. Install & Run
```bash
npm install               # install all dependencies
cp .env.example .env      # copy env file
npm run dev               # starts at http://localhost:5173
```

### 4. (Optional) AI Assistant
Add your Anthropic API key to `.env`:
```
VITE_ANTHROPIC_KEY=sk-ant-xxxxxxxxxxxxxxxx
```
Get a key at https://console.anthropic.com

---

## 🚀 Deploy to Netlify (3 ways)

### Option A — Drag & Drop (fastest, 30 seconds)
```bash
npm run build             # creates /dist folder
```
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the **`dist/`** folder into the Netlify dashboard
3. Done — live URL in 30 seconds ✓

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C — GitHub Auto-Deploy
1. Push this folder to a GitHub repo
2. In Netlify: **New site → Import from Git → Select repo**
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy** — every `git push` auto-deploys ✓

### Environment Variables on Netlify
Site settings → Environment variables → Add:
```
VITE_ANTHROPIC_KEY = sk-ant-your-key
```

---

## 📁 Project Structure

```
decentralvault/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthScreen.jsx        # Login / Register / MetaMask / MFA
│   │   ├── dashboard/
│   │   │   └── Layout.jsx            # Navbar + sidebar
│   │   ├── modals/
│   │   │   ├── UploadModal.jsx       # Encrypt & upload
│   │   │   ├── DownloadModal.jsx     # Verify & decrypt
│   │   │   └── ShareModal.jsx        # Blockchain access grant
│   │   └── ui/
│   │       └── index.jsx             # Shared components
│   ├── context/
│   │   ├── authStore.js              # Auth state (Zustand + persist)
│   │   └── vaultStore.js             # Files, TXs, blockchain state
│   ├── pages/
│   │   ├── FilesPage.jsx             # File management + drag-drop
│   │   ├── SharedPage.jsx            # Files shared with you
│   │   ├── SecurityPage.jsx          # MFA setup + crypto specs
│   │   ├── BlockchainPage.jsx        # Explorer + smart contract
│   │   └── AIPage.jsx                # Claude AI assistant
│   ├── utils/
│   │   ├── crypto.js                 # AES-256-GCM, PBKDF2, TOTP, ECDSA
│   │   └── storage.js                # localStorage helpers
│   ├── styles/globals.css            # Tailwind + design system
│   ├── App.jsx                       # Root component + auth gate
│   └── main.jsx                      # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── netlify.toml                      # ← Netlify auto-config
├── .env.example
└── package.json
```

---

## 🔐 Security Stack

| Layer | Implementation |
|---|---|
| Password hashing | PBKDF2-HMAC-SHA512 · 310,000 iterations (browser) |
| File encryption | AES-256-GCM · Web Crypto API · client-side only |
| Key derivation | PBKDF2-SHA512 · 256-bit random salt · 96-bit IV |
| Authentication tag | 128-bit GCM tag — prevents tampering |
| 2FA / TOTP | RFC 6238 · HMAC-SHA1 · 30-second window |
| Wallet auth | ECDSA secp256k1 · EIP-191 personal_sign |
| Smart contract | FileStorage.sol · Solidity 0.8.19 · Polygon |
| Zero-knowledge | Passcode never stored, server never sees plaintext |
| File integrity | SHA-256 hash verified on every download |

---

## 🛠 Production Backend (optional)

For full production with real IPFS + PostgreSQL + Argon2id:
See `../decentralvault-complete.zip` which includes:
- Express + PostgreSQL backend with real Argon2id
- Real IPFS upload via Infura
- Docker Compose full stack
- Hardhat smart contract deployment

---

## ✅ Feature Checklist

- [x] Register / login with PBKDF2-SHA512 hashed passwords
- [x] MetaMask wallet authentication (ECDSA signature)
- [x] Google Authenticator TOTP 2FA (RFC 6238, real QR code)
- [x] Drag & drop file upload with AES-256-GCM encryption
- [x] Real decryption — wrong passcode = cryptographic error
- [x] SHA-256 file integrity verification on download
- [x] Blockchain share/revoke access (smart contract simulation)
- [x] Live block mining visualizer
- [x] Full transaction log
- [x] Audit trail (all actions logged)
- [x] Claude AI assistant (context-aware of your vault)
- [x] Fully client-side — works as static site (no server needed)
- [x] Netlify-ready with `netlify.toml`
