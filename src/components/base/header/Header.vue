<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <img src="@/assets/img/ranek.svg" alt="logoHeader">
            </router-link>
            <router-link class="btn" v-if="$store.state.login" to="/user">
                {{name}}
            </router-link>
            <router-link v-else class="btn" to="/login">Vender/ login</router-link>
        </nav>
    </header>
</template>

<script>
import HeaderComponent from './HeaderCoimponents';
export default HeaderComponent;
</script>

<style lang="scss" scoped>
@import'./Header.scss';
</style>