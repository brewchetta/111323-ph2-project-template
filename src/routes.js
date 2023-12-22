import App from './components/App'
import NewGift from './components/NewGift'
import GiftShowPage from './components/GiftShowPage'
import GiftsList from './components/GiftsList'
import FourOhFour from './components/FourOhFour'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/new-gift',
                element: <NewGift/>
            },
            {
                path: '/gift-show/:id',
                element: <GiftShowPage/>
            },
            {
                path: '/gifts-list',
                element: <GiftsList/>
            }
        ]
    },
    {
        path: '*',
        element: <FourOhFour />
    }
]

export default routes