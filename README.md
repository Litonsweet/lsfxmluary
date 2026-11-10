# LSFXM - Liton Sweet Multi Forex System | Luxury Next.js

## Run
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure - GitHub er moto
- `app/layout.tsx` - Main layout, header, sidebar
- `app/page.tsx` - Home / Dashboard
- `app/globals.css` - Luxury gold + #050505 theme
- `components/` - Prottek menu alada component
- `lib/data.ts` - Sob data ek jaygay (brokers, masters, wallet, refer)
- `lib/store.tsx` - Global state: DEMO/REAL, Theme, Language, Balance

## Update System
Kono ekta jaygay update korle sob jaygay update hobe:
- Balance change -> `lib/store.tsx` e `setBalance` -> Dashboard + Wallet + Copier auto update
- Broker add -> `lib/data.ts` e `BROKERS` e add -> Brokers page + Terminal + Dashboard ticker auto update
- Master add -> `lib/data.ts` e `MASTERS` e add -> Leaderboard + Master Detail + Copier auto update
- Refer % change -> `lib/data.ts` e `REFER_LEVELS` -> Refer page + Master Creator calculator auto update
- Theme change -> `lib/store.tsx` e `theme` -> Header + sob page auto update

## Deploy - Vercel
1. GitHub e push koro
2. Vercel e Import -> Framework: Next.js
3. Deploy
