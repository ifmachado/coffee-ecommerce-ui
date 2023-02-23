<template>
    <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img :src="product.imageURL" class="card-img-top mb-5 mb-md-0"/></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">{{product.name}}</h1>
                        <h6 class="medium mb-1 catgory font-italic"> {{category.categoryName}}</h6>
                        <div class="fs-5 mb-5">
                            <span>€ {{product.price}}</span>
                            <p> {{product.description}} </p>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                            <br />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                product: {},
                category: {}
            }
        },
        props: ["baseURL", "products", "categories"],
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find((product) => product.id == this.id)
            this.category = this.categories.find(category =>
                category.id == this.product.categoryId)
        }
    }
</script>
<style>
    .category {
        font-weight: 400;
    }
</style>