<template>
<section class="py-5">
    <router-link :to="{name: 'MyCategory'}" >
        <button class="btn btn-primary btn-lg"> Categories</button>
    </router-link>
    <br/>
    <router-link :to="{name: 'MyProduct'}" >
        <button class="btn btn-primary btn-lg"> Products</button>
    </router-link>
</section>
</template>
<script>
export default {
}
</script>
<style>
    .btn {
        margin-bottom: 20px;
    }
</style>