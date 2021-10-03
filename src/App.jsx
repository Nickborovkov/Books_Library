import './App.css';
import React, {Suspense} from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BooksLibrary from "./components/booksLibrary/BooksLibrary";
import Preloader from "./common/preloader/Preloader";
import {Redirect, Route, Switch} from "react-router-dom";
import BookInfo from "./components/bookInfo/BookInfo";
import ErrorPage from "./common/errorPage/ErrorPage";

const App = () => {
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

        </div>
    )
}

export default App;
