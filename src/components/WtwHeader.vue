<template>
    <div class="header">
        <div class="header_container container">
            <div class="header-logo">
                <WtwLogo></WtwLogo>
                <h2 class="header-logo_title">
                    挖！影
                </h2>
            </div>
            <div class="header-search">
                <div class="header-search_searchbar">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3501 16.5818L17.3501 16.5817L14.7575 13.9946C16.0812 12.535 16.8888 10.5988 16.8888 8.47755C16.8888 3.94505 13.2021 0.25835 8.66955 0.25835C4.13706 0.25835 0.449512 3.94504 0.449512 8.47755C0.449512 13.0101 4.13705 16.6976 8.66955 16.6976C10.592 16.6976 12.3624 16.0341 13.7637 14.9243L16.3902 17.5435L16.3903 17.5435C16.5233 17.6756 16.6972 17.7418 16.8701 17.7418C17.0437 17.7418 17.2186 17.6758 17.3509 17.5417C17.6164 17.2763 17.6153 16.847 17.3501 16.5818ZM1.80786 8.47755C1.80786 4.69405 4.88604 1.6167 8.66955 1.6167C12.4522 1.6167 15.5304 4.69405 15.5304 8.47755C15.5304 12.2611 12.4522 15.3392 8.66955 15.3392C4.88605 15.3392 1.80786 12.2611 1.80786 8.47755Z" fill="#686B72" stroke="#686B72" stroke-width="0.1"/>
                    </svg>
                    <div class="header-search_searchbar-text">
                    搜尋劇名 / 演員
                    </div>
                </div>
            </div>
            <ul class="header-navbar">
                <li class="active">電影</li>
                <li >戲劇</li>
                <li>主題館</li>
                <li>我的片單</li>
            </ul>
            <div class="header-profile">
                <img class="header-profile_image"/>
            </div>
        </div>
    </div>
</template>

<script>
    import WtwLogo from './WtwLogo.vue';
    export default {
        components: {
            WtwLogo
        }
    }
</script>

<style lang="scss">
    @import '../sass/variable.scss';
    /* Header */
    .header{
    background-color: #1B1E25;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
    z-index: 100;

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

        &_title{
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
        flex:0 0 auto;
        margin-left: 20px;
        padding:10px;
        display: flex;
        &_searchbar{
        width: 414px;
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
        li{
        color: #ffffff;
        list-style: none;
        margin-right:7px;
        width: 77px;
        height: 36px;
        position: relative;
        text-align: center;
        cursor: pointer;

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
        background: #1B1E25 ;
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

        &_image{
        background-color: #ffffff;
        width: 42px;
        height: 42px;
        border-radius: 100%;
        margin: auto;
        }
    }
    }
</style>