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
    actorIDs: [1,2,3]
  },{
    id: 2,
    title: 'Life is Beautiful',
    description: 'A Jewish father and his family are surrounded by Nazi death camps. Living in a hostile environment, he uses humor to shield his young son from the grim realities of war.',
    imageUrl: 'https://i2.wp.com/dashfun.net/wp-content/uploads/2021/05/La-Vie-est-belle-what-does-the-title-of-the.jpg',
    actorIDs: [4,5]
  },{
    id: 3,
    title: 'Django Unchained',
    description: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.',
    imageUrl: "https://i0.wp.com/wemadethisnetwork.com/wp-content/uploads/2020/08/django-unchained.jpg?resize=1000%2C473&ssl=1",
    actorIDs: [3,6,7]
  }]

  let actors = [{
    id: 1,
    name: "Daniel Craig",
    imageUrl: "https://e3.365dm.com/21/08/2048x1152/skynews-daniel-craig-inheritence_5482476.jpg"
  },
  {
    id: 2,
    name: "Lea Seydoux",
    imageUrl: "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/0/0/2/1350002_leaseydouxindiesales_966814.jpg"
  },
  {
    id: 3,
    name: "Cristoph Waltz",
    imageUrl: "https://media.gq-magazine.co.uk/photos/5d139c2086dd7e5a22553b33/16:9/w_1280,c_limit/Christoph-Waltz_GQ_01Apr15_Matthew-Brookes_b.jpg"
  },
  {
    id: 4,
    name: "Roberto Benigni",
    imageUrl: "https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2021/750x500/benigni.jpg?itok=bCaamsEZ"
  },
  {
    id: 5,
    name: "Nicoletta Braschi",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    id: 6,
    name: "Jamie Foxx",
    imageUrl: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/12/1200/675/Jamie-Foxx.jpg?ve=1&tl=1"
  },
  {
    id: 7,
    name: "Leonardo DiCaprio",
    imageUrl: "https://tracara.com/wp-content/uploads/2020/04/leonardo.jpg"
  }
]

  localStorage.setItem('movies',JSON.stringify(movies));
  localStorage.setItem('actors',JSON.stringify(actors));
}