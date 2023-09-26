<template>
	<div class="navbar-ui-3" style="">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" v-b-toggle.sidebar><i class="fa fa-bars" aria-hidden="true"></i></b-navbar-brand>            

            <b-collapse id="nav-collapse" is-nav>
                <b-nav-form>
                    <div class="input-group">
                        <span class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-search"></i></div>
                        </span>
                        <input class="form-control py-2 border-right-0 border" type="search" placeholder="Search" id="search-input">
                    </div>
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
                                <b-dropdown-divider></b-dropdown-divider>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown left>
                                <template #button-content>
                                    <i class="fas fa-bell"></i>
                                </template>
                                <b-dropdown-item href="#">Notifications </b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <i class="fas fa-cog"></i>
                                </template>
                                <b-dropdown-item href="#">Settings </b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <i class="fas fa-history fa-flip-horizontal"></i>
                                </template>
                                <b-dropdown-item disabled>Version Logs</b-dropdown-item>
                                <b-dropdown-item href="#" class="d-flex">
                                    <i class="fas fa-star" style="color: #ff9800"></i> 
                                    <div class="version-info">
                                        <b class="w-100 d-block" style="color: #1976d2;">{{ version }}</b>
                                        <span class="w-100 d-block" style="color: #737579;">{{ versionDate }}</span>
                                    </div>
                                </b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
	</div>
    
</template>
<script>
export default {
	data() {
		return {
			version: "4.4.0",
            versionDate: "Aug 27, 2021",
		};
	},

	mounted() {
		self = this;

	},

	methods: {
		
	},
};
</script>