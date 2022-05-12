import type {NextPage} from 'next'
import {Main} from '../components/Main'
import {CardProduct} from '../components/CardProduct'

const Home: NextPage = () => {
    return (
        <Main>
            <CardProduct />
        </Main>
    )
}

export default Home