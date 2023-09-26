<template>
	<div class="navbar-ui-3" style="">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" v-b-toggle.sidebar><i class="fa fa-bars" aria-hidden="true"></i></b-navbar-brand>            

            <b-collapse id="nav-collapse" is-nav>
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <!-- Right aligned nav items -->                
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav type="light">
                        <b-nav-item href="#">
                            <b-nav-item-dropdown left>
                                <!-- Using 'button-content' slot -->
                                <template #button-content>
                                    <i class="fas fa-desktop"></i>
                                </template>
                                <b-dropdown-item href="#">Manage Dashboard</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <i class="fas fa-bell"></i>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <i class="fas fa-cog"></i>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <i class="fas fa-history fa-flip-horizontal"></i>
                        </b-nav-item>
                    </b-navbar-nav>
                    
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
	</div>
    
</template>
<script>
export default {
	data() {
		return {
			
		};
	},

	mounted() {
		self = this;

	},

	methods: {
		
	},
};
</script>