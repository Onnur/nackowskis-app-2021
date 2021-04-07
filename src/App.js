import './App.css';
import AuctionFooter from './components/AuctionFooter';
import Main from './components/navigation/Main';
import NavBar from './components/navigation/NavBar';
import AuctionContext from './contexts/AuctionContextProvider';
import NewAuctionContext from './contexts/NewAuctionContextProvider'


function App() {
  return (
    <>
      <AuctionContext>
        <NewAuctionContext>
        <NavBar />
        <Main />
        </NewAuctionContext>
        <AuctionFooter />
      </AuctionContext>
    </>
  );
}

export default App;
