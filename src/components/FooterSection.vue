<template>
    <div class="footer">
        <div class="bloc heroku">
            <h3>HerokuApp</h3>
            <p>Without herokuapp's ghibli api this website wouldn't exist, so thanks to them !</p>
            <a href="https://ghibliapi.herokuapp.com/">Visit the HerokuApp's API</a>


        </div>
        <div class="bloc me">
            <h3>Me</h3>
            <p>I am a French developer who builds websites on subjects I like to improve my development skills</p>
            <a href="https://ascryd.github.io/PorteFolio/#/">Visit my personnal website</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterSection'
    }

    
</script>

<style lang="scss" scoped>

.footer {
    margin-top: 150px;
    padding: 30px 20px 30px 20px;
    background-color: rgb(54, 54, 54);
    color: white;
    display: flex;
    justify-content: space-around;
    gap: 35px;
    @include mobile--footer {
        flex-direction: column;
        align-items: center;
    }
    
    .bloc {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 50%;
        @include mobile--footer {
            width: auto;
        }

        h3 {
            font-weight: 600;
            font-size: 25px;
        }

        a {
            color: rgb(253, 157, 31);
            text-decoration: underline;
        }
    }
}

</style>