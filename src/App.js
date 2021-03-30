//import logo from './logo.svg';
import './App.css';
import AuctionFooter from './components/AuctionFooter';
import Body from './components/Body';
import Main from './components/navigation/Main';
import NavBar from './components/navigation/NavBar';
import AuctionContext from './contexts/AuctionContextProvider';
import BidContext from './contexts/BidContextProvider';


function App() {
  return (
    <>
    <BidContext>
      <AuctionContext>
        <Main />
        <NavBar />
        <Body />
        <AuctionFooter />
      </AuctionContext>
    </BidContext>
    </>
  );
}

export default App;
