import './App.css';
import React, {lazy, Suspense, useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import BooksLibrary from "./components/booksLibrary/BooksLibrary";
import Preloader from "./components/common/preloader/Preloader";
import AppHeader from "./components/header/Header";
import AppFooter from "./components/footer/Footer";
import {Button} from "antd";
import UpCircleOutlined from "@ant-design/icons/lib/icons/UpCircleOutlined";

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
            <AppHeader/>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route path='/booksLibrary'
                           render={() => <BooksLibrary/>}/>
                    <Route path='/bookInfo/:id'
                           render={(props) => <BookInfo {...props}/>}/>
                    <Route exact path='/'
                           render={() => <Redirect to='/booksLibrary'/>}/>
                    <Route path='*'
                           render={(props) => <ErrorPage {...props}/>}/>
                </Switch>
            </Suspense>
            <AppFooter/>

            {/*Go back to top button*/}
            {showButton &&
            <Button
                type='primary'
                size='large'
                style={{position: "fixed", bottom: `80px`, right: `20px`, opacity: 0.6}}
                onClick={ () => {window.scrollTo({top: 0, behavior: "smooth"})} }
            >
                <UpCircleOutlined />
            </Button>}

        </div>
    )
}

export default App;
