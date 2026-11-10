import './globals.css'; import {StoreProvider} from '../lib/store'; import Sidebar from '../components/Sidebar';
export const metadata={title:'LSFXM Luxury',description:'Liton Sweet Multi Forex System'};
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="bn"><body><StoreProvider><Sidebar/>{children}</StoreProvider></body></html> }
