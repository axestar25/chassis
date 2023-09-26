<template>
  <div>
    <b-sidebar id="sidebar" title="Writer Chassis" shadow>
        <div class="px-0 py-0">
            <div class="account-info px-2 py-2 d-flex">
                
                <b-dropdown>
                    <template #button-content>
                        <img src="/img/default-profile.png" alt="">
                        <div class="ml-3 mr-3 text-left w-100">
                            <b class="w-100 d-block">{{ ProfileName}}</b>
                            <span class="w-100 d-block">{{ Position }}</span>
                        </div>
                    </template>
                    <b-dropdown-item disabled>Chassis</b-dropdown-item>
                    <b-dropdown-item href="#">
                        <i class="fas fa-cog"></i> &nbsp; &nbsp; Research
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                        <i class="fas fa-cog"></i> &nbsp; &nbsp; Writer
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                        <i class="fas fa-cog"></i> &nbsp; &nbsp; Editor
                    </b-dropdown-item>

                    <b-dropdown-item disabled>Other Options</b-dropdown-item>
                    <b-dropdown-item href="#">
                        Update Profile
                    </b-dropdown-item>
                    <b-dropdown-item href="#" class="exit-chassis">
                        Exit Chassis
                    </b-dropdown-item>
                </b-dropdown>

            </div>
            <div class="account-info2 px-2 py-2">
                <h4 class="text-center text-white">Walbro</h4>
            </div>

            <div class="sidebar-menu px-2 mt-3">
                <ul>
                    <li :class="$route.fullPath == '/Dashboard' ? 'active' : ''">
                        <NuxtLink to="/Dashboard">
                            Dashboard
                        </NuxtLink>
                    </li>
                    <li :class="$route.fullPath == '/All-Media' ? 'active' : ''">
                        <NuxtLink to="/All-Media">
                            All Media
                        </NuxtLink>
                    </li>
                    <li :class="$route.fullPath == '/Account-Settings' ? 'active' : ''">
                        <NuxtLink to="/Account-Settings">
                            Account Settings
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
    data() {
        return {
            ProfileName: "Lester Bernaldez",
			Position: "Writer",
        };
    }
}
</script>