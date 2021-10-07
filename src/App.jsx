import './App.css';
import React, {lazy, Suspense, useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BooksLibrary from "./components/booksLibrary/BooksLibrary";
import Preloader from "./components/common/preloader/Preloader";
import { BiUpArrow } from 'react-icons/bi'

//Lazy loading
const BookInfo = lazy( () => import("./components/bookInfo/BookInfo") );
const ErrorPage = lazy( () => import("./components/common/errorPage/ErrorPage") );

const App = () => {

    //Go back to top button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener(`scroll`, () => {
            if (window.pageYOffset > 1100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    return (
        <div>
            <Header/>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route path='/booksLibrary'
                           render={() => <BooksLibrary/>}/>
                    <Route path='/bookInfo/:id'
                           render={(props) => <BookInfo {...props}/>}/>
                    <Route exact path='/'
                           render={() => <Redirect to='/booksLibrary'/>}/>
                    <Route path='*'
                           render={() => <ErrorPage/>}/>
                </Switch>
            </Suspense>
            <Footer/>

            {/*Go back to top button*/}
            {showButton &&
            <button className='backToTop'
                    onClick={ () => {window.scrollTo({top: 0, behavior: "smooth"})} }>
                <BiUpArrow/>
            </button>}

        </div>
    )
}

export default App;
