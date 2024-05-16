import { useEffect } from 'react'
import AOS from 'aos';
import './App.css'
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/useScrollToTop';
import { Dashboard, Home, About, Team} from './pages';
import Layout from './utils/Layout';
import AnimatedCursor from "react-animated-cursor"
import { ParallaxProvider } from 'react-scroll-parallax';
import { WalletProvider } from './context/WalletContext';
import '@rainbow-me/rainbowkit/styles.css';


import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, sepolia, optimismGoerli, filecoinHyperspace, avalanche, celo } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, sepolia, optimismGoerli, filecoinHyperspace, avalanche, celo],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'ChilizRab',
  projectId: '9e80a4de55f999b56f4c5a5cd54220bc',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={42}
        color='74, 222, 128'
        innerScale={1.2}
        outerScale={1.5}
        outerStyle={{
          border: '2px solid gray',
          backgroundColor: 'transparent'
        }} />
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={midnightTheme(
          {
            accentColor: '#ef0f56',
            accentColorForeground: '#ffffffed',
          }
        )} coolMode>
          <ParallaxProvider>
            <Router>
              <WalletProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={
                    <Layout>
                      <Home />
                    </Layout>
                  } />
                  <Route path="/collection" element={
                    <Layout>
                      <Dashboard />
                    </Layout>
                  } />
                  <Route path="/about" element={
                    <Layout>
                      <About />
                    </Layout>
                  } />
                  <Route path="/team" element={
                    <Layout>
                      <Team />
                    </Layout>
                  } />
                  
                  
                </Routes>
              </WalletProvider>
            </Router>
          </ParallaxProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
