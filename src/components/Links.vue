<template>
    <div>
        <link-item v-for="link in links" :key="link.id"
            :description="link.description"
            :source="link.source"
        />
    </div>
</template>

<script>
const linksData = [{
    "id": 1,
    "source": "https://www.youtube.com/watch?v=-Wlt8NRtOpo",
    "description": "CSS flex box tutorials"
},{
    "id": 2,
    "source": "https://www.youtube.com/watch?v=FHy865T13jI",
    "description": "AR Rahman songs"
},{
    "id": 3,
    "source": "https://www.youtube.com/watch?v=WE_k7v8QTXo"
},{
    "id": 4,
    "source": "https://www.youtube.com/watch?v=-Wlt8NRtOpo",
    "description": "CSS flex box tutorials"
},{
    "id": 5,
    "source": "https://www.youtube.com/watch?v=FHy865T13jI",
    "description": "AR Rahman songs"
},{
    "id": 6,
    "source": "https://www.youtube.com/watch?v=WE_k7v8QTXo"
},{
    "id": 7,
    "source": "https://www.youtube.com/watch?v=-Wlt8NRtOpo",
    "description": "CSS flex box tutorials"
},{
    "id": 8,
    "source": "https://www.youtube.com/watch?v=FHy865T13jI",
    "description": "AR Rahman songs"
},{
    "id": 9,
    "source": "https://www.youtube.com/watch?v=WE_k7v8QTXo"
}];

import LinkItem from "./LinkItem.vue";

export default {
    name: "links",
    components: {
        "link-item": LinkItem,
    },
    data() {
        return {
            links: linksData
        }
    },
}
</script>

<style scoped>

</style>