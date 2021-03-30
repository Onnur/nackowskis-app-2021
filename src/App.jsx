//import logo from './logo.svg';
import './App.css';
import AuctionFooter from './components/AuctionFooter';
import Body from './components/Body'
import AuctionContext from './contexts/AuctionContextProvider'


function App() {
  return (
    <>
      <AuctionContext>
        <Header />
        <Body />
        <AuctionFooter />
      </AuctionContext>
    </>
  );
}

export default App;
