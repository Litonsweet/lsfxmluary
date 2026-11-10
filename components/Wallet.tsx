'use client';
import {useStore} from '../lib/store';
export default function Wallet(){ const {balance,profitShare,mode}=useStore();
 return <div><h2 className="gold">Wallet — {mode} {mode==='DEMO'?'🟡 DEMO TEST':''}</h2><div className="grid grid3">
 <div className="card">USD<br/><b>${balance}</b></div><div className="card">USDT<br/><b>$2,100</b></div><div className="card">Binance Pay<br/><b>$850</b></div>
 <div className="card">Profit Share USD<br/><b>${profitShare}</b></div><div className="card">Profit Share USC<br/><b>{profitShare*100} USC (1$=100)</b></div><div className="card">LSFXM Point<br/><b>{balance*100} Point</b></div></div>
 <div className="grid grid3" style={{marginTop:14}}><div className="card">Profit Share Earn<br/><b>$1,240</b></div><div className="card">Master Refer Earn<br/><b>$620</b></div><div className="card">Copier Refer Earn<br/><b>$410</b></div></div>
 <div className="card" style={{marginTop:14}}>⚠️ Anti-Scam Warning: Vul address e pathale taka jabe na. Verify kore pathao.<br/><br/><button className="btn">Deposit</button> <button className="btn2">Withdraw</button> <button className="btn2">Transfer Instant / 24h / 72h</button></div></div>
}
