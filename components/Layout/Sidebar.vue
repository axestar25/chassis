<template>
  <div>
    <b-sidebar id="sidebar" title="Writer Chassis" shadow>
        <!-- <div class="sidebar-company">
            <ul>
                <li>
                    <a href="#">COmpany 1</a>
                </li>
            </ul>
        </div> -->
        <template #footer="">
            <div class="d-block text-light align-items-center px-3 py-2">
                <strong class="mr-auto w-100 float-left">Salesforce Home</strong>
                <strong class="mr-auto w-100 float-left">{{ systemVersion }} | © 2021 {{ CompanyName }}</strong>
            </div>
        </template>
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
                        <i class="fa fa-search" style="color: #1976d2;" aria-hidden="true"></i> &nbsp; &nbsp; Research
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                        <i class="fa fa-pencil" style="color: #004d40;" aria-hidden="true"></i> &nbsp; &nbsp; Writer
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                        <i class="fa fa-list-alt" style="color: #3f51b5;" aria-hidden="true"></i> &nbsp; &nbsp; Editor
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
            systemVersion: "v.4.4.0",
            CompanyName: "ArchInterl Corp.",
        };
    }
}
</script>