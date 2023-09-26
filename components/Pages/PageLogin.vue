<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-block mx-auto mt-5">
                <form @submit.prevent="login" class="form-size">
                    <h2 class="mb-3 text-center">Chassis Login</h2>
                    <div class="input">
                        <label for="user">User ID</label>
                        <input class="form-control" type="text" name="user" placeholder="User ID"/>
                    </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" name="password" placeholder="Type Password Here"/>
                    </div>
       
                    <b-button variant="info" type="submit" class="mt-4 btn-pers mx-auto d-block w-100" id="login_button">Login</b-button>

                    <div class="alert alert-warning alert-dismissible fade show mt-5 d-none" role="alert" id="alert_1"            >
                        Error User ID or Password
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        ></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .form-size {
        max-width: 580px;
        width: 100%;
        margin: 0 auto;
        background: #fff;
        border-radius: 6px;
        padding: 80px;
        box-shadow: 3px 3px 22px 11px #f2f2f2;
    }
</style>
<script>
// https://github.com/vladpostu/vue-firebase-auth/blob/main/src/views/LoginView.vue
// https://vladpostu.github.io/vue-firebase-auth/


export default {
    data() {
        return {
            email: "a",
            password: "a",
        };
    },

    methods: {
        login(submitEvent) {
            var email = submitEvent.target.elements.user.value;
            var password = submitEvent.target.elements.password.value;

            try {
                if (email == this.email && password == this.password){
                    this.$router.push("/Dashboard");
                } else {
                    email == "";
                    password = "";
                    this.$notify.error({
                        title: "Error",
                        message: "Incorrect ID or Password",
                    });
                }
            } catch (error) {
				console.error(error);
			
            }
        },
    },
};
</script>