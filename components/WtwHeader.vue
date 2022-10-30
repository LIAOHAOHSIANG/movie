<template>
    <div class="header" :class="{'hideBackground':hideBackground}">
        <div class="header_container container" >
            <a href="/" class="header-logo">
                <WtwLogo></WtwLogo>
                <h2 class="header-logo_title">
                    挖！影
                </h2>
            </a>
            <div class="header-search">
                <div class="header-search_searchbar">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3501 16.5818L17.3501 16.5817L14.7575 13.9946C16.0812 12.535 16.8888 10.5988 16.8888 8.47755C16.8888 3.94505 13.2021 0.25835 8.66955 0.25835C4.13706 0.25835 0.449512 3.94504 0.449512 8.47755C0.449512 13.0101 4.13705 16.6976 8.66955 16.6976C10.592 16.6976 12.3624 16.0341 13.7637 14.9243L16.3902 17.5435L16.3903 17.5435C16.5233 17.6756 16.6972 17.7418 16.8701 17.7418C17.0437 17.7418 17.2186 17.6758 17.3509 17.5417C17.6164 17.2763 17.6153 16.847 17.3501 16.5818ZM1.80786 8.47755C1.80786 4.69405 4.88604 1.6167 8.66955 1.6167C12.4522 1.6167 15.5304 4.69405 15.5304 8.47755C15.5304 12.2611 12.4522 15.3392 8.66955 15.3392C4.88605 15.3392 1.80786 12.2611 1.80786 8.47755Z" fill="#686B72" stroke="#686B72" stroke-width="0.1"/>
                    </svg>
                    <div class="header-search_searchbar-text">
                        <input v-on:keyup.enter="search()" v-model="search_text" type="text" placeholder="搜尋劇名 / 演員" />
                    </div>
                </div>
            </div>
            <ul class="header-navbar">
                <li :class="{'active':target_page == 'movie'}"><a href="/movie">電影</a></li>
                <li  :class="{'active':target_page == 'drama'}"><a href="/drama">戲劇</a></li>
                <li  :class="{'active':target_page == 'topic'}"><a href="/topic">主題館</a></li>
                <li  :class="{'active':target_page == 'playlist'}"><a href="/playlist">我的片單</a></li>
            </ul>
            <div class="header-profile">
                <img @click="login_panel_display=true" class="header-profile_image" :style="{'background-image':'url('+$store.state.auth.avatar_url+')'}"/>
            </div>
        </div>
        <div v-if="login_panel_display" class="login" @click="login_panel_display=false">
            <div v-if="$store.state.auth.isLogin" class="login_panel">
                <div class="login_panel-header">
                    您已經登入帳號
                </div>
                <div class="login_panel-content">

                    <div  class="login_button cancel_button">
                        <div @click="()=>{$store.dispatch('auth/logout')}" class="cancel_button-conatiner">
                            登出
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="login_panel">
                <div class="login_panel-header">
                    請登入帳號 
                </div>
                <div class="login_panel-content">
                    <div @click="loginWithLine()" class="login_button line_login_button">
                        LINE登入
                    </div>
                    <div @click="login_panel_display=false" class="login_button cancel_button">
                        <div class="cancel_button-conatiner">
                            取消
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WtwLogo from '/components/WtwLogo.vue';

export default {
    components: {
        WtwLogo
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data () {
        return {
            target_page:"",
            hideBackground: false,
            alwaysHideBackground:false,
            search_text:"",
            login_panel_display:false,
            isLogin:false
        }
    },
    mounted:function() {
        this.$store.dispatch('auth/check')
        this.checkPath();
        this.handleScroll();
    },
    watch:{
        '$route.path': function(){
            this.checkPath();
        },
    },
    methods:{
        loginWithLine() {
            window.location.href = process.env.AUTH_URL;
        },
        search($value) {
            this.$router.push('/search/'+this.search_text)
        },
        checkPath() {
            switch(this.$route.path){
                case "/":
                    this.target_page = "";
                    this.alwaysHideBackground = false;
                    break;
                case "/movie":
                    this.target_page = "movie";
                    this.alwaysHideBackground = true;
                    break;
                case "/topic":
                    this.target_page = "topic";
                    this.alwaysHideBackground = true;
                    break;
                case "/playlist":
                    this.target_page = "playlist";
                    this.alwaysHideBackground = true;
                    break;
            }
        },
        handleScroll () {
            const scrollY = window.scrollY;
            if(this.alwaysHideBackground){
                this.hideBackground = true;
                return;
            }
            if(scrollY > 720) {
                this.hideBackground = true;
            }else{
                this.hideBackground = false;
            }
        }
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';
    /* Header */
    .header{
        background: rgba(27, 30, 37, 0.68);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        z-index: 100;
        &.hideBackground{
            background: rgba(27, 30, 37, 1);
        }

        &_container{
            display: flex;
            align-items: center;
            height: 60px;
        }
        /* Header Logo */
        &-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            flex:0 0 auto;
            margin-left: 16px;
            &_title{
                text-decoration: none;
                font-size: 18px;
                line-height: 27px;
                font-weight: 400;
                color:#ffffff;
                margin:0px !important;
                margin-left: 10px;
                flex:0 fit-content;
            }
        }

        // SearchBar
        &-search{
            flex:1 0 auto;
            margin-left: 20px;
            margin-right: 20px;
            padding:10px;
            display: flex;
            &_searchbar{
                width: 100%;
                height: 38px;
                border:solid 1px gray;
                color:gray;
                border-radius: 8px;
                padding:8.5px 12.5px;
                display: flex;
                box-sizing: border-box;
                &-text{
                    font-size: 14px;
                    line-height: 21px;
                    margin-left: 10px;
                    width: 100%;
                    input{
                        color:white;
                        width: 100%;
                        background: rgba(255, 255, 255, 0);
                        border:0px;
                        &:focus{
                            border: 0px;
                            outline: 0px;
                        }
                    }
                }
            }
        }

        /* Header Navbar */
        &-navbar{
            flex:1 1 auto;
            display: flex;
            justify-content:flex-end;
            align-items: flex-end;
            height: 100%;
            @media (max-width:$breakpoint-mobile){
                display: none;
            }
            li{
                color: #ffffff;
                list-style: none;
                margin-right:7px;
                width: 77px;
                height: 36px;
                position: relative;
                text-align: center;
                cursor: pointer;
                a{
                    color: inherit;
                    text-decoration: inherit;
                }
                @media (max-width:$breakpoint-tablet){
                    width: fit-content;
                    padding-left: 4px;
                    padding-right: 4px;
                }

                &.active::after{
                    content: "";
                    position: absolute;
                    top: 32px;
                    left: 0px;
                    width: 100%;
                    height: 4px;
                    background: $primary_color;
                    border-radius: 50px;
                }
            }
            &:hover li:after{
                background: rgba(255, 255, 255, 0);
            }
            li:hover::after{
                content: "";
                position: absolute;
                top: 32px;
                left: 0px;
                width: 100%;
                height: 4px;
                background: $primary_color;
            }
        }
        /* Header Profile */
        &-profile{
            display: flex;
            justify-content: center;
            align-items: center;
            flex:0 0 auto;
            margin-right: 16px;
            @media (max-width:$breakpoint-mobile){
                display: none;
            }

            &_image{
                background-color: white;
                background-size: cover;
                width: 42px;
                height: 42px;
                border-radius: 100%;
                margin: auto;
                cursor: pointer;
            }
        }
    }
    .login{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: rgba(27, 30, 37, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        &_panel{
            background: rgba(22, 22, 22, 1);
            border-radius: 28px;
            padding:40px 60px;
            &-header{
                text-align: center;
            }
            &-content{
                margin-top: 28px;
                .login_button{
                    width: 250px;
                    height: 42px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 13px;
                    margin-top: 10px;
                    font-size: 16px;
                    font-weight: 400;
                    cursor: pointer;
                    &.line_login_button{
                        background-color: rgb(83,181,53);
                    }
                    &.cancel_button{
                        background: $primary_color;
                        padding:1px;
                        & .cancel_button-conatiner{
                            background: #1B1E25;
                            border-radius: 13px;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        
        }
    }
</style>