<template>
    <section class="features">
        <div class="row align-items-center">
            <div class="col-lg-6 p-0">
                    <div class="feature-inner">
                        <h2>What we do <span>.</span></h2>
                        <div class="seprator">
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-brands fa-mixcloud" />
                                <strong>Entirely cloud based</strong> – sit amet consectetur lorem ipsum
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-laptop" />
                                <strong>Any number of devices</strong> – tempor incididunt ut adipisicing elit
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <strong>Single sign-in</strong> – magna aliqua labore et dolore
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-regular fa-hard-drive" />
                                <strong>Disaster recovery</strong> – veniam quis nostrud ut enim ad minim
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-globe" />
                                <strong>Access from anywhere</strong> – labore et dolore magna aliqua
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-download" />
                                <strong>Real-time backups</strong> – ut enim ad minim veniam quis nostrud
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="col-lg-6 p-0">
                <div class="boxes">
                    <div class="box">
                        <div class="heading">
                            <a href="#" class="d-flex align-items-center">
                                <span class="icon"><font-awesome-icon icon="fa-solid fa-cloud-arrow-up" /></span>
                                <h2>CLOUD COMPUTING</h2>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore etre.
                        </p>
                        <div class="line"></div>
                    </div>
                    <div class="box">
                        <div class="heading">
                            <a href="#" class="d-flex align-items-center">
                                <span class="icon"><font-awesome-icon icon="fa-solid fa-lock" /></span>
                                <h2>IT SECURITY</h2>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore etre.
                        </p>
                        <div class="line"></div>
                    </div>
                    <div class="box">
                        <div class="heading">
                            <a href="#" class="d-flex align-items-center">
                                <span class="icon"><font-awesome-icon icon="fa-solid fa-server" /></span>
                                <h2>BACKUP AND RECOVERY</h2>
                            </a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore etre.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppHomeFeatures',
    data() {
        return {

        }
    }
}
</script>
<style>
    .features {
        padding-top: 160px;
        margin-top: 0px;
        padding-right: 30px;
        padding-bottom: 95px;
        margin-bottom: 0px;
        padding-left: 30px;
        background-color: rgba(255, 255, 255, 0);
        background-position: center center;
        background-repeat: no-repeat;
        border-width: 0px;
        border-style: solid;
        background-size: cover;
        background-image: url("https://avada.theme-fusion.com/information-technology/wp-content/uploads/sites/81/2016/11/avada-it-section-bg.png");
    }
    
    .features  h2{
        color: rgb(255, 255, 255);
        font-family: Teko;
        font-size: 65px;
        font-weight: 400;
        line-height: 65px;
        text-align: left;
        text-transform: uppercase;
    }

    .features  h2 span{
        color: rgb(116, 197, 218);
    }

    .features .seprator{
        width: 100px;
        margin-bottom: 50px;
        background-color: rgb(116, 197, 218);
        height: 4px;
    }
    .features  .feature-inner p{
        color: rgb(255, 255, 255);
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        margin-bottom: 30px;
    }
    .features  .feature-inner ul{
        list-style: none;
        padding: 0;
    }
    .features  .feature-inner ul li{
        color: rgb(255, 255, 255);
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 27.2px;
        padding: 6px 0;
    }
    .features  .feature-inner ul li svg{
        margin-right: 12px;
    }
    .features .box {
        margin-bottom: 40px;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        z-index: 1;
    }
    .features .box a {
        text-decoration: none;
    }
    .features .box .icon{
        height: 102px;
        line-height: 57px;
        margin-right: 20px;
        width: 102px;
        background-color: rgb(98, 57, 189);
        display: inline-block;
        border-radius: 50%;
        padding: 6px;
        border: 2px solid rgb(116, 197, 218);
        position: relative;
        animation: fusionExpandAndShow 1s 1 cubic-bezier(.17,.67,.83,.67);
    }
    .features .box .icon svg{
        font-size: 45px;
        color: #fff;
        background-color: rgb(116, 197, 218);
        border-radius: 50%;
        padding: 20.5px 15px;
        width: 56px;
    }
    .features .box h2 {
        font-family: Teko;
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        color: #fff;
    }
    .features .box:hover h2 {
        color: rgb(98, 57, 189);
    }
    .features .box:hover .icon{

        background-color: rgb(98, 57, 189);

        border: 2px solid rgb(98, 57, 189);

    }
    .features .box:hover .icon::after {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        content: "";
        box-sizing: content-box;
        top: 0;
        left: 0;
        padding: 0;
        z-index: 1;
        box-shadow: 0 0 0 10px rgba(255,255,255,.1);
        opacity: 0;
        transform: scale(.9);
        display: inline-block;
        animation: fusionSonarEffect 1.3s ease-out 75ms;
    }
    .features .box:hover .icon svg{

        background-color: rgb(98, 57, 189);

    }

    .features .box p {
        margin-bottom: 20px;
        padding-left: 126px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        color: #fff;
        margin-top: -25px;
    }
    .features .box .line {
        position: absolute;
        top: 53px;
        left: 68px;
        height: calc(100% + 40px);
        border-left: 1px solid rgb(116, 197, 218);
        z-index: -1;
        animation: fusionExpandHeight 1s 1 cubic-bezier(.17,.67,.83,.67);
    }
    @keyframes fusionSonarEffect {
        0% {
        opacity:.3
        }
        40% {
        opacity:.5
        }
        to {
        transform:scale(1.5);
        opacity:0
        }
    }
    @keyframes fusionExpandHeight{
        0%{height:0}
        100%{height:100%}
    }
    @keyframes fusionExpandAndShow{
        0%{transform:scale(.5);opacity:1}
        100%{transform:scale(1);opacity:1}}
</style>