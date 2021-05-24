<template>
    <ion-img :src="image" :alt="title"></ion-img>
    <h2 class="ion-text-center">{{ title }}</h2>
    <p class="ion-text-center">{{ description}}</p>

</template>

<!-- <template>
    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    <h2>{{ memory.title }}</h2>
    <p>{{ memory.description}}</p>
</template> -->

<script>
import { IonImg } from '@ionic/vue';

export default {
    props: ['title', 'image', 'description'],
    // props: ['memory'],
    components:{
        IonImg,
    }
}
</script>
