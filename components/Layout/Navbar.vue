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
                            <b-nav-item-dropdown right>
                                <!-- Using 'button-content' slot -->
                                <template #button-content>
                                    <i class="fas fa-desktop"></i>
                                </template>
                                <b-dropdown-item href="#">Manage Dashboard</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <i class="fas fa-bell"></i>
                                </template>
                                <div class="notif-title">Notifications <span class="float-right"><i class="fa fa-filter" aria-hidden="true"></i></span></div>
                                <b-dropdown-divider></b-dropdown-divider>
                            </b-nav-item-dropdown>
                            <!-- <div class="dropdown-notification">
                                <button @click="toggleDropdown" class="notification-button">
                                Notifications ({{ notifications.length }})
                                </button>
                                <div v-if="showDropdown" class="notification-list">
                                <div v-for="(notification, index) in notifications" :key="index" class="notification">
                                    <span>{{ notification.text }}</span>
                                    <button @click="dismissNotification(index)" class="dismiss-button">Dismiss</button>
                                </div>
                                </div>
                            </div> -->
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <i class="fas fa-cog"></i>
                                </template>
                                <div class="notif-title">Settings </div>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item href="#" disabled>General </b-dropdown-item>
                                <div class="push-notif d-flex mx-3 my-3">
                                    <div class="icon-toggle mr-3 d-flex vertical-align-middle align-items-center">
                                        <i v-if="active" class="fa fa-toggle-on" @click="toggle"></i>
                                        <i v-else class="fa fa-toggle-off" @click="toggle"></i>
                                    </div>   
                                    <div class="right-settings-info">
                                        <p>Push Notification</p>
                                        <span class="color-gray">Enable/disable web push notifications</span>
                                    </div>
                                </div>
                                <div class="push-notif d-flex mx-3 my-3">
                                    <div class="icon-toggle mr-3 d-flex vertical-align-middle align-items-center">
                                        <i v-if="active2" class="fa fa-toggle-on" @click="toggle2"></i>
                                        <i v-else class="fa fa-toggle-off" @click="toggle2"></i>
                                    </div>   
                                    <div class="right-settings-info">
                                        <p>Dark Mode</p>
                                        <span class="color-gray">Enable dark mode theme (only applicable to internal webpages).</span>
                                    </div>
                                </div>
                                <b-dropdown-item href="#" disabled>Writer/Editor </b-dropdown-item>
                                <div class="push-notif d-flex mx-3 my-3">
                                    <div class="icon-toggle mr-3 d-flex vertical-align-middle align-items-center">
                                        <i v-if="active3" class="fa fa-toggle-on" @click="toggle3"></i>
                                        <i v-else class="fa fa-toggle-off" @click="toggle3"></i>
                                    </div>   
                                    <div class="right-settings-info">
                                        <p>Auto-Save Draft</p>
                                        <span class="color-gray">(Experimental) Enable autosaving of draft</span>
                                    </div>
                                </div>
                            </b-nav-item-dropdown>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <i class="fas fa-history fa-flip-horizontal"></i>
                                </template>
                                <div class="notif-title">Version Logs </div>
                                <b-dropdown-divider></b-dropdown-divider>
                                <div class="d-flex vertical-align-middle align-items-center">
                                    <div class="star-version w-25 text-center">
                                        <i class="fas fa-star" style="color: #ff9800"></i> 
                                    </div>
                                    <div class="version-info" style="width: 65%;">
                                        <b class="w-100 d-block" style="color: #1976d2;">{{ version }}</b>
                                        <span class="w-100 d-block" style="color: #737579;">{{ versionDate }}</span>
                                    </div>
                                    <i class="fa fa-chevron-up text-center" style="color: #1976d2;" aria-hidden="true"></i>
                                </div>
                                <b-dropdown-divider></b-dropdown-divider>
                                <p class="mx-3 color-gray">The quick brown fox jumps over the lazy dog.</p>
                                <b-dropdown-divider></b-dropdown-divider>
                                <div v-if="oldVersion.length != 0" v-loading="loading" class="mb-3">
                                    <div class="d-flex vertical-align-middle align-items-center mx-3 my-3" v-for="(item, index) in oldVersion" :key="index">
                                        <div class="version-info w-100">
                                            <b class="w-100 d-block">{{ item.ver }}</b>
                                            <span class="w-100 d-block color-gray">{{ item.verDate }}</span>
                                        </div>
                                        <i class="fa fa-chevron-down text-center color-gray" aria-hidden="true"></i>
                                    </div>
                                </div>
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

            showDropdown: false,
            notifications: [
                { text: 'You have a new message' },
                { text: 'A new post has been added' },
            ],
            active: true,
            active2: false,
            active3: false,
            oldVersion: [
                {ver: "4.3.6", verDate: "Jan 15, 2021"},
                {ver: "4.3.5", verDate: "Sep 12, 2020"},
                {ver: "4.3.4", verDate: "Sep 2, 2020"},
                {ver: "4.3.3", verDate: "Aug 6, 2020"},
                {ver: "4.3.2", verDate: "Jul 28, 2020"},
            ]

		};
	},

	mounted() {
		self = this;

	},

	methods: {
		toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        dismissNotification(index) {
            this.notifications.splice(index, 1);
        },
        toggle() {
            this.active = !this.active;
        },
        toggle2() {
            this.active2 = !this.active2;
        },
        toggle3() {
            this.active3 = !this.active3;
        },
	},
};
</script>