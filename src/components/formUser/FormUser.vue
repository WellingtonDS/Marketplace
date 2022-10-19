<template>

     <form>
         <label for="name">Nome</label>
         <input type="text" id="name" name="name" v-model="name">
         <label for="email">Email</label>
         <input type="email" id="emal" name="email" v-model="email">
         <label for="password">Senha</label>
         <input type="password" id="password" name="password" v-model="password">
         <label for="cep">Cep</label>
         <input type="text" id="cep" name="cep" v-model="cep">
         <label for="rua">Rua</label>
         <input type="text" id="rua" name="rua" v-model="rua">
         <label for="name">Número</label>
         <input type="text" id="numero" name="numero" v-model="numero">
         <label for="name">Bairro</label>
         <input type="text" id="bairro" name="bairro" v-model="bairro">
         <label for="name">Cidade</label>
         <input type="text" id="cidade" name="cidade" v-model="cidade">
         <label for="name">Estado</label>
         <input type="text" id="estado" name="estado" v-model="estado">
         <div class="button">
            <slot></slot>
         </div> 
     </form> 
    
</template>

<script lang="js">
import FormUserComponents from './FormUserComponents';
export default FormUserComponents
</script>

<style lang="scss" scoped>
@import './FormUser.scss';

</style>