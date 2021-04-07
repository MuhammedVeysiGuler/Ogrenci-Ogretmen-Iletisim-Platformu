import React from 'react';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import AnaSayfa from "./pages/AnaSayfa";
import OgrenciGiris from "./pages/OgrenciGiris";
import OgrenciKayit from "./pages/OgrenciKayit";
import OgretmenGiris from "./pages/OgretmenGiris";
import OgretmenKayit from "./pages/OgretmenKayit";
import OgrenciAnaSayfa from "./pages/OgrenciAnaSayfa";
import OgretmenAnaSayfa from "./pages/OgretmenAnaSayfa";
const AppSwitchNavigator = createSwitchNavigator(
    {
        AnaSayfa: {
            screen: AnaSayfa
        },
        OgrenciGiris: {
            screen: OgrenciGiris
        },
        OgrenciKayit: {
            screen: OgrenciKayit
        },
        OgretmenGiris: {
            screen: OgretmenGiris
        },
        OgretmenKayit: {
            screen: OgretmenKayit
        },
        OgrenciAnaSayfa: {
            screen: OgrenciAnaSayfa
        },
        OgretmenAnaSayfa: {
            screen: OgretmenAnaSayfa
        },
    },
    {
        initialRouteName: 'AnaSayfa',
    }
);

export default createAppContainer(AppSwitchNavigator);