<template>
    <div
        class="main-wrapper chassis-dashboard"
        style="padding: 0px; background-color: #fcfdfd"
    >
        <template>
            <Navbar />
            <Sidebar />
        </template>
        <div class="main-section d-flex">
            <div class=" white-bg w-100 mx-3 my-3 box-shadow-default">
                <div class="left-inner-1 w-100 px-3 py-3">
                    <h5 class="mb-1">Walbro - Account Settings</h5>
                    <p style="color: #bbbbbb;">Manage account settings for Walbro</p>
                </div>

                <div class="left-inner-2 w-50 px-3 py-3">
                    <h6 class="mb-1">General</h6>
                </div>
                
            </div>

        </div>
    </div>
</template>
<script>
import Navbar from "~/components/Layout/Navbar";
import Sidebar from "~/components/Layout/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data(){
    return {
        isBusy: false,
        fields: [
            { key: "name", label: "Name",},
            { key: "assigned", label: "Assigned", sortable: false },
            { key: "submitted", label: "Submitted", sortable: false, thClass: "tdSubmitted" },
        ],
        currentPage: 1,
    }
  }, 
  mounted() {

  }
};
</script>