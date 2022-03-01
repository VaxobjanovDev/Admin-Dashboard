import Features from '../components/featured/Features'
import Chart from '../components/chart/Chart'

import './Home.css'

const Home = ()=>{
    return(
        <div className='home'>
            <Features/>
            <Chart/>
        </div>
    )
}

export default Home