import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-top',
    templateUrl: './header-top.component.html',
    styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit, DoCheck {
    //用户 or 客户
    isCustomer: boolean;
    msgs: any;
    public username: string = "";
    //预警数量
    warnInfoNum: number = 0;
    //状态切换背景色
    userMode = ['#5ae825', '#ff3000', '#1ba8ed', '#ffc715'];
    current: boolean = true;
    userModeBg: string;
    // 用户状态框的显示与隐藏
    userModeDisplay = false;
    waybillOrConee: string;//搜索运单号或收货人
    @Output() widthChange = new EventEmitter<boolean>();
    @Output() gotoPerson = new EventEmitter();
    @Output() gotoYujing = new EventEmitter();
    //一级菜单是否变宽
    @Input('widthSpread') widthSpread: boolean;
    @Output() headerHome = new EventEmitter();
    @Output() selectSubMenu = new EventEmitter();
    /*跳转个人中心*/
    @Output() personalCenter = new EventEmitter();
    /*跳转个人中心*/
    @Output()
    personCenter: EventEmitter<any> = new EventEmitter<any>();
    public portraitUrl: string = "/assets/touxiang01.gif";

    constructor(public router: Router,
                /*, public userService: UserService*/) {

    }

    ngOnInit(): void {
        this.getWarnInfo();
        setTimeout(()=>{

        })
        //监听头像修改事件
        // window['epInstance'].on('change_personal_portrait', info => {
        //     if (!info) {
        //         return;
        //     }
        //     this.portraitUrl = info['url'];
        // });
    }

    //提示弹框
    showSuccess(severity: string, summary: string, detail: string) {
        this.msgs = [{ severity: severity, summary: summary, detail: detail }];
    }

    /**
     * 用户信息展示（目前好像session不会过期）
     */
    ngDoCheck(): void {
        
    }

    gotoPersonal() {
        this.personalCenter.emit({
            "name": "个人中心",
        });
    }

    goYujing() {
        this.gotoYujing.emit({
            "name": "预警信息",
        })
    }

    //切换二级菜单
    changeSubMenu(name) {
        this.current = !this.current;
        this.selectSubMenu.emit(name);
    }

    /**
     * 导航到综合查询
     * @param path
     */
    navigateToPath(path = 'modules/home') {
        // if(!this.waybillOrConee) {
        //     this.showSuccess("warn", "提示", '请输入单号');
        //     return;
        // }
        this.gotoPerson.emit([path, 0]);
        if (this.waybillOrConee) {
            this.router.navigate([path, this.waybillOrConee]);
        } else {
            this.router.navigate([path]);
        }
    }

    showUserMode() {
        this.userModeDisplay = this.username && this.username !== '未登录' ? true : false;
    }

    hideUserMode(index?: number) {
        this.userModeDisplay = false;
        if (index) {
            this.userModeBg = this.userMode[index];//进行状态切换
        }
    }

    /**
     * 点击标签右边×，删除其父节点
     * @param event
     */
    remove(event: any) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }

    public menuWidthChange() {
        this.widthSpread = !this.widthSpread;
        this.widthChange.emit(this.widthSpread);
    }

    menuclick(toModule) {

        this.router.navigate([toModule]);
        if (toModule === '/home') {
            this.headerHome.emit(true);
        }
    }

    /**
     * 退出登录
     */
    public doLogout(): void {
    }

    //请求预警数量
    getWarnInfo() {
        
    }
}
