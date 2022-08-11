import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"
import News from './views/news'
import Navigation from './views/navigation'
import Footer from './views/footer'
import Logo from './assets/logo.svg';
import './index.scss'
import navList from './config.js'

function App() {
  const params = useParams();
  const [searchValue, setSearchValue] = useState('')
  const [articles, setArticles] = useState([])
  const [categoryTitle, setCategoryTitle] = useState(!params.category ? navList[0].title : navList.filter(item => item.path === params.category)[0].title)

  const onChangeCategoryTitle = (title) => {
    setCategoryTitle(title)
  }

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get('https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79')
      setArticles(result.data.articles)
    }
    
    fetchData()
  }, [])

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="logo" />
        <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
        <label for="sb_form_go" class="search icon tooltip" role="button" id="search_icon" aria-label="搜尋網路" tabindex="-1">
          <svg viewBox="0 0 25 25">
            <path stroke="#007DAA" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M23.75 23.75l-9-9"></path>
            <circle stroke="#007DAA" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" cx="9" cy="9" r="7.75" fill="none"></circle>
            <path fill="none" d="M25 25h-25v-25h25z"></path>
          </svg>
        </label>
      </header>
      <div className='main'>
        <Navigation navList={navList} onChangeCategoryTitle={onChangeCategoryTitle} />
        <News categoryTitle={categoryTitle} articles={articles} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
