import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/pages/Home';
import Info from './components/pages/Info';

function App() {
  setupStorage()
  return (
    <>
     <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/info" component={Info}/>
        </Switch>
      </div>
    </BrowserRouter>
      
    </>
  );
}

export default App;

function setupStorage(){
  localStorage.clear()
  let movies = [{
    id: 1,
    title: 'Spectre',
    description: 'James Bond receives an obscure message from M about a sinister organisation, \'SPECTRE\'. With the help of Madeleine, he uncovers the conspiracy, only to face an ugly truth.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Spectre_poster.jpg',
    actorIDs: [1,2]
  },{
    id: 2,
    title: 'Life is Beautiful',
    description: 'A Jewish father and his family are surrounded by Nazi death camps. Living in a hostile environment, he uses humor to shield his young son from the grim realities of war.',
    imageUrl: 'https://i2.wp.com/dashfun.net/wp-content/uploads/2021/05/La-Vie-est-belle-what-does-the-title-of-the.jpg',
    actorIDs: [3,4,5]
  },{
    id: 3,
    title: 'Django Unchained',
    description: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.',
    imageUrl: "https://i0.wp.com/wemadethisnetwork.com/wp-content/uploads/2020/08/django-unchained.jpg?resize=1000%2C473&ssl=1",
    actorIDs: [5,6,7]
  }]
  localStorage.setItem('movies',JSON.stringify(movies));
}