import {Navigate, Route, Routes} from 'react-router-dom'
import {routers} from "router/routers";
import {flatten, route} from "utils/helpers";
import DefaultLayout from "layouts/DefaultLayout";

export default function RouterProvider() {
    return (
        <Routes>
            {
                flatten(routers)
                    .filter(i => i.component)
                    .map((r, index) => {
                        return (
                            <Route
                                path={r.path}
                                exact={true}
                                key={index}
                                element={<RouterGuard {...r}/>}
                            />
                        )
                    })
            }
            <Route path="*" element={<Navigate to={route('index')}/>}/>
        </Routes>
    )
}

function RouterGuard(props) {
    switch (props.layout) {
        default:
            return (
                <DefaultLayout>
                    {props.component}
                </DefaultLayout>
            )
    }
}