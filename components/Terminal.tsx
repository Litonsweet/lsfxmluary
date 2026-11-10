'use client';
import {useState} from 'react';
export default function Terminal(){ const [lot,setLot]=useState(0.01); const [pos,setPos]=useState('No open position');
 return <div><h2 className="gold">Terminal / MT5 — Free Demo $100,000</h2>
 <div className="card">📈 Candlestick Chart — XAUUSD 2654.20 <span style={{color:'#0f0'}}>▲ +12.40</span><br/><div style={{fontSize:28,lineHeight:1}}>🟩🟥🟩🟩🟥🟩🟥🟩🟩🟩🟥🟩</div><small>Indicator: MA | EMA | RSI | MACD | Bollinger | Stochastic | Drawing: Trendline | Horizontal | Rectangle | Fibonacci | Text</small></div>
 <div className="card" style={{marginTop:12}}>Lot: <input type="number" value={lot} onChange={e=>setLot(parseFloat(e.target.value))}/> SL: <input placeholder="SL"/> TP: <input placeholder="TP"/><br/><br/><button className="btn" onClick={()=>setPos('BUY '+lot+' lot XAUUSD OPEN')}>BUY</button> <button className="btn2" onClick={()=>setPos('SELL '+lot+' lot XAUUSD OPEN')}>SELL</button> <button className="btn2">One-Click</button><p>{pos}</p><p>Partial Close: {[10,25,50,75,100].map(p=><button key={p} className="btn2" style={{marginRight:6}} onClick={()=>setPos('Closed '+p+'%')}>{p}%</button>)}</p></div></div>
}
