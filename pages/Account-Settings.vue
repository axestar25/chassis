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

                <div class="d-flex">
                    <div class="left-inner-2 w-50 px-3 py-3 border mx-3 mb-3">
                        <h6 class="mb-1">General</h6>

                        <div class="general-settings mt-4">
                            <b-form-group v-slot="{ ariaDescribedby }">
                                <b-form-checkbox-group
                                    id="checkbox-group-2"
                                    v-model="selected"
                                    :aria-describedby="ariaDescribedby"
                                    name="general-settings"
                                >
                                    <b-form-checkbox value="Require image Caption" style="color: #rgb(75 75 75);">
                                        Require image Caption    
                                    </b-form-checkbox>
                                    <span class="d-block w-100 mb-3" style="color: #rgb(75 75 75); font-size: 11px;">This will require image caption line 1 upon submit for editing or publish; Unchecking will disable all iamge caption fields.</span>

                                    <b-form-checkbox value="Require Meta Description" style="color: #rgb(75 75 75);">
                                        Require Meta Description
                                        </b-form-checkbox>
                                    <span class="d-block w-100 mb-3" style="color: #rgb(75 75 75); font-size: 11px;">This will require description upon submit for editing or publish; Unchecking will field.</span>
                                    
                                    <b-form-checkbox value="Show Video Text field" style="color: #rgb(75 75 75);">
                                        Show Video Text field
                                        </b-form-checkbox>
                                    <span class="d-block w-100 mb-3" style="color: #rgb(75 75 75); font-size: 11px;">This will show video text field in the writer/editor panels</span>
                                    
                                    <b-form-checkbox value="Enable Video Process" style="color: #rgb(75 75 75);">
                                        Enable Video Process
                                    </b-form-checkbox>
                                    <span class="d-block w-100 mb-3" style="color: #rgb(75 75 75); font-size: 11px;">This will show video text field in the writer/editor panels</span>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>


                        <button class="btn-create-article btn-primary w-100 my-3">SAVE</button>
                    </div>
                    <div class="right-inner-2 w-50 px-3 py-3 border mx-3 mb-3">
                        <h6 class="mb-1">Categories</h6>
                        <p style="color: #bbbbbb;">These settings area category validations on submitting an article for edit or publish.</p>

                        <button class="btn-create-article btn-primary w-100 my-3">SAVE</button>
                    </div>
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
    selected: [],
  },
  data(){
    return {
        isBusy: false,
        // fields: [
        //     { key: "name", label: "Name",},
        //     { key: "assigned", label: "Assigned", sortable: false },
        //     { key: "submitted", label: "Submitted", sortable: false, thClass: "tdSubmitted" },
        // ],
        currentPage: 1,
    }
  }, 
  mounted() {

  }
};
</script>