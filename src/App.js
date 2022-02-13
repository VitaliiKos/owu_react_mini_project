import {Navigate, Route, Routes} from "react-router-dom";

import {GenreBadge, Layout, MovieInfo} from "./components";
import {MoviesPage, NotFoundPage, UserInfoPage} from "./pages";
import css from './App.module.css';

function App() {

    return (
        <>
            <div className={css.App}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Navigate to={'movies'}/>}/>
                        <Route path={'movies'} element={<MoviesPage/>}>
                            <Route path={''} element={<GenreBadge/>}/>
                            <Route path={':id'} element={<MovieInfo/>}/>
                        </Route>
                        <Route path={'user'} element={<UserInfoPage/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
