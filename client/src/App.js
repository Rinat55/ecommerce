import {Switch, Route, Redirect} from 'react-router-dom'
import Main from './components/Main.js'
import Cart from "./components/common/Cart";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllCurrecy, getCartFromLS, getProducts} from "./redux/actions/productAction";

function App() {
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCartFromLS())
        dispatch(getAllCurrecy())
    }, [])



    return (
        <>
            <header>
                <Switch>
                    <Route exact path="/" component={() => <Main />} />
                    <Route exact path="/cart" companent={() => <Cart />} />
                    <Redirect to="/" />
                </Switch>
            </header>
        </>
    )
}

export default App
