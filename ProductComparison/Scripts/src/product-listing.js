﻿document.addEventListener('DOMContentLoaded', () => {
    var productListing = new Vue({
        el: '#product-listing',
        data: {
            products: null
        },
        mounted() {
            this.loadProducts();
        },
        methods: {
            isCompareDisabledForSku(sku) {
                var skuIsDisabled = false;

                if (sku !== undefined) {
                    var skuIsInCompare = window.compare.skuIsInCompare(sku);

                    if (!skuIsInCompare && window.compare.isFull()) {
                        skuIsDisabled = true;
                    }
                } else {
                    skuIsDisabled = window.compare.isFull();
                }

                return skuIsDisabled;
            },
            isCompareCheckedForSku(sku) {
                var skuIsChecked = false;

                if (sku !== undefined) {
                    var skuIsInCompare = window.compare.skuIsInCompare(sku);

                    if (skuIsInCompare) {
                        skuIsChecked = true;
                    }
                }

                return skuIsChecked;
            },
            isMultipleOfThree(number) {
                return (number) % 3 === 0;
            },
            loadProducts() {
                this.$http.get("/api/product-listing/all")
                    .then(response => {
                        this.products = response.data.Products;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            toggleCompare(event) {
                var checked = event.target.checked;
                var sku = event.target.name;
                if (checked) {
                    window.compare.addProduct(sku);
                } else {
                    window.compare.removeProduct(sku);
                }
            }
        }
    });
});