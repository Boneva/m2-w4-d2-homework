Vue.component('header-component', {
    template: `
        <header>
            <span>Food Blog</span>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    `
});

Vue.component('main-component', {
    props: ['posts'],
    template: `
        <main>
            <aside id="photos">
                <img src="images/chili.jpg" alt="White Chicken Chili" width="180">
            </aside>
            <h2>Comments</h2>
            <section id="blogposts">
                <post-component
                    v-for="(post, index) in posts"
                    :key="index"
                    :author="post.author"
                    :date="post.date"
                    :time="post.time"
                    :reply="post.reply"
                    :content="post.content"
                    :profile="post.profile"
                    @show-profile="showProfile"
                ></post-component>
            </section>
        </main>
    `,
    methods: {
        showProfile(profile) {
            this.$emit('show-profile', profile);
        }
    }
});

Vue.component('post-component', {
    props: ['author', 'date', 'time', 'reply', 'content', 'profile'],
    template: `
        <div class="post">
            <img src="images/profile.png" @click="$emit('show-profile', profile)" width="50" height="40">
            <span class="author">{{ author }}</span>
            <span class="date">{{ date }} @ {{ time }}</span>
            <span class="reply">{{ reply }}</span>
            <p>{{ content }}</p>
        </div>
    `
});

Vue.component('footer-component', {
    template: `
        <footer>
            &copy; Copyright FOOD BLOG
        </footer>
    `
});

new Vue({
    el: '#app',
    data: {
        showPopup: false,
        activeProfile: {},
        blogData: {
            posts: [
                {
                    author: 'Brianna',
                    date: 'February 18, 2021',
                    time: '3:30 pm',
                    reply: 'REPLY',
                    content: `Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!`,
                    profile: {
                        name: 'Brianna',
                        foodieLevel: 'Expert',
                        bio: 'Food enthusiast. Love to cook and experiment with new recipes.',
                    }
                },
                {
                    author: 'LINH',
                    date: 'February 15, 2021',
                    time: '9:46 am',
                    reply: 'REPLY',
                    content: `I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!`,
                    profile: {
                        name: 'LINH',
                        foodieLevel: 'Intermediate',
                        bio: 'Foodie level: Intermediate. Enjoys cooking healthy and delicious meals.',
                    }
                },
                {
                    author: 'CATHERINE LEONARDO',
                    date: 'February 13, 2021',
                    time: '12:58 pm',
                    reply: 'REPLY',
                    content: `I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.`,
                    profile: {
                        name: 'CATHERINE LEONARDO',
                        foodieLevel: 'Advanced',
                        bio: 'Advanced cook with a passion for creating and sharing recipes.',
                    }
                },
                {
                    author: 'KALI',
                    date: 'February 13, 2021',
                    time: '11:31 am',
                    reply: 'REPLY',
                    content: `This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!`,
                    profile: {
                        name: 'KALI',
                        foodieLevel: 'Beginner',
                        bio: 'Novice cook who loves to try new recipes and share them with friends.',
                    }
                }
            ]
        }
    },
    methods: {
        showProfile(profile) {
            this.activeProfile = profile;
            this.showPopup = true;
        }
    }
});

