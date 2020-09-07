
Vue.component('game-price-table', {

    delimiters: ["[[","]]"],
    props:["game_title", "prices"],
    template: `
    
<div class="column table-container">
    <p class="subtitle">
        <strong>[[game_title]]</strong> prices
    </p>
    <table class="table">
        <thead>
        <tr>
            <th>Price</th>
            <th>Seller</th>
            <th>Site</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="price in prices">

            <span v-bind:data-tippy-content="price.FetchTime" tabindex="0">
                <td v-if="price == prices[0]" >
                <i class="fas fa-thumbs-up"></i>
                <strong>  [[price.PriceValue]]</strong></td>
                <td v-else>[[price.PriceValue]]</td>
            </span>
            <td v-if="price == prices[0]" class="has-text-primary">[[price.Seller]]</td>
            <td v-else>[[price.Seller]]</td>
            <td><a v-bind:href="price.SiteURL">[[price.siteName]]</a></td>
        </tr>
        </tbody>

    </table>
</div>
    `
})

new Vue({

    delimiters: ["[[","]]"],
    el:"#app",
    data() {
        return {
            pricesosrs: prices_obj.OSRS.data.sort(function(a,b) { return a.PriceValue - b.PriceValue;}),
            pricesrs3: prices_obj.RS3.data.sort(function(a,b) { return a.PriceValue - b.PriceValue;}),
            seenosrs: false,
            seenrs3: false
        }
    },
})
console.log("Got it!")
tippy('[data-tippy-content]');
