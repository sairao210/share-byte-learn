<template>
    <div>
        <link-item v-for="link in links" :key="link.id"
            :description="link.description"
            :source="link.source"
        />
    </div>
</template>

<script>
import LinkItem from "./LinkItem.vue";
import { linksRef } from "../database/DataRepository";

export default {
    name: "links",
    components: {
        "link-item": LinkItem,
    },
    data() {
        return {
            links: []
        }
    },

    firebase: {
        links: linksRef,
    }
}
</script>

<style scoped>

</style>