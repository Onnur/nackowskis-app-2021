//import logo from './logo.svg';
import './App.css';
import AuctionFooter from './components/AuctionFooter';
import Body from './components/Body'
import AuctionContext from './contexts/AuctionContextProvider'
import BidContext from './contexts/BidContextProvider'


function App() {
  return (
    <>
    <BidContext>
      <AuctionContext>
        <Body />
        <AuctionFooter />
      </AuctionContext>
    </BidContext>
    </>
  );
}

export default App;
