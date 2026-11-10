'use client';
import {useStore} from '../lib/store';
export const MENUS=[['dashboard','🏠 Home / Dashboard'],['login','🔐 Login / Signup'],['account','👤 My Account'],['brokers','🏦 Brokers'],['masters','👑 Masters'],['detail','📊 Master Detail'],['creator','✨ Master Creator'],['copier','🔄 Copier'],['wallet','💰 Wallet'],['referral','🤝 Referral'],['ea','🤖 EA Marketplace'],['terminal','📈 Terminal / MT5'],['vps','🖥️ VPS / Server'],['blockchain','⛓️ Blockchain'],['admin','🛡️ Admin Panel'],['rank','🏆 Rank'],['connect','💳 Connect Fee'],['security','🔒 Security'],['about','ℹ️ About'],['settings','⚙️ Settings']];
export default function Sidebar(){ const {page,setPage,mode,setMode}=useStore();
 return <div className="sidebar"><h1 className="gold" style={{margin:0}}>LSFXM 👑</h1><small>Liton Sweet Multi Forex System</small><br/><br/><button className="btn" onClick={()=>setMode(mode==='DEMO'?'REAL':'DEMO')}>{mode} — Switch</button><hr/>{MENUS.map(([id,label])=><button key={id} className={'navbtn '+(page===id?'active':'')} onClick={()=>setPage(id)}>{label}</button>)}</div>
}
