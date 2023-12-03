import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { brands, glasses } from "../images";

const initialState = {
    url: document.getElementById("glasses-quiz-widget").getAttribute("data-source"),
    frameStyles: [
        { text: "Browline", id: "browline", icon: glasses.browline },
        { text: "Aviator", id: "aviator", icon: glasses.aviator },
        { text: "Geometric", id: "geometric", icon: glasses.geometric },
        { text: "Wayframe", id: "wayframe", icon: glasses.wayframe },
        { text: "Round", id: "round", icon: glasses.round },
        { text: "Oval", id: "oval", icon: glasses.oval },
        { text: "Oversized", id: "oversized", icon: glasses.oversized },
        { text: "Cat Eye", id: "cat_eye", icon: glasses.cat_eye },
        { text: "Rimless", id: "rimless", icon: glasses.rimless },
        { text: "Rectangle", id: "rectangle", icon: glasses.rectangle },
        { text: "Square", id: "square", icon: glasses.square },
        { text: "Wrap", id: "wrap", icon: glasses.wrap }
    ],
    brands: [
        { id: "ray_ban", icon: brands.ray_ban },
        { id: "armani", icon: brands.armani },
        { id: "oakley", icon: brands.oakley },
        { id: "hilary_duff", icon: brands.hilary_duff },
        { id: "gucci", icon: brands.gucci },
        { id: "prada", icon: brands.prada },
        { id: "versace", icon: brands.versace },
        { id: "vogue", icon: brands.vogue },
        { id: "michael_kors", icon: brands.michael_kors },
        { id: "coach", icon: brands.coach },
        { id: "tory_burch", icon: brands.tory_burch },
        { id: "burberry", icon: brands.burberry }
    ]
};

export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        setURLParam: (state, action) => {
            const { key, value } = action.payload;
            let url = new URL(state.url);

            url.searchParams.set(key, value);

            state.url = url.href;
        },
        deleteURLParam: (state, action) => {
            let url = new URL(state.url);

            url.searchParams.delete(action.payload);

            state.url = url.href;
        }
    }
});


/**
 * Хук для управления URL параметрами
 * @returns {any} Две функции setURLParam и deleteURLParam
 */
export function useURLParams() {
    const dispatch = useDispatch();

    return [
        (key, value) => dispatch(setURLParam({ key, value })),
        (key) => dispatch(deleteURLParam(key))
    ];
}

/**
 * Селектор для получения URL
 * @returns {string} Ссылка с параметрами
 */
export const selectURL = state => state.step.url;

/**
 * Селектор для получения значения URL параметра по его ключу
 * @param {string} key - Ключ параметра
 * @returns {string} Ссылка с параметрами
 */
export const selectURLParam = key => state => new URL(state.step.url).searchParams.get(key);

export const { setURLParam, deleteURLParam } = stepSlice.actions;

export default stepSlice.reducer;