import axios from "axios";
import stores from 'stores'
import {appSetErrorService} from "services/app.service";
import {authSetTokenService} from "services/auth.service";
import {dialog, notification, translate} from "utils/helpers";

const service = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Max-Age': 86400,
        'Access-Control-Allow-Origin': '*',
    }

    const responseResolve = res => {
        appSetErrorService({});
        return res.data;
    }

    const responseReject = err => {
        const error = err.response;
        appSetErrorService({});
        if (error.status === 422) {
            if (typeof error.data === 'object' && Array.isArray(Object.keys(error.data))) {
                appSetErrorService(error.data);
            } else {
                notification({
                    type: 'error',
                    message: error.data
                });
            }
        } else if (error.status === 401) {
            authSetTokenService('');
        } else if (error.status !== 404) {
            notification({
                type: 'error',
                message: error.data.message || error.data.exception
            })
        }

        return Promise.reject(err);
    }

    const requestResolve = async config => {
        const token = stores.getState().authStore.token;
        if (token) config.headers.Authorization = `Bearer ${token}`
        config.headers['Content-Language'] = stores.getState().appStore.language

        if (config.method === 'delete') {
            const dr = await dialog({
                type: 'warning',
                message: translate('notification.Delete.Description')
            });

            if (dr === 'yes') return config;

            return new Promise(() => {
            });
        }

        return config;
    }

    const requestReject = err => Promise.reject(err);

    let instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 0,
        headers
    })

    instance.interceptors.response.use(
        responseResolve,
        responseReject
    )

    instance.interceptors.request.use(
        requestResolve,
        requestReject
    )

    return instance;
}

export const api = (method, url, params = {}) => {
    return service()[method](url, params);
}