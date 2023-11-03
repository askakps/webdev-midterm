<script setup>
import LikeButton from '@/components/LikeButton/index.vue'
import DeleteButton from '@/components/DeleteButton/index.vue'
import PostImage1 from '~/assets/images/image1.png'
import PostImage2 from '~/assets/images/image2.png'
import PostImage3 from '~/assets/images/image3.png'
import PostImage4 from '~/assets/images/image4.png'

const posts = ref([
    { title: 'Post 1', image: PostImage1, liked: false },
    { title: 'Post 2', image: PostImage2, liked: true },
    { title: 'Post 3', image: PostImage3, liked: false },
    { title: 'Post 4', image: PostImage4, liked: false },
])

const toggleLike = (index) => {
    posts.value[index].liked = !posts.value[index].liked;
}
const  deletePost = (index) => {
    posts.value.splice(index, 1);
}
const addPost = () => {
    const newPost = {
        title: `Post ${posts.value.length + 1}`,
        image: PostImage1,
        liked: false,
    };
    posts.value.push(newPost);
}

</script>

<template>
    <div>
        <h1>Posts</h1>
        <div class="posts-list">
            <div v-for="(post, index) in posts" :key="index" class="post">
                <img :src="post.image" :alt="post.title" />
                <h2 class="post__title">{{ post.title }}</h2>
                <LikeButton :liked="post.liked"  @click="toggleLike(index)" />
                <DeleteButton @click="deletePost(index)" />
                </div>
            </div>
        </div>
        <button class="add-post" @click="addPost">Add post</button>
</template>

<style lang="scss" scoped>
.posts-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    .post {
        img {
            border-radius: 12px;
            max-width: 100%;
        }
        .post__title {
            font-size: 20px;
            font-weight: 700;
        }
    }
}
.add-post {
    cursor: pointer;
    display: block;
    margin: 25px auto;
    text-align: center;
    background: green;
    border: none;
    color: #ffffff;
    padding: 15px 20px;
    border-radius: 8px;
}
</style>