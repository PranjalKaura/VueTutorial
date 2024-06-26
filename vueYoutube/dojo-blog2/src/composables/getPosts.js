import {ref} from 'vue';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const showPosts = ref(true);
    const load = async () => {
        try {
            //simulating delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error("No data available!")
            }
            posts.value = await data.json()
        }
        catch(err) {
            error.value = err.message;
            console.log(error.value)
        }
    }

    return {posts, error, showPosts, load}
}

export default getPosts