<template>
    <div class="container-fluid">
        <div class="text-center mt-5">
            <img src="../img/logo.png" class="mx-auto d-block" alt="" width="200px" height="200px">
            <p class="mt-3">Welcome in your shopping list application ! <br>
                Prepare your shopping list and check your articles during your shop session</p>
        </div>

        <div v-if="noExistList">
            <router-link tag="button" class="btn btn-primary btn-lg" id="button" to="/addlist">Create my list</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        noExistList: true
    })
}
</script>
<style>

</style>
