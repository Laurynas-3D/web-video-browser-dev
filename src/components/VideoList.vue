<template>
    <div>
        <ul class="list-group">
            <VideoListItem v-for="video in videos" :video="video" :key="video.etag"></VideoListItem>
        </ul>
    </div>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name:'VideoList',
    components:{
        VideoListItem
    },
    props: ['videos'],
    
}
</script>

<style>

</style>