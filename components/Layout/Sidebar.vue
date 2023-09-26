<template>
  <div>
    <b-sidebar id="sidebar" title="Writer Chassis" shadow>
        <div class="px-0 py-0">
            <div class="account-info px-2 py-2 d-flex">
                <img src="/img/default-profile.png" alt="">
                <div>
                    <p>
                        Lester Bernaldez
                        <span>Writer</span>
                    </p>
                </div>
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