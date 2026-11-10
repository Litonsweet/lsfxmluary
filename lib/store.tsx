'use client';
import React,{createContext,useContext,useState} from 'react';
type S={mode:string,setMode:(v:string)=>void;theme:string,setTheme:(v:string)=>void;lang:string,setLang:(v:string)=>void;balance:number,setBalance:(v:number)=>void;profitShare:number,setProfitShare:(v:number)=>void;page:string,setPage:(v:string)=>void;};
const C=createContext<S|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [mode,setMode]=useState('DEMO'); const [theme,setTheme]=useState('Binance Dark');
 const [lang,setLang]=useState('bn'); const [balance,setBalance]=useState(12480);
 const [profitShare,setProfitShare]=useState(2340); const [page,setPage]=useState('dashboard');
 return <C.Provider value={{mode,setMode,theme,setTheme,lang,setLang,balance,setBalance,profitShare,setProfitShare,page,setPage}}>{children}</C.Provider>
}
export function useStore(){ const s=useContext(C); if(!s) throw new Error('store'); return s; }
// UPDATE RULE: Ekhane balance/mode/theme change korle Dashboard + Wallet + Copier + Header sob auto update hobe
