/**
 * Created by subin on 2017-08-04.
 */
import { Injectable, Type, Renderer, ViewChild } from '@angular/core';

@Injectable()
export class TabViewResponseService {

    constructor() {}

    openTabNav(who: any) {
        let tabViewLiArr = [], tabViewUiWidth = 0, tabViewLiWidth = 0, tabViewLiTotalWidth = 0;

        tabViewLiArr = who.querySelectorAll('.ui-tabview-nav > li');
        tabViewLiWidth = tabViewLiArr[0].offsetWidth;
        tabViewUiWidth = who.querySelector('.ui-tabview-nav').offsetWidth;
        tabViewLiTotalWidth = tabViewLiWidth * (tabViewLiArr.length + 1);


        if (tabViewLiTotalWidth >= tabViewUiWidth) {
            who.querySelectorAll('.ui-tabview-nav > li').forEach((li, index) => {
                li.style.width = tabViewUiWidth / (tabViewLiArr.length + 1) + 'px';
            })
        }
    }

    closeTabNav(who: any) {
        let tabViewLiArr = [], tabViewUiWidth = 0, tabViewLiWidth = 0, tabViewLiTotalWidth = 0;

        tabViewLiArr = who.querySelectorAll('.ui-tabview-nav > li');
        tabViewLiWidth = tabViewLiArr[0].offsetWidth;
        tabViewUiWidth = who.querySelector('.ui-tabview-nav').offsetWidth;
        tabViewLiTotalWidth = tabViewLiWidth * (tabViewLiArr.length + 1);


        if (132 * tabViewLiArr.length >= tabViewUiWidth) {
            who.querySelectorAll('.ui-tabview-nav > li').forEach((li) => {
                li.style.width = tabViewUiWidth / (tabViewLiArr.length + 1) + 'px';
            })
        } else {
            who.querySelectorAll('.ui-tabview-nav > li').forEach((li) => {
                li.style.width = '135px';
            })
        }
    }
}
