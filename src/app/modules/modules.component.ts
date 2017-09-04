import { Component, ViewChild, AfterViewInit, animate, trigger, state, transition, style, OnInit } from "@angular/core";
import { navigateInfo } from "../../assets/mock-data/navigator";
import { HeaderTopComponent } from "./common/header/header-top.component";
import { TabViewService } from "../shared/services/tabview.service";
import { UITabView } from "../shared/services/ui/tabview/tabview";
import { TabViewResponseService } from "../shared/services/tabView-response.service";

declare const introJs: any;

window['currentUser'] = window.localStorage.getItem('currentUser') ?
    JSON.parse(window.localStorage.getItem('currentUser')) : {};

@Component({
    selector: 'ips-root',
    templateUrl: 'modules.component.html',
    animations: [trigger('submenushow', [
        state("show", style({
            left: '40px'
        })),
        state("hide", style({
            left: '-139px'
        })),
        transition('hide=>show', animate('180ms ease-in')),
        transition('show=>hide', animate('180ms ease-in'))
    ])
    ]
})
export class ModulesComponent implements OnInit, AfterViewInit {


    //点击menu-bar宽度变化
    widthSpread = false;
    navigateInfo: any[]; //二级菜单
    select: boolean = true;
    public containerLeft: number = 175;

    @ViewChild(HeaderTopComponent)
    public header: HeaderTopComponent;

    @ViewChild(UITabView)
    uiTabView: UITabView;

    @ViewChild('tabview')
    public tabview: any;

    headerTop: boolean;

    public tabs: any[] = [];
    public tabsComponent: any[] = [];
    public tabActiveIndex: number = 0;

    constructor(
        public tabViewService: TabViewService,
        public tabViewResponseService: TabViewResponseService) {
    }

    ngOnInit(): void {
        this.tabsComponent = this.tabViewService.getTabs();
        this.tabs.push(this.tabsComponent[0]);
        this.navigateInfo = navigateInfo;
    }

    ngAfterViewInit() {
        if (window.history && window.history.pushState) {
            $(window).on('popstate',  ()=>{
                window['history'].pushState('forward', '', 'modules');
                window['history'].forward();
            });
        }
        window['history'].pushState('forward', '', 'modules'); //在IE中必须得有这两行
        window['history'].forward();
    }

    
    headerHome(hea) {
        this.headerTop = hea;
    }

    setContentStyle() {
        let classObj = {
            'width': ' calc( 100% - ' + this.containerLeft + 'px )',
            'left': this.containerLeft + 'px',
        };
        return classObj;
    }

    widthChange(isWidthChange: boolean) {
        this.widthSpread = isWidthChange;
        if (this.widthSpread === false) {
            this.containerLeft = this.containerLeft - 130;
        } else {
            this.containerLeft = this.containerLeft + 130;
        }
    }

    /**
     * 菜单点击处理事件
     * @param $event
     */
    menuClickHandler($event) {
        let isOpen = false;
        this.tabs.forEach((tab, index) => {
            if (tab.data.name === $event.name) {
                this.tabActiveIndex = index;
                isOpen = true;
            }
        });
        if (!isOpen) {
            this.tabsComponent.forEach((tab, index) => {
                if (tab.data.name === $event.name) {
                    let selectedTab = this.tabview.findSelectedTab();
                    if (selectedTab) {
                        selectedTab.selected = false;
                    }
                    this.tabs.push(tab);
                    setTimeout(() => {
                        this.tabActiveIndex = this.tabs.length - 1;
                    }, 100)
                }
            });
            setTimeout(() => {
                this.tabViewResponseService.openTabNav(this.uiTabView.el.nativeElement);
            })
        }
    }

    /**
     * tab关闭触发事件
     * @param $event
     */
    handlerTabClose($event) {
        let index = $event.index;
        this.tabs.splice(index, 1);

        this.tabViewResponseService.closeTabNav(this.uiTabView.el.nativeElement);
    }

    handleTabChange($event) {

    }

    //点击一级菜单切换二级菜单
    changeSubMenu($event) {
        if ($event === 'price') {
            this.select = true;
        } else {
            this.select = false;
        }
    }

    //导航到个人中心||首页
    navPerson(path) {
        
    }

}
