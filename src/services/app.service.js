import stores from 'stores'
import {setError, setLanguage, themeChange, setLanguages, setCurrentPage} from "stores/module/app.store";

const dispatch = stores.dispatch;

export const appSetLanguageService = (language) => {
    dispatch(setLanguage(language));
}

export const appSetLanguagesService = (languages) => {
    dispatch(setLanguages(languages));
}

export const appSetErrorService = (errors) => {
    dispatch(setError(errors));
}

export const appSetCurrentPageService = (page) => {
    dispatch(setCurrentPage(page));
}

export const appThemeChangeService = () => {
    dispatch(themeChange());
}

export const appCheckThemeService = () => {
    const dark = stores.getState().appStore.theme;
    if (dark === 'dark') document.getElementsByTagName('html')[0].classList.add('dark');
    else document.getElementsByTagName('html')[0].classList.remove('dark');
}