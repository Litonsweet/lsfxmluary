'use client';
import {useStore} from '../lib/store'; import {BROKERS,MASTERS,USER} from '../lib/data';
export default function Dashboard(){ const {balance,profitShare,mode,setPage}=useStore();
 return <div><div className="grid grid4">
 <div className="card"><small>Total Balance</small><h2>${balance}</h2></div>
 <div className="card"><small>Profit Share Balance</small><h2>${profitShare}</h2></div>
 <div className="card"><small>Master Earn</small><h2>$1,890</h2></div>
 <div className="card"><small>Refer Earn</small><h2>$980</h2></div></div>
 <div className="card" style={{marginTop:14}}><b>🔥 Block Verified Feed:</b> BLOCK #128491 | Exness +$1,240 VERIFIED | IC Markets +$860 VERIFIED</div>
 <div className="grid grid4" style={{marginTop:14}}>{[['Deposit','wallet'],['Copy Master','masters'],['Create Master','creator'],['Refer','referral']].map(([t,p])=><button key={p} className="btn" onClick={()=>setPage(p)}>{t}</button>)}</div>
 <div className="card" style={{marginTop:14}}><h3>Top Masters</h3>{MASTERS.map(m=><div key={m.rank}>#{m.rank} {m.name} — {m.strategy} — {m.profit}% — Win {m.win}% — {m.broker}</div>)}</div></div>
}
