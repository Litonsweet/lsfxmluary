'use client';
import {useStore} from '../lib/store';
import {BROKERS,MASTERS,REFER_LEVELS,EA_LIST,RANKS,MONTHLY,USER} from '../lib/data';
export default function MasterCreator(){
 const {mode,balance,profitShare,theme,lang}=useStore();
 return <div className="card"><h2 className="gold">MasterCreator</h2><p>Master Creator — Profit Share 30% LOCKED, 10 Level Calculator, 72H Countdown</p><p>Mode: {mode} | Balance: ${balance} | Profit Share: ${profitShare} | Theme: {theme} | Lang: {lang} | User: {USER.id}</p><p style={{color:'#aaa',fontSize:13}}>Data ashe lib/data.ts theke — ekhane change korle sob page e update hobe.</p></div>
}
